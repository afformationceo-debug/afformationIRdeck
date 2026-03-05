"use client";

import { motion } from "framer-motion";

interface FlowConnectorProps {
  direction?: "horizontal" | "vertical";
  length?: number;
  delay?: number;
  className?: string;
  dashed?: boolean;
}

export default function FlowConnector({
  direction = "horizontal",
  length = 48,
  delay = 0,
  className = "",
  dashed = false,
}: FlowConnectorProps) {
  const isH = direction === "horizontal";

  return (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: isH ? length : 2,
        height: isH ? 2 : length,
      }}
    >
      {/* Line */}
      <div
        className="absolute"
        style={{
          width: isH ? "100%" : 2,
          height: isH ? 2 : "100%",
          background: dashed ? "none" : "var(--orange-primary)",
          borderTop: dashed && isH ? "2px dashed var(--orange-light)" : "none",
          borderLeft: dashed && !isH ? "2px dashed var(--orange-light)" : "none",
          borderRadius: 1,
          opacity: 0.6,
        }}
      />
      {/* Traveling dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "var(--orange-primary)",
          boxShadow: "0 0 8px rgba(255,107,44,0.3)",
        }}
        animate={
          isH
            ? { x: [-length / 2, length / 2] }
            : { y: [-length / 2, length / 2] }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
      {/* Arrow */}
      <div
        className="absolute"
        style={{
          ...(isH
            ? { right: -4, borderLeft: "6px solid var(--orange-primary)", borderTop: "4px solid transparent", borderBottom: "4px solid transparent" }
            : { bottom: -4, borderTop: "6px solid var(--orange-primary)", borderLeft: "4px solid transparent", borderRight: "4px solid transparent" }),
          opacity: 0.8,
        }}
      />
    </div>
  );
}
