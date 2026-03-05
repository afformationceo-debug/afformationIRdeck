"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, MessageCircle, Building2, TrendingDown, TrendingUp, Zap, Inbox } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

const loopNodes = [
  {
    icon: <Bot size={26} />,
    iconClass: "ic ic-orange",
    title: "ScoutManager AI 섭외",
    desc: "무한 인플루언서 섭외 엔진",
    angle: 270,
  },
  {
    icon: <MessageCircle size={26} />,
    iconClass: "ic ic-blue",
    title: "다국어 CS/예약 자동화",
    desc: "AI Flow 자동 응대",
    angle: 30,
  },
  {
    icon: <Building2 size={26} />,
    iconClass: "ic ic-green",
    title: "병원 MSO & SaaS 수주",
    desc: "대형/중소 병원 공격적 수주",
    angle: 150,
  },
];

function getPosition(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

const costComparison = [
  { metric: "환자 유치 비용", afformation: "₩80만/건", agency: "₩250만/건", savings: "68%" },
  { metric: "섭외 소요 시간", afformation: "3분 (AI)", agency: "5일 (수동)", savings: "99%" },
  { metric: "응답률", afformation: "18.7%", agency: "2.3%", savings: "8x" },
];

function MedicalScreenshot() {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      <img
        src="/screenshots/inbox.png"
        alt="ScoutManager 다국어 통합 인박스"
        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent p-5">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
            <Inbox size={14} className="text-white" />
          </div>
          <div>
            <span className="text-sm font-bold text-white">다국어 통합 인박스</span>
            <span className="text-xs text-white/70 block">LINE · Instagram · WhatsApp 실시간 CS 자동화</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slide07Medical() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const R = 170;
  const cx = 250;
  const cy = 240;

  const points = loopNodes.map((n) => {
    const pos = getPosition(n.angle, R);
    return { x: cx + pos.x, y: cy + pos.y };
  });

  function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    const dx = mx - cx;
    const dy = my - cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const bulge = 45;
    const cpx = mx + (dx / dist) * bulge;
    const cpy = my + (dy / dist) * bulge;
    return `M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`;
  }

  const paths = [
    arcPath(points[0], points[1]),
    arcPath(points[1], points[2]),
    arcPath(points[2], points[0]),
  ];

  return (
    <SectionWrapper id="medical" chapter="07">
      {/* Title */}
      <div className="text-center mb-8">
        <SectionHeader
          chapter="07"
          badge="Catalyst 1"
          badgeColor="orange"
          title={<>K-의료 시장 <span className="gt">장악</span></>}
          subtitle="해외 환자 유치 스케일업 — 본업이 자동화 엔진을 만나 시장을 싹쓸이"
        />
      </div>

      {/* Circular Loop Diagram */}
      {mounted && (
        <div className="flex justify-center mb-8 overflow-hidden">
          <div className="relative mx-auto w-full" style={{ maxWidth: 500, height: 480 }}>
            <div className="aura" style={{ width: 220, height: 220, background: "rgba(255,107,44,0.08)", left: "50%", top: "50%", transform: "translate(-50%,-50%)", position: "absolute", zIndex: 0 }} />
            {/* SVG Arrows */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 480"
            >
              <defs>
                <marker
                  id="arrowMedical"
                  markerWidth="8"
                  markerHeight="6"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 8 3, 0 6"
                    fill="#FF6B2C"
                    opacity="0.85"
                  />
                </marker>
                <filter id="arrowGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodColor="#FF6B2C" floodOpacity="0.35" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Subtle background circle */}
              <circle
                cx={cx}
                cy={cy}
                r={R}
                fill="none"
                stroke="#E8E2DC"
                strokeWidth="1"
                strokeDasharray="4 6"
              />

              {/* Curved Arrows */}
              {paths.map((d, i) => (
                <motion.path
                  key={`path-${i}`}
                  d={d}
                  fill="none"
                  stroke="#FF6B2C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  markerEnd="url(#arrowMedical)"
                  filter="url(#arrowGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.75 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.3, duration: 1 }}
                />
              ))}

              {/* Animated dashes */}
              {paths.map((d, i) => (
                <path
                  key={`dash-${i}`}
                  d={d}
                  fill="none"
                  stroke="#FF6B2C"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.3"
                  style={{
                    animation: `dash 1s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}

              {/* Animated dots traveling along paths */}
              {paths.map((d, i) => (
                <circle
                  key={`dot-${i}`}
                  r="5"
                  fill="#FF6B2C"
                  opacity="0.8"
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={`${i * 1}s`}
                    path={d}
                  />
                </circle>
              ))}
            </svg>

            {/* Center Label */}
            <div className="absolute left-1/2 top-1/2 z-10" style={{ transform: "translate(-50%, -50%)" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <div
                  className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-orange flex items-center justify-center glow-orange"
                  style={{ boxShadow: "0 4px 24px rgba(255,107,44,0.18)" }}
                >
                  <span
                    className="text-xs font-bold gt text-center leading-tight"
                  >
                    선순환
                    <br />
                    루프
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Nodes */}
            {loopNodes.map((node, i) => {
              const pos = getPosition(node.angle, R);
              return (
                <div
                  key={node.title}
                  className="absolute z-20"
                  style={{
                    left: cx + pos.x,
                    top: cy + pos.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.06, boxShadow: "0 12px 30px rgba(255,107,44,0.15)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                  >
                    <div className="node p-4 text-center w-44 relative bg-white">
                      <span className="absolute top-2 right-2 w-[6px] h-[6px] rounded-full bg-green animate-pulse" />
                      <div className={`${node.iconClass} mx-auto mb-2`}>
                        {node.icon}
                      </div>
                      <div className="text-sm font-bold text-t1 mb-1">{node.title}</div>
                      <div className="text-[11px] text-t2">{node.desc}</div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {!mounted && (
        <div className="flex justify-center mb-8" style={{ height: 480 }} />
      )}

      {/* Case Numbers */}
      <motion.div
        className="max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="card-flat p-5 text-center">
            <div className="text-3xl font-black gt mb-1">12건</div>
            <div className="text-sm font-semibold text-t1">대형 MSO 계약</div>
            <div className="text-[11px] text-t3 mt-1">상급종합병원 · 대형 성형외과</div>
          </div>
          <div className="card-flat p-5 text-center">
            <div className="text-3xl font-black gt mb-1">45건</div>
            <div className="text-sm font-semibold text-t1">중소형 SaaS 공급</div>
            <div className="text-[11px] text-t3 mt-1">피부과 · 치과 · 안과 등</div>
          </div>
        </div>
      </motion.div>

      {/* Cost Comparison Table */}
      <motion.div
        className="max-w-3xl mx-auto mb-6 card overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="p-4">
          <div className="text-xs font-bold text-t1 mb-3 text-left">Afformation vs 기존 에이전시</div>
          <div className="space-y-2">
            {costComparison.map((row) => (
              <div
                key={row.metric}
                className="flex items-center justify-between py-2 px-3 rounded-lg"
                style={{ background: "rgba(255,107,44,0.04)" }}
              >
                <span className="text-sm font-semibold text-t1 w-1/4 text-left">{row.metric}</span>
                <span className="text-sm font-black text-[#FF6B2C] w-1/4 text-center">{row.afformation}</span>
                <span className="text-sm text-t3 w-1/4 text-center line-through decoration-1">{row.agency}</span>
                <span className="text-sm font-bold text-[#10B981] w-1/4 text-right">{row.savings} 절감</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats */}
      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div
          className="card-flat flex items-center gap-4 px-6 py-5"
          whileHover={{ y: -5, rotateX: 3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="ic ic-sm ic-green">
            <TrendingDown size={20} />
          </div>
          <div>
            <span className="text-2xl font-black text-[#10B981]">70%</span>
            <span className="text-sm font-bold text-t1 ml-1.5">원가 절감</span>
          </div>
        </motion.div>
        <motion.div
          className="card-flat flex items-center gap-4 px-6 py-5"
          whileHover={{ y: -5, rotateX: 3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="ic ic-sm ic-orange">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="text-2xl font-black text-orange">3x</span>
            <span className="text-sm font-bold text-t1 ml-1.5">MSO 계약 성장</span>
          </div>
        </motion.div>
        <motion.div
          className="card-flat flex items-center gap-4 px-6 py-5"
          whileHover={{ y: -5, rotateX: 3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="ic ic-xs ic-orange">
            <Zap size={16} />
          </div>
          <div>
            <span className="text-2xl font-black text-orange">99%</span>
            <span className="text-sm font-bold text-t1 ml-1.5">AI 섭외 자동화</span>
          </div>
        </motion.div>
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
          첫 번째 확장은 본업인 &lsquo;K-의료 해외 환자 유치&rsquo;입니다. 대형 MSO 12건, 중소형 SaaS 45건을 수주하며 시장을 장악하고 있습니다. 기존 에이전시 대비 환자 유치 비용 68% 절감, 응답률 8배 향상 — 스카웃매니저의 AI 섭외력과 다국어 CS Flow가 만들어낸 압도적 경쟁 우위입니다.
        </p>
      </motion.div>

      {/* Product Screenshot */}
      <motion.div
        className="mt-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <MedicalScreenshot />
      </motion.div>
    </SectionWrapper>
  );
}
