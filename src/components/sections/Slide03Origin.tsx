"use client";

import { motion } from "framer-motion";
import {
  Search, Users, MessageCircle, Calendar, Building2, CreditCard,
  Zap, Bot, Layers,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const phases = [
  {
    phase: "Phase 1",
    label: "Discovery",
    color: "#FF6B2C",
    steps: [
      { icon: <Search size={18} />, label: "STEP 1", text: "해외 환자 발굴", color: "ic-orange", agent: "ScoutAgent" },
      { icon: <Users size={18} />, label: "STEP 2", text: "인플루언서 매칭", color: "ic-blue", agent: "MatchAgent" },
    ],
  },
  {
    phase: "Phase 2",
    label: "Engagement",
    color: "#3B82F6",
    steps: [
      { icon: <MessageCircle size={18} />, label: "STEP 3", text: "다국어 CS", color: "ic-teal", agent: "LangAgent" },
      { icon: <Calendar size={18} />, label: "STEP 4", text: "예약/상담", color: "ic-green", agent: "BookingAgent" },
    ],
  },
  {
    phase: "Phase 3",
    label: "Conversion",
    color: "#10B981",
    steps: [
      { icon: <Building2 size={18} />, label: "STEP 5", text: "병원 연결", color: "ic-purple", agent: "ConnectAgent" },
      { icon: <CreditCard size={18} />, label: "STEP 6", text: "정산/리뷰", color: "ic-orange", agent: "SettleAgent" },
    ],
  },
];

const stats = [
  { icon: <Zap size={20} />, value: "30단계", desc: "자동화 루프", color: "ic-orange" },
  { icon: <Bot size={20} />, value: "12+ AI Agent", desc: "오케스트레이션", color: "ic-blue" },
  { icon: <Layers size={20} />, value: "4개", desc: "자체 서비스", color: "ic-purple" },
];

function FlowNode({
  icon,
  iconColor,
  label,
  agent,
  children,
}: {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  agent: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="node flex items-center gap-2.5 w-full sm:w-[175px] border border-[#E8E2DC] shadow-sm relative"
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120, damping: 14 },
        },
      }}
      whileHover={{ scale: 1.03, boxShadow: "0 6px 20px rgba(255,107,44,0.1)" }}
      style={{ perspective: "800px" }}
    >
      <div className={`ic ic-sm ${iconColor}`}>{icon}</div>
      <div className="text-left min-w-0">
        <div className="text-[9px] uppercase tracking-wider text-[#999] font-semibold">{label}</div>
        <div className="text-xs font-bold text-[#1A1A1A]">{children}</div>
        <div className="text-[9px] font-semibold text-[#FF6B2C] mt-0.5">{agent}</div>
      </div>
    </motion.div>
  );
}

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

        {/* Flow Diagram Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-6"
        >
          <span className="badge badge-dark font-bold text-xs tracking-wide shimmer">30-Step Automation Loop</span>
        </motion.p>

        {/* 3 Phase Groups */}
        <div className="space-y-6 mb-4 relative max-w-3xl mx-auto">
          {/* Aura blob */}
          <div
            className="aura"
            style={{
              width: 280,
              height: 280,
              background: "rgba(255, 107, 44, 0.04)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

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
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 + pi * 0.3 },
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
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: phase.color }}
                />
                <span
                  className="text-[10px] uppercase tracking-widest font-bold"
                  style={{ color: phase.color }}
                >
                  {phase.phase} — {phase.label}
                </span>
              </motion.div>

              {/* Steps Row */}
              <div className="flex items-center justify-center flex-wrap gap-3">
                {phase.steps.map((item, i) => (
                  <div key={item.text} className="flex items-center">
                    <FlowNode
                      icon={item.icon}
                      iconColor={item.color}
                      label={item.label}
                      agent={item.agent}
                    >
                      {item.text}
                    </FlowNode>
                    {i < phase.steps.length - 1 && (
                      <motion.div
                        className="conn mx-1 hidden sm:block"
                        variants={{
                          hidden: { opacity: 0, scaleX: 0 },
                          visible: {
                            opacity: 0.6,
                            scaleX: 1,
                            transition: { duration: 0.4 },
                          },
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Phase connector */}
              {pi < phases.length - 1 && (
                <div className="flex justify-center mt-3">
                  <motion.div
                    className="conn-v"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 0.6, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + pi * 0.3 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="text-center text-sm font-semibold text-[#FF6B2C] mt-4 mb-4"
        >
          &times; 12+ AI Agents Orchestrated
        </motion.p>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-xs text-[#999] uppercase tracking-widest mb-6"
        >
          Human-in-the-Loop System
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 1.0 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              className="card-flat p-4 text-center"
              style={{ perspective: "800px" }}
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex justify-center mb-3">
                <div className={`ic ${stat.color}`}>{stat.icon}</div>
              </div>
              <div className="text-2xl md:text-3xl font-black gt mb-1">{stat.value}</div>
              {stat.desc && (
                <div className="text-xs text-[#999]">{stat.desc}</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Desc Box */}
        <motion.div
          className="desc-box max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p>
            이 강력한 마케팅 OS는 저희의 치열한 본업에서 탄생했습니다.
            해외 환자를 한국 병원으로 유치하는 과정은 무려 30단계의 복잡한
            &lsquo;AI와 전문 인력의 교차 루프(Human-in-the-Loop)&rsquo;를 거쳐야만 합니다.
            각 단계마다 전담 AI 에이전트가 배치되어, Discovery에서 Conversion까지 전 퍼널을 자동화합니다.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
