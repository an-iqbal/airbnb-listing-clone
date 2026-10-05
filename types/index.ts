export interface Photo {
  id: string;
  url: string;
  thumbnailUrl?: string;
  title: string;
  caption: string;
  category: 'Exterior' | 'Living Room' | 'Bedroom' | 'Kitchen' | 'Bathroom' | 'Views' | 'Patio & Pool';
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface Host {
  name: string;
  avatarUrl: string;
  isSuperhost: boolean;
  yearsHosting: number;
  responseRate: number;
  responseTime: string;
  coHosts?: string[];
  bio: string;
}

export interface Highlight {
  id: string;
  iconName: 'Sparkles' | 'Key' | 'Calendar' | 'Laptop' | 'ShieldCheck' | 'Award';
  title: string;
  description: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: string;
  iconName: string;
  available: boolean;
}

export interface ReviewScoreBreakdown {
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface ReviewItem {
  id: string;
  authorName: string;
  authorAvatar: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
}

export interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

export interface PricingConfig {
  basePricePerNight: number;
  weekendPricePerNight?: number;
  cleaningFee: number;
  serviceFeeRate: number;
  occupancyTaxesRate: number;
  minNights: number;
  maxGuests: number;
}

export interface PriceBreakdown {
  nights: number;
  baseRate: number;
  staySubtotal: number;
  cleaningFee: number;
  serviceFee: number;
  taxes: number;
  total: number;
}

export interface ListingData {
  id: string;
  title: string;
  tagline: string;
  propertyType: string;
  location: {
    city: string;
    state: string;
    country: string;
    neighborhood: string;
    lat: number;
    lng: number;
    displayAddress: string;
  };
  rating: number;
  reviewCount: number;
  guestFavorite: boolean;
  specs: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  host: Host;
  highlights: Highlight[];
  description: string[];
  photos: Photo[];
  amenities: Amenity[];
  reviewScores: ReviewScoreBreakdown;
  reviews: ReviewItem[];
  pricing: PricingConfig;
}

export type ActiveView = 'listing' | 'photoTour' | 'lightbox';