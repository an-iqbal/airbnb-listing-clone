'use client';

import React, { useState } from 'react';
import { ChevronDown, Minus, Plus, Star, X } from 'lucide-react';
import { GuestCounts, ListingData, PriceBreakdown } from '../types';

interface BookingWidgetProps {
  listing: ListingData;
  onReviewsClick?: () => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  listing,
  onReviewsClick,
}) => {
  const [checkInDate, setCheckInDate] = useState('2026-10-12');
  const [checkOutDate, setCheckOutDate] = useState('2026-10-17');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isBookedModalOpen, setIsBookedModalOpen] = useState(false);

  const [guests, setGuests] = useState<GuestCounts>({
    adults: 2,
    children: 1,
    infants: 0,
    pets: 0,
  });

  const start = new Date(checkInDate);
  const end = new Date(checkOutDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))) || 5;

  const totalGuests = guests.adults + guests.children;
  const baseRate = listing.pricing.basePricePerNight;
  const staySubtotal = nights * baseRate;
  const cleaningFee = listing.pricing.cleaningFee;
  const serviceFee = Math.round(staySubtotal * listing.pricing.serviceFeeRate);
  const taxes = Math.round(staySubtotal * listing.pricing.occupancyTaxesRate);
  const total = staySubtotal + cleaningFee + serviceFee + taxes;

  const updateGuests = (field: keyof GuestCounts, delta: number) => {
    setGuests((prev) => {
      const current = prev[field];
      const updated = current + delta;
      if (updated < 0) return prev;
      if (field === 'adults' && updated < 1) return prev;

      const newAdults = field === 'adults' ? updated : prev.adults;
      const newChildren = field === 'children' ? updated : prev.children;
      if (newAdults + newChildren > listing.pricing.maxGuests) {
        return prev;
      }

      return { ...prev, [field]: updated };
    });
  };

  const formatDateDisplay = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <aside className="w-full">
      <div className="sticky top-28 bg-white rounded-2xl border border-neutral-200/90 shadow-xl p-6 transition-shadow hover:shadow-2xl">
        <div className="flex items-baseline justify-between mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-neutral-900">${baseRate}</span>
            <span className="text-neutral-500 text-base font-normal">/ night</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-neutral-800">
            <Star className="w-3.5 h-3.5 fill-neutral-900 text-neutral-900" />
            <span className="font-semibold">{listing.rating.toFixed(2)}</span>
            <span className="text-neutral-400">·</span>
            <button
              onClick={onReviewsClick}
              className="text-neutral-500 underline font-medium hover:text-neutral-900 transition-colors"
            >
              {listing.reviewCount} reviews
            </button>
          </div>
        </div>

        <div className="border border-neutral-400 rounded-xl overflow-hidden mb-4 relative bg-white">
          <div className="grid grid-cols-2 divide-x divide-neutral-400 border-b border-neutral-400">
            <button
              onClick={() => {
                setIsDatePickerOpen(!isDatePickerOpen);
                setIsGuestsOpen(false);
              }}
              className="p-3 text-left hover:bg-neutral-50 transition-colors focus:outline-none"
            >
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-800">
                Check-in
              </div>
              <div className="text-sm font-normal text-neutral-900 truncate mt-0.5">
                {formatDateDisplay(checkInDate)}
              </div>
            </button>

            <button
              onClick={() => {
                setIsDatePickerOpen(!isDatePickerOpen);
                setIsGuestsOpen(false);
              }}
              className="p-3 text-left hover:bg-neutral-50 transition-colors focus:outline-none"
            >
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-800">
                Checkout
              </div>
              <div className="text-sm font-normal text-neutral-900 truncate mt-0.5">
                {formatDateDisplay(checkOutDate)}
              </div>
            </button>
          </div>

          <button
            onClick={() => {
              setIsGuestsOpen(!isGuestsOpen);
              setIsDatePickerOpen(false);
            }}
            className="w-full p-3 text-left hover:bg-neutral-50 transition-colors flex items-center justify-between focus:outline-none"
            aria-expanded={isGuestsOpen}
          >
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-800">
                Guests
              </div>
              <div className="text-sm font-normal text-neutral-900 mt-0.5">
                {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
                {guests.infants > 0 && `, ${guests.infants} infant${guests.infants > 1 ? 's' : ''}`}
                {guests.pets > 0 && `, ${guests.pets} pet${guests.pets > 1 ? 's' : ''}`}
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-neutral-600 transition-transform ${
                isGuestsOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isDatePickerOpen && (
            <div className="absolute top-full left-0 right-0 z-30 bg-white border border-neutral-300 rounded-xl shadow-2xl p-4 mt-2 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="text-xs font-bold uppercase text-neutral-700">
                  Select Trip Dates
                </span>
                <button
                  onClick={() => setIsDatePickerOpen(false)}
                  className="p-1 hover:bg-neutral-100 rounded text-neutral-500"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="space-y-3 mt-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-neutral-600 font-medium">Check-in:</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="border border-neutral-300 rounded-lg px-2.5 py-1.5 text-xs text-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-neutral-600 font-medium">Checkout:</label>
                  <input
                    type="date"
                    value={checkOutDate}
                    min={checkInDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="border border-neutral-300 rounded-lg px-2.5 py-1.5 text-xs text-neutral-800"
                  />
                </div>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-neutral-500">{nights} nights selected</span>
                  <button
                    onClick={() => setIsDatePickerOpen(false)}
                    className="bg-neutral-900 text-white px-3 py-1.5 rounded-md font-medium hover:bg-neutral-800"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}

          {isGuestsOpen && (
            <div className="absolute top-full left-0 right-0 z-30 bg-white border border-neutral-300 rounded-xl shadow-2xl p-4 mt-2 space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Adults</div>
                  <div className="text-xs text-neutral-500">Age 13+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateGuests('adults', -1)}
                    disabled={guests.adults <= 1}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 disabled:opacity-30"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{guests.adults}</span>
                  <button
                    onClick={() => updateGuests('adults', 1)}
                    disabled={totalGuests >= listing.pricing.maxGuests}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 disabled:opacity-30"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Children</div>
                  <div className="text-xs text-neutral-500">Ages 2–12</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateGuests('children', -1)}
                    disabled={guests.children <= 0}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 disabled:opacity-30"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">{guests.children}</span>
                  <button
                    onClick={() => updateGuests('children', 1)}
                    disabled={totalGuests >= listing.pricing.maxGuests}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 disabled:opacity-30"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500">
                  Max {listing.pricing.maxGuests} guests
                </span>
                <button
                  onClick={() => setIsGuestsOpen(false)}
                  className="text-xs font-semibold underline text-neutral-900"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsBookedModalOpen(true)}
          className="w-full bg-gradient-to-r from-[#FF385C] via-[#E00B41] to-[#D70466] hover:brightness-105 active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FF385C]/30 text-base"
        >
          Reserve
        </button>

        <p className="text-center text-xs text-neutral-500 mt-3 font-normal">
          You won’t be charged yet
        </p>

        <div className="mt-6 space-y-3 text-sm text-neutral-700">
          <div className="flex justify-between items-center">
            <span className="underline underline-offset-2">
              ${baseRate} × {nights} {nights === 1 ? 'night' : 'nights'}
            </span>
            <span>${staySubtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="underline underline-offset-2">Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="underline underline-offset-2">Airbnb service fee</span>
            <span>${serviceFee}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="underline underline-offset-2">Taxes & fees</span>
            <span>${taxes}</span>
          </div>

          <div className="border-t border-neutral-200 pt-4 flex justify-between items-baseline text-neutral-900 font-bold text-base">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {isBookedModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-fade-in space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-bold text-neutral-900">Reservation Request</h3>
              <button onClick={() => setIsBookedModalOpen(false)} className="p-1 hover:bg-neutral-100 rounded-full">
                <X className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
            <div className="space-y-2 text-sm text-neutral-700">
              <p className="font-semibold text-neutral-900">{listing.title}</p>
              <p>📅 <strong>Dates:</strong> {formatDateDisplay(checkInDate)} – {formatDateDisplay(checkOutDate)} ({nights} nights)</p>
              <p>👥 <strong>Guests:</strong> {totalGuests} guests</p>
              <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 mt-3">
                <div className="flex justify-between font-bold text-neutral-900">
                  <span>Grand Total:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsBookedModalOpen(false)}
              className="w-full bg-[#FF385C] text-white py-2.5 rounded-xl font-semibold hover:bg-[#E00B41] transition-colors"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};