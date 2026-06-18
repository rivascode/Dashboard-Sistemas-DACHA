import type { EnrichedTask, RawTask } from "./types";
import { diffDays, parseDate } from "./utils";

/**
 * Derives schedule / progress / risk fields for a task, given the cut date.
 * Ported 1:1 from the original dashboard logic.
 */
export function enrich(task: RawTask, todayIso: string): EnrichedTask {
  const today = parseDate(todayIso)!;
  const start = parseDate(task.start);
  const end = parseDate(task.end);
  const actual = parseDate(task.actual);

  const duration = start && end ? Math.max(1, diffDays(end, start)) : 1;
  const elapsed = start ? Math.max(0, diffDays(today, start)) : 0;
  const scheduleProgress = Math.min(95, Math.max(5, (elapsed / duration) * 100));

  const inactive = task.status === "Completado" || task.status === "Cancelado";
  const hasOverride = typeof task.progressOverride === "number";
  const manualProgress = hasOverride ? (task.progressOverride as number) : null;

  const progress =
    task.status === "Completado"
      ? 100
      : hasOverride
      ? (task.progressOverride as number)
      : scheduleProgress;

  const delayDays =
    inactive && actual && end
      ? Math.max(0, diffDays(actual, end))
      : end
      ? Math.max(0, diffDays(today, end))
      : 0;

  const daysToDue = end ? diffDays(end, today) : 0;

  const risk: EnrichedTask["risk"] =
    task.status === "Cancelado"
      ? "Cerrado"
      : task.status === "Demorado" || delayDays > 0
      ? "Alto"
      : daysToDue <= 7
      ? "Medio"
      : "Normal";

  return {
    ...task,
    startDate: task.start,
    endDate: task.end,
    actualDate: task.actual || null,
    duration,
    progress,
    manualProgress,
    delayDays,
    daysToDue,
    risk,
    active: !inactive,
  };
}

export function enrichAll(tasks: RawTask[], todayIso: string): EnrichedTask[] {
  return tasks.map((t) => enrich(t, todayIso));
}
