"use client";

import { motion } from "framer-motion";
import { DollarSign, Percent, Target, ArrowRight, Bot, Package, Truck, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const agents = [
  {
    id: "ctk",
    label: "CTK",
    role: "Production Agent",
    detail: "북미 최대 K-뷰티 ODM",
    sub: "생산 · 물류 · 품질관리",
    icon: Package,
    color: "#3B82F6",
    bgColor: "rgba(59,130,246,0.08)",
    borderColor: "rgba(59,130,246,0.2)",
  },
  {
    id: "scout",
    label: "ScoutManager",
    role: "AI Sales Agent",
    detail: "풀퍼널 AI 세일즈 엔진",
    sub: "크리에이터 자동 매칭 · DM 자동화",
    icon: Bot,
    color: "#FF6B2C",
    bgColor: "rgba(255,107,44,0.08)",
    borderColor: "rgba(255,107,44,0.25)",
    isCenter: true,
  },
  {
    id: "sinarmas",
    label: "시나르마스",
    role: "Distribution Agent",
    detail: "인도네시아 2위 재벌",
    sub: "동남아 유통 · 물류 네트워크",
    icon: Truck,
    color: "#8B5CF6",
    bgColor: "rgba(139,92,246,0.08)",
    borderColor: "rgba(139,92,246,0.2)",
  },
];

export default function Slide08Commerce() {
  return (
    <SectionWrapper id="commerce" white chapter="08">
      {/* Title */}
      <div className="text-center mb-8">
        <SectionHeader
          chapter="08"
          badge="Catalyst 2"
          badgeColor="orange"
          title={<>틱톡샵 제국을 점령하는 <span className="gt">풀퍼널 연합</span></>}
          subtitle="K-브랜드의 글로벌 틱톡샵 수출 — SI와 대형 VC가 가장 열광하는 장표"
        />
      </div>

      {/* LangGraph-style Agent Pipeline */}
      <motion.div
        className="text-center text-xs font-bold uppercase tracking-widest text-t1 mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Agent Partnership Pipeline
      </motion.div>

      {/* Desktop: Horizontal Agent Flow */}
      <motion.div
        className="hidden sm:block max-w-4xl mx-auto mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
        }}
      >
        <div className="flex items-stretch gap-0">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div key={agent.id} className="flex items-center flex-1">
                <motion.div
                  className="flex-1 relative rounded-2xl p-5 text-center"
                  style={{
                    background: agent.isCenter
                      ? "linear-gradient(135deg, rgba(255,107,44,0.06), rgba(255,143,92,0.03))"
                      : "rgba(255,255,255,0.8)",
                    border: `1.5px solid ${agent.borderColor}`,
                    boxShadow: agent.isCenter
                      ? "0 8px 32px rgba(255,107,44,0.1), inset 0 1px 0 rgba(255,255,255,0.5)"
                      : "0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
                  }}
                  whileHover={{ y: -6, scale: 1.03, boxShadow: `0 12px 35px ${agent.color}20` }}
                >
                  {/* Agent status dot */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: agent.color }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: agent.color }} />
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color: agent.color }}>Active</span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: agent.bgColor }}
                  >
                    <Icon size={24} style={{ color: agent.color }} />
                  </div>

                  {/* Role badge */}
                  <div
                    className="inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                    style={{ background: agent.bgColor, color: agent.color }}
                  >
                    {agent.role}
                  </div>

                  {/* Name */}
                  <div className="text-base font-black text-t1">{agent.label}</div>
                  <div className="text-[11px] text-t2 mt-1">{agent.detail}</div>
                  <div className="text-[10px] font-semibold mt-1" style={{ color: agent.color }}>{agent.sub}</div>
                </motion.div>

                {/* Connector arrow */}
                {i < agents.length - 1 && (
                  <motion.div
                    className="flex flex-col items-center px-2 shrink-0"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1, transition: { delay: 0.5 + i * 0.15 } },
                    }}
                  >
                    <div className="w-8 h-[2px] relative overflow-hidden" style={{ background: `linear-gradient(90deg, ${agents[i].color}40, ${agents[i + 1].color}40)` }}>
                      <motion.div
                        className="absolute inset-y-0 w-3"
                        style={{ background: `linear-gradient(90deg, transparent, ${agents[i].color}, transparent)` }}
                        animate={{ left: ["-12px", "32px"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    <ArrowRight size={10} className="text-t4 -mt-0.5" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Central output node */}
        <motion.div
          className="flex justify-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring", stiffness: 80, damping: 12 }}
        >
          <div
            className="relative inline-flex items-center gap-3 px-6 py-3 rounded-xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,44,0.06), rgba(255,143,92,0.03))",
              border: "1.5px solid rgba(255,107,44,0.2)",
              boxShadow: "0 4px 20px rgba(255,107,44,0.08)",
            }}
          >
            {/* Animated border glow */}
            <div className="absolute -inset-px rounded-xl opacity-30" style={{
              background: "linear-gradient(135deg, #FF6B2C, transparent, #FF6B2C)",
              filter: "blur(1px)",
              zIndex: -1,
            }} />
            <Zap size={18} className="text-[#FF6B2C]" />
            <div className="text-left">
              <div className="text-sm font-black text-t1">K-Brand 틱톡샵 매출 폭발</div>
              <div className="text-[10px] text-t3">3 Agents → Full-Funnel Automation → Revenue</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile: Stacked agent cards */}
      <motion.div
        className="sm:hidden flex flex-col gap-3 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
      >
        {agents.map((agent) => {
          const Icon = agent.icon;
          return (
            <motion.div
              key={agent.id}
              className="flex items-center gap-4 rounded-xl px-5 py-4"
              style={{
                background: agent.isCenter ? agent.bgColor : "rgba(255,255,255,0.8)",
                border: `1px solid ${agent.borderColor}`,
              }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
              }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: agent.bgColor }}>
                <Icon size={18} style={{ color: agent.color }} />
              </div>
              <div>
                <div className="text-sm font-bold text-t1">{agent.label}</div>
                <div className="text-xs text-t3">{agent.detail}</div>
                <div className="text-[10px] font-semibold mt-0.5" style={{ color: agent.color }}>{agent.sub}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* GMV Target */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
      >
        <div
          className="inline-flex items-center gap-4 px-6 py-4 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,107,44,0.08), rgba(255,143,92,0.04))",
            border: "1px solid rgba(255,107,44,0.2)",
          }}
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.1)" }}>
            <Target size={20} style={{ color: "#FF6B2C" }} />
          </div>
          <div>
            <div className="text-2xl font-black gt">GMV $5M</div>
            <div className="text-[11px] text-t3">2026 연간 목표 거래액</div>
          </div>
        </div>
      </motion.div>

      {/* Revenue Model */}
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
        }}
      >
        <motion.div
          className="card-flat flex items-center gap-4 px-6 py-5"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
          }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(255,107,44,0.1)" }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,44,0.08)" }}>
            <DollarSign size={18} style={{ color: "#FF6B2C" }} />
          </div>
          <span className="text-base font-bold text-t1">시스템 구독료</span>
          <span className="badge badge-orange text-[10px] ml-2">SaaS</span>
        </motion.div>
        <motion.div
          className="card-flat flex items-center gap-4 px-6 py-5"
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
          }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(16,185,129,0.1)" }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(16,185,129,0.08)" }}>
            <Percent size={18} style={{ color: "#10B981" }} />
          </div>
          <span className="text-base font-bold text-t1">판매 수수료 8~12%</span>
          <span className="badge badge-green text-[10px] ml-2">Rev-Share</span>
        </motion.div>
      </motion.div>

      {/* Key Message */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center text-sm font-bold text-t1 mt-6"
      >
        K-Brand &rarr; 틱톡샵 &rarr; <span className="gt">글로벌 매출 폭발</span>
      </motion.p>

      {/* Desc Box */}
      <motion.div
        className="desc-box max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <p>
          K-브랜드의 틱톡샵 수출입니다. 북미 최대 K-뷰티 ODM인 CTK가 생산/물류를, 인도네시아 2위 재벌 시나르마스가 동남아 유통망을 책임집니다. 저희는 프론트엔드에서 틱톡 크리에이터 군단을 자동 매칭해 물건을 팔아치웁니다. 2026년 GMV $5M 달성을 목표로, 시스템 구독료와 8~12% 판매 수수료를 글로벌 달러로 쓸어 담습니다.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
