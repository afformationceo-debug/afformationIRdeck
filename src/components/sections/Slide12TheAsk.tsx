"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Landmark, Cpu, Globe, TrendingUp, ArrowRight, Zap, Shield } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const cards = [
  {
    num: "01",
    icon: Rocket,
    accentColor: "#FF6B2C",
    accentBg: "rgba(255,107,44,0.12)",
    title: "Scale-up Fund",
    sub: "신주 발행",
    bullets: [
      "스카웃매니저 AI 엔진 고도화",
      "북미/동남아 틱톡샵 진출 영업 실탄",
    ],
    tags: ["AI 고도화", "해외 진출"],
  },
  {
    num: "02",
    icon: Shield,
    accentColor: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.12)",
    title: "Founder\u2019s Immersion",
    sub: "구주 매각",
    bullets: [
      "창업자 재무 리스크 해소",
      "유니콘 달성에 100% 완전 몰입",
    ],
    tags: ["100% 몰입", "리스크 해소"],
  },
  {
    num: "03",
    icon: Landmark,
    accentColor: "#3B82F6",
    accentBg: "rgba(59,130,246,0.12)",
    title: "Financial Infra",
    sub: "VC/SI 파트너십",
    bullets: [
      "크로스보더 정산 및 핀테크 인프라 구축",
      "VC 금융 네트워크 / SI 파트너 전폭 지원",
    ],
    tags: ["핀테크", "정산 인프라"],
  },
];

const useOfFunds = [
  { label: "AI R&D", pct: 40, color: "#FF6B2C" },
  { label: "Go-to-Market", pct: 35, color: "#8B5CF6" },
  { label: "Fintech Infra", pct: 25, color: "#3B82F6" },
];

const milestones = [
  { period: "6개월", goal: "LA 오피스 설립, 미국 B2B 50개 계약", icon: Globe, color: "#FF6B2C" },
  { period: "12개월", goal: "SaaS ARR $1M 달성, 동남아 JV 런칭", icon: TrendingUp, color: "#8B5CF6" },
  { period: "18개월", goal: "핀테크 정산 인프라 상용화, Series B 준비", icon: Rocket, color: "#3B82F6" },
];

export default function Slide12TheAsk() {
  return (
    <SectionWrapper id="ask" variant="dark" background="dots" chapter="12">
      <div className="text-center">
        <SectionHeader
          chapter="12"
          badge="The Ask"
          badgeColor="orange"
          title={<>Journey to <span className="gt">Unicorn</span></>}
          subtitle="글로벌 유니콘 도약을 위한 전략적 동맹(Alliance)"
          dark
        />

        {/* Three Professional Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
          }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.num}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.93 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Card body */}
                <div
                  className="relative rounded-2xl p-6 text-left h-full flex flex-col overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid rgba(255,255,255,0.08)`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: card.accentColor }} />

                  {/* Number watermark */}
                  <span className="absolute -top-2 -right-1 text-8xl font-black leading-none select-none" style={{ color: card.accentColor, opacity: 0.05 }}>
                    {card.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: card.accentBg }}
                  >
                    <Icon size={22} style={{ color: card.accentColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-white mb-1">{card.title}</h3>
                  <p className="text-xs font-semibold mb-4" style={{ color: card.accentColor }}>{card.sub}</p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mt-auto mb-4">
                    {card.bullets.map((b) => (
                      <li key={b} className="text-sm text-white/70 flex items-start gap-2.5">
                        <ArrowRight size={12} className="mt-1 shrink-0" style={{ color: card.accentColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex gap-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: card.accentBg, color: card.accentColor }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Use of Funds - Professional bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Use of Funds</div>
            <div className="flex gap-1.5 h-6 rounded-full overflow-hidden mb-5" style={{ background: "rgba(255,255,255,0.04)" }}>
              {useOfFunds.map((item) => (
                <motion.div
                  key={item.label}
                  className="h-full rounded-full relative"
                  style={{ background: item.color }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                >
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/90"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                  >
                    {item.pct}%
                  </motion.span>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              {useOfFunds.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded" style={{ background: item.color }} />
                  <span className="text-sm text-white/60 font-medium">{item.label}</span>
                  <span className="text-sm font-black" style={{ color: item.color }}>{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Investment Milestones - Timeline style */}
        <motion.div
          className="max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">Post-Investment Milestones</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.period}
                  className="relative rounded-2xl p-5 text-left overflow-hidden group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.12 }}
                  whileHover={{ y: -4, borderColor: `${m.color}33` }}
                >
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${m.color}18` }}
                    >
                      <Icon size={16} style={{ color: m.color }} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: m.color }}>Step {i + 1}</span>
                      <div className="text-base font-black text-white">{m.period}</div>
                    </div>
                  </div>
                  <p className="text-[13px] text-white/60 leading-relaxed">{m.goal}</p>
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: m.color }} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Valuation note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="max-w-xl mx-auto mb-10"
        >
          <div
            className="rounded-xl px-8 py-5 text-center"
            style={{
              background: "rgba(255,107,44,0.04)",
              border: "1px solid rgba(255,107,44,0.1)",
            }}
          >
            <p className="italic text-base md:text-lg text-white/60 font-medium tracking-wide">
              &ldquo;밸류에이션은 전략적 시너지를 고려하여 열어두겠습니다&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Desc Box */}
        <motion.div
          className="desc-box max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <p>
            이 라운드는 &lsquo;글로벌 유니콘&rsquo; 도약을 위한 전략적 동맹을 맺는 자리입니다.
            자금의 40%는 AI R&amp;D, 35%는 글로벌 시장 공략, 25%는 핀테크 인프라에 투입합니다.
            6개월 내 LA 오피스, 12개월 내 ARR $1M, 18개월 내 Series B 준비를 완료합니다.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, type: "spring", stiffness: 80, damping: 12 }}
          className="mt-10 text-center max-w-lg mx-auto pt-8"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,107,44,0.15)" }}>
                <Cpu size={20} style={{ color: "#FF6B2C" }} />
              </div>
            </div>
            <h3
              className="text-5xl md:text-6xl font-black mb-3"
              style={{
                background: "linear-gradient(135deg, #FF6B2C, #FF8F5C, #FFB088)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(255,107,44,0.3))",
              }}
            >
              Afformation
            </h3>
          </motion.div>
          <p className="text-base text-white/50 tracking-widest uppercase mb-5 font-medium">
            Connect Influence, Automate Trust
          </p>
          <div className="flex justify-center gap-3 mb-6">
            {["AI Agent", "Full-Funnel", "Global OS"].map((label) => (
              <span
                key={label}
                className="text-xs font-semibold px-4 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="w-16 h-px bg-white/10 mx-auto mb-6" />
          <p className="text-sm text-white/30 tracking-wide">
            ir@afformation.co &middot; www.afformation.co
          </p>
          <p className="text-xs text-white/20 mt-2">
            &copy; 2025 Afformation Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
