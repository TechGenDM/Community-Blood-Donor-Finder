import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col h-full animate-pulse border border-gray-200/50 bg-white/40">
      {/* Availability Badge Skeleton */}
      <div className="absolute top-4 right-4 h-7 w-16 bg-gray-200/70 rounded-full"></div>

      <div className="flex items-start gap-4 mb-5 mt-2">
        {/* Blood Group Badge Skeleton */}
        <div className="shrink-0 w-16 h-16 rounded-full bg-gray-300/60 ring-4 ring-white/50"></div>
        
        {/* Donor Info Skeleton */}
        <div className="pr-16 w-full space-y-3 pt-1">
          <div className="h-5 bg-gray-300/80 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-200/80 rounded-md w-1/2"></div>
        </div>
      </div>

      <div className="space-y-2.5 mb-6 flex-grow">
        <div className="h-[42px] bg-white/50 rounded-xl w-full border border-white/50"></div>
        <div className="h-[42px] bg-white/50 rounded-xl w-full border border-white/50"></div>
      </div>

      {/* Action Button Skeleton */}
      <div className="w-full h-[52px] bg-gray-300/50 rounded-xl mt-auto"></div>
    </div>
  );
}
