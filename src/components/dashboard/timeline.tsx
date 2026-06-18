"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { Fragment } from "react";
import type { EnrichedTask } from "@/lib/types";
import { statusColor } from "@/lib/theme";
import { diffDays, fmtShortDate, parseDate, pct } from "@/lib/utils";

const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

/** Shared grid template so the sticky header and every row stay perfectly aligned. */
const GRID =
  "grid grid-cols-[150px_1fr_56px_84px] md:grid-cols-[220px_1fr_72px_104px] items-center gap-2 md:gap-3";

function getMonths(minStart: Date, maxEnd: Date) {
  const months: { label: string; width: number }[] = [];
  const cursor = new Date(minStart.getFullYear(), minStart.getMonth(), 1);
  while (cursor <= maxEnd) {
    const next = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    const segStart = cursor < minStart ? minStart : cursor;
    const segEnd = next > maxEnd ? maxEnd : next;
    months.push({ label: MONTHS[cursor.getMonth()], width: Math.max(1, diffDays(segEnd, segStart)) });
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return months;
}

function Divider({ label, count, accent }: { label: string; count: number; accent: string }) {
  return (
    <div className="mt-1 flex items-center gap-3 px-1 py-1">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider"
        style={{
          color: accent,
          borderColor: `${accent}55`,
          background: `${accent}14`,
        }}
      >
        <i className="dot" style={{ ["--accent" as string]: accent }} />
        {label}
        <span className="text-slate-400">· {count}</span>
      </span>
      <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accent}44, transparent)` }} />
    </div>
  );
}

export function Timeline({ items }: { items: EnrichedTask[] }) {
  const featured = items.filter((t) => t.featured);
  const range = featured.length ? featured : items;
  if (!range.length) return <p className="text-sm text-slate-400">Sin tareas destacadas.</p>;

  const starts = range.map((t) => parseDate(t.startDate)!.getTime());
  const ends = range.map((t) => parseDate(t.endDate)!.getTime());
  const minStart = new Date(Math.min(...starts));
  const maxEnd = new Date(Math.max(...ends));
  const span = Math.max(1, diffDays(maxEnd, minStart));
  const months = getMonths(minStart, maxEnd);

  const sorted = [...featured].sort((a, b) => {
    const ac = a.status === "Completado";
    const bc = b.status === "Completado";
    if (ac !== bc) return ac ? 1 : -1;
    return parseDate(a.endDate)!.getTime() - parseDate(b.endDate)!.getTime();
  });

  const inProcessCount = sorted.filter((t) => t.status !== "Completado").length;
  const completedCount = sorted.length - inProcessCount;

  return (
    <div className="relative">
      {/* Sticky month axis — stays pinned while scrolling through this section */}
      <div
        className={`${GRID} sticky top-0 z-20 -mx-5 mb-1 border-b border-white/10 bg-[#0b1222]/85 px-5 py-2 backdrop-blur-md md:-mx-6 md:px-6`}
        style={{ boxShadow: "0 12px 22px -16px rgba(0,0,0,0.9)" }}
      >
        <span className="text-[0.62rem] uppercase tracking-wider text-slate-500">
          Tarea / responsable
        </span>
        <div className="flex" style={{ gap: 2 }}>
          {months.map((m, i) => (
            <span
              key={i}
              className="rounded bg-white/[0.04] py-1 text-center text-[0.62rem] uppercase tracking-wider text-slate-400"
              style={{ flex: m.width }}
            >
              {m.label}
            </span>
          ))}
        </div>
        <span className="text-right text-[0.62rem] uppercase tracking-wider text-slate-500">
          Avance
        </span>
        <span className="text-right text-[0.62rem] uppercase tracking-wider text-slate-500">
          Riesgo
        </span>
      </div>

      {/* Rows with section dividers */}
      <div className="flex flex-col gap-2">
        {sorted.map((task, i) => {
          const prev = sorted[i - 1];
          const completed = task.status === "Completado";
          const showInProcess = i === 0 && !completed;
          const showCompleted = completed && (!prev || prev.status !== "Completado");

          const left = Math.max(0, (diffDays(parseDate(task.startDate)!, minStart) / span) * 100);
          const width = Math.max(2, (task.duration / span) * 100);
          const delayed = task.delayDays > 0 && task.active;
          const accent = delayed ? statusColor("Demorado") : statusColor(task.status);
          const riskLabel = completed
            ? "Completada"
            : delayed
            ? "Alto"
            : task.daysToDue <= 7
            ? "Medio"
            : "Normal";
          const showProgress = task.active && task.status !== "Cancelado";

          return (
            <Fragment key={task.id}>
              {showInProcess && (
                <Divider label="En proceso" count={inProcessCount} accent="#22d3ee" />
              )}
              {showCompleted && (
                <Divider label="Completadas" count={completedCount} accent="#22e1a1" />
              )}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.025, 0.5) }}
                className={`${GRID} rounded-lg border px-2 py-1.5 ${
                  showProgress
                    ? "border-white/[0.08] bg-white/[0.03]"
                    : "border-white/[0.04] bg-white/[0.015]"
                }`}
                style={
                  showProgress
                    ? { boxShadow: `inset 3px 0 0 ${accent}` }
                    : undefined
                }
              >
                {/* Label */}
                <div className="min-w-0">
                  <div className="flex items-start gap-1.5 text-sm font-medium text-slate-100">
                    <Star
                      className="mt-0.5 h-3 w-3 shrink-0"
                      style={{ color: accent }}
                      fill={completed ? accent : "none"}
                    />
                    <span className="break-words leading-snug">
                      {task.title}
                    </span>
                  </div>
                  <span className="text-[0.7rem] text-slate-500">
                    {task.owner} · {fmtShortDate(task.startDate)}–{fmtShortDate(task.endDate)}
                  </span>
                </div>

                {/* Bar */}
                <div className="relative h-6">
                  <div
                    className="absolute top-1/2 h-3 -translate-y-1/2 rounded-full"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      background: `${accent}33`,
                      border: `1px solid ${accent}66`,
                    }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${task.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                    />
                  </div>
                </div>

                {/* Prominent progress (highlighted for in-process) */}
                <div className="text-right">
                  {completed ? (
                    <CheckCircle2 className="ml-auto h-4 w-4" style={{ color: accent }} />
                  ) : showProgress ? (
                    <span
                      className="glow-text text-base font-extrabold tabular-nums md:text-lg"
                      style={{ color: accent, ["--accent" as string]: accent }}
                    >
                      {pct(task.progress)}
                    </span>
                  ) : (
                    <span className="text-sm text-slate-500">—</span>
                  )}
                </div>

                {/* Risk */}
                <span
                  className="pill justify-self-end whitespace-nowrap"
                  style={{ ["--accent" as string]: accent }}
                >
                  {riskLabel}
                </span>
              </motion.div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
