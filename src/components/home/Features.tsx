"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Mic2, FileText, Image, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { SectionBadge } from "../ui/SectionBadge";

export const Features = () => {
  const [isClient, setIsClient] = useState(false);
  const [voiceNarratorHeights, setVoiceNarratorHeights] = useState<number[]>([]);

  useEffect(() => {
    setIsClient(true);
    const heights = Array.from({ length: 20 }, () => Math.random() * 20 + 4);
    setVoiceNarratorHeights(heights);
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background glow for features */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionBadge>Features</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your go-to tool for crafting <br />
              viral Shorts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">using AI.</span>
            </h2>
            <p className="text-gray-400 text-lg">Produce an endless number of short videos simultaneously. Automatically generate captions, effects, backgrounds, and music for you.</p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="glow"
              size="md"
            >
              Try now <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="md"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Instantly Automate */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F111A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-[400px]"
          >
            <div className="relative h-40 mb-6">
              <div className="absolute inset-0 flex items-center justify-center gap-2">
                <div className="bg-[#1A1D29] px-3 py-1.5 rounded-full text-xs text-gray-400 border border-white/5 -rotate-6">Video Background</div>
                <div className="bg-purple-600 px-3 py-1.5 rounded-full text-xs text-white shadow-lg shadow-purple-500/30 z-10">Script Creation</div>
                <div className="bg-[#1A1D29] px-3 py-1.5 rounded-full text-xs text-gray-400 border border-white/5 rotate-12">Voice Narrator</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Instantly automate videos.</h3>
              <p className="text-sm text-gray-400">Generate captions, effects, music, & backgrounds in a second.</p>
            </div>
          </motion.div>

          {/* Card 2: Centerpiece AI Power */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F111A] border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              <Sparkles className="w-10 h-10 text-white fill-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2">
              Your AI-powered <br /> video <span className="text-purple-400">creator</span>
            </h3>
          </motion.div>

          {/* Card 3: Video Background */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F111A] border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-[400px]"
          >
            <div className="flex gap-2 overflow-hidden mb-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-full aspect-[3/4] rounded-lg overflow-hidden border border-white/10 relative"
                >
                  <img
                    src={`https://picsum.photos/id/${20 + i}/200/300`}
                    className="w-full h-full object-cover"
                  />
                  {i === 2 && <div className="absolute inset-0 bg-black/40" />}
                </div>
              ))}
            </div>
            <div className="text-right">
              <h3 className="text-xl font-semibold mb-2">Video Background</h3>
              <p className="text-sm text-gray-400">Choose an AI-generated custom video template from our library.</p>
            </div>
          </motion.div>

          {/* Card 4: AI Voice Narrator */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F111A] border border-white/10 rounded-3xl p-8 h-[300px] flex flex-col justify-end"
          >
            <div className="mb-auto mt-4 bg-[#1A1D29] rounded-xl p-3 border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Play
                    className="w-3 h-3 text-purple-400"
                    fill="currentColor"
                  />
                </div>
                <div className="flex-1 h-8 flex items-center gap-1">
                  {isClient &&
                    voiceNarratorHeights.map((height, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gray-600 rounded-full"
                        style={{ height: `${height}px` }}
                      ></div>
                    ))}
                </div>
              </div>
              <div className="mt-2 text-xs text-center text-purple-300 bg-purple-500/10 py-1 rounded-full">Mermaid Deep Ocean</div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold mb-1">AI Voice Narrator</h3>
              <p className="text-xs text-gray-400">Quickly generate lifelike AI voiceovers, converting text into natural-sounding narration.</p>
            </div>
          </motion.div>

          {/* Card 5: Cross Platform */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F111A] border border-white/10 rounded-3xl p-8 h-[300px] flex flex-col justify-end relative"
          >
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-20 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Play
                  className="w-4 h-4 text-white ml-0.5"
                  fill="white"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold mb-1">Cross Platform Videos</h3>
              <p className="text-xs text-gray-400">Create videos tailored for various platforms, including YouTube, Instagram, and TikTok.</p>
            </div>
          </motion.div>

          {/* Card 6: Subtitles */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#0F111A] border border-white/10 rounded-3xl p-8 h-[300px] flex flex-col justify-end"
          >
            <div className="mb-auto space-y-2 mt-4">
              <div className="bg-gray-800/50 p-2 rounded text-[10px] text-gray-400 w-fit mx-auto">There lived a certain man in Russia long ago</div>
              <div className="bg-purple-600 p-2 rounded text-xs text-white w-fit mx-auto shadow-lg">Давным-давно в России жил человек.</div>
              <div className="bg-gray-800/50 p-2 rounded text-[10px] text-gray-400 w-fit mx-auto">很久以前，在俄罗斯有一个人。</div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold mb-1">Auto Subtitle Generation.</h3>
              <p className="text-xs text-gray-400">Automatically generate clear subtitles in any language.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
