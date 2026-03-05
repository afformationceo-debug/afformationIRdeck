"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function AiChatBubble({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`ai-chat-bubble ${className}`}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 120, damping: 18 }}
    >
      {/* Avatar */}
      <div className="ai-chat-avatar">
        <Bot size={16} strokeWidth={2.2} />
      </div>

      {/* Bubble */}
      <div className="ai-chat-content">
        <div className="ai-chat-name">
          <span className="ai-chat-name-text">ScoutManager AI</span>
          <span className="ai-chat-status-dot" />
          <span className="ai-chat-status-text">online</span>
        </div>
        <div className="ai-chat-msg">
          {children}
        </div>
        <div className="ai-chat-typing">
          <span /><span /><span />
        </div>
      </div>
    </motion.div>
  );
}
