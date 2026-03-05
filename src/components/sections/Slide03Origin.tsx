"use client";

import { motion } from "framer-motion";
import {
  Search, Users, MessageCircle, Calendar, Building2, CreditCard,
  Zap, Bot, Layers, Sparkles, ArrowRight, ArrowDown,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const phases = [
  {
    phase: "Phase 1",
    label: "Discovery",
    color: "#FF6B2C",
    steps: [
      { icon: Search, label: "STEP 1", text: "해외 환자 발굴", agent: "ScoutAgent" },
      { icon: Users, label: "STEP 2", text: "인플루언서 매칭", agent: "MatchAgent" },
    ],
  },
  {
    phase: "Phase 2",
    label: "Engagement",
    color: "#3B82F6",
    steps: [
      { icon: MessageCircle, label: "STEP 3", text: "다국어 CS", agent: "LangAgent" },
      { icon: Calendar, label: "STEP 4", text: "예약/상담", agent: "BookingAgent" },
    ],
  },
  {
    phase: "Phase 3",
    label: "Conversion",
    color: "#10B981",
    steps: [
      { icon: Building2, label: "STEP 5", text: "병원 연결", agent: "ConnectAgent" },
      { icon: CreditCard, label: "STEP 6", text: "정산/리뷰", agent: "SettleAgent" },
    ],
  },
];

const stats = [
  { icon: Zap, value: "30단계", desc: "자동화 루프", color: "#FF6B2C" },
  { icon: Bot, value: "12+ AI Agent", desc: "오케스트레이션", color: "#8B5CF6" },
  { icon: Layers, value: "4개 서비스", desc: "시너지 파이프라인", color: "#3B82F6" },
];

export default function Slide03Origin() {
  return (
    <SectionWrapper id="origin" chapter="03">
      <div className="text-center">
        <SectionHeader
          chapter="03"
          badge="The Origin"
          badgeColor="orange"
          title={<>이 <span className="gt">OS</span>는 어떻게 탄생했는가?</>}
          subtitle="책상머리에서 기획한 툴이 아닙니다. 글로벌 비즈니스 현장에서 직접 깎아낸 생존 무기입니다."
        />

        {/* ===== Dark AI Pipeline Container ===== */}
        <div className="max-w-4xl mx-auto mb-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
              border: "1px solid rgba(255,107,44,0.1)",
              boxShadow: "0 12px 50px rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Neural grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,107,44,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative p-6 sm:p-8">
              {/* Header badge */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,107,44,0.08)", border: "1px solid rgba(255,107,44,0.15)" }}>
                  <Sparkles size={12} className="text-[#FF6B2C]" />
                  <span className="text-[11px] font-bold text-[#FF6B2C]">30-Step AI Automation Loop</span>
                </div>
              </motion.div>

              {/* 3 Phase Groups — Dark */}
              <div className="space-y-5">
                {phases.map((phase, pi) => (
                  <motion.div
                    key={phase.phase}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.3 + pi * 0.25 },
                      },
                    }}
                  >
                    {/* Phase Label */}
                    <motion.div
                      className="flex items-center justify-center gap-2 mb-3"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40" style={{ background: phase.color }} />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: phase.color }} />
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: phase.color }}>
                        {phase.phase} — {phase.label}
                      </span>
                    </motion.div>

                    {/* Steps Row */}
                    <div className="flex items-center justify-center flex-wrap gap-3">
                      {phase.steps.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.text} className="flex items-center gap-2 sm:gap-3">
                            <motion.div
                              className="relative flex items-center gap-3 px-4 py-3 rounded-xl"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                border: `1px solid ${phase.color}25`,
                              }}
                              variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                visible: {
                                  opacity: 1,
                                  scale: 1,
                                  y: 0,
                                  transition: { type: "spring", stiffness: 120, damping: 14 },
                                },
                              }}
                              whileHover={{ scale: 1.03, borderColor: `${phase.color}50` }}
                            >
                              {/* Active dot */}
                              <span className="absolute top-2 right-2 w-[5px] h-[5px] rounded-full animate-pulse" style={{ background: "#10B981" }} />
                              <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                style={{ background: `${phase.color}15` }}
                              >
                                <Icon size={16} style={{ color: phase.color }} />
                              </div>
                              <div className="text-left min-w-0">
                                <div className="text-[9px] uppercase tracking-wider font-semibold text-white/40">{item.label}</div>
                                <div className="text-xs font-bold text-white">{item.text}</div>
                                <div className="text-[9px] font-semibold mt-0.5" style={{ color: phase.color }}>{item.agent}</div>
                              </div>
                            </motion.div>

                            {i < phase.steps.length - 1 && (
                              <motion.div
                                className="hidden sm:block"
                                variants={{
                                  hidden: { opacity: 0, scaleX: 0 },
                                  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4 } },
                                }}
                              >
                                <div className="relative w-8 h-[2px] rounded-full" style={{ background: `${phase.color}30` }}>
                                  <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                                    style={{ background: phase.color, boxShadow: `0 0 6px ${phase.color}` }}
                                    animate={{ left: ["-2px", "30px"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                  />
                                </div>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Phase connector — vertical */}
                    {pi < phases.length - 1 && (
                      <div className="flex justify-center mt-3">
                        <motion.div
                          className="flex flex-col items-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + pi * 0.25 }}
                        >
                          <div className="relative w-[2px] h-6" style={{ background: `linear-gradient(180deg, ${phase.color}40, ${phases[pi + 1].color}40)` }}>
                            <motion.div
                              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                              style={{ background: phase.color, boxShadow: `0 0 6px ${phase.color}` }}
                              animate={{ top: ["-2px", "22px"] }}
                              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </div>
                          <ArrowDown size={10} style={{ color: phases[pi + 1].color, opacity: 0.5 }} />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Agent Count */}
              <motion.div
                className="flex justify-center mt-5 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <div className="inline-flex items-center gap-2 text-[11px] font-bold text-white/40">
                  <Bot size={14} className="text-[#FF6B2C]" />
                  <span>12+ AI Agents Orchestrated</span>
                  <span className="text-white/20">·</span>
                  <span>Human-in-the-Loop System</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats — Dark Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.8 },
            },
          }}
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                className="relative rounded-xl p-5 text-center overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
                  border: `1px solid ${stat.color}20`,
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
                  },
                }}
                whileHover={{ y: -4, borderColor: `${stat.color}40` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: stat.color, opacity: 0.5 }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${stat.color}15` }}>
                  <Icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs text-white/40">{stat.desc}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Desc Box */}
        <AiChatBubble delay={1.4}>
          <p>
            이 강력한 마케팅 OS는 저희의 치열한 본업에서 탄생했습니다.
            해외 환자를 한국 병원으로 유치하는 과정은 무려 30단계의 복잡한
            &lsquo;AI와 전문 인력의 교차 루프(Human-in-the-Loop)&rsquo;를 거쳐야만 합니다.
            각 단계마다 전담 AI 에이전트가 배치되어, Discovery에서 Conversion까지 전 퍼널을 자동화합니다.
          </p>
        </AiChatBubble>
      </div>
    </SectionWrapper>
  );
}
