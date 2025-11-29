"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "../ui/SectionBadge";
import { PenTool, Sliders, Share2 } from "lucide-react";

const steps = [
  {
    step: "1. Write & Outline",
    desc: "Kick off by crafting a script with a prompt or by choosing from available template suggestions.",
    title: "Enter Your Story Topic",
    mock: (
      <div className="bg-[#1A1D29] p-4 rounded-lg space-y-3">
        <div className="text-xs text-gray-500">Write a story about Spanish lullaby</div>
        <div className="h-2 w-full bg-white/5 rounded"></div>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-[10px] rounded border border-purple-500/30">Funny ×</span>
          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-[10px] rounded border border-purple-500/30">Fairy ×</span>
          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-[10px] rounded border border-purple-500/30">Lullaby ×</span>
        </div>
      </div>
    ),
  },
  {
    step: "2. Customise & Style",
    desc: "Select orientation and pick a background scene and music from free templates.",
    title: "Video Orientation",
    mock: (
      <div className="space-y-4">
        <div className="flex gap-2 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-16 h-10 bg-white/5 rounded border border-white/10 shrink-0 relative overflow-hidden"
            >
              <img
                src={`https://picsum.photos/id/${100 + i}/100/100`}
                className="opacity-50 object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] text-gray-400 bg-[#1A1D29] p-2 rounded">
          <span>Beach Mermaid</span>
          <span>Deep Ocean</span>
        </div>
      </div>
    ),
  },
  {
    step: "3. Finish & Export",
    desc: "Select the export format and download the generated videos, script, or narration.",
    title: "Download",
    mock: (
      <div className="flex items-center justify-center h-full py-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-pulse-slow">
          <Share2 className="w-8 h-8 text-white" />
        </div>
      </div>
    ),
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge>How it works</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Turn ideas into <br />
            short videos in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">seconds.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">Produce endless short videos instantly. Automatically generate captions, effects, backgrounds, and music.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0F111A] border border-white/10 rounded-2xl p-1 overflow-hidden hover:border-purple-500/30 transition-colors"
            >
              <div className="bg-[#151722] rounded-xl p-6 h-48 mb-1 flex flex-col justify-center border-b border-white/5">
                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{item.title}</div>
                {item.mock}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{item.step}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
