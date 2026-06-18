import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const dayMs = 24 * 60 * 60 * 1000;

export const parseDate = (value: string | null | undefined): Date | null =>
  value ? new Date(`${value}T00:00:00`) : null;

export const diffDays = (a: Date, b: Date): number =>
  Math.round((a.getTime() - b.getTime()) / dayMs);

export const fmtDate = (value: string | null | undefined): string => {
  const d = parseDate(value ?? null);
  return d
    ? d.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" })
    : "-";
};

export const fmtShortDate = (value: string | null | undefined): string => {
  const d = parseDate(value ?? null);
  return d ? d.toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit" }) : "-";
};

export const pct = (value: number): string => `${Math.round(value)}%`;

export function countBy<T>(items: T[], key: (item: T) => string): Record<string, number> {
  return items.reduce<Record<string, number>>((acc, item) => {
    const value = key(item);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

export function sum<T>(items: T[], fn: (item: T) => number): number {
  return items.reduce((total, item) => total + fn(item), 0);
}
