'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface DescriptionProps {
  paragraphs: string[];
}

export const Description: React.FC<DescriptionProps> = ({ paragraphs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-7 border-b border-neutral-200">
      <h2 className="text-xl font-semibold text-neutral-900 mb-4">
        About this space
      </h2>
      <div className={`space-y-4 text-neutral-700 leading-relaxed text-[15px] ${!isExpanded ? 'line-clamp-4' : ''}`}>
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center gap-1 font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700 transition-colors focus:outline-none"
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? '-rotate-90' : 'rotate-0'}`} />
      </button>
    </div>
  );
};