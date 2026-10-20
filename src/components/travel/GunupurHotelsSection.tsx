"use client";

import { useState } from "react";
import Image from "next/image";
import { BedDouble, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import { GUNUPUR_HOTELS } from "@/data/hotelsData";

export function GunupurHotelsSection() {
  const [selectedHotelId, setSelectedHotelId] = useState(GUNUPUR_HOTELS[0].id);
  const [photoIndex, setPhotoIndex] = useState(0);
  const hotel = GUNUPUR_HOTELS.find((item) => item.id === selectedHotelId) ?? GUNUPUR_HOTELS[0];
  const photo = hotel.photos[photoIndex] ?? hotel.photos[0];

  const selectHotel = (id: string) => {
    setSelectedHotelId(id);
    setPhotoIndex(0);
  };

  const nextPhoto = () => setPhotoIndex((current) => (current + 1) % hotel.photos.length);
  const previousPhoto = () => setPhotoIndex((current) => (current - 1 + hotel.photos.length) % hotel.photos.length);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotel.address)}`;

  return (
    <div className="mt-8">
      {/* Hotel Tab Selector with Clear Mobile Visibility */}
      <div>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"
          role="tablist"
          aria-label="Gunupur accommodation options"
        >
          {GUNUPUR_HOTELS.map((item) => {
            const active = item.id === selectedHotelId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectHotel(item.id)}
                className={`relative flex flex-col justify-between rounded-2xl border p-2.5 sm:p-3 text-left transition-all duration-200 active:scale-[0.98] ${
                  active
                    ? "border-[#a74e2d] bg-[#a74e2d] text-white shadow-md ring-2 ring-[#a74e2d]/25"
                    : "border-[#ded5c7] bg-white text-[#57534e] hover:border-[#a74e2d]/60 hover:bg-[#faf7f2] shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between w-full gap-1 mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-[#f4ece1] text-[#8c671b]"
                    }`}
                  >
                    {item.distanceToCampus}
                  </span>
                  {active && (
                    <span className="h-2 w-2 rounded-full bg-white shrink-0 shadow-xs animate-pulse" />
                  )}
                </div>

                <div className="min-w-0 w-full">
                  <span className="block font-bold text-xs sm:text-sm leading-tight truncate">
                    {item.name}
                  </span>
                  <span
                    className={`mt-0.5 block text-[10px] sm:text-[11px] truncate ${
                      active ? "text-white/80" : "text-[#78716c]"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-[#ded5c7] bg-white shadow-sm">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[300px] bg-[#181512] sm:min-h-[420px]">
            <Image
              key={photo.url}
              src={encodeURI(photo.url)}
              alt={`${hotel.name} — ${photo.label}`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain"
            />
            {hotel.photos.length > 1 && (
              <>
                <button type="button" onClick={previousPhoto} aria-label="Previous hotel photo" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white backdrop-blur transition hover:bg-black/80">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" onClick={nextPhoto} aria-label="Next hotel photo" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/60 text-white backdrop-blur transition hover:bg-black/80">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
            <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
              {photoIndex + 1} / {hotel.photos.length}
            </span>
          </div>

          <div className="flex flex-col p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#a74e2d]">{hotel.category}</p>
            <h4 className="mt-2 font-serif text-3xl font-black text-[#1c1917]">{hotel.name}</h4>
            <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#57534e]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a74e2d]" aria-hidden="true" /> {hotel.address}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#ece5da] py-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c671b]">Approx. campus distance</span>
                <p className="mt-1 font-bold text-[#1c1917]">{hotel.distanceToCampus}</p>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c671b]">Listed room type</span>
                <p className="mt-1 font-bold text-[#1c1917]">{hotel.roomType}</p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#8c671b]">Amenities to confirm</p>
              <ul className="mt-3 grid gap-2 text-sm text-[#4a5752] sm:grid-cols-2">
                {hotel.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-2"><BedDouble className="h-4 w-4 shrink-0 text-[#c25022]" /> {tag}</li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col gap-2 pt-7 sm:flex-row">
              <a href={`tel:${hotel.primaryPhone.replace(/[^0-9+]/g, "")}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#a74e2d] px-4 text-sm font-bold text-white transition hover:bg-[#8f4025]">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {hotel.primaryPhone}
              </a>
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#d8cebe] px-4 text-sm font-bold text-[#3f4945] transition hover:border-[#a74e2d]/60">
                <MapPin className="h-4 w-4" aria-hidden="true" /> View location
              </a>
            </div>

            <p className="mt-4 text-xs leading-5 text-[#78716c]">Distance is approximate. The property is responsible for confirming its current services and availability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
