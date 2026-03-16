import React from 'react';
import DonorCard from './DonorCard';

export default function DonorList({ donors }) {
  if (donors.length === 0) {
    return (
      <div className="glass-panel rounded-2xl p-16 text-center shadow-sm border-dashed border-2 border-gray-300/50 bg-white/30">
        <div className="text-6xl mb-6 select-none opacity-80">🏥</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Donors Found</h3>
        <p className="text-gray-500 max-w-md mx-auto text-lg">
          We couldn't find any donors matching your current search criteria. Please try adjusting your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {donors.map((donor) => (
        <DonorCard key={donor.id} donor={donor} />
      ))}
    </div>
  );
}
