"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { ComparisonRow } from "@/lib/derive";

export function Comparison({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {rows.map((r, i) => {
        const max = Math.max(r.previous, r.current, 1);
        const Icon = r.delta > 0 ? ArrowUpRight : r.delta < 0 ? ArrowDownRight : Minus;
        const tone = r.improved ? "#22e1a1" : "#fb5e7e";
        return (
          <motion.article
            key={r.label}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.03] p-3.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">{r.label}</span>
              <span
                className="flex items-center gap-0.5 text-sm font-bold"
                style={{ color: tone }}
              >
                <Icon className="h-3.5 w-3.5" />
                {r.delta >= 0 ? "+" : ""}
                {r.delta}
                {r.suffix}
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <Bar label="Antes" value={r.previous} max={max} suffix={r.suffix} muted />
              <Bar label="Ahora" value={r.current} max={max} suffix={r.suffix} tone={tone} />
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

function Bar({
  label,
  value,
  max,
  suffix,
  tone,
  muted,
}: {
  label: string;
  value: number;
  max: number;
  suffix: string;
  tone?: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-9 text-[0.65rem] text-slate-500">{label}</span>
      <div className="track flex-1" style={{ ["--accent" as string]: tone ?? "#56607a" }}>
        <motion.div
          className="fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={muted ? { boxShadow: "none", opacity: 0.7 } : undefined}
        />
      </div>
      <strong className="w-9 text-right text-xs text-white">
        {value}
        {suffix}
      </strong>
    </div>
  );
}
