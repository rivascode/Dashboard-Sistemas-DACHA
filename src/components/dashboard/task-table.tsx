"use client";

import { motion } from "framer-motion";
import { ArrowUpDown, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import type { EnrichedTask } from "@/lib/types";
import { statusColor } from "@/lib/theme";
import { fmtDate, pct } from "@/lib/utils";

type SortKey = "title" | "area" | "owner" | "status" | "priority" | "endDate" | "delayDays";

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "title", label: "Tarea" },
  { key: "area", label: "Área" },
  { key: "owner", label: "Responsable" },
  { key: "status", label: "Estado" },
  { key: "priority", label: "Prioridad" },
  { key: "endDate", label: "Fin estimado" },
  { key: "delayDays", label: "Demora" },
];

export function TaskTable({ items }: { items: EnrichedTask[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "endDate",
    dir: "asc",
  });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? items.filter((t) =>
          [t.title, t.area, t.owner, t.status, t.priority].some((v) =>
            v.toLowerCase().includes(q)
          )
        )
      : items;

    return [...base].sort((a, b) => {
      const ac = a.status === "Completado";
      const bc = b.status === "Completado";
      if (ac !== bc) return ac ? 1 : -1;
      const av = a[sort.key];
      const bv = b[sort.key];
      const res =
        typeof av === "number" && typeof bv === "number"
          ? av - bv
          : String(av).localeCompare(String(bv));
      return sort.dir === "asc" ? res : -res;
    });
  }, [items, query, sort]);

  const toggleSort = (key: SortKey) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar tarea, área, responsable…"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-2 pl-9 pr-3 text-sm text-slate-200 outline-none transition focus:border-cyan-400/50"
          />
        </div>
        <span className="shrink-0 text-xs text-slate-400">{filtered.length} registros</span>
      </div>

      <div className="overflow-x-auto scrollbar-thin rounded-xl border border-white/5">
        <div className="max-h-[720px] overflow-y-auto scrollbar-thin">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="sticky top-0 z-10">
            <tr className="text-[0.68rem] uppercase tracking-wider text-slate-400">
              {COLUMNS.map((c) => (
                <th key={c.key} className="bg-[#0b1222] px-3 py-2.5 font-semibold">
                  <button
                    onClick={() => toggleSort(c.key)}
                    className="flex items-center gap-1 transition hover:text-cyan-300"
                  >
                    {c.label}
                    <ArrowUpDown className="h-3 w-3 opacity-50" />
                  </button>
                </th>
              ))}
              <th className="bg-[#0b1222] px-3 py-2.5 font-semibold">Avance</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((task, i) => {
              const accent =
                task.delayDays > 0 && task.active ? statusColor("Demorado") : statusColor(task.status);
              const hasProgress = typeof task.manualProgress === "number";
              return (
                <motion.tr
                  key={task.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.01, 0.4) }}
                  className="border-t border-white/5 transition hover:bg-white/[0.03]"
                >
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-1.5 font-medium text-slate-100">
                      {task.featured && (
                        <Star
                          className="h-3 w-3 shrink-0"
                          style={{ color: accent }}
                          fill={task.status === "Completado" ? accent : "none"}
                        />
                      )}
                      <span>{task.title}</span>
                    </div>
                    <span className="text-xs text-slate-500">
                      {task.category}
                      {task.notes ? ` · ${task.notes}` : ""}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-300">{task.area}</td>
                  <td className="px-3 py-2.5 text-slate-300">{task.owner}</td>
                  <td className="px-3 py-2.5">
                    <span className="pill" style={{ ["--accent" as string]: accent }}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-slate-300">{task.priority}</td>
                  <td className="px-3 py-2.5 text-slate-300">{fmtDate(task.endDate)}</td>
                  <td className="px-3 py-2.5">
                    <strong className={task.delayDays > 0 ? "text-rose-400" : "text-slate-400"}>
                      {task.delayDays}
                    </strong>
                  </td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="track w-20"
                        style={{ ["--accent" as string]: accent }}
                      >
                        <div className="fill" style={{ width: `${hasProgress ? task.manualProgress : 0}%` }} />
                      </div>
                      <span className="w-9 text-xs text-slate-400">
                        {hasProgress ? pct(task.manualProgress as number) : "—"}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
