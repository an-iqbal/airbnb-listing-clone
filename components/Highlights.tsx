'use client';

import React from 'react';
import { Award, Calendar, Key, Laptop, ShieldCheck, Sparkles } from 'lucide-react';
import { Highlight } from '../types';

interface HighlightsProps {
  highlights: Highlight[];
}

const renderIcon = (name: Highlight['iconName']) => {
  const iconProps = { className: 'w-6 h-6 text-neutral-800 stroke-[1.8] flex-shrink-0 mt-0.5' };
  switch (name) {
    case 'Award':
      return <Award {...iconProps} />;
    case 'Key':
      return <Key {...iconProps} />;
    case 'Laptop':
      return <Laptop {...iconProps} />;
    case 'Calendar':
      return <Calendar {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Sparkles':
    default:
      return <Sparkles {...iconProps} />;
  }
};

export const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <div className="py-7 border-b border-neutral-200 space-y-6">
      {highlights.map((item) => (
        <div key={item.id} className="flex items-start gap-4">
          {renderIcon(item.iconName)}
          <div>
            <h3 className="font-semibold text-neutral-900 text-base leading-snug">
              {item.title}
            </h3>
            <p className="text-neutral-500 text-sm mt-0.5 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};