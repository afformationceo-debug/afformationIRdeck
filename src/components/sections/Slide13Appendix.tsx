"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CalendarCheck, Building2, Rocket, TrendingUp, Target, Lock, AlertCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import AiChatBubble from "@/components/ui/AiChatBubble";

/* -- Monthly data (억원) -- */
const monthlyData = [
  { month: "1월",  chatdoc: 1.5, agency: 1.79, saas: 0.14, note: null, confirmed: true },
  { month: "2월",  chatdoc: 1.4, agency: 1.85, saas: 0.38, note: null, confirmed: true },
  { month: "3월",  chatdoc: 1.8, agency: 2.2,  saas: 0.6,  note: "Kaia-LINE", confirmed: true },
  { month: "4월",  chatdoc: 1.8, agency: 2.4,  saas: 2.1,  note: "더인벤션랩", confirmed: true },
  { month: "5월",  chatdoc: 1.8, agency: 2.5,  saas: 2.5,  note: null, confirmed: false },
  { month: "6월",  chatdoc: 1.8, agency: 2.6,  saas: 3.2,  note: null, confirmed: false },
  { month: "7월",  chatdoc: 1.8, agency: 2.6,  saas: 4.0,  note: "Cap", confirmed: false },
  { month: "8월",  chatdoc: 1.8, agency: 2.7,  saas: 5.0,  note: null, confirmed: false },
  { month: "9월",  chatdoc: 1.8, agency: 2.7,  saas: 6.2,  note: null, confirmed: false },
  { month: "10월", chatdoc: 1.8, agency: 2.8,  saas: 7.5,  note: null, confirmed: false },
  { month: "11월", chatdoc: 1.8, agency: 2.8,  saas: 9.0,  note: null, confirmed: false },
  { month: "12월", chatdoc: 1.8, agency: 2.8,  saas: 11.0, note: null, confirmed: false },
];

const COLORS = {
  chatdoc: "#10B981",
  agency: "#3B82F6",
  saas: "#FF6B2C",
};

/* -- Stacked Bar Chart (SVG) -- */
function StackedBarChart({ inView }: { inView: boolean }) {
  const svgW = 880;
  const svgH = 460;
  const padL = 60;
  const padR = 20;
  const padT = 40;
  const padB = 60;

  const chartW = svgW - padL - padR;
  const chartH = svgH - padT - padB;

  const maxTotal = Math.max(...monthlyData.map((d) => d.chatdoc + d.agency + d.saas));
  const yMax = Math.ceil(maxTotal / 4) * 4;

  const barCount = monthlyData.length;
  const barGap = 8;
  const barW = (chartW - barGap * (barCount + 1)) / barCount;

  const yScale = (v: number) => chartH - (v / yMax) * chartH;

  const yTicks: number[] = [];
  for (let i = 0; i <= yMax; i += 4) yTicks.push(i);

  const capValue = 2.8;
  const capY = padT + yScale(capValue + 1.8);

  // Confirmed/projected boundary (after April = index 4)
  const confirmedBoundaryX = padL + barGap + 4 * (barW + barGap) - barGap / 2;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full max-w-3xl mx-auto h-auto overflow-visible"
      style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.06))" }}
    >
      <defs>
        <linearGradient id="gradChatdoc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="gradAgency" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="gradSaas" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8F5C" />
          <stop offset="100%" stopColor="#FF6B2C" />
        </linearGradient>
      </defs>

      {/* Grid lines + Y-axis labels */}
      {yTicks.map((tick) => {
        const y = padT + yScale(tick);
        return (
          <g key={`y-${tick}`}>
            <line x1={padL} y1={y} x2={svgW - padR} y2={y} stroke="#F0EBE6" strokeWidth="1" />
            <text x={padL - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#999999" fontWeight="500">{tick}억</text>
          </g>
        );
      })}

      {/* Confirmed/Projected boundary */}
      <line x1={confirmedBoundaryX} y1={padT} x2={confirmedBoundaryX} y2={padT + chartH} stroke="#999" strokeWidth="1" strokeDasharray="4 4" opacity={0.4} />
      <rect x={padL + 5} y={padT + 2} width={70} height={18} rx={4} fill="#ECFDF5" />
      <text x={padL + 40} y={padT + 14} textAnchor="middle" fontSize="9" fill="#10B981" fontWeight="700">확정 (1~4월)</text>
      <rect x={confirmedBoundaryX + 5} y={padT + 2} width={70} height={18} rx={4} fill="#FFF7ED" />
      <text x={confirmedBoundaryX + 40} y={padT + 14} textAnchor="middle" fontSize="9" fill="#FF6B2C" fontWeight="700">예상 (5~12월)</text>

      {/* Agency Cap dashed line */}
      <line x1={padL} y1={capY} x2={svgW - padR} y2={capY} stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 4" opacity={0.6} />
      <rect x={svgW - padR - 130} y={capY - 18} width={126} height={20} rx={4} fill="rgba(59,130,246,0.08)" />
      <text x={svgW - padR - 67} y={capY - 4} textAnchor="middle" fontSize="10" fill="#3B82F6" fontWeight="700">
        <tspan>&#x1F512;</tspan>{" "}대행 Cap (의도적 제한)
      </text>

      {/* Stacked bars */}
      {monthlyData.map((d, i) => {
        const x = padL + barGap + i * (barW + barGap);
        const baseY = padT + chartH;

        const chatH = (d.chatdoc / yMax) * chartH;
        const agencyH = (d.agency / yMax) * chartH;
        const saasH = (d.saas / yMax) * chartH;

        const chatY = baseY - chatH;
        const agencyY = chatY - agencyH;
        const saasY = agencyY - saasH;

        const total = d.chatdoc + d.agency + d.saas;
        const barOpacity = d.confirmed ? 1 : 0.7;

        return (
          <g key={d.month} opacity={barOpacity}>
            {/* Chatdoc (bottom) */}
            <motion.rect
              x={x} width={barW} rx={3} fill="url(#gradChatdoc)"
              initial={{ height: 0, y: baseY }}
              animate={inView ? { height: chatH, y: chatY } : { height: 0, y: baseY }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: "easeOut" }}
            />
            {/* Agency (middle) */}
            <motion.rect
              x={x} width={barW} rx={3} fill="url(#gradAgency)"
              initial={{ height: 0, y: baseY - chatH }}
              animate={inView ? { height: agencyH, y: agencyY } : { height: 0, y: baseY - chatH }}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.06, ease: "easeOut" }}
            />
            {/* SaaS (top) */}
            <motion.rect
              x={x} width={barW} rx={3} fill="url(#gradSaas)"
              initial={{ height: 0, y: baseY - chatH - agencyH }}
              animate={inView ? { height: saasH, y: saasY } : { height: 0, y: baseY - chatH - agencyH }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.06, ease: "easeOut" }}
            />

            {/* Total label on top */}
            <motion.text
              x={x + barW / 2} y={saasY - 8} textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.9 + i * 0.06 }}
            >
              {total.toFixed(1)}
            </motion.text>

            {/* Month label */}
            <text x={x + barW / 2} y={baseY + 18} textAnchor="middle" fontSize="11" fontWeight="600" fill="#555555">
              {d.month}
            </text>

            {/* Note markers */}
            {d.note === "Kaia-LINE" && (
              <motion.g initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 1.2 }}>
                <line x1={x + barW / 2} y1={baseY + 24} x2={x + barW / 2} y2={baseY + 38} stroke="#10B981" strokeWidth="1.5" />
                <rect x={x + barW / 2 - 32} y={baseY + 38} width={64} height={16} rx={4} fill="#ECFDF5" />
                <text x={x + barW / 2} y={baseY + 50} textAnchor="middle" fontSize="8" fill="#10B981" fontWeight="700">Kaia-LINE</text>
              </motion.g>
            )}
            {d.note === "더인벤션랩" && (
              <motion.g initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 1.3 }}>
                <line x1={x + barW / 2} y1={baseY + 24} x2={x + barW / 2} y2={baseY + 38} stroke="#3B82F6" strokeWidth="1.5" />
                <rect x={x + barW / 2 - 34} y={baseY + 38} width={68} height={16} rx={4} fill="#EFF6FF" />
                <text x={x + barW / 2} y={baseY + 50} textAnchor="middle" fontSize="8" fill="#3B82F6" fontWeight="700">더인벤션랩</text>
              </motion.g>
            )}
            {d.note === "Cap" && (
              <motion.g initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 1.4 }}>
                <line x1={x + barW / 2} y1={baseY + 24} x2={x + barW / 2} y2={baseY + 38} stroke="#EF4444" strokeWidth="1.5" />
                <rect x={x + barW / 2 - 28} y={baseY + 38} width={56} height={16} rx={4} fill="#FEF2F2" />
                <text x={x + barW / 2} y={baseY + 50} textAnchor="middle" fontSize="8" fill="#EF4444" fontWeight="700">Cap 시작</text>
              </motion.g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* -- Legend -- */
function ChartLegend() {
  const items = [
    { label: "챗닥KR (국내)", color: COLORS.chatdoc, desc: "안정 매출 · 20.9억" },
    { label: "글로벌 풀퍼널 대행", color: COLORS.agency, desc: "하반기 Cap · 29.8억" },
    { label: "ScoutManager AI SaaS", color: COLORS.saas, desc: "J-Curve · 51.6억" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-4 mb-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5 text-base px-4 py-2 rounded-lg" style={{ background: `${item.color}08` }}>
          <span className="w-4 h-4 rounded shrink-0" style={{ background: item.color }} />
          <span className="font-bold text-t1">{item.label}</span>
          <span className="text-t3 text-sm font-medium">({item.desc})</span>
        </div>
      ))}
    </div>
  );
}

/* -- Milestone cards -- */
const milestoneCards = [
  {
    icon: CalendarCheck,
    iconClass: "ic ic-green",
    month: "3월",
    title: "카이아-라인(Kaia-LINE) 재단",
    value: "$15,000/월",
    valueKr: "(≈2천만원)",
    desc: "인플루언서 정산 인프라 계약 확정 → AI 사업부 0.6억",
    badgeClass: "badge badge-green",
    status: "확정",
  },
  {
    icon: Building2,
    iconClass: "ic ic-blue",
    month: "4월",
    title: "더인벤션랩 포트폴리오",
    value: "월 1.5억",
    valueKr: "(5개 K-뷰티·F&B)",
    desc: "액셀러레이터 K-뷰티·F&B 5개 브랜드 계약 → SaaS 2.1억, 총 6.3억",
    badgeClass: "badge badge-blue",
    status: "확정",
  },
  {
    icon: Rocket,
    iconClass: "ic ic-orange",
    month: "하반기",
    title: "대행 Cap + SaaS 내재화",
    value: "비중 역전",
    valueKr: "(대행 29.7 < SaaS 51.6)",
    desc: "대행 月 2.8억 Cap 고수 — 이탈 고객 + 신규 고객 모두 SaaS 전환",
    badgeClass: "badge badge-orange",
    status: "예상",
  },
];

/* -- Assumptions -- */
const assumptions = [
  "챗닥 국내 매출: 월 1.5~1.8억 유지 (보수적 고정)",
  "글로벌 대행: 하반기부터 月 2.8억 Cap 적용",
  "SaaS 성장: Kaia-LINE, 더인벤션랩 등 확정 계약 기반",
  "환율: $1 = ₩1,350 고정 가정",
  "신규 고객 이탈률: 월 5% (보수적)",
];

/* ═════════════════════
   MAIN COMPONENT
   ═════════════════════ */
export default function Slide13Appendix() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-80px" });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <SectionWrapper id="appendix" white chapter="13">
      <div className="text-center">
        <SectionHeader
          chapter="13"
          badge="Appendix"
          badgeColor="dark"
          title={<>2026 Monthly <span className="gt">Financial Projections</span></>}
          subtitle="대행 매출의 한계를 스스로 긋고, SaaS로 전환하는 '가장 완벽한 테크 기업의 재무 모델' 제시"
        />

        {/* Context Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <span className="badge badge-green">1~4월 확정</span>
          <span className="badge badge-orange">5~12월 예상</span>
          <span className="badge badge-blue">대행 月 2.8억 Cap</span>
        </motion.div>

        {/* Stacked Bar Chart */}
        <motion.div
          ref={chartRef}
          className="mb-2 perspective"
          initial={{ opacity: 0, y: 30, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {mounted && <StackedBarChart inView={isInView} />}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <ChartLegend />
        </motion.div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
          {milestoneCards.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                className="card relative text-left"
                initial={{ opacity: 0, y: 30, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ y: -6, rotateY: -3, rotateX: 2, scale: 1.02, boxShadow: "0 14px 36px rgba(0,0,0,0.08)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.15, type: "spring", stiffness: 100, damping: 15 }}
              >
                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full ${m.status === "확정" ? "bg-[#ECFDF5] text-[#10B981]" : "bg-[#FFF7ED] text-[#FF6B2C]"}`}
                >
                  {m.status}
                </span>

                <div className="flex items-start gap-3 mb-3">
                  <div className={m.iconClass}><Icon size={22} /></div>
                  <div>
                    <span className={`${m.badgeClass} text-xs mb-1 px-3 py-0.5`}>{m.month}</span>
                    <h4 className="text-base font-bold text-t1 mt-1">{m.title}</h4>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-2xl font-black gt">{m.value}</span>
                  <span className="text-sm text-t3 ml-1.5 font-medium">{m.valueKr}</span>
                </div>

                <p className="text-sm text-t2 leading-relaxed">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Totals Row */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <motion.div className="stat-card flex-1 glow-orange" whileHover={{ y: -4, scale: 1.03, rotateX: 2 }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="ic ic-sm ic-orange"><Target size={16} /></div>
              <span className="text-xs font-semibold text-t3">2026 목표</span>
            </div>
            <div className="text-4xl md:text-5xl font-black gt">103억</div>
            <p className="text-sm text-t3 mt-2 font-medium">SaaS 51.6억 &gt; 대행 29.8억</p>
          </motion.div>

          <motion.div className="stat-card flex-1 glow-blue" whileHover={{ y: -4, scale: 1.03, rotateX: 2 }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="ic ic-sm ic-blue"><TrendingUp size={16} /></div>
              <span className="text-xs font-semibold text-t3">2027 목표</span>
            </div>
            <div className="text-4xl md:text-5xl font-black" style={{ color: "#3B82F6" }}>200억</div>
            <p className="text-sm text-t3 mt-2 font-medium">순수 SaaS + 핀테크 수수료</p>
          </motion.div>
        </motion.div>

        {/* Assumptions */}
        <motion.div
          className="max-w-2xl mx-auto mb-6 card text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={14} className="text-t3" />
              <span className="text-xs font-bold text-t1 uppercase tracking-widest">Key Assumptions</span>
            </div>
            <ul className="space-y-1.5">
              {assumptions.map((a) => (
                <li key={a} className="text-sm text-t2 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-t3 mt-2 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Strategic Insight Row */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-6 max-w-3xl mx-auto items-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          <div className="card-flat flex items-center gap-3 px-5 py-3" style={{ borderLeft: "3px solid #3B82F6" }}>
            <Lock size={18} className="text-blue" />
            <span className="text-sm font-bold">대행 하반기 Cap</span>
          </div>
          <div className="conn hidden sm:block" />
          <div className="card-flat flex items-center gap-3 px-5 py-3" style={{ borderLeft: "3px solid #FF6B2C" }}>
            <Rocket size={18} className="text-orange" />
            <span className="text-sm font-bold">SaaS 내재화 폭발</span>
          </div>
          <div className="conn hidden sm:block" />
          <div className="card-flat flex items-center gap-3 px-5 py-3" style={{ borderLeft: "3px solid #10B981" }}>
            <TrendingUp size={18} className="text-green" />
            <span className="text-sm font-bold">에이전시 → 테크 전환</span>
          </div>
        </motion.div>

        {/* Desc Box */}
        <AiChatBubble delay={1.6}>
          <p>
            1~4월은 확정 실적, 5~12월은 보수적 가정 기반 예측입니다. 글로벌 대행 매출을 하반기부터 의도적으로 캡(Cap) 씌우고, 이탈/신규 고객 모두 SaaS 내재화로 전환합니다. 환율 $1=₩1,350 고정, 이탈률 월 5% 보수적 가정 하에 26년 103억, 27년 200억을 달성합니다.
          </p>
        </AiChatBubble>
      </div>
    </SectionWrapper>
  );
}
