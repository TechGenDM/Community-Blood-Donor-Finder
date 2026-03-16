import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function DonorCard({ donor, searchQuery }) {
  const [requestSent, setRequestSent] = useState(() => {
    return localStorage.getItem(`donor_request_${donor.id}`) === 'true';
  });

  const handleRequest = () => {
    if (!requestSent && donor.isAvailable) {
      setRequestSent(true);
      localStorage.setItem(`donor_request_${donor.id}`, 'true');
    }
  };

  const highlightText = (text, highlight) => {
    if (!highlight || !highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-yellow-200 text-gray-900 rounded-sm px-0.5">{part}</mark> : part
    );
  };

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
      {/* Availability Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border border-white">
        {donor.isAvailable ? (
          <>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Live</span>
          </>
        ) : (
          <>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-400"></span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Offline</span>
          </>
        )}
      </div>

      <div className="flex items-start gap-4 mb-5 mt-2">
        {/* Blood Group Badge */}
        <div className="shrink-0 w-16 h-16 rounded-full bg-vitality-red flex items-center justify-center shadow-lg shadow-vitality-red/30 ring-4 ring-white/50">
          <span className="text-2xl font-black text-white tracking-tight">{donor.bloodGroup}</span>
        </div>
        
        {/* Donor Info */}
        <div className="pr-16">
          <h3 className="text-xl font-bold text-gray-800 m-0 leading-tight">
            {highlightText(donor.name, searchQuery)}
          </h3>
          <div className="flex items-center gap-1 mt-1.5 text-gray-500">
            <MapPin size={14} className="text-vitality-red/70" />
            <span className="text-sm font-medium">
              {highlightText(donor.address?.city || 'Unknown City', searchQuery)}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5 mb-6 flex-grow">
        <div className="flex items-center gap-3 text-sm text-gray-600 bg-white/40 px-3 py-2.5 rounded-xl border border-white/50">
          <Phone size={16} className="text-gray-400 shrink-0" />
          <span className="font-mono text-[13px]">{donor.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 bg-white/40 px-3 py-2.5 rounded-xl border border-white/50 overflow-hidden">
          <Mail size={16} className="text-gray-400 shrink-0" />
          <span className="truncate">{donor.email}</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={handleRequest}
        disabled={requestSent || !donor.isAvailable}
        className={`w-full py-3.5 rounded-xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
          requestSent
            ? 'bg-emerald-500 text-white shadow-inner cursor-not-allowed border border-emerald-600'
            : !donor.isAvailable
            ? 'bg-gray-100/50 text-gray-400 cursor-not-allowed border border-gray-200'
            : 'bg-vitality-red text-white hover:bg-red-700 shadow-lg shadow-red-600/25 active:scale-[0.98] border border-red-800/20'
        }`}
      >
        {requestSent ? (
          <>
            <CheckCircle2 size={20} strokeWidth={2.5} />
            Request Sent ✅
          </>
        ) : !donor.isAvailable ? (
          'Currently Unavailable'
        ) : (
          'Request Help'
        )}
      </button>
    </div>
  );
}
