"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  size?: "hero" | "default" | "compact";
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  iconClass?: string;
  color?: string;
  trend?: { direction: "up" | "down"; value: string };
  dark?: boolean;
  delay?: number;
}

function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  trigger,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);

  const display =
    end % 1 !== 0 ? value.toFixed(1) : Math.round(value).toString();

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function MetricCard({
  size = "default",
  value,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  icon,
  iconClass = "ic ic-orange",
  trend,
  dark = false,
  delay = 0,
}: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sizeClasses = {
    hero: "metric-hero",
    default: "metric-default",
    compact: "metric-compact",
  };

  const valueClasses = {
    hero: "text-4xl md:text-5xl",
    default: "text-3xl md:text-4xl",
    compact: "text-lg",
  };

  return (
    <motion.div
      ref={ref}
      className={`${sizeClasses[size]} ${
        dark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "stat-card"
      }`}
      style={{ perspective: "800px" }}
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.03,
        boxShadow: dark
          ? "0 12px 30px rgba(255,107,44,0.15)"
          : "0 12px 30px rgba(255,107,44,0.12)",
      }}
    >
      {/* Icon */}
      {icon && (
        <div className="flex justify-center mb-2">
          <div className={iconClass}>{icon}</div>
        </div>
      )}

      {/* Value */}
      <div
        className={`${valueClasses[size]} font-black ${
          dark ? "text-white" : "gt"
        } mb-1 whitespace-nowrap`}
      >
        <AnimatedCounter
          end={value}
          prefix={prefix}
          suffix={suffix}
          trigger={isInView}
        />
      </div>

      {/* Label */}
      <div
        className={`text-xs font-semibold mb-0.5 ${
          dark ? "text-white/80" : "text-t1"
        }`}
      >
        {label}
      </div>

      {/* Sublabel or trend */}
      {trend ? (
        <div
          className={`flex items-center justify-center gap-1 text-[11px] font-semibold ${
            trend.direction === "up" ? "text-[#10B981]" : "text-[#EF4444]"
          }`}
        >
          {trend.direction === "up" ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}
          <span>{trend.value}</span>
        </div>
      ) : sublabel ? (
        <div className={`text-[11px] ${dark ? "text-white/50" : "text-t2"}`}>
          {sublabel}
        </div>
      ) : null}
    </motion.div>
  );
}
