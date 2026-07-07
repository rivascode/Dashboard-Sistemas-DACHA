"use client";

import { motion } from "framer-motion";
import { AlertCircle, Mail } from "lucide-react";
import type { ManagementTask } from "@/lib/types";

const PRIORITY_COLORS: Record<ManagementTask["priority"], string> = {
  Urgente: "#fb5e7e",
  Alta: "#f5b942",
  Media: "#22d3ee",
  Baja: "#7c8aa5",
};

export function Management({ tasks }: { tasks: ManagementTask[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {tasks.map((task, i) => {
        const urgent = task.priority === "Urgente";
        const accent = PRIORITY_COLORS[task.priority];
        return (
          <motion.article
            key={task.id}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3"
            style={{ ["--accent" as string]: accent }}
          >
            <span
              className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-sm font-bold"
              style={{ background: `${accent}22`, color: accent }}
            >
              {task.id}
            </span>
            <div className="min-w-0">
              <p className="text-sm leading-snug text-slate-200">{task.text}</p>
              {task.subject && (
                <span className="mt-1 flex items-start gap-1.5 text-[0.7rem] leading-snug text-slate-500">
                  <Mail className="mt-0.5 h-3 w-3 shrink-0" />
                  {task.subject}
                </span>
              )}
              <span className="mt-1 inline-flex items-center gap-1 text-xs" style={{ color: accent }}>
                {urgent && <AlertCircle className="h-3 w-3" />}
                {task.priority}
              </span>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
