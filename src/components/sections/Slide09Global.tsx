"use client";

import { motion } from "framer-motion";
import { Globe, Zap, MapPin, Users, Bot, Languages, CreditCard, ArrowRight, Cpu, Network } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const gtmStrategies = [
  {
    region: "US Market",
    size: "$28B",
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.06)",
    borderColor: "rgba(59,130,246,0.15)",
    icon: Globe,
    items: [
      { icon: MapPin, text: "LA 오피스 설립 (2026 H1)" },
      { icon: Users, text: "뷰티·라이프스타일 브랜드 타겟" },
      { icon: Zap, text: "CreatorIQ 대비 80% 저렴한 가격" },
    ],
  },
  {
    region: "SEA Market",
    size: "$12B",
    color: "#14B8A6",
    bgColor: "rgba(20,184,166,0.06)",
    borderColor: "rgba(20,184,166,0.15)",
    icon: Network,
    items: [
      { icon: MapPin, text: "시나르마스 JV 레버리지" },
      { icon: Users, text: "인니·태국·베트남 틱톡샵" },
      { icon: Zap, text: "현지 에이전시 대비 AI 자동화 우위" },
    ],
  },
];

const competitorTable = [
  { metric: "가격", afformation: "$199/월", creatorIQ: "$2,000+/월", grin: "$1,500+/월", icon: CreditCard },
  { metric: "AI 자동화", afformation: "풀퍼널 AI", creatorIQ: "데이터만", grin: "제한적", icon: Bot },
  { metric: "다국어 DM", afformation: "12개 언어", creatorIQ: "영어만", grin: "영어만", icon: Languages },
  { metric: "정산 인프라", afformation: "자체 구축", creatorIQ: "없음", grin: "없음", icon: CreditCard },
];

export default function Slide09Global() {
  return (
    <SectionWrapper id="global" chapter="09">
      {/* Title */}
      <div className="text-center mb-6">
        <SectionHeader
          chapter="09"
          badge="Catalyst 3"
          badgeColor="purple"
          title={<>Beyond Cross-border, 로컬 시장 <span className="gt">직접 타격</span></>}
          subtitle="글로벌 현지의 막대한 마케팅 시장 자체를 스카웃매니저로 집어삼킨다"
        />
      </div>

      {/* AI Agent Global Orchestration Visual */}
      <motion.div
        className="hidden sm:block max-w-4xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <svg viewBox="0 0 960 380" className="w-full h-auto">
          <defs>
            <linearGradient id="glowUS" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="glowSEA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="glowCenter" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0.03" />
            </linearGradient>
            <filter id="softShadow" x="-8%" y="-8%" width="116%" height="116%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.06" />
            </filter>
          </defs>

          {/* ── US Market Node ── */}
          <g filter="url(#softShadow)">
            <rect x={40} y={40} width={240} height={200} rx={20} fill="url(#glowUS)" stroke="#3B82F6" strokeWidth="1.2" />
          </g>
          <rect x={40} y={40} width={240} height={5} rx={2.5} fill="#3B82F6" opacity={0.5} />
          <text x={160} y={78} textAnchor="middle" fontSize="14" fontWeight="800" fill="#3B82F6">US Market</text>
          <text x={160} y={104} textAnchor="middle" fontSize="26" fontWeight="900" fill="#3B82F6">$28B</text>
          {/* US sub-nodes */}
          {[
            { label: "LA Office", sub: "2026 H1" },
            { label: "B2B SaaS", sub: "$199/mo" },
            { label: "Beauty & Lifestyle", sub: "Brand Target" },
          ].map((item, j) => (
            <g key={item.label}>
              <rect x={62} y={120 + j * 36} width={196} height={28} rx={8} fill="white" stroke="#3B82F6" strokeWidth="0.7" opacity={0.8} />
              <circle cx={80} cy={134 + j * 36} r={4.5} fill="#3B82F6" opacity={0.4} />
              <text x={94} y={138 + j * 36} fontSize="11" fontWeight="600" fill="#3B82F6">{item.label}</text>
              <text x={246} y={138 + j * 36} textAnchor="end" fontSize="9" fontWeight="500" fill="#3B82F6" opacity={0.5}>{item.sub}</text>
            </g>
          ))}

          {/* ── Center: ScoutManager AI Hub ── */}
          {/* Outer glow ring */}
          <circle cx={480} cy={150} r={72} fill="none" stroke="#FF6B2C" strokeWidth="0.8" opacity={0.1}>
            <animate attributeName="r" values="72;88;72" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" />
          </circle>
          {/* Main hub circle */}
          <circle cx={480} cy={150} r={62} fill="url(#glowCenter)" stroke="#FF6B2C" strokeWidth="2" />
          <circle cx={480} cy={150} r={44} fill="white" stroke="#FF6B2C" strokeWidth="1.5" />
          {/* Inner icon placeholder */}
          <circle cx={480} cy={132} r={10} fill="#FF6B2C" opacity={0.1} />
          <text x={480} y={136} textAnchor="middle" fontSize="12" fontWeight="900" fill="#FF6B2C">AI</text>
          <text x={480} y={154} textAnchor="middle" fontSize="11" fontWeight="800" fill="#FF6B2C">Scout</text>
          <text x={480} y={167} textAnchor="middle" fontSize="11" fontWeight="800" fill="#FF6B2C">Manager</text>
          {/* Status badge */}
          <rect x={450} y={190} width={60} height={18} rx={9} fill="#FF6B2C" />
          <text x={480} y={203} textAnchor="middle" fontSize="8" fontWeight="700" fill="white">AI Hub</text>

          {/* ── SEA Market Node ── */}
          <g filter="url(#softShadow)">
            <rect x={680} y={40} width={240} height={200} rx={20} fill="url(#glowSEA)" stroke="#14B8A6" strokeWidth="1.2" />
          </g>
          <rect x={680} y={40} width={240} height={5} rx={2.5} fill="#14B8A6" opacity={0.5} />
          <text x={800} y={78} textAnchor="middle" fontSize="14" fontWeight="800" fill="#14B8A6">SEA Market</text>
          <text x={800} y={104} textAnchor="middle" fontSize="26" fontWeight="900" fill="#14B8A6">$12B</text>
          {/* SEA sub-nodes */}
          {[
            { label: "Sinarmas JV", sub: "Indonesia" },
            { label: "TikTok Shop", sub: "3 Countries" },
            { label: "Local B2B", sub: "Agency" },
          ].map((item, j) => (
            <g key={item.label}>
              <rect x={702} y={120 + j * 36} width={196} height={28} rx={8} fill="white" stroke="#14B8A6" strokeWidth="0.7" opacity={0.8} />
              <circle cx={720} cy={134 + j * 36} r={4.5} fill="#14B8A6" opacity={0.4} />
              <text x={734} y={138 + j * 36} fontSize="11" fontWeight="600" fill="#14B8A6">{item.label}</text>
              <text x={886} y={138 + j * 36} textAnchor="end" fontSize="9" fontWeight="500" fill="#14B8A6" opacity={0.5}>{item.sub}</text>
            </g>
          ))}

          {/* ── Connection: US → Hub ── */}
          <line x1={280} y1={150} x2={410} y2={150} stroke="#FF6B2C" strokeWidth="2" strokeDasharray="8 5" opacity={0.35}>
            <animate attributeName="stroke-dashoffset" values="0;-26" dur="2s" repeatCount="indefinite" />
          </line>
          <polygon points="413,145 413,155 422,150" fill="#FF6B2C" opacity={0.4} />
          {/* Label */}
          <rect x={318} y={126} width={66} height={20} rx={6} fill="#FFF7ED" stroke="#FF6B2C" strokeWidth="0.6" />
          <text x={351} y={139} textAnchor="middle" fontSize="8" fontWeight="700" fill="#FF6B2C">AI Deploy</text>

          {/* ── Connection: Hub → SEA ── */}
          <line x1={548} y1={150} x2={680} y2={150} stroke="#FF6B2C" strokeWidth="2" strokeDasharray="8 5" opacity={0.35}>
            <animate attributeName="stroke-dashoffset" values="0;-26" dur="2s" repeatCount="indefinite" />
          </line>
          <polygon points="545,145 545,155 537,150" fill="#FF6B2C" opacity={0.4} />
          {/* Label */}
          <rect x={582} y={126} width={66} height={20} rx={6} fill="#FFF7ED" stroke="#FF6B2C" strokeWidth="0.6" />
          <text x={615} y={139} textAnchor="middle" fontSize="8" fontWeight="700" fill="#FF6B2C">AI Deploy</text>

          {/* ── Bottom: Agent capabilities bar ── */}
          <line x1={480} y1={212} x2={480} y2={280} stroke="#FF6B2C" strokeWidth="1.2" strokeDasharray="4 4" opacity={0.2} />
          <g filter="url(#softShadow)">
            <rect x={280} y={286} width={400} height={56} rx={14} fill="white" stroke="#FF6B2C" strokeWidth="1" opacity={0.9} />
          </g>
          {/* 3 capability badges inside */}
          {[
            { x: 340, label: "12 Languages", color: "#FF6B2C" },
            { x: 480, label: "Full-Funnel AI", color: "#8B5CF6" },
            { x: 620, label: "Auto Settlement", color: "#3B82F6" },
          ].map((cap) => (
            <g key={cap.label}>
              <rect x={cap.x - 48} y={296} width={96} height={22} rx={11} fill={cap.color} opacity={0.08} />
              <text x={cap.x} y={311} textAnchor="middle" fontSize="9" fontWeight="700" fill={cap.color}>{cap.label}</text>
            </g>
          ))}
          <text x={480} y={332} textAnchor="middle" fontSize="10" fontWeight="600" fill="#999">Global Marketing OS</text>
        </svg>
      </motion.div>

      {/* Mobile: Market size badges */}
      <div className="sm:hidden flex justify-center gap-4 mb-6">
        <motion.span
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-black bg-[#EFF6FF] text-[#3B82F6] border border-[#3B82F6]/20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >US $28B</motion.span>
        <motion.span
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-black bg-[#F0FDFA] text-[#14B8A6] border border-[#14B8A6]/20"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >SEA $12B</motion.span>
      </div>

      {/* GTM Strategy Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
        }}
      >
        {gtmStrategies.map((strategy) => {
          const RegionIcon = strategy.icon;
          return (
            <motion.div
              key={strategy.region}
              className="relative rounded-2xl p-5 overflow-hidden"
              style={{
                background: strategy.bgColor,
                border: `1px solid ${strategy.borderColor}`,
              }}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
              }}
              whileHover={{ y: -5, boxShadow: `0 12px 30px ${strategy.color}15` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: strategy.color, opacity: 0.6 }} />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${strategy.color}15` }}>
                    <RegionIcon size={18} style={{ color: strategy.color }} />
                  </div>
                  <span className="text-base font-black" style={{ color: strategy.color }}>{strategy.region}</span>
                </div>
                <span
                  className="text-sm font-black px-3 py-1 rounded-full"
                  style={{ background: `${strategy.color}12`, color: strategy.color }}
                >
                  {strategy.size}
                </span>
              </div>
              <div className="space-y-2.5">
                {strategy.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2.5 text-sm text-t2">
                      <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: `${strategy.color}10` }}>
                        <ItemIcon size={12} style={{ color: strategy.color }} />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Competitor Comparison Table */}
      <motion.div
        className="max-w-3xl mx-auto mb-6 rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(232,226,220,0.5)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}>
              <Cpu size={14} style={{ color: "#FF6B2C" }} />
            </div>
            <span className="text-xs font-bold text-t1 uppercase tracking-wider">Afformation vs Global Competitors</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="py-2.5 pr-3 text-t4 font-semibold text-[11px] uppercase tracking-wider">지표</th>
                  <th className="py-2.5 px-3 text-[11px] uppercase tracking-wider">
                    <span className="font-black text-[#FF6B2C]">Afformation</span>
                  </th>
                  <th className="py-2.5 px-3 text-t4 font-semibold text-[11px] uppercase tracking-wider">CreatorIQ</th>
                  <th className="py-2.5 px-3 text-t4 font-semibold text-[11px] uppercase tracking-wider">Grin</th>
                </tr>
              </thead>
              <tbody>
                {competitorTable.map((row) => {
                  const RowIcon = row.icon;
                  return (
                    <tr key={row.metric} className="border-t border-[#F3F0EB]">
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-2">
                          <RowIcon size={12} className="text-t4" />
                          <span className="font-semibold text-t1">{row.metric}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="font-black text-[#FF6B2C] px-2 py-0.5 rounded" style={{ background: "rgba(255,107,44,0.06)" }}>
                          {row.afformation}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-t3 line-through decoration-1">{row.creatorIQ}</td>
                      <td className="py-3 px-3 text-t3 line-through decoration-1">{row.grin}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Three capability cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
        }}
      >
        {[
          { icon: Globe, label: "미국 현지 B2B", sub: "뷰티 · 라이프스타일", color: "#3B82F6" },
          { icon: Cpu, label: "Afformation HQ", sub: "Global Marketing OS", color: "#FF6B2C", isCenter: true },
          { icon: Globe, label: "동남아 현지 B2B", sub: "인니 · 태국 · 베트남", color: "#14B8A6" },
        ].map((item) => {
          const CardIcon = item.icon;
          return (
            <motion.div
              key={item.label}
              className="rounded-2xl text-center py-6 px-4"
              style={{
                background: item.isCenter ? "linear-gradient(135deg, rgba(255,107,44,0.06), rgba(255,143,92,0.02))" : "rgba(255,255,255,0.8)",
                border: item.isCenter ? "1.5px solid rgba(255,107,44,0.2)" : "1px solid rgba(232,226,220,0.5)",
                boxShadow: item.isCenter ? "0 4px 20px rgba(255,107,44,0.08)" : "0 2px 10px rgba(0,0,0,0.03)",
              }}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}12` }}>
                <CardIcon size={20} style={{ color: item.color }} />
              </div>
              <div className="text-base font-black" style={{ color: item.isCenter ? item.color : "#1A1A1A" }}>{item.label}</div>
              <div className="text-xs text-t3 mt-1">{item.sub}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Key Message */}
      <motion.p
        initial={{ opacity: 0, y: 20, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring", stiffness: 80, damping: 12 }}
        className="text-center text-xl md:text-2xl font-black mt-6"
      >
        글로벌 스탠다드 마케팅 OS <span className="gt">직접 장악</span>
      </motion.p>

      {/* Desc Box */}
      <motion.div
        className="desc-box max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p>
          저희의 밸류에이션이 퀀텀 점프하는 지점입니다. 미국 LA 오피스를 거점으로 $28B 뷰티·라이프스타일 시장에 진입하고, 동남아에서는 시나르마스 JV를 레버리지해 $12B 시장을 공략합니다. CreatorIQ·Grin 대비 80% 저렴한 가격, 12개 언어 DM 자동화, 자체 정산 인프라 — 글로벌 스탠다드 마케팅 OS로 자리매김할 것입니다.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
