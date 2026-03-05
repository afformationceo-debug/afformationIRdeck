"use client";

import { motion } from "framer-motion";
import { Heart, Activity, ShoppingBag, Globe, Bot, Layers, Cpu, ArrowRight, Sparkles, Zap, MessageSquare } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

interface EcoCard {
  num: string;
  title: string;
  desc: string;
  revenue: string;
  revenueDetail: string;
  revenueColor: string;
  icon: React.ReactNode;
  iconClass: string;
  badge: string;
  badgeClass: string;
  borderColor: string;
}

const cards: EcoCard[] = [
  {
    num: "01",
    title: "ChatDoc (챗닥)",
    desc: "150+ 파트너 병원, ROAS 기반 마케팅 플랫폼",
    revenue: "월 2억 매출",
    revenueDetail: "안정적 반복 수익 · MRR ₩200M",
    revenueColor: "#10B981",
    icon: <Heart size={24} />,
    iconClass: "ic ic-green",
    badge: "안정적 캐시카우",
    badgeClass: "badge badge-green",
    borderColor: "#10B981",
  },
  {
    num: "02",
    title: "K-의료 환자유치",
    desc: "HITL 운영 대행 + 마케팅 내재화 SaaS",
    revenue: "MSO 12건 수주",
    revenueDetail: "대형 병원 MSO 계약 3배 성장",
    revenueColor: "#FF6B2C",
    icon: <Activity size={24} />,
    iconClass: "ic ic-orange",
    badge: "Catalyst 1",
    badgeClass: "badge badge-orange",
    borderColor: "#FF6B2C",
  },
  {
    num: "03",
    title: "K-커머스 확장",
    desc: "K-브랜드 틱톡샵 진출 풀퍼널 자동화",
    revenue: "GMV $5M 목표",
    revenueDetail: "틱톡샵 Rev-Share · 수수료 8~12%",
    revenueColor: "#FF6B2C",
    icon: <ShoppingBag size={24} />,
    iconClass: "ic ic-blue",
    badge: "Catalyst 2",
    badgeClass: "badge badge-orange",
    borderColor: "#FF6B2C",
  },
  {
    num: "04",
    title: "글로벌 SaaS 수출",
    desc: "미국/동남아 현지 타겟 직접 수출",
    revenue: "ARR $1M 타겟",
    revenueDetail: "글로벌 달러 결제 · B2B SaaS",
    revenueColor: "#8B5CF6",
    icon: <Globe size={24} />,
    iconClass: "ic ic-purple",
    badge: "Catalyst 3",
    badgeClass: "badge badge-purple",
    borderColor: "#8B5CF6",
  },
];

const agentPipeline = [
  { id: "chatdoc", label: "ChatDoc", sub: "캐시카우", color: "#10B981", icon: Heart, status: "active" as const },
  { id: "medical", label: "K-Medical", sub: "의료 확장", color: "#FF6B2C", icon: Activity, status: "active" as const },
  { id: "scout", label: "ScoutManager", sub: "AI Core", color: "#FF6B2C", icon: Bot, status: "processing" as const },
  { id: "commerce", label: "K-Commerce", sub: "커머스 자동화", color: "#3B82F6", icon: ShoppingBag, status: "active" as const },
  { id: "global", label: "Global SaaS", sub: "SaaS 수출", color: "#8B5CF6", icon: Globe, status: "active" as const },
];

export default function Slide06Ecosystem() {
  return (
    <SectionWrapper id="ecosystem" white chapter="06">
      {/* Title */}
      <div className="text-center mb-6">
        <SectionHeader
          chapter="06"
          badge="4 Matrix"
          badgeColor="orange"
          title={<>The Business <span className="gt">Ecosystem</span></>}
          subtitle="스카웃매니저 기반 글로벌 파이프라인 + 로컬 캐시카우로 폭발성과 안정성을 동시 증명"
        />
      </div>

      {/* Center Hub */}
      <motion.div
        className="flex justify-center mb-6 relative"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
      >
        <div
          className="aura"
          style={{
            width: 200,
            height: 200,
            background: "rgba(255, 107, 44, 0.05)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="card border-2 border-orange inline-flex items-center gap-4 px-8 py-5 relative z-10"
          style={{ boxShadow: "0 8px 30px rgba(255,107,44,0.18)" }}
        >
          <div className="ic ic-lg ic-orange">
            <Bot size={30} />
          </div>
          <span className="text-xl font-black text-t1">ScoutManager</span>
        </div>
      </motion.div>

      {/* SVG Dashed Connectors (desktop only) */}
      <div className="relative max-w-3xl mx-auto">
        <svg
          className="absolute -top-20 left-0 w-full pointer-events-none z-0 hidden md:block"
          style={{ height: "calc(100% + 80px)" }}
          viewBox="0 0 1000 700"
          preserveAspectRatio="xMidYMid meet"
        >
          {[
            { x: 250, y: 360 },
            { x: 750, y: 360 },
            { x: 250, y: 560 },
            { x: 750, y: 560 },
          ].map((target, i) => (
            <motion.line
              key={i}
              x1={500}
              y1={100}
              x2={target.x}
              y2={target.y}
              stroke="#FF6B2C"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.25 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.8 }}
            />
          ))}
        </svg>

        {/* 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.15 },
            },
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.num}
              className="card relative overflow-hidden"
              style={{ borderTop: `3px solid ${card.borderColor}`, perspective: "800px" }}
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: 8, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 40px rgba(255,107,44,0.12)" }}
            >
              {/* Large Faded Number */}
              <span className="absolute top-3 right-4 text-6xl font-black opacity-[0.04] select-none leading-none text-t1">
                {card.num}
              </span>

              {/* Icon + Badge */}
              <div className="flex items-start justify-between mb-3">
                <div className={card.iconClass}>
                  {card.icon}
                </div>
                <span className={card.badgeClass}>
                  {card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-[#1A1A1A] mb-2">{card.title}</h3>

              {/* Description */}
              <p className="text-sm text-t2 mb-3 line-clamp-2">{card.desc}</p>

              {/* Revenue Highlight */}
              <div
                className="rounded-lg px-3 py-2"
                style={{ background: `${card.revenueColor}08` }}
              >
                <div className="text-base font-black" style={{ color: card.revenueColor }}>
                  {card.revenue}
                </div>
                <div className="text-[11px] text-t3 mt-0.5">{card.revenueDetail}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== LangGraph-Style Agent Pipeline ===== */}
      <motion.div
        className="mt-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-t4">Agent Orchestration Pipeline</span>
        </div>

        {/* Pipeline Container — Dark */}
        <div
          className="relative rounded-2xl overflow-hidden p-6 sm:p-8"
          style={{
            background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
            border: "1px solid rgba(255,107,44,0.12)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
          }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,107,44,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Agent Nodes — Horizontal Flow */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Top row: 5 agent nodes */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 w-full">
              {agentPipeline.map((agent, i) => {
                const Icon = agent.icon;
                const isCore = agent.id === "scout";
                return (
                  <div key={agent.id} className="flex items-center gap-2 sm:gap-0">
                    <motion.div
                      className="relative rounded-xl px-4 py-3.5 text-center"
                      style={{
                        background: isCore
                          ? "linear-gradient(135deg, rgba(255,107,44,0.15), rgba(255,107,44,0.06))"
                          : "rgba(255,255,255,0.04)",
                        border: isCore
                          ? "1.5px solid rgba(255,107,44,0.4)"
                          : "1px solid rgba(255,255,255,0.08)",
                        minWidth: isCore ? 140 : 120,
                        boxShadow: isCore ? "0 0 30px rgba(255,107,44,0.1)" : "none",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ y: -4, borderColor: `${agent.color}60` }}
                    >
                      {/* Status dot */}
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                        <span className="relative flex h-1.5 w-1.5">
                          {agent.status === "processing" && (
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: agent.color }} />
                          )}
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: agent.color }} />
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                        style={{
                          background: isCore
                            ? `linear-gradient(135deg, ${agent.color}, #E05A1F)`
                            : `${agent.color}15`,
                        }}
                      >
                        <Icon size={isCore ? 20 : 18} style={{ color: isCore ? "white" : agent.color }} />
                      </div>

                      {/* Label */}
                      <div className="text-[12px] font-bold text-white">{agent.label}</div>
                      <div className="text-[9px] font-semibold mt-0.5" style={{ color: agent.color }}>{agent.sub}</div>

                      {/* Core badge */}
                      {isCore && (
                        <div className="mt-2 inline-flex items-center gap-1 text-[8px] font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(255,107,44,0.2)", color: "#FF6B2C" }}>
                          <Sparkles size={8} /> AI Core Engine
                        </div>
                      )}
                    </motion.div>

                    {/* Connector arrow between nodes */}
                    {i < agentPipeline.length - 1 && (
                      <motion.div
                        className="hidden sm:flex items-center mx-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <div className="relative">
                          {/* Connector line */}
                          <div className="w-6 h-[2px] rounded-full" style={{ background: `linear-gradient(90deg, ${agent.color}40, ${agentPipeline[i + 1].color}40)` }} />
                          {/* Traveling particle */}
                          <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                            style={{ background: agent.color, boxShadow: `0 0 6px ${agent.color}` }}
                            animate={{ left: ["-2px", "22px"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Mobile: vertical arrow */}
                    {i < agentPipeline.length - 1 && (
                      <div className="sm:hidden">
                        <ArrowRight size={14} className="rotate-90" style={{ color: agent.color, opacity: 0.4 }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Data flow description */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold text-white/30">
                <Zap size={12} className="text-[#FF6B2C]" />
                <span>Input: Campaign Brief</span>
              </div>
              <ArrowRight size={12} className="text-white/15 hidden sm:block" />
              <div className="flex items-center gap-2 text-[10px] font-semibold text-white/30">
                <Bot size={12} className="text-[#FF6B2C]" />
                <span>AI Agent Orchestration</span>
              </div>
              <ArrowRight size={12} className="text-white/15 hidden sm:block" />
              <div className="flex items-center gap-2 text-[10px] font-semibold text-white/30">
                <MessageSquare size={12} className="text-[#10B981]" />
                <span>Output: Revenue × Growth</span>
              </div>
            </motion.div>

            {/* Bottom Stats */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Layers, label: "4 Services", color: "#FF6B2C" },
                { icon: Cpu, label: "12+ AI Agents", color: "#8B5CF6" },
                { icon: Globe, label: "Global Scale", color: "#3B82F6" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}20`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon size={14} style={{ color: item.color }} />
                    <span className="text-[11px] font-bold text-white">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desc Box */}
      <AiChatBubble delay={0.6}>
        <p>
          저희의 사업 구조입니다. 먼저 월 2억 원의 수익을 내는 &lsquo;챗닥&rsquo; 플랫폼이 든든한 캐시카우로 하방을 지지합니다. 이 거대한 현금 엔진 위에서, 저희는 스카웃매니저를 무기로 3가지 폭발적인 스케일업(Catalyst)을 전개합니다. K-의료 MSO 12건, 틱톡샵 GMV $5M, 글로벌 SaaS ARR $1M — 각 사업이 시너지를 일으키며 동시 성장합니다.
        </p>
      </AiChatBubble>
    </SectionWrapper>
  );
}
