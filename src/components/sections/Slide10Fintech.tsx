"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Wallet, FileText, Globe2, DollarSign, Target, Sparkles, ArrowRight, Bot, Zap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

const pipelineSteps = [
  { step: "Step 1", icon: CheckCircle, title: "캠페인 완료", sub: "ScoutManager 매칭 성공", color: "#FF6B2C" },
  { step: "Step 2", icon: FileCheck, title: "스마트 전자계약", sub: "인플루언서 전용 계약서 자동 생성", color: "#3B82F6" },
  { step: "Step 3", icon: Wallet, title: "글로벌 원클릭 정산", sub: "다국어 크로스보더 자동 송금", color: "#10B981" },
];

const feeStructure = [
  { label: "전자계약 수수료", value: "건당 $1~3", color: "#FF6B2C" },
  { label: "크로스보더 정산", value: "거래액의 1.5~3%", color: "#3B82F6" },
  { label: "프리미엄 API", value: "월 $99~499", color: "#10B981" },
];

export default function Slide10Fintech() {
  return (
    <SectionWrapper id="fintech" white chapter="10">
      <div className="text-center">
        <SectionHeader
          chapter="10"
          badge="Catalyst 4"
          badgeColor="blue"
          title={<>The Ultimate <span className="gt">Lock-in</span></>}
          subtitle={<>글로벌 핀테크 &amp; 정산 인프라 — 인플루언서계의 &lsquo;모두싸인&rsquo; + &lsquo;라이키&rsquo;</>}
        />

        {/* ===== Dark Fintech Pipeline ===== */}
        <div className="max-w-4xl mx-auto mb-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
              border: "1px solid rgba(59,130,246,0.12)",
              boxShadow: "0 12px 50px rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Neural grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
              backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />

            <div className="relative p-6 sm:p-8">
              {/* Header badge */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}>
                  <Sparkles size={12} className="text-[#3B82F6]" />
                  <span className="text-[11px] font-bold text-[#3B82F6]">Fintech Infrastructure Pipeline</span>
                </div>
              </motion.div>

              {/* 3-Step Pipeline */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 mb-6">
                {pipelineSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.step} className="flex items-center">
                      <motion.div
                        className="relative rounded-xl p-5 text-center w-full md:w-[220px]"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid ${step.color}25`,
                        }}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
                        whileHover={{ y: -6, scale: 1.03, borderColor: `${step.color}50`, boxShadow: `0 12px 35px ${step.color}15` }}
                      >
                        {/* Top accent */}
                        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: step.color, opacity: 0.5 }} />
                        {/* Status dot */}
                        <div className="absolute top-3 right-3 flex items-center gap-1">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: step.color }} />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: step.color }} />
                          </span>
                        </div>

                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3" style={{ background: `${step.color}15`, color: step.color }}>
                          {step.step}
                        </span>
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${step.color}15` }}>
                          <Icon size={24} style={{ color: step.color }} />
                        </div>
                        <div className="text-sm font-bold text-white">{step.title}</div>
                        <div className="text-[11px] text-white/40 mt-1">{step.sub}</div>
                      </motion.div>

                      {/* Connector */}
                      {i < pipelineSteps.length - 1 && (
                        <>
                          <motion.div
                            className="hidden md:flex items-center mx-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + i * 0.15 }}
                          >
                            <div className="relative w-8 h-[2px] rounded-full" style={{ background: `${step.color}30` }}>
                              <motion.div
                                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                                style={{ background: step.color, boxShadow: `0 0 6px ${step.color}` }}
                                animate={{ left: ["-2px", "30px"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                              />
                            </div>
                          </motion.div>
                          <div className="md:hidden py-1">
                            <ArrowRight size={14} className="rotate-90" style={{ color: step.color, opacity: 0.4 }} />
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Fee Structure — Dark */}
              <div className="space-y-2 mb-5">
                {feeStructure.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2.5 px-4 rounded-lg"
                    style={{ background: `${item.color}06` }}
                  >
                    <span className="text-sm font-semibold text-white/60">{item.label}</span>
                    <span className="text-sm font-black" style={{ color: item.color }}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Transaction Volume Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Transaction Volume</span>
                  <span className="text-[10px] font-bold text-[#3B82F6]">$2M target</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #3B82F6, #60A5FA)" }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Bottom badges */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                {[
                  { icon: FileText, label: "전자계약 자동화", color: "#FF6B2C" },
                  { icon: Globe2, label: "크로스보더 정산", color: "#3B82F6" },
                  { icon: DollarSign, label: "막대한 광고비 볼륨", color: "#10B981" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <span key={item.label} className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full" style={{ background: `${item.color}12`, color: item.color }}>
                      <Icon size={11} /> {item.label}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Processing Target */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 15 }}
        >
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-xl"
            style={{
              background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(59,130,246,0.15)" }}>
              <Target size={20} style={{ color: "#3B82F6" }} />
            </div>
            <div>
              <div className="text-2xl font-black" style={{ color: "#3B82F6" }}>$2M</div>
              <div className="text-[11px] text-white/40">2026 연간 처리 목표액</div>
            </div>
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring", stiffness: 80, damping: 12 }}
          className="max-w-xl mx-auto mt-4 mb-6 py-8 text-center rounded-2xl"
          style={{
            background: "linear-gradient(180deg, #0F0F0F 0%, #161616 100%)",
            border: "1px solid rgba(255,107,44,0.15)",
            boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
          }}
        >
          <p className="text-2xl md:text-3xl font-black text-white">
            인플루언서계의 <span className="gt">모두싸인</span> + <span className="gt">라이키</span>
          </p>
          <p className="text-sm text-white/40 mt-2">전 세계 인플루언서 광고 자금이 플랫폼을 통해 유통</p>
        </motion.div>

        {/* Desc Box */}
        <AiChatBubble delay={1.4}>
          <p>
            궁극적인 비전은 &lsquo;글로벌 핀테크&rsquo;입니다. 2026년 $2M 처리를 목표로, 전자계약 건당 $1~3, 크로스보더 정산 1.5~3% 수수료로 수익화합니다. 모든 퍼널의 끝은 인플루언서에게 광고비를 지급하는 &lsquo;정산&rsquo;이기에, 전 세계의 막대한 인플루언서 광고 자금이 저희 플랫폼을 타고 흐르게 될 것입니다.
          </p>
        </AiChatBubble>
      </div>
    </SectionWrapper>
  );
}
