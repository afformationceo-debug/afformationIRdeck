"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavGroup {
  group: string;
  items: { id: string; label: string }[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    group: "Cover",
    items: [{ id: "cover", label: "Cover" }],
  },
  {
    group: "Proof",
    items: [
      { id: "proof", label: "Proof" },
      { id: "origin", label: "Origin" },
    ],
  },
  {
    group: "Tech",
    items: [
      { id: "bottleneck", label: "Breakthrough" },
      { id: "demo", label: "Demo" },
    ],
  },
  {
    group: "Ecosystem",
    items: [
      { id: "ecosystem", label: "Ecosystem" },
      { id: "medical", label: "K-Medical" },
      { id: "commerce", label: "K-Commerce" },
    ],
  },
  {
    group: "Growth",
    items: [
      { id: "global", label: "Global SaaS" },
      { id: "fintech", label: "Fintech" },
    ],
  },
  {
    group: "Finance",
    items: [{ id: "financial", label: "J-Curve" }],
  },
  {
    group: "Ask",
    items: [
      { id: "ask", label: "The Ask" },
      { id: "appendix", label: "Appendix" },
    ],
  },
];

const ALL_ITEMS = NAV_GROUPS.flatMap((g) => g.items);

function getGroupForId(id: string): string {
  for (const g of NAV_GROUPS) {
    if (g.items.some((item) => item.id === id)) return g.group;
  }
  return "Cover";
}

function getLabelForId(id: string): string {
  for (const item of ALL_ITEMS) {
    if (item.id === id) return item.label;
  }
  return "";
}

export default function Navigation() {
  const [active, setActive] = useState("cover");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ALL_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeGroup = getGroupForId(active);
  const activeLabel = getLabelForId(active);

  return (
    <>
      {/* Top Compact Bar */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 py-2.5"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(232,226,220,0.5)",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-black text-[#FF6B2C]">Afformation</span>
              <span className="text-[10px] text-t4">/</span>
              <span className="text-[11px] font-semibold text-t2">{activeLabel}</span>
            </div>
            <div className="flex items-center gap-2">
              {NAV_GROUPS.map((g) => (
                <button
                  key={g.group}
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all duration-200 ${
                    activeGroup === g.group
                      ? "bg-[#FF6B2C] text-white"
                      : "text-t3 hover:text-t1 hover:bg-[#F3F0EB]"
                  }`}
                  onClick={() => {
                    document.getElementById(g.items[0].id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {g.group}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Dot Navigation */}
      <AnimatePresence>
        {show && (
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-1"
          >
            {NAV_GROUPS.map((group) => (
              <div key={group.group} className="flex flex-col items-end gap-[4px] mb-1.5">
                {/* Group label */}
                <span className="text-[8px] font-bold uppercase tracking-widest text-t4 mr-1 mb-0.5">
                  {group.group}
                </span>
                {group.items.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="group flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span
                      className={`text-[9px] font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                        active === id
                          ? "text-[#FF6B2C] opacity-100 translate-x-0"
                          : "text-[#999] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      className={`block rounded-full transition-all duration-200 flex-shrink-0 ${
                        active === id
                          ? "w-2.5 h-2.5 bg-[#FF6B2C] shadow-[0_0_6px_rgba(255,107,44,0.4)]"
                          : "w-[5px] h-[5px] bg-[#D4CCC4] group-hover:bg-[#FF8F5C] group-hover:scale-125"
                      }`}
                    />
                  </a>
                ))}
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
