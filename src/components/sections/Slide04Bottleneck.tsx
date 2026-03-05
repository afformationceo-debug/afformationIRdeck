"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText, AlertTriangle, BarChart, Bot, Zap, ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

function FlowNode({
  icon,
  label,
  sub,
  variant = "default",
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  sub?: string;
  variant?: "default" | "error" | "success";
  badge?: string;
}) {
  const borderColor =
    variant === "error"
      ? "rgba(239,68,68,0.25)"
      : variant === "success"
      ? "rgba(255,107,44,0.25)"
      : "rgba(232,226,220,0.6)";
  const bg =
    variant === "error"
      ? "rgba(239,68,68,0.03)"
      : variant === "success"
      ? "rgba(255,107,44,0.03)"
      : "white";

  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all"
      style={{ background: bg, border: `1.5px solid ${borderColor}` }}
    >
      <div className="shrink-0">{icon}</div>
      <div className="text-left min-w-0 flex-1">
        <span className="text-[13px] font-bold text-t1 block leading-snug">{label}</span>
        {sub && (
          <span
            className="text-[10px] font-semibold mt-0.5 block"
            style={{ color: variant === "error" ? "#EF4444" : variant === "success" ? "#10B981" : "#999" }}
          >
            {sub}
          </span>
        )}
      </div>
      {badge && (
        <span
          className="text-[10px] font-black px-2.5 py-1 rounded-full shrink-0"
          style={{
            background: variant === "error" ? "rgba(239,68,68,0.08)" : "rgba(16,185,129,0.08)",
            color: variant === "error" ? "#EF4444" : "#10B981",
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

export default function Slide04Bottleneck() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="bottleneck" white chapter="04">
      <div ref={sectionRef} className="text-center">
        <SectionHeader
          chapter="04"
          badge="The Breakthrough"
          badgeColor="orange"
          title={<>인플루언서라는 장벽, 그리고 <span className="gt">혁신</span></>}
          subtitle="전체 효율을 갉아먹는 치명적 병목을 독자 기술로 돌파했습니다."
        />

        {/* Before / After */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch max-w-4xl mx-auto">
          {/* BEFORE Card */}
          <motion.div
            className="relative rounded-2xl p-6 text-left"
            style={{
              background: "white",
              border: "2px dashed rgba(239,68,68,0.2)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}
            initial={{ opacity: 0, x: -60, rotateY: 5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            whileHover={{ y: -4, boxShadow: "0 12px 35px rgba(239,68,68,0.1)" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80, damping: 14 }}
          >
            {/* Header badge */}
            <div className="flex justify-center mb-5">
              <span
                className="text-xs font-bold px-4 py-1.5 rounded-full"
                style={{ background: "rgba(239,68,68,0.06)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.12)" }}
              >
                Before
              </span>
            </div>

            {/* Flow nodes */}
            <div className="flex flex-col gap-2.5">
              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}><FileText size={15} className="text-[#FF6B2C]" /></div>}
                label="콘텐츠 기획"
              />

              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(239,68,68,0.08)" }}><AlertTriangle size={15} className="text-[#EF4444]" /></div>}
                label="인플루언서 발굴"
                sub="직원 5명 × 1주일"
                variant="error"
                badge="병목"
              />

              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(239,68,68,0.08)" }}><AlertTriangle size={15} className="text-[#EF4444]" /></div>}
                label="DM 발송 / 단가 협상"
                sub="접촉 3명/시간 · 응답률 2.3%"
                variant="error"
                badge="병목"
              />

              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}><BarChart size={15} className="text-[#FF6B2C]" /></div>}
                label="성과 리포팅"
              />
            </div>

            {/* Resource bar */}
            <div className="mt-5 mb-3">
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-t3 font-medium">리소스 소모</span>
                <span className="text-[#EF4444] font-bold">80%</span>
              </div>
              <div className="w-full h-2 bg-[#F3F0EB] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #EF4444, #F87171)" }}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "80%" } : { width: "0%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <span
                className="text-[11px] font-bold px-4 py-1.5 rounded-full"
                style={{ background: "rgba(239,68,68,0.06)", color: "#EF4444" }}
              >
                전체 리소스의 80% 소모
              </span>
            </div>
          </motion.div>

          {/* Center Arrow */}
          <motion.div
            className="flex flex-col justify-center items-center py-4 lg:py-0 gap-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 120, damping: 12 }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={28} className="text-[#FF6B2C] lg:rotate-0 rotate-90" />
            </motion.div>
            <motion.span
              className="text-[10px] text-[#FF6B2C] font-bold tracking-wide"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ScoutManager
            </motion.span>
          </motion.div>

          {/* AFTER Card */}
          <motion.div
            className="relative rounded-2xl p-6 text-left"
            style={{
              background: "white",
              border: "2px dashed rgba(255,107,44,0.2)",
              boxShadow: "0 4px 24px rgba(255,107,44,0.06)",
            }}
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            whileHover={{ y: -4, boxShadow: "0 12px 35px rgba(255,107,44,0.12)" }}
            transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 80, damping: 14 }}
          >
            {/* Header badge */}
            <div className="flex justify-center mb-5">
              <span
                className="text-xs font-bold px-4 py-1.5 rounded-full"
                style={{ background: "rgba(255,107,44,0.06)", color: "#FF6B2C", border: "1px solid rgba(255,107,44,0.12)" }}
              >
                After · ScoutManager
              </span>
            </div>

            {/* Flow nodes */}
            <div className="flex flex-col gap-2.5">
              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}><FileText size={15} className="text-[#FF6B2C]" /></div>}
                label="콘텐츠 기획"
              />

              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}><Bot size={15} className="text-[#FF6B2C]" /></div>}
                label="ScoutManager AI 자동 섭외"
                sub="AI 3분 완료 · 접촉 500명/시간"
                variant="success"
                badge="자동화"
              />

              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}><Zap size={15} className="text-[#FF6B2C]" /></div>}
                label="AI DM + 단가 자동 협상"
                sub="응답률 18.7% · 8배 향상"
                variant="success"
              />

              <FlowNode
                icon={<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}><BarChart size={15} className="text-[#FF6B2C]" /></div>}
                label="성과 리포팅"
              />
            </div>

            {/* Efficiency bar */}
            <div className="mt-5 mb-3">
              <div className="flex justify-between text-[10px] mb-1.5">
                <span className="text-t3 font-medium">효율성</span>
                <span className="text-[#10B981] font-bold">400% 향상</span>
              </div>
              <div className="w-full h-2 bg-[#F3F0EB] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #10B981, #34D399)" }}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex justify-center gap-2">
              <span
                className="text-[11px] font-bold px-4 py-1.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.06)", color: "#10B981" }}
              >
                영업이익률 40% 돌파
              </span>
              <span
                className="text-[11px] font-bold px-4 py-1.5 rounded-full"
                style={{ background: "#1A1A1A", color: "white" }}
              >
                Powered by AI
              </span>
            </div>
          </motion.div>
        </div>

        {/* ROI Badge */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, type: "spring", stiffness: 100, damping: 15 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,44,0.08), rgba(255,143,92,0.04))",
              border: "1px solid rgba(255,107,44,0.15)",
            }}
          >
            <Zap size={18} className="text-[#FF6B2C]" />
            <span className="text-sm font-black text-[#FF6B2C]">투자 대비 800% 효율 향상</span>
          </div>
        </motion.div>

        {/* Desc Box */}
        <AiChatBubble delay={1.8} className="mt-6">
          <p>
            전체 리소스의 80%가 현지 인플루언서를 찾고, DM을 보내고, 단가를 네고하는
            &lsquo;수동 노가다&rsquo;에 빠져나갔습니다. 이 병목을 완벽히 부수기 위해 저희가
            직접 개발한 AI 에이전트가 바로 &lsquo;스카웃매니저&rsquo;이고, 도입 즉시
            내부 생산성이 폭발하며 영업이익률이 40%로 치솟았습니다.
          </p>
        </AiChatBubble>

        {/* Bottom Bold Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-6"
        >
          <p className="text-2xl md:text-3xl font-black text-center text-[#1A1A1A] max-w-xl mx-auto">
            도입 즉시 <span className="gt">영업이익률 40%</span> 돌파
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
