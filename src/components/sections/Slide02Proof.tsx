"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, DollarSign, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AgentIndicator from "@/components/ui/AgentIndicator";

function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  trigger,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);

  const display = end % 1 !== 0 ? value.toFixed(1) : Math.round(value).toString();

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function MiniGraph() {
  const points = [
    { x: 0, y: 80 },
    { x: 20, y: 65 },
    { x: 40, y: 55 },
    { x: 55, y: 45 },
    { x: 70, y: 30 },
    { x: 85, y: 22 },
    { x: 100, y: 10 },
  ];

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x * 4} ${p.y}`)
    .join(" ");

  const areaD = `${pathD} L 400 100 L 0 100 Z`;

  return (
    <motion.svg
      viewBox="0 0 400 100"
      className="w-full h-20 md:h-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <defs>
        <linearGradient id="graphGradientProof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20, 40, 60, 80].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="#E8E2DC"
          strokeWidth="0.5"
        />
      ))}
      <motion.path
        d={areaD}
        fill="url(#graphGradientProof)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke="#FF6B2C"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="drop-shadow(0 2px 8px rgba(255,107,44,0.2))"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x * 4}
          cy={p.y}
          r="4"
          fill="#FFFFFF"
          stroke="#FF6B2C"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.15 }}
        />
      ))}
    </motion.svg>
  );
}

const heroStats = [
  {
    icon: DollarSign,
    iconClass: "ic ic-orange",
    end: 30.1,
    prefix: "₩",
    suffix: "억",
    label: "2025 매출",
    sub: "YoY +924%",
  },
  {
    icon: TrendingUp,
    iconClass: "ic ic-green",
    end: 35.2,
    prefix: "",
    suffix: "%",
    label: "EBITDA 마진",
    sub: "업계 2~3배",
  },
];

const defaultStats = [
  {
    icon: ArrowUpRight,
    iconClass: "ic ic-blue",
    end: 924,
    prefix: "+",
    suffix: "%",
    label: "YoY 성장",
    sub: "전기 대비",
  },
  {
    icon: ShieldCheck,
    iconClass: "ic ic-purple",
    end: 7.5,
    prefix: "",
    suffix: "%",
    label: "부채비율",
    sub: "358%→7.5%",
  },
];

const comparisonData = [
  { metric: "EBITDA 마진", afformation: "35.2%", industry: "10~15%", highlight: true },
  { metric: "부채비율", afformation: "7.5%", industry: "50%+", highlight: true },
  { metric: "YoY 성장률", afformation: "+924%", industry: "+20~30%", highlight: false },
  { metric: "AI 자동화율", afformation: "85%+", industry: "10~20%", highlight: false },
];

export default function Slide02Proof() {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="proof" white chapter="02">
      <div className="text-center">
        <SectionHeader
          chapter="02"
          badge="The Proof"
          badgeColor="orange"
          title={<>숫자로 증명된 OS의 <span className="gt">파괴력</span></>}
          subtitle="우리의 비전은 가설이 아닙니다. 이미 압도적인 수익성을 내고 있는 완성된 엔진입니다."
        />

        {/* AI Agent Indicator */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <AgentIndicator label="AI-Powered Revenue Engine" status="active" />
        </motion.div>

        {/* 2+2 Layout: Hero stats on top, default below */}
        <div ref={counterRef} className="max-w-3xl mx-auto mb-6">
          {/* Hero Row - 2 cards */}
          <motion.div
            className="grid grid-cols-2 gap-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.2 },
              },
            }}
          >
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="metric-hero"
                  style={{ perspective: "800px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30, rotateX: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                    },
                  }}
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(255,107,44,0.12)" }}
                >
                  <div className="flex justify-center mb-3">
                    <div className={stat.iconClass}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-black gt mb-1 whitespace-nowrap">
                    <AnimatedCounter
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      trigger={isInView}
                    />
                  </div>
                  <div className="text-sm font-semibold text-t1 mb-0.5">{stat.label}</div>
                  <div className="text-xs text-t2">{stat.sub}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Default Row - 2 cards */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.4 },
              },
            }}
          >
            {defaultStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  style={{ perspective: "800px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30, rotateX: 8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
                    },
                  }}
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(255,107,44,0.12)" }}
                >
                  <div className="flex justify-center mb-2">
                    <div className={stat.iconClass}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-black gt mb-1 whitespace-nowrap">
                    <AnimatedCounter
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      trigger={isInView}
                    />
                  </div>
                  <div className="text-xs font-semibold text-t1 mb-0.5">{stat.label}</div>
                  <div className="text-[11px] text-t2">{stat.sub}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Graph */}
        <motion.div
          className="max-w-3xl mx-auto mb-6 card p-4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-t1">Revenue Growth Trajectory</span>
            <div className="flex items-center gap-1 text-xs font-semibold text-green">
              <ArrowUpRight size={14} />
              <span>YoY +924%</span>
            </div>
          </div>
          <MiniGraph />
        </motion.div>

        {/* Industry Comparison Table */}
        <motion.div
          className="max-w-3xl mx-auto mb-6 card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="p-4">
            <div className="text-xs font-bold text-t1 mb-3 text-left">Afformation vs 업계 평균</div>
            <div className="space-y-2">
              {comparisonData.map((row) => (
                <div
                  key={row.metric}
                  className="flex items-center justify-between py-2 px-3 rounded-lg"
                  style={{
                    background: row.highlight ? "rgba(255,107,44,0.04)" : "transparent",
                  }}
                >
                  <span className="text-sm font-semibold text-t1 w-1/3 text-left">{row.metric}</span>
                  <span className="text-sm font-black text-[#FF6B2C] w-1/3 text-center">{row.afformation}</span>
                  <span className="text-sm text-t3 w-1/3 text-right line-through decoration-1">{row.industry}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Desc Box */}
        <motion.div
          className="desc-box max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p>
            설립 2년차, 매출 YoY 924% 성장으로 30억을 돌파했습니다.
            EBITDA 마진 35.2%는 국내 에이전시 평균(10~15%) 대비 2~3배 수준이며,
            부채비율은 358%에서 7.5%로 개선 — 사실상 무부채입니다.
            이 &lsquo;글로벌 마케팅 OS&rsquo;가 시장에서 만들어낸 실제 재무적 결과물입니다.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
