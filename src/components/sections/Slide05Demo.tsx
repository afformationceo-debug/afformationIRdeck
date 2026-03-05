"use client";

import { motion } from "framer-motion";
import { Clock, Zap, ArrowRight, LayoutDashboard, UserCircle, Inbox, MessageSquare, Bot } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const funnelSteps = [
  { label: "발굴", count: 100, color: "#FF6B2C" },
  { label: "응답", count: 67, color: "#8B5CF6" },
  { label: "수락", count: 42, color: "#3B82F6" },
  { label: "라이브", count: 38, color: "#10B981" },
];

const features = [
  {
    icon: LayoutDashboard,
    label: "AI 워크스페이스",
    desc: "캠페인 관리 · 인플루언서 발굴 · 퍼널 분석",
    file: "dashboard",
    color: "#FF6B2C",
  },
  {
    icon: MessageSquare,
    label: "Scout AI 분석",
    desc: "AI가 직접 대화하며 최적 인플루언서를 선정",
    file: "dashboard",
    color: "#10B981",
    objectPosition: "right top",
  },
  {
    icon: UserCircle,
    label: "AI 프로필 분석",
    desc: "팔로워 · 참여율 · 콘텐츠 · AI 점수",
    file: "profile",
    color: "#8B5CF6",
  },
  {
    icon: Inbox,
    label: "다국어 통합 인박스",
    desc: "LINE · Instagram · WhatsApp 자동 응대",
    file: "inbox",
    color: "#3B82F6",
  },
];

export default function Slide05Demo() {
  return (
    <SectionWrapper id="demo" chapter="05">
      {/* Title */}
      <div className="text-center mb-8">
        <SectionHeader
          chapter="05"
          badge="LIVE PRODUCT"
          badgeColor="orange"
          title={<span className="gt">Magic Moment</span>}
          subtitle="백문이 불여일견. 실제 운영 중인 ScoutManager를 직접 보여드립니다."
        />
      </div>

      {/* Hero Screenshot — Dashboard */}
      <motion.div
        className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 12px 60px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.06)",
          border: "1px solid rgba(232,226,220,0.5)",
        }}
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -6, boxShadow: "0 24px 80px rgba(0,0,0,0.12)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: "spring", stiffness: 65, damping: 14 }}
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
              <span className="text-t3 font-mono text-[11px]">scoutmanager.io</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B2C] opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B2C]" />
            </span>
            <span className="text-[10px] font-bold text-[#FF6B2C] hidden sm:inline">AI 실행 중</span>
          </div>
        </div>

        {/* Screenshot Image */}
        <div className="relative overflow-hidden bg-[#FAFAF8]">
          <img
            src="/screenshots/dashboard.png"
            alt="ScoutManager AI Dashboard"
            width={1200}
            height={700}
            className="w-full h-auto object-cover object-top"
            loading="eager"
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16"
            style={{ background: "linear-gradient(transparent, rgba(250,250,248,0.9))" }}
          />
        </div>
      </motion.div>

      {/* Feature Label Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mt-5 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {[
          { icon: Bot, label: "AI 에이전트 대화", color: "#FF6B2C" },
          { icon: LayoutDashboard, label: "워크스페이스 자동화", color: "#8B5CF6" },
          { icon: Inbox, label: "다국어 통합 인박스", color: "#3B82F6" },
          { icon: UserCircle, label: "실시간 프로필 분석", color: "#10B981" },
        ].map((f) => {
          const Icon = f.icon;
          return (
            <span
              key={f.label}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full"
              style={{ background: `${f.color}0A`, color: f.color, border: `1px solid ${f.color}18` }}
            >
              <Icon size={12} />
              {f.label}
            </span>
          );
        })}
      </motion.div>

      {/* 3-Column Real Screenshots */}
      <motion.div
        className="mt-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="text-center mb-5">
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-t4">Core Features</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {[
            {
              icon: MessageSquare,
              label: "Scout AI 채팅 분석",
              desc: "AI가 캠페인 조건을 분석해 최적 인플루언서를 자동 선정",
              file: "dashboard",
              color: "#FF6B2C",
              objectPosition: "left top",
            },
            {
              icon: UserCircle,
              label: "AI 프로필 360° 분석",
              desc: "팔로워 · 참여율 · 콘텐츠 품질 · AI 등급 자동 산출",
              file: "profile",
              color: "#8B5CF6",
              objectPosition: "center top",
            },
            {
              icon: Inbox,
              label: "다국어 통합 인박스",
              desc: "LINE · Instagram · WhatsApp 실시간 자동 번역 응대",
              file: "inbox",
              color: "#3B82F6",
              objectPosition: "left top",
            },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                className="group relative rounded-2xl overflow-hidden bg-white"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(232,226,220,0.5)",
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 110, damping: 18 }}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={`/screenshots/${s.file}.png`}
                    alt={s.label}
                    width={400}
                    height={260}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectPosition: s.objectPosition }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  {/* Active badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: s.color }} />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: s.color }} />
                    </span>
                    <span className="text-[9px] font-bold" style={{ color: s.color }}>Live</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${s.color}10`, color: s.color }}
                    >
                      <Icon size={14} />
                    </div>
                    <span className="text-[13px] font-bold text-t1">{s.label}</span>
                  </div>
                  <p className="text-[11px] text-t3 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Conversion Funnel */}
      <motion.div
        className="mt-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="text-center mb-4">
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-t4">Conversion Funnel</span>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {funnelSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-4">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12 }}
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

      {/* Time Comparison */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 80, damping: 12 }}
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

      {/* AI Chat Bubble */}
      <AiChatBubble delay={0.5}>
        <p>
          저희가 현장에서 이 무기를 어떻게 쓰는지 직접 보여드리겠습니다. 미국 뷰티 틱톡커 100명 추출, AI 자동 DM 및 단가 협상까지. 과거 마케팅 에이전시 직원이 일주일 밤을 새우던 섭외 퍼널을 단 3분 만에 끝냈습니다. 이 무기가 바로 오늘 저희가 거대한 글로벌 확장을 선언하는 이유입니다.
        </p>
      </AiChatBubble>
    </SectionWrapper>
  );
}
