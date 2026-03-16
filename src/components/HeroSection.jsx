import React from 'react';
import FilterBar from './FilterBar';
import StatsHeader from './StatsHeader';

export default function HeroSection({ 
  searchQuery, 
  setSearchQuery, 
  selectedBloodGroup, 
  setSelectedBloodGroup,
  bloodGroups,
  availableCount
}) {
  return (
    <div className="mb-12 relative isolate">
      {/* Decorative Blob Backgrounds */}
      <div className="absolute top-0 right-0 -z-10 w-full h-[500px] bg-gradient-to-b from-vitality-red/5 to-transparent rounded-b-3xl"></div>
      <div className="absolute top-[-20%] left-[-10%] -z-10 w-96 h-96 bg-vitality-red/10 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-10 pt-4">
        {/* Left Side: Welcome & Action */}
        <div className="max-w-xl text-center lg:text-left z-10 w-full animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vitality-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-vitality-red"></span>
            </span>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Live Network</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Connecting <span className="text-vitality-red relative">Heroes
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-vitality-red/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span><br />
            With Those in Need
          </h1>
          
          <p className="text-xl text-gray-500 font-medium mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Find and request help from local community blood donors instantly. Your search could save a life today.
          </p>

          <StatsHeader availableCount={availableCount} />
        </div>

        {/* Right Side: Medical Illustration */}
        <div className="w-full lg:w-[45%] lg:max-w-lg animate-fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-white/50 rounded-full flex items-center justify-center p-8 backdrop-blur-sm border border-white shadow-xl shadow-vitality-red/5">
                {/* Abstract Medical Network Illustration */}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                    <defs>
                        <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D32F2F" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ff5252" stopOpacity="0.9" />
                        </linearGradient>
                        <linearGradient id="softGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff8a80" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ff5252" stopOpacity="0.4" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    
                    {/* Background Nodes */}
                    <circle cx="40" cy="50" r="15" fill="url(#softGrad)" className="animate-pulse" style={{ animationDuration: '3s' }} />
                    <circle cx="160" cy="70" r="25" fill="url(#softGrad)" className="animate-pulse" style={{ animationDuration: '4s' }} />
                    <circle cx="150" cy="160" r="18" fill="url(#softGrad)" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
                    <circle cx="50" cy="150" r="12" fill="url(#softGrad)" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
                    
                    {/* Connecting Lines */}
                    <path d="M40 50 Q 80 40 100 100 T 160 70" stroke="url(#softGrad)" strokeWidth="3" fill="none" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M40 50 Q 60 120 100 100 T 150 160" stroke="#ff8a80" strokeWidth="2" fill="none" opacity="0.5" />
                    <path d="M160 70 Q 120 130 100 100 T 50 150" stroke="#ff8a80" strokeWidth="2" fill="none" opacity="0.5" />
                    
                    {/* Main Drop Symbol */}
                    <g transform="translate(100, 100) scale(1.2)" filter="url(#glow)">
                        <path d="M 0 -35 C 15 -10 25 5 25 15 C 25 28 15 35 0 35 C -15 35 -25 28 -25 15 C -25 5 -15 -10 0 -35 Z" fill="url(#mainGrad)" />
                        <path d="M -5 15 L 5 15 M 0 10 L 0 20" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                        <circle cx="8" cy="5" r="3" fill="white" opacity="0.4" />
                    </g>
                </svg>
                
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="font-bold text-vitality-red tracking-tighter">O+</span>
                </div>
                <div className="absolute bottom-12 left-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <span className="font-bold text-vitality-red tracking-tighter">AB-</span>
                </div>
            </div>
        </div>
      </div>

      <div className="animate-fade-in-up w-full" style={{ animationDelay: '300ms' }}>
          <FilterBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedBloodGroup={selectedBloodGroup}
            setSelectedBloodGroup={setSelectedBloodGroup}
            bloodGroups={bloodGroups}
          />
      </div>
    </div>
  );
}
