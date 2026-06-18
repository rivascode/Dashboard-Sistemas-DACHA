"use client";

import { motion } from "framer-motion";
import type { OutlookRow } from "@/lib/derive";

export function Outlook({ rows }: { rows: OutlookRow[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      {rows.map((r, i) => {
        const accent = r.good ? "#22e1a1" : "#fb5e7e";
        return (
          <motion.article
            key={r.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="accent-top relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] p-4"
            style={{ ["--accent" as string]: accent }}
          >
            <span className="kicker">{r.label}</span>
            <div className="mt-1 text-2xl font-bold text-white">{r.value}</div>
            <div className="mt-2 flex gap-3 text-xs text-slate-400">
              <span>
                Antes <b className="text-slate-200">{r.before}</b>
              </span>
              <span>
                Ahora <b className="text-slate-200">{r.after}</b>
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{r.result}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
