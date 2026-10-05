'use client';

import React, { useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Photo } from '../types';

interface LightboxModalProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}) => {
  const currentPhoto = photos[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="High-resolution image viewer"
      className="fixed inset-0 z-[60] bg-black/95 flex flex-col justify-between text-white select-none animate-fade-in"
    >
      <header className="px-6 py-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-sm font-semibold tracking-wide text-neutral-300">
          {currentIndex + 1} / {photos.length}
        </div>

        <div className="hidden md:block text-xs text-neutral-400 font-medium truncate max-w-lg text-center">
          {currentPhoto.title} — {currentPhoto.category}
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close photo viewer and return to gallery"
        >
          <X className="w-6 h-6 stroke-[2]" />
        </button>
      </header>

      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 overflow-hidden">
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white border border-white/20 transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="max-h-[80vh] max-w-[85vw] flex items-center justify-center">
          <img
            key={currentPhoto.id}
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className="max-h-[78vh] max-w-[84vw] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ease-in-out"
            loading="eager"
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white border border-white/20 transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <footer className="px-6 py-4 flex flex-col items-center justify-center gap-2 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <p className="text-sm font-medium text-neutral-200 text-center max-w-xl">
          {currentPhoto.caption}
        </p>

        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-2xl py-1 px-2 scrollbar-none">
          {photos.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => onSelectIndex(idx)}
              className={`relative flex-shrink-0 w-12 h-9 rounded overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-white scale-105 opacity-100'
                  : 'border-transparent opacity-40 hover:opacity-80'
              }`}
              aria-label={`Thumbnail ${idx + 1}`}
            >
              <img
                src={p.thumbnailUrl || p.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};