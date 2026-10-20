"use client";

import React, { useState } from "react";
import {
  Activity,
  Building2,
  Check,
  ChevronDown,
  Coins,
  Cpu,
  Lightbulb,
  Shield,
  Sparkles,
  Users,
  Wheat,
  Zap,
} from "lucide-react";
import { STARTUP_VERTICALS } from "@/data/eventData";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Cpu,
  Activity,
  Shield,
  Users,
  Building2,
  Zap,
  Coins,
  Sparkles,
  Lightbulb,
};

const rows = [
  { id: "row-1", indices: [0, 1, 2], label: "01 – 03" },
  { id: "row-2", indices: [3, 4, 5], label: "04 – 06" },
  { id: "row-3", indices: [6, 7, 8], label: "07 – 09" },
];

export function StartupVerticalsGrid() {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  const [expandedMobileIds, setExpandedMobileIds] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string, rowIndex: number) => {
    // Expand/collapse the row so all 3 cards in this row show their focus areas together
    // This fills all 3 neighboring boxes with their respective content with zero empty white gap
    setExpandedRows((cur) => ({ ...cur, [rowIndex]: !cur[rowIndex] }));
    setExpandedMobileIds((cur) => ({ ...cur, [id]: !cur[id] }));
  };

  return (
    <div className="min-w-0 overflow-hidden rounded-[24px] border border-[#d8d0c2] bg-[#fffdf9] shadow-[0_16px_45px_rgba(50,42,31,0.06)]">
      {/* Top Header */}
      <div className="flex items-center gap-3 border-b border-[#ded6c9] bg-[#f2ede3] px-4 py-3 sm:px-6">
        <span className="font-serif text-2xl sm:text-3xl font-black text-[#a84e2d]">09</span>
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#363a35]">Official Sectors</p>
          <p className="text-[10px] sm:text-xs text-[#777169]">8 Priority Areas + Open Innovation Track</p>
        </div>
      </div>

      {/* Rows Container */}
      <div className="divide-y divide-[#e2dbce]">
        {rows.map((row, rowIndex) => {
          const isRowExpanded = Boolean(expandedRows[rowIndex]);
          const verticalsInRow = row.indices.map((i) => ({
            vertical: STARTUP_VERTICALS[i],
            index: i,
          }));

          return (
            <div key={row.id} className="min-w-0">
              {/* 3 Cards Grid for this row */}
              <div className="grid min-w-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e2dbce]">
                {verticalsInRow.map(({ vertical, index }) => {
                  const Icon = iconMap[vertical.iconName] || Sparkles;
                  const isMobileExpanded = Boolean(expandedMobileIds[vertical.id]);
                  // On desktop, row expands all 3 cards so all boxes are filled with their respective content (no empty gap)
                  // On mobile, card expands with its content
                  const isExpanded = isRowExpanded || isMobileExpanded;
                  const panelId = `${vertical.id}-focus-areas`;

                  return (
                    <article
                      key={vertical.id}
                      className={cn(
                        "group relative flex flex-col justify-between bg-[#fffdf9] p-4 sm:p-5 transition-colors duration-200 hover:bg-[#faf6ef]",
                        isExpanded && "bg-[#faf6ef]"
                      )}
                    >
                      <div>
                        {/* Top bar inside card: number badge, subtitle, and icon */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="font-serif text-[11px] font-bold text-[#a84e2d] bg-[#f5ede3] px-2 py-0.5 rounded-md shrink-0">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#8a6729] truncate">
                              {vertical.subtitle}
                            </span>
                          </div>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#d8cec0] bg-white text-[#1b5947] shadow-2xs transition-transform group-hover:scale-105">
                            <Icon className="h-4 w-4 text-[#245f4d]" strokeWidth={1.8} aria-hidden="true" />
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-base sm:text-lg font-bold leading-snug tracking-[-0.015em] text-[#1e211e]">
                          {vertical.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-xs leading-relaxed text-[#666158]">
                          {vertical.description}
                        </p>
                      </div>

                      {/* Individual Toggle Button directly inside each Card */}
                      <div className="mt-4 pt-3 border-t border-[#eae3d8]">
                        <button
                          type="button"
                          onClick={() => toggleCard(vertical.id, rowIndex)}
                          aria-expanded={isExpanded}
                          aria-controls={panelId}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a84e2d] hover:text-[#77341f] transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? "Hide Focus Areas" : "View Focus Areas"}</span>
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-transform duration-200 text-[#a84e2d]",
                              isExpanded && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {/* Focus Areas Content: Fills the box completely so zero empty space */}
                      {isExpanded && (
                        <div
                          id={panelId}
                          className="mt-3 pt-3 border-t border-[#ebd8cb] animate-in fade-in slide-in-from-top-1 duration-200"
                        >
                          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#817a70] mb-2">
                            Sub-Domain Focus
                          </p>
                          <ul className="space-y-1.5 text-xs text-[#494740]">
                            {vertical.focusAreas.map((area) => (
                              <li key={area} className="flex items-start gap-1.5 text-[11px] leading-tight">
                                <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#1b6952]" strokeWidth={2.5} aria-hidden="true" />
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
