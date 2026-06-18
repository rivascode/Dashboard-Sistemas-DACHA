"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Flame,
  LayoutGrid,
  type LucideIcon,
  TrendingUp,
} from "lucide-react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { computeKpis } from "@/lib/derive";
import type { EnrichedTask } from "@/lib/types";
import { pct } from "@/lib/utils";

interface KpiDef {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  note: string;
  accent: string;
  icon: LucideIcon;
}

export function KpiGrid({ items }: { items: EnrichedTask[] }) {
  const k = computeKpis(items);

  const cards: KpiDef[] = [
    { label: "Tareas activas", value: k.active, note: `de ${k.total} en el portafolio`, accent: "#22d3ee", icon: LayoutGrid },
    { label: "Completadas", value: k.completed, note: `${pct(k.completionRate)} de cierre`, accent: "#22e1a1", icon: CheckCircle2 },
    { label: "En demora", value: k.delayed, note: `${k.delayDaysTotal} días acumulados`, accent: "#fb5e7e", icon: AlertTriangle },
    { label: "Vencen ≤ 7 días", value: k.dueSoon, note: "Requieren seguimiento", accent: "#f5b942", icon: Clock },
    { label: "Alta prioridad", value: k.highPriority, note: "Foco de gerencia", accent: "#7c5cff", icon: Flame },
    { label: "Avance estimado", value: k.avgProgress, suffix: "%", decimals: 0, note: "Por estado y fechas", accent: "#3b82f6", icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 xl:grid-cols-6">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.article
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-hover accent-top relative overflow-hidden p-4"
            style={{ ["--accent" as string]: c.accent }}
          >
            <div
              className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl"
              style={{ background: c.accent }}
            />
            <div className="flex items-center justify-between">
              <span className="kicker">{c.label}</span>
              <Icon className="h-4 w-4" style={{ color: c.accent }} />
            </div>
            <div className="glow-text mt-2 text-3xl font-bold text-white" style={{ ["--accent" as string]: c.accent }}>
              <AnimatedNumber value={c.value} decimals={c.decimals ?? 0} suffix={c.suffix ?? ""} />
            </div>
            <p className="mt-1 text-xs text-slate-400">{c.note}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
