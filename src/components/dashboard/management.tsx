"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import type { ManagementTask } from "@/lib/types";

export function Management({ tasks }: { tasks: ManagementTask[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {tasks.map((task, i) => {
        const urgent = task.priority.toLowerCase() === "urgente";
        const accent = urgent ? "#fb5e7e" : "#f5b942";
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
