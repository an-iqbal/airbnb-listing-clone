'use client';

import React, { useEffect } from 'react';
import { ChevronLeft, Heart, Share, X } from 'lucide-react';
import { Photo } from '../types';

interface PhotoTourModalProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photoIndex: number) => void;
  listingTitle: string;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  photos,
  isOpen,
  onClose,
  onSelectPhoto,
  listingTitle,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = Array.from(new Set(photos.map((p) => p.category)));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour gallery"
      className="fixed inset-0 z-50 bg-white overflow-y-auto flex flex-col focus:outline-none"
    >
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-900"
            aria-label="Close photo tour and return to listing"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-800" />
          </button>
          <span className="font-semibold text-neutral-900 text-sm hidden sm:inline truncate max-w-md">
            {listingTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-800"
            aria-label="Share photos"
          >
            <Share className="w-4 h-4" />
          </button>
          <button
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-800"
            aria-label="Save listing"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="ml-2 p-2 hover:bg-neutral-100 rounded-full transition-colors text-neutral-800 font-bold"
            aria-label="Close photo tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 w-full space-y-12">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-2xl font-bold text-neutral-900">Photo tour</h2>
          <p className="text-neutral-500 text-sm mt-1">
            Browse high-resolution photographs ({photos.length} photos)
          </p>
        </div>

        {categories.map((category) => {
          const categoryPhotos = photos
            .map((photo, index) => ({ photo, index }))
            .filter(({ photo }) => photo.category === category);

          if (categoryPhotos.length === 0) return null;

          return (
            <section key={category} className="space-y-6">
              <h3 className="text-xl font-bold text-neutral-900">{category}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryPhotos.map(({ photo, index }) => (
                  <figure
                    key={photo.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectPhoto(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectPhoto(index);
                      }
                    }}
                    className="group cursor-pointer rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="p-3.5 bg-white">
                      <h4 className="font-semibold text-neutral-900 text-sm">{photo.title}</h4>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">{photo.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};