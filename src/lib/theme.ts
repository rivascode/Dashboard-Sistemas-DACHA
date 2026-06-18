import type { Priority, TaskStatus } from "./types";

/** Neon-tuned palette for the futuristic dark theme. */
export const STATUS_COLORS: Record<TaskStatus, string> = {
  Completado: "#22e1a1",
  "En Proceso": "#22d3ee",
  Demorado: "#fb5e7e",
  Pendiente: "#f5b942",
  Cancelado: "#7c8aa5",
};

export const PRIORITY_COLORS: Record<Priority, string> = {
  Alta: "#fb5e7e",
  Media: "#f5b942",
  Baja: "#3b82f6",
};

export const CATEGORY_COLORS: Record<string, string> = {
  Automatizacion: "#22d3ee",
  Desarrollo: "#7c5cff",
  Infraestructura: "#22e1a1",
};

/** Cyclic accent palette for ranking / area charts. */
export const ACCENTS = [
  "#22d3ee",
  "#7c5cff",
  "#22e1a1",
  "#f5b942",
  "#fb5e7e",
  "#3b82f6",
  "#e879f9",
];

export const statusColor = (status: string): string =>
  STATUS_COLORS[status as TaskStatus] ?? "#7c8aa5";
