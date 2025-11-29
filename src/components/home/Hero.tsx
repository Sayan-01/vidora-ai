"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wand2, Image as ImageIcon, Music, Type, Sliders, ChevronDown, Wand, Play, Mic, Video } from "lucide-react";
import { Button } from "../ui/button";
import { SectionBadge } from "../ui/SectionBadge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => {
  const [audioVisualizationHeights, setAudioVisualizationHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights = Array.from({ length: 40 }, () => Math.random() * 80 + 20);
    setAudioVisualizationHeights(heights);
  }, []);

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item}>
            <SectionBadge>Unlock Your Creative Potential</SectionBadge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tigh"
          >
            Fastest & Easiest Way <br />
            to Generate Short <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Videos</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto"
          >
            Generate unlimited short videos at once with automatic captions, effects, backgrounds, and music.
          </motion.p>

          <motion.div variants={item}>
            <Button
              variant="glow"
              size="lg"
              className="rounded-full px-10"
            >
              Start 7 Days Trial <ChevronDown className="w-4 h-4 ml-2 -rotate-90" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Mock Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 w-full max-w-5xl mx-auto"
        >
          <div className="relative bg-[#0F111A] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden group">
            {/* Glow effect on border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column: Input */}
              <div className="md:col-span-5 space-y-4 text-left">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Wand2 className="w-4 h-4" />
                  <span className="text-sm font-semibold">Turn your Text into Video</span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400">Select video type</label>
                  <div className="bg-[#1A1D29] border border-white/10 rounded-lg p-3 flex justify-between items-center text-sm text-gray-300">
                    <span>I want Explainer Videos</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400">Write your #Prompt in your language</label>
                  <div className="bg-[#1A1D29] border border-white/10 rounded-lg p-4 h-32 text-xs text-gray-400 leading-relaxed relative">
                    Imagine a playful elephant calf skating on snow, decked out in a vibrant patchwork outfit and oversized glasses. It glides effortlessly on sparkling ice skates, leaving a colorful
                    trail behind.
                    <div className="absolute bottom-3 right-3 text-[10px] text-gray-600">145/500</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 justify-center gap-2"
                >
                  <Wand className="w-4 h-4" /> Generate
                </Button>
              </div>

              {/* Right Column: Preview */}
              <div className="md:col-span-7 flex flex-col gap-4">
                {/* Images Grid */}
                <div className="flex gap-4 h-48">
                  {/* Main Large Image */}
                  <div className="flex-1 rounded-xl overflow-hidden relative border border-white/5 group-hover:border-purple-500/20 transition-colors">
                    <img
                      src="https://picsum.photos/id/1062/400/300"
                      alt="Elephant skating"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm p-1 rounded-md">
                      <Video className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  {/* Side Images */}
                  <div className="w-1/3 flex flex-col gap-4">
                    <div className="flex-1 rounded-xl overflow-hidden border border-white/5">
                      <img
                        src="https://picsum.photos/id/1070/200/150"
                        alt="Detail 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 rounded-xl overflow-hidden border border-white/5">
                      <img
                        src="https://picsum.photos/id/1080/200/150"
                        alt="Detail 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Tools strip */}
                  <div className="w-10 flex flex-col gap-2 justify-center">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-[#1A1D29] border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audio Visualization */}
                <div className="bg-[#1A1D29] rounded-xl p-4 border border-white/5 flex items-center justify-center h-24 relative overflow-hidden">
                  <div className="flex items-center gap-1 h-full w-full justify-center px-4">
                    {audioVisualizationHeights.map((height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-pulse"
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Play
                        className="w-4 h-4 text-white ml-0.5"
                        fill="white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar inside Mock */}
            <div className="mt-6 flex justify-center gap-8 border-t border-white/5 pt-4">
              {[
                { icon: Mic, text: "AI Voice" },
                { icon: ImageIcon, text: "AI Backgrounds" },
                { icon: Type, text: "AI Script Generator" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-gray-400 px-4 py-2 rounded-full border border-white/5 bg-white/5"
                >
                  <feature.icon className="w-3 h-3 text-purple-400" />
                  {feature.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
