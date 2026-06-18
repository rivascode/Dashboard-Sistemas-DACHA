"use client";

import { motion } from "framer-motion";
import { priorityBreakdown } from "@/lib/derive";
import type { EnrichedTask } from "@/lib/types";
import { PRIORITY_COLORS, STATUS_COLORS } from "@/lib/theme";
import { pct } from "@/lib/utils";

const color = (p: string): string =>
  (PRIORITY_COLORS as Record<string, string>)[p] ?? STATUS_COLORS.Cancelado;

export function PriorityChart({ items }: { items: EnrichedTask[] }) {
  const rows = priorityBreakdown(items);
  return (
    <div className="flex flex-col gap-4">
      {rows.map((r) => (
        <div key={r.priority} className="flex items-center gap-3">
          <span className="flex w-24 items-center gap-2 text-sm text-slate-200">
            <i className="dot" style={{ ["--accent" as string]: color(r.priority) }} />
            {r.priority}
          </span>
          <div className="track flex-1" style={{ ["--accent" as string]: color(r.priority) }}>
            <motion.div
              className="fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${r.share}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <strong className="w-8 text-right text-sm font-semibold text-white">{r.value}</strong>
          <span className="w-12 text-right text-xs text-slate-400">{pct(r.share)}</span>
        </div>
      ))}
    </div>
  );
}
