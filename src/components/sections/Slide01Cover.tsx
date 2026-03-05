"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AgentIndicator from "@/components/ui/AgentIndicator";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function DarkNetworkBackground() {
  const nodes = [
    { x: 10, y: 15 }, { x: 30, y: 25 }, { x: 55, y: 10 },
    { x: 75, y: 30 }, { x: 90, y: 15 }, { x: 20, y: 60 },
    { x: 45, y: 50 }, { x: 65, y: 65 }, { x: 85, y: 55 },
    { x: 15, y: 85 }, { x: 40, y: 80 }, { x: 70, y: 90 },
    { x: 50, y: 35 }, { x: 35, y: 70 }, { x: 80, y: 75 },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 6], [5, 6],
    [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [6, 12],
    [12, 3], [10, 13], [13, 7], [8, 14], [14, 11],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGridDark" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="0.8" fill="#FF6B2C" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGridDark)" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => (
          <line
            key={`edge-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#FF6B2C"
            strokeWidth="0.15"
            style={{
              animation: "fadeEdge 5s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={`node-${i}`}
            cx={n.x}
            cy={n.y}
            r="0.35"
            fill="#FF6B2C"
            style={{
              animation: "pulseNode 4s ease-in-out infinite",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const terminalCommands = [
  "scout find --region=US --niche=beauty --count=100",
  "scout dm --template=collab --lang=en",
  "scout negotiate --budget=auto --optimize",
];

function TerminalAnimation() {
  return (
    <motion.div
      className="w-full max-w-md mx-auto mt-4 mb-6 rounded-lg overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
        <div className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
        <div className="w-2 h-2 rounded-full bg-[#F59E0B]/60" />
        <div className="w-2 h-2 rounded-full bg-[#22C55E]/60" />
        <span className="text-[9px] text-white/30 ml-2 font-mono">ScoutManager CLI</span>
      </div>
      <div className="p-3 font-mono text-[11px] space-y-1.5">
        {terminalCommands.map((cmd, i) => (
          <motion.div
            key={cmd}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.4, duration: 0.3 }}
          >
            <span className="text-[#FF6B2C]">$</span>
            <span className="text-white/70">{cmd}</span>
            {i === terminalCommands.length - 1 && (
              <span className="w-[6px] h-[14px] bg-[#FF6B2C] anim-blink inline-block" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const heroStats = [
  { value: "12+", label: "AI Agents" },
  { value: "150+", label: "Partners" },
  { value: "$40B", label: "TAM" },
];

export default function Slide01Cover() {
  return (
    <SectionWrapper id="cover" cover variant="dark" background="dots">
      <DarkNetworkBackground />

      {/* Floating aura blobs */}
      <div
        className="aura"
        style={{
          width: 300,
          height: 300,
          background: "rgba(255, 107, 44, 0.06)",
          top: "15%",
          left: "10%",
        }}
      />
      <div
        className="aura"
        style={{
          width: 250,
          height: 250,
          background: "rgba(139, 92, 246, 0.05)",
          bottom: "10%",
          right: "8%",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[960px] mx-auto flex flex-col items-center text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-4">
          <AgentIndicator label="AI-Powered Platform" status="active" dark />
        </motion.div>

        {/* Hero Text */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-4"
          style={{ perspective: "800px" }}
        >
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #FF6B2C 0%, #FF8F5C 40%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(255,107,44,0.3))",
            }}
          >
            Global No.1
          </span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold text-white/90 mb-4"
        >
          Influencer Full-Funnel
          <br />
          Marketing OS
        </motion.h2>

        {/* ScoutManager Brand */}
        <motion.div variants={fadeUp} className="mb-2" style={{ perspective: "800px" }}>
          <motion.span
            className="text-3xl md:text-5xl font-black tracking-wide inline-block"
            style={{
              background: "linear-gradient(135deg, #FF6B2C, #FF8F5C, #FFB088)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            whileHover={{ scale: 1.05, rotateY: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            ScoutManager
          </motion.span>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div variants={fadeUp}>
          <TerminalAnimation />
        </motion.div>

        {/* Tech Badges */}
        <motion.div variants={fadeUp} className="flex justify-center gap-2 mb-6">
          <span className="badge text-[11px]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>LangGraph</span>
          <span className="badge text-[11px]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>RAG Pipeline</span>
          <span className="badge text-[11px]" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>Multi-Agent</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg font-semibold text-white/80 max-w-2xl leading-relaxed tracking-tight mb-4"
        >
          <span className="font-black text-white">K-메디컬</span>부터{" "}
          <span className="font-black text-white">글로벌 틱톡샵</span>까지, 전 세계 마케팅의{" "}
          <span className="font-black text-white">발굴·소통·정산</span>을 하나로 잇는{" "}
          <span className="font-black text-white">글로벌 No.1</span> 인플루언서 풀퍼널 마케팅 OS
        </motion.p>

        {/* Metric compact cards */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              whileHover={{
                y: -4,
                background: "rgba(255,107,44,0.1)",
                borderColor: "rgba(255,107,44,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-xl font-black text-[#FF6B2C]">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white/70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Backed by partners */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 mb-8 text-[11px] text-white/40 uppercase tracking-widest"
        >
          <span>Backed by</span>
          <span className="text-white/60 font-bold">CTK</span>
          <span>·</span>
          <span className="text-white/60 font-bold">시나르마스</span>
          <span>·</span>
          <span className="text-white/60 font-bold">Kaia-LINE</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/30">
            Scroll
          </span>
          <div className="anim-scroll-bounce">
            <ChevronDown size={20} className="text-white/40" />
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
