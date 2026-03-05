"use client";

import { motion } from "framer-motion";
import { Search, Clock, Zap, ArrowRight, LayoutDashboard, UserCircle, Inbox } from "lucide-react";
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
  { name: "Creator_01", followers: "12.5K", engagement: "4.2%", color: "#FF6B2C", match: 94 },
  { name: "Creator_02", followers: "89.1K", engagement: "6.1%", color: "#8B5CF6", match: 91 },
  { name: "Creator_03", followers: "35.2K", engagement: "5.3%", color: "#3B82F6", match: 88 },
  { name: "Creator_04", followers: "22.0K", engagement: "3.9%", color: "#10B981", match: 85 },
  { name: "Creator_05", followers: "67.4K", engagement: "7.4%", color: "#14B8A6", match: 82 },
  { name: "Creator_06", followers: "18.3K", engagement: "4.8%", color: "#EF4444", match: 79 },
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
        className="browser max-w-3xl mx-auto glow-orange"
        initial={{ opacity: 0, y: 60, rotateX: 8, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        whileHover={{ rotateX: -1, rotateY: 1, scale: 1.01, boxShadow: "0 20px 50px rgba(255,107,44,0.18)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: "spring", stiffness: 70, damping: 14 }}
        style={{ perspective: "1000px" }}
      >
        {/* Browser Bar */}
        <div className="browser-bar">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: "#EF4444" }} />
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: "#F59E0B" }} />
            <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: "#22C55E" }} />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-card-border rounded-full px-4 py-1.5 text-xs text-t3 font-mono flex items-center gap-2 max-w-xs w-full">
              <span className="text-green text-[10px]">&#9679;</span>
              scoutmanager.io
            </div>
          </div>
          <AgentIndicator label="AI 분석 중" status="processing" />
        </div>

        {/* Browser Body */}
        <div className="p-6">
          {/* Search Bar with typing animation */}
          <motion.div
            className="flex items-center gap-3 mb-6 bg-white border border-card-border rounded-xl px-4 py-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Search size={18} className="text-orange shrink-0" />
            <span className="badge badge-dark text-[9px] py-0.5 px-1.5 shrink-0">AI</span>
            <motion.span
              className="text-sm text-t1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              미국 뷰티 틱톡커 100명 추출
            </motion.span>
            <span className="ml-auto w-0.5 h-5 bg-orange rounded-full anim-blink" />
          </motion.div>

          {/* Processing Indicator */}
          <div className="flex items-center gap-2 mb-4 text-xs text-[#999]" style={{ opacity: 0.6 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            ScoutManager AI가 최적의 크리에이터를 분석 중...
          </div>

          {/* Influencer Grid with match scores */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {creators.map((c) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                className="card-flat p-4 flex items-center gap-3 relative"
                whileHover={{ y: -3, rotateX: 2, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                style={{ perspective: "800px" }}
              >
                {/* AI Match Score */}
                <div
                  className="absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    background: c.match >= 90 ? "rgba(16,185,129,0.1)" : "rgba(59,130,246,0.1)",
                    color: c.match >= 90 ? "#10B981" : "#3B82F6",
                  }}
                >
                  Match {c.match}%
                </div>
                <div
                  className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: c.color }}
                >
                  {c.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-t1 truncate">{c.name}</div>
                  <div className="text-[11px] text-t3 mt-0.5">
                    팔로워 {c.followers} · 참여율 {c.engagement}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AI Analysis Status */}
          <div className="flex items-center gap-2 text-xs text-[#10B981] font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            AI 자동 분석 완료 &middot; 100명 매칭
          </div>

          {/* Action Row */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 120, damping: 12 }}
          >
            <motion.button
              className="bg-orange text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 10, bounce: 0.4 }}
              whileHover={{ scale: 1.07, boxShadow: "0 10px 25px rgba(255,107,44,0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              AI 자동 DM 발송
            </motion.button>
            <motion.button
              className="bg-orange text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 10, bounce: 0.4 }}
              whileHover={{ scale: 1.07, boxShadow: "0 10px 25px rgba(255,107,44,0.25)" }}
              whileTap={{ scale: 0.95 }}
            >
              단가 자동 협상
            </motion.button>
            <div className="sm:ml-auto">
              <span className="badge badge-green">&#10003; 100명 완료</span>
            </div>
          </motion.div>
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
        transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80, damping: 12, bounce: 0.3 }}
      >
        <div className="card-flat flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 py-6 px-10">
          <div className="flex items-center gap-3">
            <div className="ic ic-sm ic-red">
              <Clock size={22} />
            </div>
            <span className="text-lg text-[#999] line-through decoration-2">기존 1주일</span>
          </div>
          <ArrowRight size={28} className="text-orange" />
          <div className="flex items-center gap-3">
            <div className="ic ic-sm ic-green">
              <Zap size={22} />
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
