"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText, AlertTriangle, BarChart, Bot, Zap, ArrowRight,
  Users, Clock, TrendingUp, CheckCircle2, Sparkles, Send, MessageSquare,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-6 items-stretch max-w-5xl mx-auto">

          {/* ===== BEFORE Card ===== */}
          <motion.div
            className="relative rounded-2xl p-5 sm:p-6 text-left"
            style={{
              background: "rgba(239,68,68,0.015)",
              border: "1.5px solid rgba(239,68,68,0.12)",
              boxShadow: "0 2px 16px rgba(239,68,68,0.04)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80, damping: 16 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-[11px] font-bold px-3.5 py-1.5 rounded-full"
                style={{ background: "rgba(239,68,68,0.06)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.1)" }}
              >
                Before
              </span>
              <span className="text-[10px] font-semibold text-t4">수동 프로세스</span>
            </div>

            {/* Flow */}
            <div className="flex flex-col gap-2">
              {/* Step 1 */}
              <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "white", border: "1px solid rgba(232,226,220,0.6)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(153,153,153,0.08)" }}>
                  <FileText size={14} className="text-t3" />
                </div>
                <span className="text-[13px] font-semibold text-t2">콘텐츠 기획</span>
              </div>

              {/* Bottleneck 1 */}
              <div className="relative rounded-xl px-4 py-3.5" style={{ background: "rgba(239,68,68,0.04)", border: "1.5px solid rgba(239,68,68,0.15)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(239,68,68,0.1)" }}>
                    <AlertTriangle size={14} className="text-[#EF4444]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[13px] font-bold text-t1 block">인플루언서 발굴</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="flex items-center gap-1 text-[10px] text-[#EF4444] font-semibold">
                        <Users size={10} /> 직원 5명
                      </span>
                      <span className="text-[10px] text-t4">×</span>
                      <span className="flex items-center gap-1 text-[10px] text-[#EF4444] font-semibold">
                        <Clock size={10} /> 1주일
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] font-black px-2.5 py-1 rounded-full shrink-0" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                    병목
                  </span>
                </div>
              </div>

              {/* Bottleneck 2 */}
              <div className="relative rounded-xl px-4 py-3.5" style={{ background: "rgba(239,68,68,0.04)", border: "1.5px solid rgba(239,68,68,0.15)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(239,68,68,0.1)" }}>
                    <Send size={14} className="text-[#EF4444]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[13px] font-bold text-t1 block">DM 발송 / 단가 협상</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-[#EF4444] font-semibold">접촉 3명/시간</span>
                      <span className="text-[10px] text-t4">·</span>
                      <span className="text-[10px] text-[#EF4444] font-semibold">응답률 2.3%</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-black px-2.5 py-1 rounded-full shrink-0" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
                    병목
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "white", border: "1px solid rgba(232,226,220,0.6)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(153,153,153,0.08)" }}>
                  <BarChart size={14} className="text-t3" />
                </div>
                <span className="text-[13px] font-semibold text-t2">성과 리포팅</span>
              </div>
            </div>

            {/* Resource bar */}
            <div className="mt-5 mb-2">
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

            <div className="text-center mt-3">
              <span className="text-[11px] font-bold text-[#EF4444]">
                전체 리소스의 80%가 수동 노가다에 소모
              </span>
            </div>
          </motion.div>

          {/* ===== Center Arrow ===== */}
          <motion.div
            className="flex flex-col justify-center items-center py-4 lg:py-0 gap-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 120, damping: 12 }}
          >
            <motion.div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #FF6B2C, #E05A1F)", boxShadow: "0 4px 20px rgba(255,107,44,0.3)" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={22} className="text-white lg:rotate-0 rotate-90" />
            </motion.div>
            <motion.span
              className="text-[10px] text-[#FF6B2C] font-black tracking-wide"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              AI 전환
            </motion.span>
          </motion.div>

          {/* ===== AFTER Card — ScoutManager ===== */}
          <motion.div
            className="relative rounded-2xl text-left overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 100%)",
              border: "1.5px solid rgba(255,107,44,0.2)",
              boxShadow: "0 8px 40px rgba(255,107,44,0.1), 0 2px 8px rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(255,107,44,0.15), 0 4px 12px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.7, delay: 1.0, type: "spring", stiffness: 80, damping: 16 }}
          >
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,107,44,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #FF6B2C, #E05A1F)" }}
                  >
                    <Bot size={14} className="text-white" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1.5 rounded-full" style={{ background: "rgba(255,107,44,0.15)", color: "#FF6B2C" }}>
                    After · ScoutManager AI
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                  </span>
                  <span className="text-[9px] font-bold text-[#10B981]">Active</span>
                </div>
              </div>

              {/* AI Flow Steps */}
              <div className="flex flex-col gap-2.5">
                {/* Step 1 — same */}
                <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,107,44,0.1)" }}>
                    <FileText size={14} className="text-[#FF6B2C]" />
                  </div>
                  <span className="text-[13px] font-semibold text-white/70">콘텐츠 기획</span>
                </div>

                {/* AI Step 2 — Scout */}
                <motion.div
                  className="relative rounded-xl px-4 py-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,107,44,0.12), rgba(255,107,44,0.05))",
                    border: "1.5px solid rgba(255,107,44,0.3)",
                    boxShadow: "0 0 20px rgba(255,107,44,0.06)",
                  }}
                  animate={isInView ? { boxShadow: ["0 0 20px rgba(255,107,44,0.06)", "0 0 30px rgba(255,107,44,0.12)", "0 0 20px rgba(255,107,44,0.06)"] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #FF6B2C, #E05A1F)" }}>
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-bold text-white">AI 자동 인플루언서 섭외</span>
                        <span className="text-[8px] font-black px-2 py-0.5 rounded-full bg-[#FF6B2C] text-white">AI Agent</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1 text-[10px] text-[#10B981] font-bold">
                          <Zap size={10} /> 3분 완료
                        </span>
                        <span className="text-[10px] text-white/30">·</span>
                        <span className="flex items-center gap-1 text-[10px] text-[#10B981] font-bold">
                          <TrendingUp size={10} /> 500명/시간
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Speed comparison */}
                  <div className="mt-3 flex items-center gap-2 pt-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-[9px] text-white/40 line-through">직원 5명 × 1주일</span>
                    <ArrowRight size={10} className="text-[#FF6B2C]" />
                    <span className="text-[9px] font-bold text-[#10B981]">AI 3분 자동 완료</span>
                    <span className="ml-auto text-[9px] font-black text-[#FF6B2C]">167배 ↑</span>
                  </div>
                </motion.div>

                {/* AI Step 3 — DM */}
                <motion.div
                  className="relative rounded-xl px-4 py-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.03))",
                    border: "1.5px solid rgba(16,185,129,0.2)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
                      <MessageSquare size={16} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-bold text-white">AI 자동 DM + 단가 협상</span>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[10px] text-[#10B981] font-bold">응답률 18.7%</span>
                        <span className="text-[10px] text-white/30">·</span>
                        <span className="text-[10px] text-[#10B981] font-bold">8배 향상</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 pt-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-[9px] text-white/40 line-through">응답률 2.3%</span>
                    <ArrowRight size={10} className="text-[#10B981]" />
                    <span className="text-[9px] font-bold text-[#10B981]">응답률 18.7%</span>
                    <span className="ml-auto text-[9px] font-black text-[#10B981]">8.1배 ↑</span>
                  </div>
                </motion.div>

                {/* Step 4 — same */}
                <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,107,44,0.1)" }}>
                    <BarChart size={14} className="text-[#FF6B2C]" />
                  </div>
                  <span className="text-[13px] font-semibold text-white/70">AI 자동 성과 리포팅</span>
                  <CheckCircle2 size={14} className="text-[#10B981] ml-auto shrink-0" />
                </div>
              </div>

              {/* Efficiency bar */}
              <div className="mt-5 mb-2">
                <div className="flex justify-between text-[10px] mb-1.5">
                  <span className="text-white/40 font-medium">효율성</span>
                  <span className="text-[#10B981] font-bold">400% 향상</span>
                </div>
                <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #FF6B2C, #10B981)" }}
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Bottom stats */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span
                  className="text-[11px] font-bold px-4 py-1.5 rounded-full"
                  style={{ background: "rgba(16,185,129,0.12)", color: "#10B981" }}
                >
                  영업이익률 40% 돌파
                </span>
                <span
                  className="text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5"
                  style={{ background: "linear-gradient(135deg, #FF6B2C, #E05A1F)", color: "white" }}
                >
                  <Bot size={11} /> Powered by AI
                </span>
              </div>
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

        {/* AI Chat Bubble */}
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
