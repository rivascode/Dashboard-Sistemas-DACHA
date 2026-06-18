"use client";

import { motion } from "framer-motion";
import { ACCENTS } from "@/lib/theme";
import { pct } from "@/lib/utils";

export interface BarItem {
  label: string;
  value: number;
  share: number;
  suffix?: string;
  rank?: number;
  detail?: string;
}

export function BarList({ items, unit = "del total" }: { items: BarItem[]; unit?: string }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((item, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <div key={item.label} className="group">
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-slate-200">
                {item.rank != null && (
                  <span
                    className="grid h-5 w-5 place-items-center rounded-md text-[0.7rem] font-bold"
                    style={{ background: `${accent}22`, color: accent }}
                  >
                    {item.rank}
                  </span>
                )}
                {item.label}
              </span>
              <strong className="font-semibold text-white">
                {item.value}
                {item.suffix ?? ""}
              </strong>
            </div>
            <div className="track" style={{ ["--accent" as string]: accent }}>
              <motion.div
                className="fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="mt-1 block text-xs text-slate-400">
              {pct(item.share)} {unit}
            </span>
            {item.detail && (
              <span className="mt-0.5 block text-[0.68rem] text-slate-500 leading-snug">
                {item.detail}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
