import React from "react";
import { Button } from "../ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large CTA Card */}
        <div className="relative rounded-[1rem] md:rounded-[3rem] p-12 overflow-hidden text-center mb-20 bg-[#0F111A] border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 opacity-50" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Magic</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Create endless short videos simultaneously with automatic captions, effects, backgrounds, and music.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="glow" size="lg" className="px-8">Try now <ArrowRight className="ml-2 w-4 h-4" /></Button>
                    <Button variant="secondary" size="lg" className="px-8 rounded-full border-white/20">Learn more</Button>
                </div>
            </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" fill="white" />
                    </div>
                    <span className="text-xl font-bold">Vidora AI</span>
                </div>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-purple-400">Updates</a></li>
                    <li><a href="#" className="hover:text-purple-400">Status</a></li>
                    <li><a href="#" className="hover:text-purple-400">About</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-white mb-4">Social</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-purple-400">Discord</a></li>
                    <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
                    <li><a href="#" className="hover:text-purple-400">Twitter (X)</a></li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};