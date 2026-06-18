import * as XLSX from "xlsx";
import type { Priority, RawTask, TaskStatus } from "./types";

/** Maps the Spanish Excel headers to internal field keys. */
const HEADER_MAP: Record<string, keyof RawTask | "progress"> = {
  id: "id",
  "tarea destacada": "featured",
  "titulo de la tarea": "title",
  "area afectada": "area",
  "responsable de ti": "owner",
  categoria: "category",
  prioridad: "priority",
  estado: "status",
  "fecha de inicio": "start",
  "fecha de fin estimada": "end",
  "fecha real de produccion": "actual",
  "progreso (%)": "progress",
  observaciones: "notes",
};

const stripAccents = (value: string): string =>
  value.normalize("NFD").replace(/[̀-ͯ]/g, "");

const normalizeHeader = (value: string): string =>
  stripAccents(String(value).trim().toLowerCase()).replace(/\s+/g, " ");

const titleCase = (value: string): string =>
  value
    .toLowerCase()
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

const KNOWN_AREAS: Record<string, string> = {
  contabilidad: "Contabilidad",
  documentacion: "Documentacion",
  operaciones: "Operaciones",
  smartbots: "SMARTBOTS",
  sistemas: "SISTEMAS",
  "recursos humanos": "Recursos Humanos",
  finanzas: "Finanzas",
  matricez: "Matricez",
  "liquidacion pre": "Liquidacion Pre",
  importacion: "Importacion",
  sig: "SIG",
  clientes: "Clientes",
};

function normalizeArea(value: string): string {
  const key = stripAccents(value.trim().toLowerCase());
  return KNOWN_AREAS[key] ?? titleCase(value.trim());
}

function normalizeStatus(value: string): TaskStatus {
  const key = stripAccents(value.trim().toLowerCase());
  const map: Record<string, TaskStatus> = {
    completado: "Completado",
    "en proceso": "En Proceso",
    demorado: "Demorado",
    pendiente: "Pendiente",
    cancelado: "Cancelado",
  };
  return map[key] ?? "Pendiente";
}

function normalizePriority(value: string): Priority {
  const key = stripAccents(value.trim().toLowerCase());
  if (key === "alta") return "Alta";
  if (key === "baja") return "Baja";
  return "Media";
}

function normalizeCategory(value: string): string {
  const key = stripAccents(value.trim().toLowerCase());
  if (key.startsWith("automat")) return "Automatizacion";
  if (key.startsWith("infra")) return "Infraestructura";
  return "Desarrollo";
}

function parseFeatured(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  const s = stripAccents(String(value ?? "").trim().toLowerCase());
  return ["si", "x", "true", "1", "verdadero", "destacada", "★"].includes(s);
}

/** Converts an Excel cell (Date object, serial, or string) to ISO yyyy-mm-dd. */
function toIsoDate(value: unknown): string {
  if (value == null || value === "") return "";
  if (value instanceof Date) {
    const y = value.getFullYear();
    const m = String(value.getMonth() + 1).padStart(2, "0");
    const d = String(value.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  if (typeof value === "number") {
    const parsed = XLSX.SSF.parse_date_code(value);
    if (parsed) {
      const m = String(parsed.m).padStart(2, "0");
      const d = String(parsed.d).padStart(2, "0");
      return `${parsed.y}-${m}-${d}`;
    }
  }
  const s = String(value).trim();
  const dmy = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
  if (dmy) {
    const [, d, m, y] = dmy;
    const year = y.length === 2 ? `20${y}` : y;
    return `${year}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  return "";
}

function parseProgress(value: unknown): number | null {
  if (value == null || value === "") return null;
  const n = typeof value === "number" ? value : parseFloat(String(value).replace("%", ""));
  if (Number.isNaN(n)) return null;
  return n <= 1 ? Math.round(n * 100) : Math.round(n);
}

/**
 * Parses an uploaded GANTT Excel buffer into the internal RawTask shape.
 * Tolerant to header order, accents, casing and date formats.
 */
export function parseExcel(buffer: ArrayBuffer | Buffer): RawTask[] {
  const wb = XLSX.read(buffer, { cellDates: true });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "" });

  const tasks: RawTask[] = [];
  for (const row of rows) {
    const mapped: Record<string, unknown> = {};
    for (const [rawKey, rawVal] of Object.entries(row)) {
      const field = HEADER_MAP[normalizeHeader(rawKey)];
      if (field) mapped[field] = rawVal;
    }
    const id = String(mapped.id ?? "").trim();
    const title = String(mapped.title ?? "").trim();
    if (!id && !title) continue;

    tasks.push({
      id: id || `IT-${String(tasks.length + 1).padStart(3, "0")}`,
      featured: parseFeatured(mapped.featured),
      title: title.toUpperCase(),
      area: normalizeArea(String(mapped.area ?? "")),
      owner: String(mapped.owner ?? "").trim().toUpperCase(),
      category: normalizeCategory(String(mapped.category ?? "")),
      priority: normalizePriority(String(mapped.priority ?? "")),
      status: normalizeStatus(String(mapped.status ?? "")),
      start: toIsoDate(mapped.start),
      end: toIsoDate(mapped.end),
      actual: toIsoDate(mapped.actual),
      progressOverride: parseProgress((mapped as Record<string, unknown>).progress),
      notes: String(mapped.notes ?? "").trim(),
    });
  }
  return tasks;
}
