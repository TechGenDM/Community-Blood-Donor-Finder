import React from 'react';
import { Activity } from 'lucide-react';

export default function StatsHeader({ availableCount }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 mb-8 rounded-2xl glass-panel gap-4 shadow-sm">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 m-0 tracking-tight">
          Blood Donor <span className="text-vitality-red">Finder</span>
        </h1>
        <p className="text-gray-500 mt-2 font-medium">Connect with active blood donors in your community</p>
      </div>
      
      <div className="flex items-center gap-4 bg-white/70 px-6 py-4 rounded-xl border border-white max-w-sm w-full md:w-auto justify-center md:justify-start shadow-sm transition-transform hover:scale-[1.02]">
        <div className="bg-vitality-red/10 p-4 rounded-full text-vitality-red ring-4 ring-vitality-red/5">
          <Activity size={28} strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-0">Live Donors</p>
          <div className="flex items-baseline gap-1">
            <p className="text-3xl font-black text-vitality-red m-0 leading-none">{availableCount}</p>
            <span className="text-gray-600 font-medium">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
