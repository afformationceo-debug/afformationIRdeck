"use client";

import { motion } from "framer-motion";
import { DollarSign, Percent, Target, ArrowRight, Bot, Package, Truck, Zap, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const agents = [
  {
    id: "ctk",
    label: "CTK",
    role: "Production Agent",
    detail: "북미 최대 K-뷰티 ODM",
    sub: "생산 · 물류 · 품질관리",
    icon: Package,
    color: "#3B82F6",
  },
  {
    id: "scout",
    label: "ScoutManager",
    role: "AI Sales Agent",
    detail: "풀퍼널 AI 세일즈 엔진",
    sub: "크리에이터 자동 매칭 · DM 자동화",
    icon: Bot,
    color: "#FF6B2C",
    isCenter: true,
  },
  {
    id: "sinarmas",
    label: "시나르마스",
    role: "Distribution Agent",
    detail: "인도네시아 2위 재벌",
    sub: "동남아 유통 · 물류 네트워크",
    icon: Truck,
    color: "#8B5CF6",
  },
];

export default function Slide08Commerce() {
  return (
    <SectionWrapper id="commerce" white chapter="08">
      {/* Title */}
      <div className="text-center mb-8">
        <SectionHeader
          chapter="08"
          badge="Catalyst 2"
          badgeColor="orange"
          title={<>틱톡샵 제국을 점령하는 <span className="gt">풀퍼널 연합</span></>}
          subtitle="K-브랜드의 글로벌 틱톡샵 수출 — SI와 대형 VC가 가장 열광하는 장표"
        />
      </div>

      {/* ===== Dark Agent Partnership Pipeline ===== */}
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
                <span className="text-[11px] font-bold text-[#FF6B2C]">Agent Partnership Pipeline</span>
              </div>
            </motion.div>

            {/* Desktop: Horizontal Agent Flow */}
            <div className="hidden sm:flex items-stretch gap-0 mb-6">
              {agents.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <div key={agent.id} className="flex items-center flex-1">
                    <motion.div
                      className="flex-1 relative rounded-xl p-5 text-center"
                      style={{
                        background: agent.isCenter
                          ? "linear-gradient(135deg, rgba(255,107,44,0.12), rgba(255,107,44,0.04))"
                          : "rgba(255,255,255,0.04)",
                        border: agent.isCenter
                          ? "1.5px solid rgba(255,107,44,0.4)"
                          : `1px solid ${agent.color}20`,
                        boxShadow: agent.isCenter ? "0 0 30px rgba(255,107,44,0.1)" : "none",
                      }}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                      whileHover={{ y: -6, scale: 1.03, boxShadow: `0 12px 35px ${agent.color}20` }}
                    >
                      {/* Status dot */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: agent.color }} />
                          <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: agent.color }} />
                        </span>
                        <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: agent.color }}>Active</span>
                      </div>

                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                        style={{
                          background: agent.isCenter
                            ? `linear-gradient(135deg, ${agent.color}, #E05A1F)`
                            : `${agent.color}15`,
                        }}
                      >
                        <Icon size={24} style={{ color: agent.isCenter ? "white" : agent.color }} />
                      </div>

                      {/* Role badge */}
                      <div
                        className="inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                        style={{ background: `${agent.color}15`, color: agent.color }}
                      >
                        {agent.role}
                      </div>

                      {/* Name */}
                      <div className="text-base font-black text-white">{agent.label}</div>
                      <div className="text-[11px] text-white/50 mt-1">{agent.detail}</div>
                      <div className="text-[10px] font-semibold mt-1" style={{ color: agent.color }}>{agent.sub}</div>
                    </motion.div>

                    {/* Connector */}
                    {i < agents.length - 1 && (
                      <motion.div
                        className="flex flex-col items-center px-2 shrink-0"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.15 }}
                      >
                        <div className="relative w-8 h-[2px] overflow-hidden" style={{ background: `linear-gradient(90deg, ${agents[i].color}40, ${agents[i + 1].color}40)` }}>
                          <motion.div
                            className="absolute inset-y-0 w-3"
                            style={{ background: `linear-gradient(90deg, transparent, ${agents[i].color}, transparent)` }}
                            animate={{ left: ["-12px", "32px"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          />
                        </div>
                        <ArrowRight size={10} className="text-white/20 -mt-0.5" />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile: Stacked */}
            <div className="sm:hidden flex flex-col gap-3 mb-6">
              {agents.map((agent) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={agent.id}
                    className="flex items-center gap-4 rounded-xl px-5 py-4"
                    style={{
                      background: agent.isCenter ? "rgba(255,107,44,0.08)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${agent.color}25`,
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${agent.color}15` }}>
                      <Icon size={18} style={{ color: agent.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{agent.label}</div>
                      <div className="text-xs text-white/40">{agent.detail}</div>
                      <div className="text-[10px] font-semibold mt-0.5" style={{ color: agent.color }}>{agent.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Output node */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 80, damping: 12 }}
            >
              <div
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl"
                style={{
                  background: "rgba(255,107,44,0.08)",
                  border: "1.5px solid rgba(255,107,44,0.3)",
                  boxShadow: "0 0 20px rgba(255,107,44,0.08)",
                }}
              >
                <Zap size={18} className="text-[#FF6B2C]" />
                <div className="text-left">
                  <div className="text-sm font-black text-white">K-Brand 틱톡샵 매출 폭발</div>
                  <div className="text-[10px] text-white/40">3 Agents → Full-Funnel Automation → Revenue</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* GMV Target — Dark */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
      >
        <div
          className="inline-flex items-center gap-4 px-6 py-4 rounded-xl"
          style={{
            background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
            border: "1px solid rgba(255,107,44,0.2)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.15)" }}>
            <Target size={20} style={{ color: "#FF6B2C" }} />
          </div>
          <div>
            <div className="text-2xl font-black" style={{ color: "#FF6B2C" }}>GMV $5M</div>
            <div className="text-[11px] text-white/40">2026 연간 목표 거래액</div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Model */}
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
        }}
      >
        {[
          { icon: DollarSign, label: "시스템 구독료", badge: "SaaS", badgeColor: "#FF6B2C", color: "#FF6B2C" },
          { icon: Percent, label: "판매 수수료 8~12%", badge: "Rev-Share", badgeColor: "#10B981", color: "#10B981" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="rounded-xl flex items-center gap-4 px-6 py-5"
              style={{
                background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
                border: `1px solid ${item.color}20`,
              }}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
              }}
              whileHover={{ y: -5, borderColor: `${item.color}40` }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15` }}>
                <Icon size={18} style={{ color: item.color }} />
              </div>
              <span className="text-base font-bold text-white/80">{item.label}</span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full ml-2" style={{ background: `${item.badgeColor}15`, color: item.badgeColor }}>{item.badge}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Key Message */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center text-sm font-bold text-t1 mt-6"
      >
        K-Brand &rarr; 틱톡샵 &rarr; <span className="gt">글로벌 매출 폭발</span>
      </motion.p>

      {/* Desc Box */}
      <AiChatBubble delay={0.7}>
        <p>
          K-브랜드의 틱톡샵 수출입니다. 북미 최대 K-뷰티 ODM인 CTK가 생산/물류를, 인도네시아 2위 재벌 시나르마스가 동남아 유통망을 책임집니다. 저희는 프론트엔드에서 틱톡 크리에이터 군단을 자동 매칭해 물건을 팔아치웁니다. 2026년 GMV $5M 달성을 목표로, 시스템 구독료와 8~12% 판매 수수료를 글로벌 달러로 쓸어 담습니다.
        </p>
      </AiChatBubble>
    </SectionWrapper>
  );
}
