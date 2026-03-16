import React from 'react';
import { Search, Droplet } from 'lucide-react';

export default function FilterBar({ 
  searchQuery, 
  setSearchQuery, 
  selectedBloodGroup, 
  setSelectedBloodGroup,
  bloodGroups 
}) {
  return (
    <div className="glass-panel rounded-2xl p-6 mb-8 flex flex-col lg:flex-row gap-6 items-center justify-between shadow-sm">
      {/* Search Input */}
      <div className="relative w-full lg:w-96 shrink-0">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
          <Search size={22} strokeWidth={2.5} />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-3.5 bg-white/70 border border-gray-200/60 rounded-xl text-gray-800 font-medium placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-vitality-red/10 focus:border-vitality-red/50 focus:bg-white transition-all shadow-sm"
          placeholder="Search by name or city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Blood Group Pills */}
      <div className="w-full flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 flex-nowrap scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex items-center gap-2 text-gray-600 mr-2 font-semibold bg-white/50 px-4 py-2.5 rounded-xl border border-gray-100 shrink-0 shadow-sm">
          <Droplet size={18} className="text-vitality-red" fill="currentColor" fillOpacity={0.2} />
          <span className="text-sm">Filter Groups:</span>
        </div>
        
        <button
          onClick={() => setSelectedBloodGroup('All')}
          className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-sm ${
            selectedBloodGroup === 'All'
              ? 'bg-vitality-red text-white border-vitality-red ring-2 ring-vitality-red/20 ring-offset-1 ring-offset-transparent'
              : 'bg-white/80 text-gray-600 border-gray-200 hover:bg-white hover:border-vitality-red/40 hover:text-vitality-red'
          }`}
        >
          All
        </button>
        
        {bloodGroups.map((bg) => (
          <button
            key={bg}
            onClick={() => setSelectedBloodGroup(bg)}
            className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-sm ${
              selectedBloodGroup === bg
                ? 'bg-vitality-red text-white border-vitality-red ring-2 ring-vitality-red/20 ring-offset-1 ring-offset-transparent outline-none cursor-default'
                : 'bg-white/80 text-gray-600 border-gray-200 hover:bg-white hover:border-vitality-red/40 hover:text-vitality-red'
            }`}
          >
            {bg}
          </button>
        ))}
      </div>
    </div>
  );
}
