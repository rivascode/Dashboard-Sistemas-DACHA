export type TaskStatus =
  | "Completado"
  | "En Proceso"
  | "Demorado"
  | "Pendiente"
  | "Cancelado";

export type Priority = "Alta" | "Media" | "Baja";

export type Category = "Automatizacion" | "Desarrollo" | "Infraestructura";

/** Raw task as authored in the dataset / parsed from Excel. */
export interface RawTask {
  id: string;
  featured: boolean;
  title: string;
  area: string;
  owner: string;
  category: string;
  priority: Priority;
  status: TaskStatus;
  start: string; // ISO yyyy-mm-dd
  end: string;
  actual: string; // "" when not produced yet
  progressOverride?: number | null;
  notes: string;
}

/** Task enriched with derived fields used across the dashboard. */
export interface EnrichedTask extends RawTask {
  startDate: string;
  endDate: string;
  actualDate: string | null;
  duration: number;
  progress: number;
  manualProgress: number | null;
  delayDays: number;
  daysToDue: number;
  risk: "Cerrado" | "Alto" | "Medio" | "Normal";
  active: boolean;
}

export interface ManagementTask {
  id: number;
  text: string;
  priority: "Urgente" | "Alta" | "Media" | "Baja";
  subject?: string;
}

export type QuoteStatus =
  | "POR HACER"
  | "POR ENVIAR"
  | "Enviada"
  | "En seguimiento"
  | "Negociación"
  | "Ganada"
  | "Perdida";

export interface Quotation {
  id: number;
  client: string;
  project: string;
  status: QuoteStatus;
  owner: string;
  sentDate: string; // ISO yyyy-mm-dd, "" if not sent
  followUp: string; // ISO yyyy-mm-dd, "" if none
  notes: string;
}

export interface PortfolioSnapshot {
  cut: string;
  total: number;
  active: number;
  completed: number;
  delayed: number;
  dueSoon: number;
  progress: number;
}

export interface DashboardPayload {
  cut: string;
  today: string;
  tasks: EnrichedTask[];
  previous: PortfolioSnapshot;
  management: ManagementTask[];
}
