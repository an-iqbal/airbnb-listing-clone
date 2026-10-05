'use client';

import React from 'react';
import { Grid3X3 } from 'lucide-react';
import { Photo } from '../types';

interface BentoGridProps {
  photos: Photo[];
  onOpenPhotoTour: (initialPhotoIndex?: number) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  photos,
  onOpenPhotoTour,
}) => {
  const heroPhotos = photos.slice(0, 5);
  const mainPhoto = heroPhotos[0];
  const gridPhotos = heroPhotos.slice(1, 5);

  return (
    <section aria-label="Listing photo gallery" className="relative mt-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[360px] md:h-[450px] lg:h-[490px] rounded-2xl overflow-hidden">
        <div
          role="button"
          tabIndex={0}
          onClick={() => onOpenPhotoTour(0)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenPhotoTour(0);
            }
          }}
          className="md:col-span-2 relative h-full w-full overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 z-0"
          aria-label={`View photo 1 of ${photos.length}: ${mainPhoto?.title || 'Main view'}`}
        >
          {mainPhoto && (
            <img
              src={mainPhoto.url}
              alt={mainPhoto.title}
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300 ease-out"
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 pointer-events-none" />
        </div>

        <div className="hidden md:grid md:col-span-2 grid-cols-2 grid-rows-2 gap-2 h-full">
          {gridPhotos.map((photo, index) => {
            const photoIndex = index + 1;
            const isLast = index === 3;

            return (
              <div
                key={photo.id}
                role="button"
                tabIndex={0}
                onClick={() => onOpenPhotoTour(photoIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenPhotoTour(photoIndex);
                  }
                }}
                className="relative h-full w-full overflow-hidden cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                aria-label={`View photo ${photoIndex + 1} of ${photos.length}: ${photo.title}`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 pointer-events-none" />

                {isLast && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenPhotoTour(0);
                    }}
                    className="absolute bottom-4 right-4 z-10 bg-white/95 hover:bg-white text-neutral-900 border border-neutral-800/15 py-1.5 px-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm font-semibold flex items-center gap-2 backdrop-blur-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    aria-label={`Show all ${photos.length} photos`}
                  >
                    <Grid3X3 className="w-4 h-4 stroke-[2.2]" />
                    <span>Show all photos</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};