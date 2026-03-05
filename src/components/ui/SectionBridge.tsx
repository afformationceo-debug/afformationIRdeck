"use client";

interface SectionBridgeProps {
  variant?: "default" | "chapter" | "subtle";
  label?: string;
}

export default function SectionBridge({
  variant = "default",
  label,
}: SectionBridgeProps) {
  const height = variant === "chapter" ? 100 : variant === "subtle" ? 48 : 80;

  return (
    <div
      className="section-bridge relative flex flex-col items-center justify-center overflow-visible"
      style={{ height }}
    >
      {/* Gradient vertical line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[2px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, #FF6B2C 15%, #FF6B2C 85%, transparent 100%)",
          opacity: variant === "subtle" ? 0.15 : 0.3,
          transform: "translateX(-50%)",
        }}
      />

      {/* Animated particle dots */}
      <div
        className="absolute left-1/2 w-[4px] h-[4px] rounded-full"
        style={{
          background: "#FF6B2C",
          boxShadow: "0 0 6px rgba(255,107,44,0.4)",
          transform: "translateX(-50%)",
          animation: `particleTravel ${variant === "subtle" ? "2s" : "1.5s"} ease-in-out infinite`,
        }}
      />
      {variant !== "subtle" && (
        <div
          className="absolute left-1/2 w-[3px] h-[3px] rounded-full"
          style={{
            background: "#FF8F5C",
            boxShadow: "0 0 4px rgba(255,143,92,0.3)",
            transform: "translateX(-50%)",
            animation: "particleTravel 1.5s ease-in-out infinite 0.5s",
          }}
        />
      )}

      {/* Chapter label */}
      {variant === "chapter" && label && (
        <div className="relative z-10 px-4 py-1.5 rounded-full bg-white border border-[#F0EBE6] shadow-sm">
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#FF6B2C]">
            {label}
          </span>
        </div>
      )}

      {/* Center dot for default variant */}
      {variant === "default" && (
        <div
          className="relative z-10 w-[8px] h-[8px] rounded-full"
          style={{
            background: "#FF6B2C",
            boxShadow: "0 0 0 3px rgba(255,107,44,0.08)",
          }}
        />
      )}
    </div>
  );
}
