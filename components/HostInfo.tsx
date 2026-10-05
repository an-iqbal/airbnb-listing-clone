'use client';

import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Host } from '../types';

interface HostInfoProps {
  propertyType: string;
  host: Host;
  specs: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
}

export const HostInfo: React.FC<HostInfoProps> = ({
  propertyType,
  host,
  specs,
}) => {
  return (
    <div className="py-7 border-b border-neutral-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            {propertyType} hosted by {host.name}
          </h2>
          <p className="text-neutral-600 text-sm mt-1">
            {specs.guests} guests · {specs.bedrooms} bedrooms · {specs.beds} beds · {specs.baths} baths
          </p>
        </div>

        <div className="relative flex-shrink-0">
          <img
            src={host.avatarUrl}
            alt={host.name}
            className="w-14 h-14 rounded-full object-cover border border-neutral-200 shadow-sm"
          />
          {host.isSuperhost && (
            <div
              className="absolute -bottom-1 -right-1 bg-[#FF385C] text-white p-1 rounded-full shadow-sm"
              title="Superhost"
            >
              <Award className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-600 bg-neutral-50 border border-neutral-200/80 rounded-xl p-3">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Identity verified</span>
        </div>
        <span className="text-neutral-300">|</span>
        <div>
          <span>{host.yearsHosting} years hosting</span>
        </div>
        <span className="text-neutral-300">|</span>
        <div>
          <span>Response rate: {host.responseRate}% ({host.responseTime})</span>
        </div>
      </div>
    </div>
  );
};