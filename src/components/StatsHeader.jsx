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
        <div className="flex flex-col">
          <div className="flex justify-between items-start w-full gap-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-0">Live Donors</p>
            {/* Minimalist Pulse Map Visualization */}
            <div className="relative w-8 h-8 opacity-70" title="Active Donor Network Map">
              <svg viewBox="0 0 100 100" className="w-full h-full text-vitality-red overflow-visible">
                {/* Map abstract base */}
                <path d="M10,50 Q30,20 60,30 T90,50 T70,80 T30,80 Z" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" />
                <path d="M20,60 Q40,40 50,70 T80,40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
                
                {/* Pulsing nodes */}
                <circle cx="30" cy="45" r="3" fill="currentColor" className="animate-pulse" style={{ animationDuration: '2s' }} />
                <circle cx="30" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="animate-ping" style={{ animationDuration: '2s' }} />
                
                <circle cx="65" cy="35" r="2" fill="currentColor" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                <circle cx="65" cy="35" r="6" fill="none" stroke="currentColor" strokeWidth="1" className="animate-ping opacity-50" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                
                <circle cx="55" cy="65" r="3.5" fill="currentColor" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
                <circle cx="55" cy="65" r="10" fill="none" stroke="currentColor" strokeWidth="1" className="animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
                
                <circle cx="80" cy="55" r="2" fill="currentColor" opacity="0.6" className="animate-pulse" style={{ animationDuration: '4s' }} />
              </svg>
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-[-6px]">
            <p className="text-3xl font-black text-vitality-red m-0 leading-none">{availableCount}</p>
            <span className="text-gray-600 font-medium">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
