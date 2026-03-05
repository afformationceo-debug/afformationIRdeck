"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NodeBoxProps {
  children: ReactNode;
  active?: boolean;
  error?: boolean;
  success?: boolean;
  icon?: ReactNode;
  iconColor?: string;
  label?: string;
  className?: string;
  delay?: number;
}

export default function NodeBox({
  children,
  active = false,
  error = false,
  success = false,
  icon,
  iconColor = "icon-circle-orange",
  label,
  className = "",
  delay = 0,
}: NodeBoxProps) {
  const stateClass = error ? "node-error" : success ? "node-success" : active ? "node-active" : "";

  return (
    <motion.div
      className={`node ${stateClass} ${className}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -2 }}
    >
      {label && (
        <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2 font-semibold">
          {label}
        </div>
      )}
      <div className="flex items-center gap-3">
        {icon && <div className={`icon-circle ${iconColor} flex-shrink-0`}>{icon}</div>}
        <div className="text-sm font-semibold text-[var(--text-primary)]">{children}</div>
      </div>
    </motion.div>
  );
}
