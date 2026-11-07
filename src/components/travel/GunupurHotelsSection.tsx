"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  BedDouble,
  Phone,
  ChevronLeft,
  ChevronRight,
  Check,
  Users,
  Tv,
} from "lucide-react";
import { GUNUPUR_HOTELS } from "@/data/hotelsData";
import { OdishaTempleArt } from "./OdishaTempleArt";

function HotelBuildingIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Ground baseline */}
      <path d="M2 21h20" strokeWidth="1.5" />
      {/* Main Left Hotel Tower */}
      <path d="M4 21V4.5a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 15 4.5v16.5" />
      {/* Right Wing */}
      <path d="M15 9.5h4a1.5 1.5 0 0 1 1.5 1.5V21" />
      {/* Main Tower Windows */}
      <rect x="6.5" y="5.5" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="10.5" y="5.5" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="6.5" y="9.5" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="10.5" y="9.5" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="6.5" y="13.5" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="10.5" y="13.5" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      {/* Right Wing Windows */}
      <rect x="17" y="12" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      <rect x="17" y="16" width="2" height="2" rx="0.3" fill="currentColor" stroke="none" />
      {/* Hotel Entrance Door */}
      <path d="M8 21v-3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V21" />
    </svg>
  );
}

export function GunupurHotelsSection() {
  const [selectedHotelId, setSelectedHotelId] = useState(GUNUPUR_HOTELS[0].id);
  const [photoIndex, setPhotoIndex] = useState(0);

  const hotel =
    GUNUPUR_HOTELS.find((item) => item.id === selectedHotelId) ??
    GUNUPUR_HOTELS[0];
  const photo = hotel.photos[photoIndex] ?? hotel.photos[0];

  const selectHotel = (id: string) => {
    setSelectedHotelId(id);
    setPhotoIndex(0);
  };

  const nextPhoto = () =>
    setPhotoIndex((current) => (current + 1) % hotel.photos.length);
  const previousPhoto = () =>
    setPhotoIndex(
      (current) => (current - 1 + hotel.photos.length) % hotel.photos.length
    );

  const exactLocationUrl =
    hotel.googleMapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      hotel.mapQuery ?? `${hotel.name}, Gunupur, Odisha`
    )}`;

  const getAmenityIcon = (tag: string) => {
    const lower = tag.toLowerCase();
    if (lower.includes("mandap") || lower.includes("hall") || lower.includes("desk")) {
      return <Users className="h-4 w-4 shrink-0 text-[#a74e2d]" />;
    }
    if (lower.includes("central") || lower.includes("transit") || lower.includes("station")) {
      return <MapPin className="h-4 w-4 shrink-0 text-[#a74e2d]" />;
    }
    if (lower.includes("tv")) {
      return <Tv className="h-4 w-4 shrink-0 text-[#a74e2d]" />;
    }
    return <BedDouble className="h-4 w-4 shrink-0 text-[#a74e2d]" />;
  };

  return (
    <div className="mt-8">
      {/* ── Top Hotel Selector Tabs with Floating Distance Pills ── */}
      <div className="pt-3">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5"
          role="tablist"
          aria-label="Gunupur accommodation options"
        >
          {GUNUPUR_HOTELS.map((item) => {
            const active = item.id === selectedHotelId;
            return (
              <div key={item.id} className="relative">
                {/* Floating Distance Pill on Top Edge */}
                <div
                  className={`absolute -top-2.5 left-2.5 sm:left-4 z-10 inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10.5px] font-bold shadow-2xs transition-all ${
                    active
                      ? "bg-white text-[#a74e2d] border border-[#a74e2d]/40 shadow-xs"
                      : "bg-white text-[#57534e] border border-[#ded5c7]"
                  }`}
                >
                  <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
                  <span>{item.distanceToCampus}</span>
                </div>

                {/* Tab Card Button */}
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectHotel(item.id)}
                  className={`w-full flex items-center justify-between p-2.5 sm:p-4 pt-3.5 sm:pt-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-150 active:scale-[0.98] min-h-[66px] sm:min-h-[72px] ${
                    active
                      ? "border-2 border-[#a74e2d] bg-[#a74e2d] text-white shadow-xs"
                      : "border border-[#ded7cc] bg-white text-[#1c1917] hover:border-[#a74e2d]/60 hover:bg-[#faf8f5] shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 pr-1 sm:pr-2">
                    <span
                      className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl transition-all ${
                        active
                          ? "bg-white/20 text-white shadow-xs"
                          : "bg-[#faf6f0] text-[#a74e2d] border border-[#ebd8c8] shadow-2xs"
                      }`}
                    >
                      <HotelBuildingIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span
                        className={`block font-serif text-[11.5px] sm:text-[14px] font-bold leading-tight truncate ${
                          active ? "text-white" : "text-[#1c1917]"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`mt-0.5 sm:mt-1 block text-[9.5px] sm:text-[11px] font-semibold truncate ${
                          active ? "text-white/85" : "text-[#78716c]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Active Checkmark Icon only on selected card */}
                  {active && (
                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#a74e2d] shadow-xs">
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[3]" />
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Main Showcase Card Container ── */}
      <div className="mt-5 overflow-hidden rounded-3xl border border-[#ded5c7] bg-white shadow-[0_18px_50px_rgba(40,35,27,0.06)] p-5 sm:p-7 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ── Left Column: Interactive Photo Gallery ── */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Main Stage Photo */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#201c18] shadow-xs group">
              <Image
                key={photo.url}
                src={encodeURI(photo.url)}
                alt={`${hotel.name} — ${photo.label}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* Navigation Chevrons */}
              {hotel.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousPhoto}
                    aria-label="Previous hotel photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-xs transition active:scale-95 shadow-md"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    aria-label="Next hotel photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-xs transition active:scale-95 shadow-md"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Bottom Info Bar over Image */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-end p-3.5 z-10">
                <div className="flex items-center gap-2 text-white font-serif text-xs sm:text-sm font-bold drop-shadow-sm truncate">
                  <HotelBuildingIcon className="h-4 w-4 shrink-0 text-white/90" />
                  <span className="truncate">{hotel.name}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip Gallery underneath */}
            <div className="mt-3.5 grid grid-cols-4 gap-2 sm:gap-2.5">
              {hotel.photos.map((p, idx) => {
                const isActive = idx === photoIndex;
                return (
                  <button
                    key={p.url + idx}
                    type="button"
                    onClick={() => setPhotoIndex(idx)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-150 active:scale-95 ${
                      isActive
                        ? "border-[#a74e2d] shadow-xs"
                        : "border-[#e5ded4] opacity-75 hover:opacity-100 hover:border-[#a74e2d]/50"
                    }`}
                    title={p.label}
                  >
                    <Image
                      src={encodeURI(p.url)}
                      alt={p.label}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right Column: Hotel Details & Direct Actions ── */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Header: Category Badge with subtle divider & temple sketch */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#a74e2d]">
                    {hotel.category}
                  </span>
                  <div className="h-px w-8 bg-[#ded5c7]" />
                </div>

                {/* Authentic Odisha Temple Architectural Line Art */}
                <div className="shrink-0" title="Odisha Temple Heritage Motif">
                  <OdishaTempleArt className="w-32 sm:w-40 h-11 sm:h-13 text-[#cbb29b] opacity-55 hover:opacity-80 transition-opacity" />
                </div>
              </div>

              {/* Title & Address */}
              <h4 className="mt-1 font-serif text-2xl sm:text-3xl font-black text-[#1c1917] tracking-tight">
                {hotel.name}
              </h4>
              <p className="mt-2 flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-[#57534e]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a74e2d]" aria-hidden="true" />
                <span>{hotel.address}</span>
              </p>

              {/* Two Prominent Feature Stat Cards */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f4] border border-[#e5dfd5] flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#a74e2d] border border-[#e5dfd5] shadow-2xs">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#78716c]">
                      Approx. Campus Distance
                    </span>
                    <p className="mt-0.5 text-base sm:text-lg font-black text-[#1c1917]">
                      {hotel.distanceToCampus}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f4] border border-[#e5dfd5] flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#a74e2d] border border-[#e5dfd5] shadow-2xs">
                    <BedDouble className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#78716c]">
                      Listed Room Type
                    </span>
                    <p className="mt-0.5 text-base sm:text-lg font-black text-[#1c1917]">
                      {hotel.roomType}
                    </p>
                  </div>
                </div>
              </div>

              {/* Amenities to Confirm - 2x2 Clean Grid */}
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#78716c] mb-2.5">
                  Amenities to Confirm
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {hotel.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#faf8f4] border border-[#e5dfd5] text-xs font-bold text-[#1c1917]"
                    >
                      <span>{getAmenityIcon(tag)}</span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Disclaimer */}
            <div className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${hotel.primaryPhone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#a74e2d] hover:bg-[#8d3e20] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call {hotel.primaryPhone}</span>
                </a>
                <a
                  href={exactLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#faf7f2] border-2 border-[#a74e2d] text-[#1c1917] hover:text-[#a74e2d] text-xs sm:text-sm font-bold shadow-2xs transition-all active:scale-95"
                >
                  <MapPin className="h-4 w-4 text-[#a74e2d]" aria-hidden="true" />
                  <span>View Location</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
