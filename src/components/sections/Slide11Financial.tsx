"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Bot, TrendingUp, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const bars = [
  { year: "2025", amount: "₩30억", height: 120, driver: "챗닥 + 글로벌 대행", sub: "EBITDA 35.2% · YoY +924%", gradient: "barLight", ebitda: 35, composition: { saas: 15, agency: 70, fintech: 0, chatdoc: 15 } },
  { year: "2026", amount: "₩103억", height: 220, driver: "SaaS 전환 + 대행 Cap", sub: "SaaS 비중 역전 (51.6억)", gradient: "barMid", ebitda: 42, composition: { saas: 50, agency: 29, fintech: 1, chatdoc: 20 } },
  { year: "2027", amount: "₩200억+", height: 290, driver: "핀테크 파이프라인", sub: "순수 SaaS + 수수료 모델", gradient: "barDeep", ebitda: 50, composition: { saas: 55, agency: 10, fintech: 20, chatdoc: 15 } },
];

function JCurveChart({ inView }: { inView: boolean }) {
  const baseY = 370;
  const chartTop = 80;

  return (
    <svg viewBox="0 0 620 440" className="w-full max-w-xl mx-auto h-auto">
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
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FF6B2C" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Grid lines */}
      <line x1={70} y1={chartTop + 50} x2={570} y2={chartTop + 50} stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1={70} y1={chartTop + 130} x2={570} y2={chartTop + 130} stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      <line x1={70} y1={chartTop + 210} x2={570} y2={chartTop + 210} stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
      {/* Base line */}
      <line x1={70} y1={baseY} x2={570} y2={baseY} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* EBITDA target zone */}
      <rect x={70} y={chartTop + 30} width={500} height={30} fill="#10B981" opacity={0.04} rx={4} />
      <text x={575} y={chartTop + 50} textAnchor="end" fontSize="8" fill="#10B981" fontWeight="600" opacity={0.7}>50% EBITDA</text>
      <text x={575} y={chartTop + 215} textAnchor="end" fontSize="8" fill="rgba(255,255,255,0.3)" fontWeight="500">0</text>

      {/* Bars */}
      {bars.map((bar, i) => {
        const x = 95 + i * 175;
        const barW = 110;
        const barH = bar.height;
        const targetY = baseY - barH;

        return (
          <g key={bar.year}>
            {/* Bar glow */}
            <motion.rect
              x={x + 6}
              width={barW}
              rx={6}
              fill="#FF6B2C"
              opacity={0.06}
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
              opacity={0.3}
              initial={{ y: baseY }}
              animate={inView ? { y: targetY + 2 } : { y: baseY }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.25, ease: "easeOut" }}
            />
            {/* Amount label with background */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.9 + i * 0.25, duration: 0.5 }}
            >
              <rect
                x={x + barW / 2 - 48}
                y={targetY - 38}
                width={96}
                height={28}
                rx={6}
                fill="#0F0F0F"
                stroke="#FF6B2C"
                strokeWidth="1.5"
                opacity={0.95}
              />
              <text
                x={x + barW / 2}
                y={targetY - 19}
                textAnchor="middle"
                fontSize="18"
                fontWeight="900"
                fill="#FFFFFF"
              >
                {bar.amount}
              </text>
            </motion.g>
            {/* Year label */}
            <text x={x + barW / 2} y={baseY + 20} textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(255,255,255,0.7)">
              {bar.year}
            </text>
            {/* Growth arrow */}
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
        filter="drop-shadow(0 0 8px rgba(16,185,129,0.3))"
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
            <circle cx={x} cy={y} r="8" fill="#10B981" opacity={0.15} />
            <circle cx={x} cy={y} r="5" fill="#161616" stroke="#10B981" strokeWidth="2" />
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
          <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full" style={{ background: "rgba(255,107,44,0.08)", color: "#FF6B2C", border: "1px solid rgba(255,107,44,0.15)" }}>
            Revenue 30억→103억→200억
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full" style={{ background: "rgba(16,185,129,0.08)", color: "#10B981", border: "1px solid rgba(16,185,129,0.15)" }}>
            EBITDA 마진 35%→50%
          </span>
        </motion.div>

        {/* ===== Dark Chart Container ===== */}
        <div ref={chartRef} className="max-w-4xl mx-auto mb-6">
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
                className="flex justify-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,107,44,0.08)", border: "1px solid rgba(255,107,44,0.15)" }}>
                  <Sparkles size={12} className="text-[#FF6B2C]" />
                  <span className="text-[11px] font-bold text-[#FF6B2C]">AI-Driven Revenue Projection</span>
                </div>
              </motion.div>

              {/* Chart */}
              <JCurveChart inView={isInView} />

              {/* Revenue Composition */}
              <motion.div
                className="mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-[10px] font-bold text-white/40 mb-3 text-center uppercase tracking-widest">Revenue Composition</div>
                <div className="grid grid-cols-3 gap-3">
                  {bars.map((bar) => (
                    <div key={bar.year} className="rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-sm font-black text-white/80 mb-2">{bar.year}</div>
                      <div className="space-y-1.5">
                        {[
                          { label: "SaaS", pct: bar.composition.saas, color: "#FF6B2C" },
                          { label: "대행", pct: bar.composition.agency, color: "#3B82F6" },
                          { label: "핀테크", pct: bar.composition.fintech, color: "#8B5CF6" },
                          { label: "챗닥", pct: bar.composition.chatdoc, color: "#10B981" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center gap-2 text-[11px]">
                            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: item.color }} />
                            <span className="text-white/40">{item.label}</span>
                            <span className="ml-auto font-bold" style={{ color: item.color }}>{item.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Driver cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-6">
          {bars.map((bar, i) => {
            const colors = ["#FF8F5C", "#FF6B2C", "#E05A1F"];
            return (
              <motion.div
                key={bar.year}
                className="relative rounded-xl p-4 text-center overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
                  border: `1px solid ${colors[i]}20`,
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15 }}
                whileHover={{ y: -5, borderColor: `${colors[i]}40` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: colors[i], opacity: 0.6 }} />
                <div className="text-base font-black text-white/80">{bar.year}</div>
                <div className="text-sm font-bold mt-1" style={{ color: colors[i] }}>{bar.driver}</div>
                <div className="text-xs text-white/40 mt-1">{bar.sub}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="max-w-xl mx-auto mb-6 py-6 text-center rounded-2xl"
          style={{
            background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
            border: "1px solid rgba(255,107,44,0.15)",
            boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
          }}
        >
          <p className="text-3xl md:text-4xl font-black text-white">
            초격차 <span className="gt inline-block">J커브</span> 완성
          </p>
        </motion.div>

        {/* Milestone Timeline */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {[
            { label: "2025 · 30억 달성", color: "#FF8F5C" },
            { label: "SaaS 비중 역전", color: "#FF6B2C" },
            { label: "200억 · 핀테크 완성", color: "#E05A1F" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="rounded-lg px-5 py-3 text-sm font-bold text-white/80 text-center"
                style={{
                  background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
                  borderLeft: `3px solid ${item.color}`,
                  border: `1px solid ${item.color}25`,
                }}
              >
                {item.label}
              </div>
              {i < 2 && (
                <div className="relative w-6 h-[2px] rounded-full hidden sm:block" style={{ background: `${item.color}30` }}>
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
                    animate={{ left: ["-2px", "22px"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              )}
            </div>
          ))}
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
