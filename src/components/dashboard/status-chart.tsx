"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import type { EnrichedTask } from "@/lib/types";
import { statusColor } from "@/lib/theme";
import { statusBreakdown } from "@/lib/derive";
import { pct } from "@/lib/utils";

export function StatusChart({ items }: { items: EnrichedTask[] }) {
  const data = statusBreakdown(items);
  const total = items.length;

  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <div className="relative h-44 w-44 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="status"
              innerRadius={56}
              outerRadius={80}
              paddingAngle={3}
              stroke="none"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((d) => (
                <Cell key={d.status} fill={statusColor(d.status)} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{total}</span>
          <span className="text-[0.65rem] uppercase tracking-widest text-slate-400">
            Tareas
          </span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
        {data.map((d) => (
          <div
            key={d.status}
            className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2"
            style={{ ["--accent" as string]: statusColor(d.status) }}
          >
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <i className="dot" />
              {d.status}
            </div>
            <div className="mt-0.5 flex items-baseline justify-between">
              <strong className="text-lg font-bold text-white">{d.value}</strong>
              <span className="text-xs text-slate-400">{pct(d.share)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
