"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Wallet, FileText, Globe2, DollarSign, Target } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

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

        {/* Fintech Pipeline - 3 stages */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 mb-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.15 },
            },
          }}
        >
          {/* Stage 1 */}
          <motion.div
            className="card w-full md:w-[250px] text-left"
            variants={{
              hidden: { opacity: 0, y: 30, rotateX: 10, scale: 0.95 },
              visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            whileHover={{ rotateY: -4, scale: 1.05, y: -6, boxShadow: "0 16px 35px rgba(255,107,44,0.16)" }}
          >
            <span className="badge badge-orange text-[10px] mb-2">Step 1</span>
            <div className="ic ic-lg ic-orange mb-3"><CheckCircle size={30} /></div>
            <div className="font-bold">캠페인 완료</div>
            <div className="text-sm text-t2 mt-1">ScoutManager 매칭 성공</div>
          </motion.div>

          {/* Connector 1 */}
          <motion.div className="hidden md:block" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <div className="conn relative">
              <div className="absolute top-[-3px] w-2 h-2 rounded-full bg-orange anim-slide-right" />
            </div>
          </motion.div>
          <motion.div className="md:hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <div className="conn-v" />
          </motion.div>

          {/* Stage 2 */}
          <motion.div
            className="card w-full md:w-[250px] text-left"
            variants={{
              hidden: { opacity: 0, y: 30, rotateX: 10, scale: 0.95 },
              visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            whileHover={{ rotateY: -4, scale: 1.05, y: -6, boxShadow: "0 16px 35px rgba(59,130,246,0.16)" }}
          >
            <span className="badge badge-blue text-[10px] mb-2">Step 2</span>
            <div className="ic ic-lg ic-blue mb-3"><FileCheck size={30} /></div>
            <div className="font-bold">스마트 전자계약</div>
            <div className="text-sm text-t2 mt-1">인플루언서 전용 계약서 자동 생성</div>
          </motion.div>

          {/* Connector 2 */}
          <motion.div className="hidden md:block" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <div className="conn relative">
              <div className="absolute top-[-3px] w-2 h-2 rounded-full bg-orange anim-slide-right" style={{ animationDelay: "0.5s" }} />
            </div>
          </motion.div>
          <motion.div className="md:hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <div className="conn-v" />
          </motion.div>

          {/* Stage 3 */}
          <motion.div
            className="card w-full md:w-[250px] text-left"
            variants={{
              hidden: { opacity: 0, y: 30, rotateX: 10, scale: 0.95 },
              visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            whileHover={{ rotateY: -4, scale: 1.05, y: -6, boxShadow: "0 16px 35px rgba(16,185,129,0.16)" }}
          >
            <span className="badge badge-green text-[10px] mb-2">Step 3</span>
            <div className="ic ic-lg ic-green mb-3"><Wallet size={30} /></div>
            <div className="font-bold">글로벌 원클릭 정산</div>
            <div className="text-sm text-t2 mt-1">다국어 크로스보더 자동 송금</div>
          </motion.div>
        </motion.div>

        {/* 2026 Processing Target */}
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
              background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.03))",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <div className="ic ic-sm ic-blue"><Target size={20} /></div>
            <div>
              <div className="text-2xl font-black" style={{ color: "#3B82F6" }}>$2M</div>
              <div className="text-[11px] text-t3">2026 연간 처리 목표액</div>
            </div>
          </div>
        </motion.div>

        {/* Fee Structure */}
        <motion.div
          className="max-w-xl mx-auto mb-6 card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="p-4">
            <div className="text-xs font-bold text-t1 mb-3 text-left">수수료 구조</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ background: "rgba(255,107,44,0.04)" }}>
                <span className="text-sm font-semibold text-t1">전자계약 수수료</span>
                <span className="text-sm font-black text-[#FF6B2C]">건당 $1~3</span>
              </div>
              <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ background: "rgba(59,130,246,0.04)" }}>
                <span className="text-sm font-semibold text-t1">크로스보더 정산</span>
                <span className="text-sm font-black text-[#3B82F6]">거래액의 1.5~3%</span>
              </div>
              <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ background: "rgba(16,185,129,0.04)" }}>
                <span className="text-sm font-semibold text-t1">프리미엄 API</span>
                <span className="text-sm font-black text-[#10B981]">월 $99~499</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transaction Volume Bar */}
        <motion.div
          className="max-w-2xl mx-auto mt-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-sm uppercase tracking-widest text-t1 mb-2 font-bold text-left">
            Transaction Volume
          </div>
          <div className="shimmer h-4 rounded-full" style={{ background: "#E5E0DA" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #FF6B2C, #FF8F5C)" }}
              initial={{ width: "0%", boxShadow: "none" }}
              whileInView={{ width: "85%", boxShadow: "0 0 20px rgba(255,107,44,0.4), 0 0 40px rgba(255,107,44,0.15)" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.9, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, rotateX: 8, y: 25, scale: 0.94 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          whileHover={{ y: -4, scale: 1.02, boxShadow: "0 12px 30px rgba(255,107,44,0.15)" }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring", stiffness: 80, damping: 12 }}
          className="card glow-orange max-w-xl mx-auto mt-6 mb-6 py-8 text-center"
          style={{ boxShadow: "0 6px 24px rgba(255,107,44,0.12)" }}
        >
          <p className="text-2xl md:text-3xl font-black">
            인플루언서계의 <span className="gt">모두싸인</span> + <span className="gt">라이키</span>
          </p>
          <p className="text-sm text-t2 mt-2">전 세계 인플루언서 광고 자금이 플랫폼을 통해 유통</p>
        </motion.div>

        {/* Bottom 3 card-flat boxes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 1.0 } },
          }}
        >
          <motion.div
            className="card-flat flex items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 25, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            whileHover={{ y: -6, rotateX: 3, scale: 1.04, boxShadow: "0 12px 25px rgba(255,107,44,0.14)" }}
          >
            <div className="ic ic-sm ic-orange"><FileText size={18} /></div>
            <span className="text-sm font-semibold">전자계약 자동화</span>
          </motion.div>

          <motion.div
            className="card-flat flex items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 25, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            whileHover={{ y: -6, rotateX: 3, scale: 1.04, boxShadow: "0 12px 25px rgba(59,130,246,0.14)" }}
          >
            <div className="ic ic-sm ic-blue"><Globe2 size={18} /></div>
            <span className="text-sm font-semibold">크로스보더 정산</span>
          </motion.div>

          <motion.div
            className="card-flat flex items-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 25, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            whileHover={{ y: -6, rotateX: 3, scale: 1.04, boxShadow: "0 12px 25px rgba(16,185,129,0.14)" }}
          >
            <div className="ic ic-sm ic-green"><DollarSign size={18} /></div>
            <span className="text-sm font-semibold">막대한 광고비 볼륨</span>
          </motion.div>
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
