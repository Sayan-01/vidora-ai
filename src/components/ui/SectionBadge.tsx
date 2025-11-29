import React from "react";

export const SectionBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
      <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
        <span className="w-4 h-[1px] bg-purple-500"></span>
        {children}
        <span className="w-4 h-[1px] bg-purple-500"></span>
      </span>
    </div>
  );
};