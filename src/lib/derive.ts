import type { DashboardPayload, EnrichedTask, PortfolioSnapshot } from "./types";
import { countBy, parseDate, sum } from "./utils";

export interface Kpis {
  active: number;
  total: number;
  completed: number;
  completionRate: number;
  delayed: number;
  delayDaysTotal: number;
  dueSoon: number;
  highPriority: number;
  avgProgress: number;
  categoryMix: { category: string; value: number; share: number }[];
}

export function computeKpis(items: EnrichedTask[]): Kpis {
  const active = items.filter((t) => t.active);
  const completed = items.filter((t) => t.status === "Completado");
  const delayed = items.filter((t) => t.delayDays > 0 && t.status !== "Completado");
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7);
  const highPriority = active.filter((t) => t.priority === "Alta");
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;
  const completionRate = items.length ? (completed.length / items.length) * 100 : 0;

  const categoryCounts = countBy(items, (t) => t.category);
  const order = ["Automatizacion", "Desarrollo", "Infraestructura"];
  const categoryMix = order.map((category) => ({
    category,
    value: categoryCounts[category] || 0,
    share: items.length ? ((categoryCounts[category] || 0) / items.length) * 100 : 0,
  }));

  return {
    active: active.length,
    total: items.length,
    completed: completed.length,
    completionRate,
    delayed: delayed.length,
    delayDaysTotal: sum(delayed, (t) => t.delayDays),
    dueSoon: dueSoon.length,
    highPriority: highPriority.length,
    avgProgress,
    categoryMix,
  };
}

export interface ComparisonRow {
  label: string;
  previous: number;
  current: number;
  suffix: string;
  positive: "up" | "down" | "neutral";
  improved: boolean;
  delta: number;
}

export function computeComparison(
  items: EnrichedTask[],
  previous: PortfolioSnapshot
): ComparisonRow[] {
  const active = items.filter((t) => t.active);
  const completed = items.filter((t) => t.status === "Completado");
  const delayed = active.filter((t) => t.delayDays > 0);
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7);
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;

  const current = {
    total: items.length,
    active: active.length,
    completed: completed.length,
    delayed: delayed.length,
    dueSoon: dueSoon.length,
    progress: Math.round(avgProgress),
  };

  const defs: Omit<ComparisonRow, "improved" | "delta">[] = [
    { label: "Avance estimado", previous: previous.progress, current: current.progress, suffix: "%", positive: "up" },
    { label: "Completadas", previous: previous.completed, current: current.completed, suffix: "", positive: "up" },
    { label: "Demoradas", previous: previous.delayed, current: current.delayed, suffix: "", positive: "down" },
    { label: "Vencen ≤ 7 días", previous: previous.dueSoon, current: current.dueSoon, suffix: "", positive: "down" },
    { label: "Tareas activas", previous: previous.active, current: current.active, suffix: "", positive: "down" },
    { label: "Cartera total", previous: previous.total, current: current.total, suffix: "", positive: "neutral" },
  ];

  return defs.map((d) => {
    const delta = d.current - d.previous;
    const improved =
      d.positive === "neutral" ? delta !== 0 : d.positive === "up" ? delta >= 0 : delta <= 0;
    return { ...d, delta, improved };
  });
}

export interface OutlookRow {
  label: string;
  value: string | number;
  before: string | number;
  after: string | number;
  result: string;
  good: boolean;
}

export function computeOutlook(data: DashboardPayload): OutlookRow[] {
  const { tasks: items, previous, today } = data;
  const todayDate = parseDate(today)!;
  const previousCut = parseDate(previous.cut)!;
  const active = items.filter((t) => t.active);
  const completed = items.filter((t) => t.status === "Completado");
  const delayed = active.filter((t) => t.delayDays > 0);
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7);
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;
  const progressDelta = Math.round(avgProgress - previous.progress);
  const completedDelta = completed.length - previous.completed;
  const delayedDelta = delayed.length - previous.delayed;

  const completedSinceCut = items.filter((t) => {
    const a = parseDate(t.actualDate);
    return t.status === "Completado" && a && a > previousCut && a <= todayDate;
  });
  const improvedAreas =
    Object.entries(countBy(completedSinceCut, (t) => t.area))
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([area, value]) => `${area} (${value})`)
      .join(", ") || "Sin cierres registrados dentro del corte";

  return [
    {
      label: "Avance del portafolio",
      value: `${Math.round(avgProgress)}%`,
      before: `${previous.progress}%`,
      after: `${Math.round(avgProgress)}%`,
      result: `${progressDelta >= 0 ? "Subió" : "Bajó"} ${Math.abs(progressDelta)} puntos porcentuales desde el corte anterior.`,
      good: progressDelta >= 0,
    },
    {
      label: "Tareas completadas",
      value: completed.length,
      before: previous.completed,
      after: completed.length,
      result: `${Math.max(0, completedDelta)} cierres adicionales. Áreas que avanzaron: ${improvedAreas}.`,
      good: true,
    },
    {
      label: "Tareas con demora",
      value: delayed.length,
      before: previous.delayed,
      after: delayed.length,
      result:
        delayedDelta < 0
          ? `Mejoró: hay ${Math.abs(delayedDelta)} demora(s) menos.`
          : delayedDelta === 0
          ? "Sin cambio frente al corte anterior."
          : `Atención: hay ${delayedDelta} demora(s) más.`,
      good: delayed.length === 0,
    },
    {
      label: "Vencen esta semana",
      value: dueSoon.length,
      before: previous.dueSoon,
      after: dueSoon.length,
      result: "Tareas activas que vencen dentro de los próximos 7 días.",
      good: dueSoon.length === 0,
    },
  ];
}

export function statusBreakdown(items: EnrichedTask[]) {
  const counts = countBy(items, (t) => t.status);
  const order = ["En Proceso", "Completado", "Pendiente", "Cancelado", "Demorado"];
  const total = Math.max(1, items.length);
  return order
    .filter((s) => counts[s])
    .map((status) => ({ status, value: counts[status], share: (counts[status] / total) * 100 }));
}

export function ownerRanking(items: EnrichedTask[]) {
  const active = items.filter((t) => t.active);
  const total = Math.max(1, active.length);
  return Object.entries(countBy(active, (t) => t.owner))
    .sort((a, b) => b[1] - a[1])
    .map(([owner, value]) => ({ owner, value, share: (value / total) * 100 }));
}

export function areaBreakdown(items: EnrichedTask[]) {
  const total = Math.max(1, items.length);
  return Object.entries(countBy(items, (t) => t.area))
    .sort((a, b) => b[1] - a[1])
    .map(([area, value]) => ({ area, value, share: (value / total) * 100 }));
}

export function priorityBreakdown(items: EnrichedTask[]) {
  const active = items.filter((t) => t.active);
  const counts = countBy(active, (t) => t.priority);
  const canceled = items.filter((t) => t.status === "Cancelado").length;
  if (canceled) counts.Cancelado = canceled;
  const order = ["Alta", "Media", "Baja", "Cancelado"];
  const total = Math.max(1, sum(Object.values(counts), (v) => v));
  return order.map((priority) => ({
    priority,
    value: counts[priority] || 0,
    share: ((counts[priority] || 0) / total) * 100,
  }));
}

export function featuredInProcess(items: EnrichedTask[]) {
  return items
    .filter((t) => t.featured && t.status === "En Proceso")
    .sort((a, b) => parseDate(a.endDate)!.getTime() - parseDate(b.endDate)!.getTime());
}

export function buildAlerts(items: EnrichedTask[]) {
  const active = items.filter((t) => t.active);
  const delayed = active.filter((t) => t.delayDays > 0).sort((a, b) => b.delayDays - a.delayDays);
  const dueSoon = active
    .filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7)
    .sort((a, b) => a.daysToDue - b.daysToDue);
  return [
    ...delayed.slice(0, 3).map((task) => ({ task, label: `${task.delayDays} días`, tone: "danger" as const })),
    ...dueSoon
      .slice(0, 3)
      .map((task) => ({ task, label: task.daysToDue === 0 ? "vence hoy" : `${task.daysToDue} días`, tone: "warn" as const })),
  ].slice(0, 5);
}
