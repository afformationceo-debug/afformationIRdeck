"use client";

import { motion } from "framer-motion";
import { Search, Clock, Zap, ArrowRight, LayoutDashboard, UserCircle, Inbox, TrendingUp, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AgentIndicator from "@/components/ui/AgentIndicator";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const creators = [
  { name: "Sarah Kim", handle: "@sarahbeauty", followers: "12.5K", engagement: "4.2%", color: "#FF6B2C", match: 94, category: "Beauty" },
  { name: "Mia Chen", handle: "@miacreates", followers: "89.1K", engagement: "6.1%", color: "#8B5CF6", match: 91, category: "Lifestyle" },
  { name: "Jae Park", handle: "@jaestyle", followers: "35.2K", engagement: "5.3%", color: "#3B82F6", match: 88, category: "Fashion" },
  { name: "Luna Lee", handle: "@lunavibes", followers: "22.0K", engagement: "3.9%", color: "#10B981", match: 85, category: "Wellness" },
  { name: "Hana Ito", handle: "@hanastyle", followers: "67.4K", engagement: "7.4%", color: "#14B8A6", match: 82, category: "Beauty" },
  { name: "Alex Yoo", handle: "@alexyoo", followers: "18.3K", engagement: "4.8%", color: "#F59E0B", match: 79, category: "Food" },
];

const screenshots = [
  { icon: LayoutDashboard, label: "AI 대시보드", desc: "캠페인 & 크리에이터 워크스페이스", file: "dashboard", color: "#FF6B2C" },
  { icon: UserCircle, label: "AI 프로필 분석", desc: "인플루언서 데이터 & 콘텐츠 인사이트", file: "profile", color: "#8B5CF6" },
  { icon: Inbox, label: "다국어 통합 인박스", desc: "LINE · Instagram · WhatsApp 자동 응대", file: "inbox", color: "#3B82F6" },
];

const funnelSteps = [
  { label: "발굴", count: 100, color: "#FF6B2C" },
  { label: "응답", count: 67, color: "#8B5CF6" },
  { label: "수락", count: 42, color: "#3B82F6" },
  { label: "라이브", count: 38, color: "#10B981" },
];

function ScreenshotShowcase() {
  return (
    <motion.div
      className="mt-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="text-center mb-5">
        <span className="text-xs font-bold tracking-widest uppercase text-t3">Real Product</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {screenshots.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              className="group relative rounded-xl overflow-hidden bg-white"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 120, damping: 18 }}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
            >
              <div className="relative overflow-hidden" style={{ minHeight: 120 }}>
                <img
                  src={`/screenshots/${s.file}.png`}
                  alt={s.label}
                  width={400}
                  height={240}
                  className="w-full h-40 sm:h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${s.color}12`, color: s.color }}
                  >
                    <Icon size={13} />
                  </div>
                  <span className="text-sm font-bold text-t1">{s.label}</span>
                </div>
                <span className="text-xs text-t3 leading-relaxed">{s.desc}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Slide05Demo() {
  return (
    <SectionWrapper id="demo" chapter="05">
      {/* Title */}
      <div className="text-center mb-6">
        <SectionHeader
          chapter="05"
          badge="LIVE DEMO"
          badgeColor="orange"
          title={<span className="gt">Magic Moment</span>}
          subtitle="백문이 불여일견. 투자자의 눈앞에서 생산성 혁신을 직접 증명합니다."
        />
      </div>

      {/* Browser Mockup */}
      <motion.div
        className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "white",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
          border: "1px solid rgba(232,226,220,0.6)",
        }}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: "spring", stiffness: 70, damping: 14 }}
      >
        {/* Browser Chrome */}
        <div
          className="flex items-center justify-between px-4 sm:px-5 py-3"
          style={{ background: "#FAFAF8", borderBottom: "1px solid rgba(232,226,220,0.6)" }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
          </div>
          <div className="flex-1 flex justify-center px-4">
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs max-w-xs w-full justify-center"
              style={{ background: "white", border: "1px solid rgba(232,226,220,0.8)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
              <span className="text-t3 font-mono">scoutmanager.io</span>
            </div>
          </div>
          <AgentIndicator label="AI 분석 중" status="processing" />
        </div>

        {/* App Body */}
        <div className="p-5 sm:p-7">
          {/* Top Nav Tabs */}
          <div className="flex items-center gap-1 mb-5 pb-3" style={{ borderBottom: "1px solid rgba(232,226,220,0.5)" }}>
            {["대시보드", "크리에이터 탐색", "캠페인", "인박스", "정산"].map((tab, i) => (
              <span
                key={tab}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all"
                style={{
                  background: i === 1 ? "rgba(255,107,44,0.08)" : "transparent",
                  color: i === 1 ? "#FF6B2C" : "#999",
                  fontWeight: i === 1 ? 800 : 600,
                }}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Search Bar */}
          <motion.div
            className="flex items-center gap-3 mb-5 rounded-xl px-4 py-3.5"
            style={{ background: "#FAFAF8", border: "1.5px solid rgba(232,226,220,0.6)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Search size={18} className="text-[#FF6B2C] shrink-0" />
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded shrink-0"
              style={{ background: "#1A1A1A", color: "white" }}
            >
              AI
            </span>
            <motion.span
              className="text-sm text-t1 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              미국 뷰티 틱톡커 100명 추출
            </motion.span>
            <span className="ml-auto w-0.5 h-5 bg-[#FF6B2C] rounded-full anim-blink" />
          </motion.div>

          {/* Processing Status */}
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B2C] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B2C]" />
            </span>
            <span className="text-xs text-t3">ScoutManager AI가 최적의 크리에이터를 분석 중...</span>
          </div>

          {/* Creator Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {creators.map((c) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                className="relative flex items-center gap-3 rounded-xl p-3.5"
                style={{
                  background: "#FAFAF8",
                  border: "1px solid rgba(232,226,220,0.5)",
                }}
                whileHover={{ y: -2, background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
              >
                {/* Match badge */}
                <div
                  className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: c.match >= 90 ? "rgba(16,185,129,0.08)" : c.match >= 85 ? "rgba(59,130,246,0.08)" : "rgba(249,115,22,0.08)",
                    color: c.match >= 90 ? "#10B981" : c.match >= 85 ? "#3B82F6" : "#F97316",
                  }}
                >
                  Match {c.match}%
                </div>

                {/* Avatar */}
                <div className="relative shrink-0">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: c.color }}
                  >
                    {c.name.charAt(0)}
                  </div>
                  {/* Online indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#28C840] border-2 border-white" />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-bold text-t1 truncate">{c.name}</span>
                    {c.match >= 90 && <Star size={10} className="text-[#F59E0B] fill-[#F59E0B] shrink-0" />}
                  </div>
                  <span className="text-[10px] text-t3 block">{c.handle}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-semibold text-t2">{c.followers}</span>
                    <span className="text-[10px] text-t4">·</span>
                    <span className="text-[10px] font-semibold" style={{ color: parseFloat(c.engagement) > 5 ? "#10B981" : "#3B82F6" }}>
                      <TrendingUp size={8} className="inline mr-0.5" />{c.engagement}
                    </span>
                    <span
                      className="text-[8px] font-bold px-1.5 py-0.5 rounded ml-auto"
                      style={{ background: `${c.color}10`, color: c.color }}
                    >
                      {c.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Status + Actions */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4"
            style={{ borderTop: "1px solid rgba(232,226,220,0.5)" }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              AI 자동 분석 완료 · 100명 매칭
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
              <motion.button
                className="px-4 py-2 rounded-xl text-sm font-bold text-white"
                style={{ background: "#FF6B2C" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255,107,44,0.25)" }}
                whileTap={{ scale: 0.97 }}
              >
                AI 자동 DM 발송
              </motion.button>
              <motion.button
                className="px-4 py-2 rounded-xl text-sm font-bold"
                style={{ background: "rgba(255,107,44,0.08)", color: "#FF6B2C", border: "1px solid rgba(255,107,44,0.15)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                단가 자동 협상
              </motion.button>
              <span
                className="text-[11px] font-bold px-3 py-1.5 rounded-full hidden sm:inline-block"
                style={{ background: "rgba(16,185,129,0.06)", color: "#10B981", border: "1px solid rgba(16,185,129,0.12)" }}
              >
                &#10003; 100명 완료
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conversion Funnel */}
      <motion.div
        className="mt-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-t3">Conversion Funnel</span>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {funnelSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-4">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12 }}
              >
                <div className="text-2xl md:text-3xl font-black" style={{ color: step.color }}>
                  {step.count}
                </div>
                <div className="text-[10px] font-semibold text-t2 mt-0.5">{step.label}</div>
              </motion.div>
              {i < funnelSteps.length - 1 && (
                <ArrowRight size={16} className="text-t4 shrink-0" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <span className="text-sm font-bold text-[#10B981]">38% 전환율 — 업계 평균의 8배</span>
        </div>
      </motion.div>

      {/* Real Product Screenshots */}
      <ScreenshotShowcase />

      {/* Time Comparison */}
      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 py-6 px-10 rounded-2xl"
          style={{ background: "white", border: "1px solid rgba(232,226,220,0.5)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(239,68,68,0.06)" }}>
              <Clock size={20} className="text-[#EF4444]" />
            </div>
            <span className="text-lg text-t3 line-through decoration-2">기존 1주일</span>
          </div>
          <ArrowRight size={28} className="text-[#FF6B2C]" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.06)" }}>
              <Zap size={20} className="text-[#10B981]" />
            </div>
            <span className="text-3xl md:text-4xl font-black gt" style={{ letterSpacing: "-0.02em" }}>단 3분</span>
          </div>
        </div>
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
          저희가 현장에서 이 무기를 어떻게 쓰는지 직접 보여드리겠습니다. 미국 뷰티 틱톡커 100명 추출, AI 자동 DM 및 단가 협상까지. 과거 마케팅 에이전시 직원이 일주일 밤을 새우던 섭외 퍼널을 단 3분 만에 끝냈습니다. 이 무기가 바로 오늘 저희가 거대한 글로벌 확장을 선언하는 이유입니다.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
