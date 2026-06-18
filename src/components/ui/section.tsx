"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  kicker?: string;
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  accent?: string;
  delay?: number;
  /** When false, the card does not clip overflow (needed for sticky children). */
  clip?: boolean;
}

export function Section({
  kicker,
  title,
  action,
  children,
  className,
  accent = "var(--color-cyan)",
  delay = 0,
  clip = true,
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn("glass glass-hover accent-top p-5 md:p-6", className)}
      style={{ ["--accent" as string]: accent, ...(clip ? {} : { overflow: "visible" }) }}
    >
      {(kicker || title || action) && (
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            {kicker && <p className="kicker">{kicker}</p>}
            {title && (
              <h2 className="mt-1 text-lg font-semibold tracking-tight text-white md:text-xl">
                {title}
              </h2>
            )}
          </div>
          {action}
        </header>
      )}
      {children}
    </motion.section>
  );
}
