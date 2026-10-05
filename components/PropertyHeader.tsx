'use client';

import React, { useState } from 'react';
import { Heart, Share, Star } from 'lucide-react';
import { ListingData } from '../types';

interface PropertyHeaderProps {
  listing: ListingData;
  onReviewsClick?: () => void;
  onLocationClick?: () => void;
}

export const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  listing,
  onReviewsClick,
  onLocationClick,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [copiedAlert, setCopiedAlert] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedAlert(true);
      setTimeout(() => setCopiedAlert(false), 2500);
    }
  };

  return (
    <section className="pt-6 pb-4">
      <h1 className="text-2xl sm:text-[26px] font-semibold text-neutral-900 tracking-tight leading-snug">
        {listing.title}
      </h1>

      <div className="flex flex-wrap items-center justify-between text-sm mt-1 gap-y-2">
        <div className="flex flex-wrap items-center gap-1 text-neutral-700">
          <div className="flex items-center gap-1 font-semibold text-neutral-900">
            <Star className="w-4 h-4 fill-neutral-900 text-neutral-900" />
            <span>{listing.rating.toFixed(2)}</span>
          </div>
          <span className="text-neutral-400">·</span>
          <button
            onClick={onReviewsClick}
            className="font-semibold underline underline-offset-2 hover:text-neutral-900 transition-colors focus:outline-none"
          >
            {listing.reviewCount} reviews
          </button>
          {listing.guestFavorite && (
            <>
              <span className="text-neutral-400">·</span>
              <span className="font-medium text-neutral-800 flex items-center gap-1">
                🏆 Guest favorite
              </span>
            </>
          )}
          {listing.host.isSuperhost && (
            <>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-600">Superhost</span>
            </>
          )}
          <span className="text-neutral-400">·</span>
          <button
            onClick={onLocationClick}
            className="font-semibold underline underline-offset-2 hover:text-neutral-900 transition-colors focus:outline-none"
          >
            {listing.location.displayAddress}
          </button>
        </div>

        <div className="flex items-center gap-3 relative">
          {copiedAlert && (
            <div className="absolute -top-9 right-16 bg-neutral-900 text-white text-xs px-2.5 py-1 rounded shadow-lg animate-fade-in">
              Link copied to clipboard!
            </div>
          )}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-800 font-medium text-sm underline underline-offset-2 focus:outline-none"
            aria-label="Share this listing"
          >
            <Share className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-800 font-medium text-sm underline underline-offset-2 focus:outline-none"
            aria-label={isSaved ? 'Remove from saved wishlist' : 'Save to wishlist'}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-neutral-800'
              }`}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};