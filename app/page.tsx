'use client';


import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { PropertyHeader } from '../components/PropertyHeader';
import { BentoGrid } from '../components/BentoGrid';
import { HostInfo } from '../components/HostInfo';
import { Highlights } from '../components/Highlights';
import { Description } from '../components/Description';
import { Amenities } from '../components/Amenities';
import { Reviews } from '../components/Reviews';
import { MapSection } from '../components/MapSection';
import { BookingWidget } from '../components/BookingWidget';
import { PhotoTourModal } from '../components/PhotoTourModal';
import { LightboxModal } from '../components/LightboxModal';
import { listingData } from '../data/listingData';
import { ActiveView } from '../types';


export default function ListingPage() {
  const [activeView, setActiveView] = useState<ActiveView>('listing');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);


  useEffect(() => {
    if (activeView !== 'listing') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }


    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeView]);


  const handleOpenPhotoTour = (initialIndex: number = 0) => {
    setCurrentPhotoIndex(initialIndex);
    setActiveView('photoTour');
  };


  const handleClosePhotoTour = () => {
    setActiveView('listing');
  };


  const handleOpenLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setActiveView('lightbox');
  };


  const handleCloseLightbox = () => {
    setActiveView('photoTour');
  };


  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % listingData.photos.length);
  };


  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? listingData.photos.length - 1 : prev - 1
    );
  };


  const scrollToReviews = () => {
    const el = document.getElementById('reviews-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };


  const scrollToLocation = () => {
    const el = document.getElementById('location-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-[#FF385C]/20">
      <Navbar onSearchClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })} />


      <main className="max-w-[1280px] mx-auto px-6 pb-20 w-full flex-1">
        <PropertyHeader
          listing={listingData}
          onReviewsClick={scrollToReviews}
          onLocationClick={scrollToLocation}
        />


        <BentoGrid
          photos={listingData.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
        />


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2 space-y-2">
            <HostInfo
              propertyType={listingData.propertyType}
              host={listingData.host}
              specs={listingData.specs}
            />
            <Highlights highlights={listingData.highlights} />
            <Description paragraphs={listingData.description} />
            <Amenities amenities={listingData.amenities} />
            <Reviews
              rating={listingData.rating}
              reviewCount={listingData.reviewCount}
              reviewScores={listingData.reviewScores}
              reviews={listingData.reviews}
            />
            <MapSection location={listingData.location} />
          </div>


          <div className="lg:col-span-1 relative">
            <BookingWidget
              listing={listingData}
              onReviewsClick={scrollToReviews}
            />
          </div>
        </div>
      </main>


      <PhotoTourModal
        photos={listingData.photos}
        isOpen={activeView === 'photoTour'}
        onClose={handleClosePhotoTour}
        onSelectPhoto={handleOpenLightbox}
        listingTitle={listingData.title}
      />


      <LightboxModal
        photos={listingData.photos}
        currentIndex={currentPhotoIndex}
        isOpen={activeView === 'lightbox'}
        onClose={handleCloseLightbox}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        onSelectIndex={(idx) => setCurrentPhotoIndex(idx)}
      />
    </div>
  );
}