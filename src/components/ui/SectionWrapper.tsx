"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type SectionVariant = "default" | "white" | "dark" | "cover";

export default function SectionWrapper({
  id,
  children,
  white = false,
  cover = false,
  variant,
  background,
  chapter,
}: {
  id: string;
  children: ReactNode;
  white?: boolean;
  cover?: boolean;
  variant?: SectionVariant;
  background?: "none" | "neural" | "dots";
  chapter?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Determine effective variant from props
  const effectiveVariant = variant ?? (cover ? "cover" : white ? "white" : "default");

  const cls = [
    "ir-section",
    effectiveVariant === "white" ? "ir-section-white" : "",
    effectiveVariant === "dark" ? "ir-section-dark" : "",
    effectiveVariant === "cover" ? "ir-section-cover" : "",
    // For dark+cover combo
    effectiveVariant === "cover" && variant === "dark" ? "ir-section-dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} ref={ref} className={cls}>
      {/* Optional background effects */}
      {background === "neural" && <div className="neural-grid-bg" />}
      {background === "dots" && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id={`dots-${id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="0.8" fill={effectiveVariant === "dark" ? "#FFFFFF" : "#FF6B2C"} opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dots-${id})`} />
          </svg>
        </div>
      )}

      {/* Chapter watermark */}
      {chapter && (
        <span
          className="absolute top-8 left-1/2 -translate-x-1/2 text-[200px] font-black leading-none select-none pointer-events-none z-0"
          style={{
            opacity: effectiveVariant === "dark" ? 0.03 : 0.02,
            color: effectiveVariant === "dark" ? "#FFFFFF" : "#FF6B2C",
          }}
        >
          {chapter}
        </span>
      )}

      <motion.div
        className="inner"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : {}
        }
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
