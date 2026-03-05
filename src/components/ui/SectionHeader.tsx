"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  chapter?: string;
  badge: string;
  badgeColor?: "orange" | "green" | "blue" | "purple" | "teal" | "red" | "dark";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
}

export default function SectionHeader({
  chapter,
  badge,
  badgeColor = "orange",
  title,
  subtitle,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-6 relative">
      {/* Chapter watermark */}
      {chapter && (
        <span
          className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[120px] font-black leading-none select-none pointer-events-none"
          style={{
            opacity: dark ? 0.04 : 0.03,
            color: dark ? "#FFFFFF" : "#FF6B2C",
          }}
        >
          {chapter}
        </span>
      )}

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-3"
      >
        <span className={`badge badge-${badgeColor}`}>{badge}</span>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-5xl font-black mb-3 ${
          dark ? "text-white" : "text-t1"
        }`}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`text-base max-w-2xl mx-auto ${
            dark ? "text-white/60" : "text-[#444]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
