import React from "react";
import { Instagram, Youtube, Facebook, Twitter, Music2, AtSign } from "lucide-react";
import { SectionBadge } from "../ui/SectionBadge";
import { Button } from "../ui/button";

const platforms = [
  { icon: Instagram, name: "Instagram Reels", desc: "Transform Instagram Reels into engaging content by adding gameplay to captivate viewers." },
  { icon: Music2, name: "TikTok Videos", desc: "Elevate your TikTok videos by adding gameplay to create captivating and entertaining content." },
  { icon: Youtube, name: "Youtube Shorts", desc: "Enhance your YouTube Shorts by adding gameplay to create dynamic and engaging content." },
  { icon: Facebook, name: "Facebook Reels", desc: "Transform Facebook Reels into engaging content by adding gameplay to captivate your viewers." },
  { icon: Twitter, name: "Twitter (X) videos", desc: "Enhance your X videos by incorporating gameplay to grab attention and keep viewers hooked." },
  { icon: AtSign, name: "Thread Videos", desc: "Boost your Thread videos with gameplay! Engaging visuals captivate viewers and enhance your content." },
];

export const SocialGrowth = () => {
  return (
    <section  className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <SectionBadge>Social Tools</SectionBadge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful tool for <br />
            boosting social media <span className="text-purple-400">growth</span>
        </h2>
        <p className="text-gray-400 mb-8">
            Produce unlimited short videos simultaneously with automatic generation of captions, effects, backgrounds, and music.
        </p>
        <Button variant="glow" size="lg">Try now</Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-[#0F111A] hover:bg-[#151722] transition-all">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <p.icon className="w-6 h-6 text-gray-300 group-hover:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};