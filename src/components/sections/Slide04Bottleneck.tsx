"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText, AlertTriangle, BarChart, Bot, Zap, ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 items-center max-w-3xl mx-auto">
          {/* BEFORE Card */}
          <motion.div
            className="card"
            style={{ borderTop: "3px solid #EF4444", perspective: "800px" }}
            initial={{ opacity: 0, x: -60, rotateY: 5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            whileHover={{ y: -6, rotateY: -2, boxShadow: "0 16px 40px rgba(239,68,68,0.15)" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80, damping: 14 }}
          >
            <div className="mb-4">
              <span className="badge badge-red">Before</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="node flex items-center gap-3">
                <div className="ic ic-sm ic-orange"><FileText size={16} /></div>
                <span className="text-sm font-bold text-[#1A1A1A]">콘텐츠 기획</span>
              </div>

              <div className="node node-error flex items-center gap-2">
                <div className="ic ic-sm ic-red shrink-0"><AlertTriangle size={16} /></div>
                <div className="text-left min-w-0">
                  <span className="text-sm font-bold text-[#1A1A1A] block truncate">인플루언서 발굴</span>
                  <span className="text-[10px] text-[#EF4444] font-semibold">직원 5명 × 1주일</span>
                </div>
                <span className="text-xs font-black text-[#EF4444] shrink-0">병목</span>
              </div>

              <div className="node node-error flex items-center gap-2">
                <div className="ic ic-sm ic-red shrink-0"><AlertTriangle size={16} /></div>
                <div className="text-left min-w-0">
                  <span className="text-sm font-bold text-[#1A1A1A] block truncate">DM 발송 / 단가 협상</span>
                  <span className="text-[10px] text-[#EF4444] font-semibold">접촉 3명/시간 · 응답률 2.3%</span>
                </div>
                <span className="text-xs font-black text-[#EF4444] shrink-0">병목</span>
              </div>

              <div className="node flex items-center gap-3">
                <div className="ic ic-sm ic-orange"><BarChart size={16} /></div>
                <span className="text-sm font-bold text-[#1A1A1A]">성과 리포팅</span>
              </div>
            </div>

            <div className="mt-5 mb-3">
              <div className="flex justify-between text-[10px] text-[#999] mb-1">
                <span>리소스 소모</span>
                <span className="text-[#EF4444] font-bold">80%</span>
              </div>
              <div className="w-full h-1.5 bg-[#F3F0EB] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#EF4444] rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "80%" } : { width: "0%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <span className="badge badge-red">전체 리소스의 80% 소모</span>
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
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={32} className="text-[#FF6B2C] lg:rotate-0 rotate-90" />
            </motion.div>
            <motion.span
              className="text-[10px] text-[#FF6B2C] font-bold"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ScoutManager
            </motion.span>
          </motion.div>

          {/* AFTER Card */}
          <motion.div
            className="card glow-orange"
            style={{ borderTop: "3px solid #FF6B2C", perspective: "800px" }}
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            whileHover={{ y: -6, rotateY: 2, boxShadow: "0 16px 40px rgba(255,107,44,0.18)" }}
            transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 80, damping: 14 }}
          >
            <div className="mb-4">
              <span className="badge badge-orange">After · ScoutManager</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="node flex items-center gap-3">
                <div className="ic ic-sm ic-orange"><FileText size={16} /></div>
                <span className="text-sm font-bold text-[#1A1A1A]">콘텐츠 기획</span>
              </div>

              <div className="node node-active flex items-center gap-2">
                <div className="ic ic-sm ic-orange shrink-0"><Bot size={16} /></div>
                <div className="text-left min-w-0">
                  <span className="text-sm font-bold text-[#1A1A1A] block">ScoutManager AI 자동 섭외</span>
                  <span className="text-[10px] text-[#10B981] font-semibold">AI 3분 완료 · 접촉 500명/시간</span>
                </div>
                <span className="badge badge-green text-[10px] shrink-0">자동화</span>
              </div>

              <div className="node node-active flex items-center gap-2">
                <div className="ic ic-sm ic-orange shrink-0"><Zap size={16} /></div>
                <div className="text-left min-w-0">
                  <span className="text-sm font-bold text-[#1A1A1A] block">AI DM + 단가 자동 협상</span>
                  <span className="text-[10px] text-[#10B981] font-semibold">응답률 18.7% · 8배 향상</span>
                </div>
              </div>

              <div className="node flex items-center gap-3">
                <div className="ic ic-sm ic-orange"><BarChart size={16} /></div>
                <span className="text-sm font-bold text-[#1A1A1A]">성과 리포팅</span>
              </div>
            </div>

            <div className="mt-5 mb-3">
              <div className="flex justify-between text-[10px] text-[#999] mb-1">
                <span>효율성</span>
                <span className="text-[#10B981] font-bold">400% 향상</span>
              </div>
              <div className="w-full h-1.5 bg-[#F3F0EB] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#10B981] rounded-full"
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="flex justify-center gap-2">
              <span className="badge badge-green">영업이익률 40% 돌파</span>
              <span className="badge badge-dark text-[10px]">Powered by AI</span>
            </div>
          </motion.div>
        </div>

        {/* ROI Badge */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, type: "spring", stiffness: 100, damping: 15 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,44,0.1), rgba(255,143,92,0.05))",
              border: "1px solid rgba(255,107,44,0.2)",
            }}
          >
            <Zap size={18} className="text-[#FF6B2C]" />
            <span className="text-sm font-black text-[#FF6B2C]">투자 대비 800% 효율 향상</span>
          </div>
        </motion.div>

        {/* Desc Box */}
        <motion.div
          className="desc-box max-w-3xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <p>
            전체 리소스의 80%가 현지 인플루언서를 찾고, DM을 보내고, 단가를 네고하는
            &lsquo;수동 노가다&rsquo;에 빠져나갔습니다. 이 병목을 완벽히 부수기 위해 저희가
            직접 개발한 AI 에이전트가 바로 &lsquo;스카웃매니저&rsquo;이고, 도입 즉시
            내부 생산성이 폭발하며 영업이익률이 40%로 치솟았습니다.
          </p>
        </motion.div>

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
