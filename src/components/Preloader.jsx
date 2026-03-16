import React from 'react';
import { Heart } from 'lucide-react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F5F5]">
      {/* Decorative blurred background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-96 h-96 bg-vitality-red/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Heart Icon Container */}
        <div className="relative mb-8">
          {/* Subtle ping ripple behind the heart */}
          <div className="absolute inset-0 bg-vitality-red/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          
          <div className="relative bg-white p-6 rounded-full shadow-xl shadow-vitality-red/10 border border-gray-100 flex items-center justify-center animate-heart-pump">
            <Heart size={48} className="text-vitality-red" fill="currentColor" />
          </div>
        </div>

        {/* Text Area */}
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter mb-3 animate-pulse">
          VITALITY NETWORK
        </h1>
        <p className="text-gray-500 font-medium tracking-wide animate-pulse" style={{ animationDelay: '150ms' }}>
          Initializing Live Donor Map...
        </p>
        
        {/* Simple Progress Bar */}
        <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-vitality-red rounded-full animate-[progress_2.5s_ease-out_forwards]"></div>
        </div>
      </div>
    </div>
  );
}
