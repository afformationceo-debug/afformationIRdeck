"use client";

interface AgentIndicatorProps {
  label?: string;
  status?: "active" | "processing" | "complete";
  dark?: boolean;
  className?: string;
}

export default function AgentIndicator({
  label = "AI Agent Active",
  status = "active",
  dark = false,
  className = "",
}: AgentIndicatorProps) {
  const statusConfig = {
    active: {
      color: "#FF6B2C",
      bgColor: dark ? "rgba(255,107,44,0.15)" : "rgba(255,107,44,0.08)",
      animation: "pulse 2s ease-in-out infinite",
    },
    processing: {
      color: "#3B82F6",
      bgColor: dark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.08)",
      animation: "pulse 1s ease-in-out infinite",
    },
    complete: {
      color: "#10B981",
      bgColor: dark ? "rgba(16,185,129,0.15)" : "rgba(16,185,129,0.08)",
      animation: "none",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${className}`}
      style={{ background: config.bgColor }}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        {status !== "complete" && (
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{
              backgroundColor: config.color,
              animation: config.animation,
            }}
          />
        )}
        <span
          className="relative inline-flex rounded-full h-2 w-2"
          style={{ backgroundColor: config.color }}
        />
      </span>

      {/* Label */}
      <span
        className="text-[11px] font-semibold tracking-wide"
        style={{ color: config.color }}
      >
        {label}
      </span>
    </div>
  );
}
