'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { ListingData } from '../types';

interface MapSectionProps {
  location: ListingData['location'];
}

export const MapSection: React.FC<MapSectionProps> = ({ location }) => {
  return (
    <div className="py-8" id="location-section">
      <h2 className="text-xl font-semibold text-neutral-900 mb-2">
        Where you’ll be
      </h2>
      <p className="text-neutral-600 text-sm mb-6 font-medium">
        {location.displayAddress} · {location.neighborhood}
      </p>

      <div className="relative w-full h-[380px] rounded-2xl overflow-hidden border border-neutral-300 shadow-inner bg-[#E5E3DF] flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#c7c2b8_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true"
        />

        <svg
          className="absolute inset-0 w-full h-full text-blue-200/40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 Q300,180 600,120 T1200,200 L1200,400 L0,400 Z"
            fill="currentColor"
          />
        </svg>

        <div className="relative z-10 flex flex-col items-center group cursor-pointer">
          <div className="bg-[#FF385C] text-white p-3.5 rounded-full shadow-xl ring-8 ring-[#FF385C]/20 transform group-hover:scale-110 transition-transform duration-200">
            <MapPin className="w-7 h-7 fill-white stroke-[#FF385C]" />
          </div>
          <div className="mt-2 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg border border-neutral-200 text-xs font-semibold text-neutral-900 flex items-center gap-1.5">
            <span>Exact location provided after booking</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex flex-col bg-white rounded-lg shadow-md border border-neutral-200 overflow-hidden text-neutral-700">
          <button className="p-2 hover:bg-neutral-100 font-bold text-base border-b border-neutral-200 w-8 h-8 flex items-center justify-center">
            +
          </button>
          <button className="p-2 hover:bg-neutral-100 font-bold text-base w-8 h-8 flex items-center justify-center">
            −
          </button>
        </div>

        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow border border-neutral-200 text-xs text-neutral-600 flex items-center gap-1.5 font-medium">
          <Navigation className="w-3.5 h-3.5 text-neutral-500" />
          <span>Coastal Malibu · 5 min walk to El Matador Beach</span>
        </div>
      </div>
    </div>
  );
};