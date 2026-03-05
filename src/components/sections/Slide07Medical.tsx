"use client";

import { motion } from "framer-motion";
import { Bot, MessageCircle, Building2, TrendingDown, TrendingUp, Zap, Inbox, Sparkles, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const loopAgents = [
  {
    icon: Bot,
    title: "ScoutManager AI 섭외",
    desc: "무한 인플루언서 섭외 엔진",
    color: "#FF6B2C",
    status: "processing" as const,
  },
  {
    icon: MessageCircle,
    title: "다국어 CS/예약 자동화",
    desc: "AI Flow 자동 응대",
    color: "#3B82F6",
    status: "active" as const,
  },
  {
    icon: Building2,
    title: "병원 MSO & SaaS 수주",
    desc: "대형/중소 병원 공격적 수주",
    color: "#10B981",
    status: "active" as const,
  },
];

const costComparison = [
  { metric: "환자 유치 비용", afformation: "₩80만/건", agency: "₩250만/건", savings: "68%" },
  { metric: "섭외 소요 시간", afformation: "3분 (AI)", agency: "5일 (수동)", savings: "99%" },
  { metric: "응답률", afformation: "18.7%", agency: "2.3%", savings: "8x" },
];

export default function Slide07Medical() {
  return (
    <SectionWrapper id="medical" chapter="07">
      {/* Title */}
      <div className="text-center mb-8">
        <SectionHeader
          chapter="07"
          badge="Catalyst 1"
          badgeColor="orange"
          title={<>K-의료 시장 <span className="gt">장악</span></>}
          subtitle="해외 환자 유치 스케일업 — 본업이 자동화 엔진을 만나 시장을 싹쓸이"
        />
      </div>

      {/* ===== Dark AI Loop Container ===== */}
      <div className="max-w-4xl mx-auto mb-8">
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
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
            backgroundImage: "linear-gradient(rgba(255,107,44,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          <div className="relative p-6 sm:p-8">
            {/* Header */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,107,44,0.08)", border: "1px solid rgba(255,107,44,0.15)" }}>
                <Sparkles size={12} className="text-[#FF6B2C]" />
                <span className="text-[11px] font-bold text-[#FF6B2C]">AI-Powered Virtuous Loop</span>
              </div>
            </motion.div>

            {/* Center Hub */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 80, damping: 12 }}
            >
              <div className="relative">
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px solid rgba(255,107,44,0.3)" }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,107,44,0.2), rgba(255,107,44,0.08))",
                    border: "1.5px solid rgba(255,107,44,0.4)",
                    boxShadow: "0 0 30px rgba(255,107,44,0.15)",
                  }}
                >
                  <div className="text-center">
                    <span className="text-[11px] font-black text-[#FF6B2C]">선순환</span>
                    <br />
                    <span className="text-[9px] font-bold text-white/50">LOOP</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3 Agent Nodes - Circular/Horizontal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
              {loopAgents.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <div key={agent.title} className="flex items-center gap-3 sm:gap-0">
                    <motion.div
                      className="relative rounded-xl px-5 py-4 text-center"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${agent.color}25`,
                        minWidth: 180,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      whileHover={{ y: -4, borderColor: `${agent.color}50`, boxShadow: `0 8px 25px ${agent.color}15` }}
                    >
                      {/* Status dot */}
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                        <span className="relative flex h-1.5 w-1.5">
                          {agent.status === "processing" && (
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: agent.color }} />
                          )}
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: agent.color }} />
                        </span>
                        <span className="text-[7px] font-bold uppercase" style={{ color: agent.color }}>
                          {agent.status === "processing" ? "Processing" : "Active"}
                        </span>
                      </div>

                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2"
                        style={{ background: `${agent.color}15` }}
                      >
                        <Icon size={20} style={{ color: agent.color }} />
                      </div>
                      <div className="text-sm font-bold text-white">{agent.title}</div>
                      <div className="text-[10px] text-white/40 mt-0.5">{agent.desc}</div>
                    </motion.div>

                    {/* Connector */}
                    {i < loopAgents.length - 1 && (
                      <motion.div
                        className="hidden sm:flex items-center mx-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                      >
                        <div className="relative w-8 h-[2px] rounded-full" style={{ background: `${agent.color}30` }}>
                          <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                            style={{ background: agent.color, boxShadow: `0 0 6px ${agent.color}` }}
                            animate={{ left: ["-2px", "30px"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Loop-back arrow */}
            <motion.div
              className="flex justify-center mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/30">
                <svg width="60" height="14" viewBox="0 0 60 14">
                  <path d="M 58 7 Q 30 -6 2 7" fill="none" stroke="#FF6B2C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
                  <polygon points="0,5 0,9 4,7" fill="#FF6B2C" opacity="0.4" />
                </svg>
                <span className="text-[#FF6B2C]/50">무한 반복</span>
              </div>
            </motion.div>

            {/* Bottom stats row */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              {[
                { icon: TrendingDown, label: "원가 70% 절감", color: "#10B981" },
                { icon: TrendingUp, label: "MSO 3x 성장", color: "#FF6B2C" },
                { icon: Zap, label: "AI 섭외 99% 자동화", color: "#8B5CF6" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <span key={item.label} className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full" style={{ background: `${item.color}12`, color: item.color }}>
                    <Icon size={11} /> {item.label}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Case Numbers — Dark Cards */}
      <motion.div
        className="max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "12건", label: "대형 MSO 계약", sub: "상급종합병원 · 대형 성형외과", color: "#FF6B2C" },
            { value: "45건", label: "중소형 SaaS 공급", sub: "피부과 · 치과 · 안과 등", color: "#8B5CF6" },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="relative rounded-xl p-5 text-center overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
                border: `1px solid ${item.color}20`,
              }}
              whileHover={{ y: -4, borderColor: `${item.color}40` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: item.color, opacity: 0.5 }} />
              <div className="text-3xl font-black mb-1" style={{ color: item.color }}>{item.value}</div>
              <div className="text-sm font-semibold text-white/80">{item.label}</div>
              <div className="text-[11px] text-white/40 mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cost Comparison Table */}
      <motion.div
        className="max-w-3xl mx-auto mb-6 rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="p-4">
          <div className="text-xs font-bold text-white/60 mb-3 text-left">Afformation vs 기존 에이전시</div>
          <div className="space-y-2">
            {costComparison.map((row) => (
              <div
                key={row.metric}
                className="flex items-center justify-between py-2 px-3 rounded-lg"
                style={{ background: "rgba(255,107,44,0.04)" }}
              >
                <span className="text-sm font-semibold text-white/70 w-1/4 text-left">{row.metric}</span>
                <span className="text-sm font-black text-[#FF6B2C] w-1/4 text-center">{row.afformation}</span>
                <span className="text-sm text-white/30 w-1/4 text-center line-through decoration-1">{row.agency}</span>
                <span className="text-sm font-bold text-[#10B981] w-1/4 text-right">{row.savings} 절감</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Desc Box */}
      <AiChatBubble delay={0.6}>
        <p>
          첫 번째 확장은 본업인 &lsquo;K-의료 해외 환자 유치&rsquo;입니다. 대형 MSO 12건, 중소형 SaaS 45건을 수주하며 시장을 장악하고 있습니다. 기존 에이전시 대비 환자 유치 비용 68% 절감, 응답률 8배 향상 — 스카웃매니저의 AI 섭외력과 다국어 CS Flow가 만들어낸 압도적 경쟁 우위입니다.
        </p>
      </AiChatBubble>

      {/* Product Screenshot */}
      <motion.div
        className="mt-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="group relative rounded-xl overflow-hidden bg-white" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <img
            src="/screenshots/inbox.png"
            alt="ScoutManager 다국어 통합 인박스"
            width={800}
            height={480}
            className="w-full h-auto max-w-full transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent p-3 sm:p-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
                <Inbox size={14} className="text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-white">다국어 통합 인박스</span>
                <span className="text-[10px] sm:text-xs text-white/70 block truncate">LINE · Instagram · WhatsApp 실시간 CS 자동화</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
