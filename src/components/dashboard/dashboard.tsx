"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  CalendarClock,
  type LucideIcon,
  Printer,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Section } from "@/components/ui/section";
import { BarList } from "./bar-list";
import { Comparison } from "./comparison";
import { KpiGrid } from "./kpi-grid";
import { Management } from "./management";
import { Outlook } from "./outlook";
import { PriorityChart } from "./priority-chart";
import { StatusChart } from "./status-chart";
import { TaskTable } from "./task-table";
import { Timeline } from "./timeline";
import { UploadButton } from "./upload-button";
import {
  areaBreakdown,
  buildAlerts,
  computeComparison,
  computeKpis,
  computeOutlook,
  featuredInProcess,
  ownerRanking,
} from "@/lib/derive";
import type { DashboardPayload } from "@/lib/types";
import { fmtDate } from "@/lib/utils";

export function Dashboard({ initial }: { initial: DashboardPayload }) {
  const [data, setData] = useState(initial);
  const items = data.tasks;

  const derived = useMemo(
    () => ({
      kpis: computeKpis(items),
      comparison: computeComparison(items, data.previous),
      outlook: computeOutlook(data),
      owners: ownerRanking(items).map((o, i) => ({
        label: o.owner,
        value: o.value,
        share: o.share,
        suffix: " activas",
        rank: i + 1,
      })),
      areas: (() => {
        const all = areaBreakdown(items);
        const top = all.slice(0, 5).map((a) => ({ label: a.area, value: a.value, share: a.share }));
        const rest = all.slice(5);
        if (!rest.length) return top;
        return [
          ...top,
          {
            label: "Otro",
            value: rest.reduce((s, a) => s + a.value, 0),
            share: rest.reduce((s, a) => s + a.share, 0),
            detail: `Incluye: ${rest.map((a) => `${a.area} (${a.value})`).join(", ")}`,
          },
        ];
      })(),
      featured: featuredInProcess(items),
      alerts: buildAlerts(items),
    }),
    [items, data]
  );

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-6 md:px-8 md:py-9">
      {/* ===== HERO ===== */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass accent-top relative mb-6 overflow-hidden p-6 md:p-8"
        style={{ ["--accent" as string]: "var(--color-cyan)" }}
      >
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Gantt Sistemas · Centro de Comando TI
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-5xl">
              Avances del Área de TI
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-base">
              Seguimiento en tiempo real de avances, demoras, carga de trabajo, responsables y
              prioridades del portafolio tecnológico.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <div className="flex flex-wrap gap-2">
              <Stat icon={Activity} label="Activas" value={derived.kpis.active} accent="#22d3ee" />
              <Stat icon={CalendarClock} label="Corte" value={fmtDate(data.cut)} accent="#7c5cff" small />
              <Stat
                icon={AlertTriangle}
                label="En demora"
                value={derived.kpis.delayed}
                accent="#fb5e7e"
              />
            </div>
            <div className="flex items-center gap-2">
              {process.env.NEXT_PUBLIC_STATIC_EXPORT !== "true" && (
                <UploadButton onLoaded={setData} />
              )}
              <button
                onClick={() => window.print()}
                className="no-print inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30"
              >
                <Printer className="h-4 w-4" />
                PDF
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ===== KPIs ===== */}
      <div className="mb-6">
        <KpiGrid items={items} />
      </div>

      {/* ===== OUTLOOK ===== */}
      <div className="mb-6">
        <Section kicker="Resumen Ejecutivo" title="Situación del portafolio" accent="#22e1a1">
          <Outlook rows={derived.outlook} />
        </Section>
      </div>

      {/* ===== COMPARISON + STATUS ===== */}
      <div className="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <Section
          className="xl:col-span-2"
          kicker="Evolución vs. corte anterior"
          title="¿Cómo cambió el portafolio?"
          accent="#7c5cff"
        >
          <Comparison rows={derived.comparison} />
        </Section>
        <Section kicker="Distribución" title="Estado de tareas" accent="#22d3ee">
          <StatusChart items={items} />
        </Section>
      </div>

      {/* ===== RANKING + AREA + PRIORITY ===== */}
      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Section kicker="Carga de trabajo" title="Ranking de responsables" accent="#22d3ee">
          <BarList items={derived.owners} unit="del total activo" />
        </Section>
        <Section kicker="Cobertura" title="Tareas por área" accent="#7c5cff">
          <BarList items={derived.areas} />
        </Section>
        <Section kicker="Foco" title="Prioridad de tareas activas" accent="#fb5e7e">
          <PriorityChart items={items} />
        </Section>
      </div>

      {/* ===== FOCUS: FEATURED + ALERTS + MANAGEMENT ===== */}
      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Section kicker="Destacadas en proceso" title="Próximas a cerrar" accent="#22e1a1">
          <div className="flex flex-col gap-2.5">
            {derived.featured.slice(0, 5).map((task) => (
              <div
                key={task.id}
                className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
              >
                <strong className="block text-sm text-slate-100">{task.title}</strong>
                <span className="text-xs text-slate-400">
                  {task.category} · {task.owner} · vence {fmtDate(task.endDate)}
                </span>
              </div>
            ))}
            {derived.featured.length === 0 && (
              <p className="text-sm text-slate-400">No hay tareas destacadas en proceso.</p>
            )}
          </div>
        </Section>

        <Section kicker="Alertas" title="Atrasos y vencimientos" accent="#fb5e7e">
          <div className="flex flex-col gap-2.5">
            {derived.alerts.map(({ task, label, tone }) => {
              const accent = tone === "danger" ? "#fb5e7e" : "#f5b942";
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3"
                  style={{ ["--accent" as string]: accent }}
                >
                  <div className="min-w-0">
                    <strong className="block truncate text-sm text-slate-100">{task.title}</strong>
                    <span className="text-xs text-slate-400">
                      {task.owner} · {task.area}
                    </span>
                  </div>
                  <span className="pill shrink-0">{label}</span>
                </div>
              );
            })}
            {derived.alerts.length === 0 && (
              <p className="text-sm text-slate-400">Sin atrasos ni próximos vencimientos.</p>
            )}
          </div>
        </Section>

        <Section kicker="Pendientes de gerencia" title="Decisiones requeridas" accent="#f5b942">
          <Management tasks={data.management} />
        </Section>
      </div>

      {/* ===== TIMELINE ===== */}
      <div className="mb-6">
        <Section
          kicker="Cronograma"
          title="Línea de tiempo · tareas destacadas"
          accent="#f5b942"
          clip={false}
        >
          <Timeline items={items} />
        </Section>
      </div>

      {/* ===== DETAIL TABLE ===== */}
      <Section kicker="Detalle" title="Inventario completo de tareas" accent="#22d3ee">
        <TaskTable items={items} />
      </Section>

      <footer className="mt-8 text-center text-xs text-slate-600">
        Dashboard TI · Next.js + React · Datos: GANTT SISTEMAS · Corte {fmtDate(data.cut)}
      </footer>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  accent,
  small,
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent: string;
  small?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2"
      style={{ ["--accent" as string]: accent }}
    >
      <Icon className="h-4 w-4" style={{ color: accent }} />
      <div className="leading-tight">
        <div className="kicker">{label}</div>
        <div className={small ? "text-sm font-semibold text-white" : "text-lg font-bold text-white"}>
          {value}
        </div>
      </div>
    </div>
  );
}
