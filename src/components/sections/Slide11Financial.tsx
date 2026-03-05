"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const bars = [
  { year: "2025", amount: "₩30억", height: 120, driver: "챗닥 + 글로벌 대행", sub: "EBITDA 35.2% · YoY +924%", gradient: "barLight", ebitda: 35, composition: { saas: 15, agency: 70, fintech: 0, chatdoc: 15 } },
  { year: "2026", amount: "₩103억", height: 220, driver: "SaaS 전환 + 대행 Cap", sub: "SaaS 비중 역전 (51.6억)", gradient: "barMid", ebitda: 42, composition: { saas: 50, agency: 29, fintech: 1, chatdoc: 20 } },
  { year: "2027", amount: "₩200억+", height: 290, driver: "핀테크 파이프라인", sub: "순수 SaaS + 수수료 모델", gradient: "barDeep", ebitda: 50, composition: { saas: 55, agency: 10, fintech: 20, chatdoc: 15 } },
];

function JCurveChart({ inView }: { inView: boolean }) {
  const baseY = 340;
  const chartTop = 60;

  return (
    <svg viewBox="0 0 620 400" className="w-full max-w-xl mx-auto h-auto">
      <defs>
        <linearGradient id="barLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8F5C" />
          <stop offset="100%" stopColor="#FFB088" />
        </linearGradient>
        <linearGradient id="barMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B2C" />
          <stop offset="100%" stopColor="#FF8F5C" />
        </linearGradient>
        <linearGradient id="barDeep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E05A1F" />
          <stop offset="100%" stopColor="#FF6B2C" />
        </linearGradient>
        <filter id="barShadow" x="-10%" y="-5%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FF6B2C" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Grid lines */}
      <line x1={70} y1={chartTop + 50} x2={570} y2={chartTop + 50} stroke="#F0EBE6" strokeWidth="0.8" />
      <line x1={70} y1={chartTop + 130} x2={570} y2={chartTop + 130} stroke="#F0EBE6" strokeWidth="0.8" />
      <line x1={70} y1={chartTop + 210} x2={570} y2={chartTop + 210} stroke="#F0EBE6" strokeWidth="0.8" />
      {/* Base line */}
      <line x1={70} y1={baseY} x2={570} y2={baseY} stroke="#E8E2DC" strokeWidth="1" />

      {/* EBITDA target zone */}
      <rect x={70} y={chartTop + 30} width={500} height={30} fill="#10B981" opacity={0.03} rx={4} />
      <text x={575} y={chartTop + 50} textAnchor="end" fontSize="8" fill="#10B981" fontWeight="600" opacity={0.7}>50% EBITDA</text>
      <text x={575} y={chartTop + 215} textAnchor="end" fontSize="8" fill="#999" fontWeight="500">0</text>

      {/* Bars with 3D effect */}
      {bars.map((bar, i) => {
        const x = 95 + i * 175;
        const barW = 110;
        const barH = bar.height;
        const targetY = baseY - barH;

        return (
          <g key={bar.year}>
            {/* Bar shadow */}
            <motion.rect
              x={x + 6}
              width={barW}
              rx={6}
              fill="#000"
              opacity={0.04}
              initial={{ height: 0, y: baseY }}
              animate={inView ? { height: barH, y: targetY + 4 } : { height: 0, y: baseY }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.25, ease: "easeOut" }}
            />
            {/* Main bar */}
            <motion.rect
              x={x}
              width={barW}
              rx={6}
              fill={`url(#${bar.gradient})`}
              filter="url(#barShadow)"
              initial={{ height: 0, y: baseY }}
              animate={inView ? { height: barH, y: targetY } : { height: 0, y: baseY }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.25, ease: "easeOut" }}
            />
            {/* Bar top highlight */}
            <motion.rect
              x={x + 4}
              width={barW - 8}
              height={3}
              rx={1.5}
              fill="white"
              opacity={0.25}
              initial={{ y: baseY }}
              animate={inView ? { y: targetY + 2 } : { y: baseY }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.25, ease: "easeOut" }}
            />
            {/* Amount label - positioned with enough space */}
            <motion.text
              x={x + barW / 2}
              y={targetY - 14}
              textAnchor="middle"
              fontSize="20"
              fontWeight="900"
              fill="#FF6B2C"
              initial={{ opacity: 0, y: targetY }}
              animate={inView ? { opacity: 1, y: targetY - 14 } : { opacity: 0, y: targetY }}
              transition={{ delay: 0.9 + i * 0.25, duration: 0.5 }}
            >
              {bar.amount}
            </motion.text>
            {/* Year label */}
            <text x={x + barW / 2} y={baseY + 20} textAnchor="middle" fontSize="13" fontWeight="700" fill="#1A1A1A">
              {bar.year}
            </text>
            {/* Growth arrow for 2nd and 3rd bars */}
            {i > 0 && (
              <motion.text
                x={x - 20}
                y={baseY - barH / 2}
                textAnchor="middle"
                fontSize="14"
                fill="#FF6B2C"
                opacity={0.4}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.4 } : { opacity: 0 }}
                transition={{ delay: 1.5 + i * 0.2 }}
              >
                ▸
              </motion.text>
            )}
          </g>
        );
      })}

      {/* EBITDA margin overlay line */}
      <motion.path
        d={`M ${95 + 55} ${baseY - 120 * 0.35} C ${95 + 175 + 20} ${baseY - 160 * 0.38}, ${95 + 175 + 20} ${baseY - 180 * 0.40}, ${95 + 175 + 55} ${baseY - 220 * 0.42} C ${95 + 350 + 20} ${baseY - 250 * 0.45}, ${95 + 350 + 20} ${baseY - 260 * 0.47}, ${95 + 350 + 55} ${baseY - 290 * 0.50}`}
        fill="none"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
      />
      {/* EBITDA margin dots + labels */}
      {bars.map((bar, i) => {
        const x = 95 + i * 175 + 55;
        const y = baseY - bar.height * (bar.ebitda / 100);
        return (
          <motion.g key={`ebitda-${i}`} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} transition={{ delay: 1.5 + i * 0.2, type: "spring", stiffness: 200, damping: 15 }}>
            <circle cx={x} cy={y} r="8" fill="#10B981" opacity={0.1} />
            <circle cx={x} cy={y} r="5" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
            <rect x={x - 16} y={y - 24} width={32} height={16} rx={4} fill="#10B981" />
            <text x={x} y={y - 13} textAnchor="middle" fontSize="9" fontWeight="700" fill="white">
              {bar.ebitda}%
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

export default function Slide11Financial() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="financial" chapter="11">
      <div className="text-center">
        <SectionHeader
          chapter="11"
          badge="2025-2027"
          badgeColor="orange"
          title={<>Financial <span className="gt">J-Curve</span></>}
          subtitle="초격차 성장 로드맵"
        />

        {/* Context Badges */}
        <motion.div
          className="flex justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="badge badge-orange text-sm px-4 py-1.5">Revenue 30억→103억→200억</span>
          <span className="badge badge-green text-sm px-4 py-1.5">EBITDA 마진 35%→50%</span>
        </motion.div>

        {/* Chart */}
        <div ref={chartRef} className="mb-6">
          <JCurveChart inView={isInView} />
        </div>

        {/* Revenue Composition */}
        <motion.div
          className="max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-xs font-bold text-t1 mb-3 text-center uppercase tracking-widest">Revenue Composition</div>
          <div className="grid grid-cols-3 gap-3">
            {bars.map((bar) => (
              <div key={bar.year} className="card-flat p-3 text-center">
                <div className="text-sm font-black text-t1 mb-2">{bar.year}</div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: "#FF6B2C" }} />
                    <span className="text-t2">SaaS</span>
                    <span className="ml-auto font-bold text-[#FF6B2C]">{bar.composition.saas}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: "#3B82F6" }} />
                    <span className="text-t2">대행</span>
                    <span className="ml-auto font-bold text-[#3B82F6]">{bar.composition.agency}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: "#8B5CF6" }} />
                    <span className="text-t2">핀테크</span>
                    <span className="ml-auto font-bold text-[#8B5CF6]">{bar.composition.fintech}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: "#10B981" }} />
                    <span className="text-t2">챗닥</span>
                    <span className="ml-auto font-bold text-[#10B981]">{bar.composition.chatdoc}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Driver cards below bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6">
          {bars.map((bar, i) => {
            const borderColors = ["#FF8F5C", "#FF6B2C", "#E05A1F"];
            return (
              <motion.div
                key={bar.year}
                className="card-flat text-center"
                style={{ borderTop: `3px solid ${borderColors[i]}` }}
                initial={{ opacity: 0, y: 15, rotateX: 6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ y: -5, rotateX: 3, scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.15, duration: 0.4 }}
              >
                <div className="text-base font-black text-t1">{bar.year}</div>
                <div className="text-sm font-bold mt-1 gt">{bar.driver}</div>
                <div className="text-xs text-t3 mt-1">{bar.sub}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="text-3xl md:text-4xl font-black mt-6 max-w-xl mx-auto"
        >
          초격차 <span className="gt inline-block">J커브</span> 완성
        </motion.p>

        {/* Milestone Timeline */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <div className="card-flat px-5 py-3 text-sm font-bold text-center" style={{ borderLeft: "3px solid #FF8F5C" }}>2025 &middot; 30억 달성</div>
          <div className="conn" />
          <div className="card-flat px-5 py-3 text-sm font-bold text-center" style={{ borderLeft: "3px solid #FF6B2C" }}>SaaS 비중 역전</div>
          <div className="conn" />
          <div className="card-flat px-5 py-3 text-sm font-bold text-center" style={{ borderLeft: "3px solid #E05A1F" }}>200억 &middot; 핀테크 완성</div>
        </motion.div>

        {/* Desc Box */}
        <AiChatBubble delay={1.5}>
          <p>
            2025년 30억(EBITDA 마진 35.2%)에서 시작하여, 2026년 대행 매출에 의도적 Cap을 씌우고 SaaS 전환을 가속합니다. SaaS 비중이 15%→50%→55%로 급증하며, EBITDA 마진은 35%에서 50%까지 상승합니다. 2027년 순수 SaaS + 핀테크 수수료 모델로 200억 이상의 초격차 J커브를 완성합니다.
          </p>
        </AiChatBubble>
      </div>
    </SectionWrapper>
  );
}
