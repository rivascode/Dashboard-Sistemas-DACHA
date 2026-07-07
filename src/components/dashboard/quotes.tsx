"use client";

import { motion } from "framer-motion";
import { Bot, CalendarClock, Send, User } from "lucide-react";
import type { Quotation, QuoteStatus } from "@/lib/types";
import { fmtDate } from "@/lib/utils";

const STATUS_META: Record<QuoteStatus, { color: string; step: number }> = {
  "POR HACER": { color: "#7c8aa5", step: 1 },
  "POR ENVIAR": { color: "#a78bfa", step: 2 },
  Enviada: { color: "#3b82f6", step: 3 },
  "En seguimiento": { color: "#f5b942", step: 4 },
  Negociación: { color: "#fb923c", step: 5 },
  Ganada: { color: "#22e1a1", step: 6 },
  Perdida: { color: "#fb5e7e", step: 6 },
};

const PIPELINE_STEPS = 6;

export function Quotes({ items }: { items: Quotation[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((quote, i) => {
        const meta = STATUS_META[quote.status];
        const lost = quote.status === "Perdida";
        return (
          <motion.article
            key={quote.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-4"
            style={{ ["--accent" as string]: meta.color }}
          >
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-15 blur-2xl"
              style={{ background: meta.color }}
            />

            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-bold leading-tight text-white">{quote.client}</h3>
              <span className="pill shrink-0">{quote.status}</span>
            </div>

            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
              <Bot className="h-3.5 w-3.5 shrink-0" style={{ color: meta.color }} />
              {quote.project}
            </p>

            {/* Pipeline progress */}
            <div className="mt-3 flex gap-1">
              {Array.from({ length: PIPELINE_STEPS }, (_, s) => (
                <span
                  key={s}
                  className="h-1.5 flex-1 rounded-full"
                  style={{
                    background:
                      s < meta.step
                        ? lost && s === meta.step - 1
                          ? "#fb5e7e"
                          : meta.color
                        : "rgba(255,255,255,0.08)",
                    boxShadow: s < meta.step ? `0 0 8px ${meta.color}66` : undefined,
                  }}
                />
              ))}
            </div>

            <div className="mt-3 flex flex-col gap-1.5 text-[0.72rem] text-slate-400">
              <span className="flex items-center gap-1.5">
                <User className="h-3 w-3 shrink-0 text-slate-500" />
                {quote.owner}
              </span>
              {quote.sentDate && (
                <span className="flex items-center gap-1.5">
                  <Send className="h-3 w-3 shrink-0 text-slate-500" />
                  Enviada: {fmtDate(quote.sentDate)}
                </span>
              )}
              {quote.followUp && (
                <span className="flex items-center gap-1.5" style={{ color: meta.color }}>
                  <CalendarClock className="h-3 w-3 shrink-0" />
                  Seguimiento: {fmtDate(quote.followUp)}
                </span>
              )}
            </div>

            {quote.notes && (
              <p className="mt-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[0.7rem] leading-snug text-slate-500">
                {quote.notes}
              </p>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}
