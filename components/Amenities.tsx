'use client';

import React, { useState } from 'react';
import {
  AirVent,
  Car,
  Flame,
  FlameKindling,
  Laptop,
  ShieldAlert,
  Shirt,
  ShowerHead,
  Tv,
  UtensilsCrossed,
  Waves,
  Wifi,
  X,
  Check,
} from 'lucide-react';
import { Amenity } from '../types';

interface AmenitiesProps {
  amenities: Amenity[];
}

const getAmenityIcon = (iconName: string) => {
  const iconProps = { className: 'w-6 h-6 text-neutral-800 stroke-[1.8] flex-shrink-0' };
  switch (iconName) {
    case 'Wifi':
      return <Wifi {...iconProps} />;
    case 'Waves':
      return <Waves {...iconProps} />;
    case 'Flame':
      return <Flame {...iconProps} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed {...iconProps} />;
    case 'Laptop':
      return <Laptop {...iconProps} />;
    case 'Car':
      return <Car {...iconProps} />;
    case 'AirVent':
      return <AirVent {...iconProps} />;
    case 'Tv':
      return <Tv {...iconProps} />;
    case 'Shirt':
      return <Shirt {...iconProps} />;
    case 'ShowerHead':
      return <ShowerHead {...iconProps} />;
    case 'FlameKindling':
      return <FlameKindling {...iconProps} />;
    case 'ShieldAlert':
      return <ShieldAlert {...iconProps} />;
    default:
      return <Check {...iconProps} />;
  }
};

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  const [showAllModal, setShowAllModal] = useState(false);
  const categories = Array.from(new Set(amenities.map((a) => a.category)));

  return (
    <div className="py-7 border-b border-neutral-200">
      <h2 className="text-xl font-semibold text-neutral-900 mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {amenities.slice(0, 10).map((item) => (
          <div key={item.id} className="flex items-center gap-4 text-neutral-800">
            {getAmenityIcon(item.iconName)}
            <span className="text-[15px]">{item.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAllModal(true)}
        className="mt-7 border border-neutral-900 text-neutral-900 font-semibold px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
      >
        Show all {amenities.length} amenities
      </button>

      {showAllModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="All listing amenities"
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-fade-in">
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between sticky top-0 bg-white">
              <button
                onClick={() => setShowAllModal(false)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-700"
                aria-label="Close amenities modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-semibold text-neutral-900 text-base">
                What this place offers
              </h3>
              <div className="w-9" />
            </div>

            <div className="p-6 overflow-y-auto space-y-8">
              {categories.map((cat) => (
                <div key={cat} className="space-y-4">
                  <h4 className="font-semibold text-neutral-900 text-lg border-b border-neutral-100 pb-2">
                    {cat}
                  </h4>
                  <div className="space-y-3">
                    {amenities
                      .filter((a) => a.category === cat)
                      .map((item) => (
                        <div key={item.id} className="flex items-center gap-4 text-neutral-800 py-1">
                          {getAmenityIcon(item.iconName)}
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};