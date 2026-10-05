'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { ReviewItem, ReviewScoreBreakdown } from '../types';

interface ReviewsProps {
  rating: number;
  reviewCount: number;
  reviewScores: ReviewScoreBreakdown;
  reviews: ReviewItem[];
}

export const Reviews: React.FC<ReviewsProps> = ({
  rating,
  reviewCount,
  reviewScores,
  reviews,
}) => {
  const scoreCategories: { label: string; score: number }[] = [
    { label: 'Cleanliness', score: reviewScores.cleanliness },
    { label: 'Accuracy', score: reviewScores.accuracy },
    { label: 'Check-in', score: reviewScores.checkIn },
    { label: 'Communication', score: reviewScores.communication },
    { label: 'Location', score: reviewScores.location },
    { label: 'Value', score: reviewScores.value },
  ];

  return (
    <div className="py-8 border-b border-neutral-200" id="reviews-section">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-6 h-6 fill-neutral-900 text-neutral-900" />
        <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
          {rating.toFixed(2)} · {reviewCount} reviews
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-8">
        {scoreCategories.map((item) => {
          const percentage = (item.score / 5.0) * 100;
          return (
            <div key={item.label} className="flex items-center justify-between text-sm py-1">
              <span className="text-neutral-700 font-medium">{item.label}</span>
              <div className="flex items-center gap-3">
                <div className="w-28 sm:w-36 h-1 bg-neutral-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-neutral-900 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="font-semibold text-neutral-900 text-xs w-6 text-right">
                  {item.score.toFixed(1)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev) => (
          <div key={rev.id} className="space-y-3">
            <div className="flex items-center gap-3.5">
              <img
                src={rev.authorAvatar}
                alt={rev.authorName}
                className="w-11 h-11 rounded-full object-cover border border-neutral-200"
              />
              <div>
                <h3 className="font-semibold text-neutral-900 text-sm">
                  {rev.authorName}
                </h3>
                <p className="text-xs text-neutral-500">
                  {rev.location} · {rev.date}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-0.5 text-neutral-900">
              {Array.from({ length: rev.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <p className="text-neutral-700 text-sm leading-relaxed">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};