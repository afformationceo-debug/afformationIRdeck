"use client";

import { motion } from "framer-motion";
import { Globe, Zap, MapPin, Users, Bot, Languages, CreditCard, ArrowRight, Cpu, Network, Sparkles, TrendingUp, Building2, ShoppingBag } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

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
      <div className="text-center mb-8">
        <SectionHeader
          chapter="09"
          badge="Catalyst 3"
          badgeColor="purple"
          title={<>Beyond Cross-border, 로컬 시장 <span className="gt">직접 타격</span></>}
          subtitle="글로벌 현지의 막대한 마케팅 시장 자체를 스카웃매니저로 집어삼킨다"
        />
      </div>

      {/* ===== AI Hub Orchestration — Dark Container ===== */}
      <motion.div
        className="max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
          border: "1px solid rgba(255,107,44,0.1)",
          boxShadow: "0 12px 50px rgba(0,0,0,0.25)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
          backgroundImage: "linear-gradient(rgba(255,107,44,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,44,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Global AI Agent Hub</span>
          </div>

          {/* 3-Column: US — Hub — SEA */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-4 items-center">

            {/* US Market Card */}
            <motion.div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "rgba(59,130,246,0.04)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "#3B82F6", opacity: 0.5 }} />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(59,130,246,0.15)" }}>
                    <Globe size={16} className="text-[#3B82F6]" />
                  </div>
                  <span className="text-sm font-bold text-[#3B82F6]">US Market</span>
                </div>
                <span className="text-xl font-black text-[#3B82F6]">$28B</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: Building2, text: "LA 오피스 설립", sub: "2026 H1" },
                  { icon: Users, text: "B2B SaaS 직접 판매", sub: "$199/mo" },
                  { icon: ShoppingBag, text: "뷰티·라이프스타일", sub: "Brand Target" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.08)" }}>
                      <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: "rgba(59,130,246,0.1)" }}>
                        <Icon size={12} className="text-[#3B82F6]" />
                      </div>
                      <span className="text-[12px] font-semibold text-white/80 flex-1">{item.text}</span>
                      <span className="text-[10px] font-medium text-white/30">{item.sub}</span>
                    </div>
                  );
                })}
              </div>
              {/* Market penetration bar */}
              <div className="mt-4">
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-white/30">시장 침투 목표</span>
                  <span className="text-[#3B82F6] font-bold">0.1%</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Center: AI Hub */}
            <motion.div
              className="flex flex-col items-center gap-3 py-4 lg:py-0"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 80, damping: 14 }}
            >
              {/* Connection line left */}
              <div className="hidden lg:flex items-center absolute left-1/3 top-1/2 -translate-y-1/2">
                <div className="w-16 h-[2px]" style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.3), rgba(255,107,44,0.3))" }} />
              </div>

              {/* Hub circle */}
              <div className="relative">
                {/* Outer pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(255,107,44,0.15)" }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div
                  className="w-24 h-24 rounded-full flex flex-col items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,107,44,0.15), rgba(255,107,44,0.05))",
                    border: "2px solid rgba(255,107,44,0.3)",
                    boxShadow: "0 0 40px rgba(255,107,44,0.1)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-0.5" style={{ background: "linear-gradient(135deg, #FF6B2C, #E05A1F)" }}>
                    <Bot size={22} className="text-white" />
                  </div>
                  <span className="text-[8px] font-black text-[#FF6B2C]">Scout AI</span>
                </div>
              </div>

              {/* Deploy arrows */}
              <div className="flex items-center gap-2 lg:hidden">
                <span className="text-[9px] font-bold text-white/30">US</span>
                <ArrowRight size={12} className="text-[#FF6B2C] rotate-180" />
                <span className="text-[8px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,107,44,0.15)", color: "#FF6B2C" }}>AI Deploy</span>
                <ArrowRight size={12} className="text-[#FF6B2C]" />
                <span className="text-[9px] font-bold text-white/30">SEA</span>
              </div>

              {/* Capabilities */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                {["12 Languages", "Full-Funnel AI", "Auto Settlement"].map((cap) => (
                  <span key={cap} className="text-[8px] font-bold px-2 py-1 rounded-full" style={{ background: "rgba(255,107,44,0.1)", color: "#FF6B2C" }}>
                    {cap}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SEA Market Card */}
            <motion.div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "rgba(20,184,166,0.04)",
                border: "1px solid rgba(20,184,166,0.15)",
              }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "#14B8A6", opacity: 0.5 }} />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(20,184,166,0.15)" }}>
                    <Network size={16} className="text-[#14B8A6]" />
                  </div>
                  <span className="text-sm font-bold text-[#14B8A6]">SEA Market</span>
                </div>
                <span className="text-xl font-black text-[#14B8A6]">$12B</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { icon: Building2, text: "시나르마스 JV 레버리지", sub: "Indonesia" },
                  { icon: ShoppingBag, text: "인니·태국·베트남 틱톡샵", sub: "3 Countries" },
                  { icon: Users, text: "현지 에이전시 → AI 전환", sub: "B2B SaaS" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3 rounded-lg px-3 py-2" style={{ background: "rgba(20,184,166,0.04)", border: "1px solid rgba(20,184,166,0.08)" }}>
                      <div className="w-6 h-6 rounded flex items-center justify-center shrink-0" style={{ background: "rgba(20,184,166,0.1)" }}>
                        <Icon size={12} className="text-[#14B8A6]" />
                      </div>
                      <span className="text-[12px] font-semibold text-white/80 flex-1">{item.text}</span>
                      <span className="text-[10px] font-medium text-white/30">{item.sub}</span>
                    </div>
                  );
                })}
              </div>
              {/* Market penetration bar */}
              <div className="mt-4">
                <div className="flex justify-between text-[9px] mb-1">
                  <span className="text-white/30">시장 침투 목표</span>
                  <span className="text-[#14B8A6] font-bold">0.2%</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #14B8A6, #2DD4BF)" }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "45%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom: Data flow summary */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-6 pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: "TAM $40B", icon: TrendingUp, color: "#FF6B2C" },
              { label: "2 Regions", icon: Globe, color: "#3B82F6" },
              { label: "AI-First GTM", icon: Sparkles, color: "#8B5CF6" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2 px-3.5 py-2 rounded-xl" style={{ background: `${item.color}10`, border: `1px solid ${item.color}18` }}>
                  <Icon size={13} style={{ color: item.color }} />
                  <span className="text-[11px] font-bold text-white">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
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
        transition={{ delay: 0.4, duration: 0.6 }}
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

      {/* Key Message */}
      <motion.p
        initial={{ opacity: 0, y: 20, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 80, damping: 12 }}
        className="text-center text-xl md:text-2xl font-black mt-6"
      >
        글로벌 스탠다드 마케팅 OS <span className="gt">직접 장악</span>
      </motion.p>

      {/* Desc Box */}
      <AiChatBubble delay={0.7}>
        <p>
          저희의 밸류에이션이 퀀텀 점프하는 지점입니다. 미국 LA 오피스를 거점으로 $28B 뷰티·라이프스타일 시장에 진입하고, 동남아에서는 시나르마스 JV를 레버리지해 $12B 시장을 공략합니다. CreatorIQ·Grin 대비 80% 저렴한 가격, 12개 언어 DM 자동화, 자체 정산 인프라 — 글로벌 스탠다드 마케팅 OS로 자리매김할 것입니다.
        </p>
      </AiChatBubble>
    </SectionWrapper>
  );
}
