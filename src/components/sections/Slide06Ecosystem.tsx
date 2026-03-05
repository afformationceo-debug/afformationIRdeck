"use client";

import { motion } from "framer-motion";
import { Heart, Activity, ShoppingBag, Globe, Bot, Layers, Cpu, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

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

const synergyFlow = [
  { from: "ChatDoc 캐시카우", to: "K-의료 확장", color: "#10B981" },
  { from: "ScoutManager AI", to: "K-커머스 자동화", color: "#FF6B2C" },
  { from: "글로벌 파트너", to: "SaaS 수출", color: "#8B5CF6" },
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

      {/* Synergy Flow */}
      <motion.div
        className="mt-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="text-center mb-3">
          <span className="text-xs font-bold tracking-widest uppercase text-t3">Synergy Flow</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {synergyFlow.map((item, i) => (
            <div key={item.from} className="flex items-center gap-2 sm:gap-3">
              <motion.div
                className="card-flat px-3 py-2 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.12 }}
              >
                <div className="text-[11px] font-bold" style={{ color: item.color }}>{item.from}</div>
              </motion.div>
              <ArrowRight size={14} style={{ color: item.color }} className="shrink-0" />
              <motion.div
                className="card-flat px-3 py-2 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.12 }}
              >
                <div className="text-[11px] font-bold text-t1">{item.to}</div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Summary Stats Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-6 mb-3 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.6 },
          },
        }}
      >
        {[
          { icon: <Layers size={16} />, label: "4 Services", color: "ic-orange" },
          { icon: <Cpu size={16} />, label: "12+ AI Agents", color: "ic-purple" },
          { icon: <Globe size={16} />, label: "Global Scale", color: "ic-blue" },
        ].map((item) => (
          <motion.div
            key={item.label}
            className="card-flat flex items-center gap-2 px-4 py-2.5"
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 150, damping: 14 },
              },
            }}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            <div className={`ic ic-xs ${item.color}`}>{item.icon}</div>
            <span className="text-xs font-semibold text-[#1A1A1A]">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Desc Box */}
      <motion.div
        className="desc-box max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          저희의 사업 구조입니다. 먼저 월 2억 원의 수익을 내는 &lsquo;챗닥&rsquo; 플랫폼이 든든한 캐시카우로 하방을 지지합니다. 이 거대한 현금 엔진 위에서, 저희는 스카웃매니저를 무기로 3가지 폭발적인 스케일업(Catalyst)을 전개합니다. K-의료 MSO 12건, 틱톡샵 GMV $5M, 글로벌 SaaS ARR $1M — 각 사업이 시너지를 일으키며 동시 성장합니다.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
