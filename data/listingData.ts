import { ListingData } from '../types';

export const listingData: ListingData = {
  id: 'airbnb-listing-malibu-sanctuary',
  title: 'The Glass House — Modern Oceanfront Architectural Sanctuary',
  tagline: 'Entire luxury architectural villa with heated infinity pool overlooking the Pacific Ocean',
  propertyType: 'Entire villa',
  location: {
    city: 'Malibu',
    state: 'California',
    country: 'United States',
    neighborhood: 'El Matador Bluffs',
    lat: 34.0381,
    lng: -118.8756,
    displayAddress: 'Malibu, California, United States',
  },
  rating: 4.98,
  reviewCount: 128,
  guestFavorite: true,
  specs: { guests: 8, bedrooms: 4, beds: 5, baths: 4.5 },
  host: {
    name: 'Marcus & Elena Sterling',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    isSuperhost: true,
    yearsHosting: 7,
    responseRate: 100,
    responseTime: 'within an hour',
    coHosts: ['Elena Sterling (Designer)', 'Julian (Concierge)'],
    bio: 'Architectural enthusiasts. We designed The Glass House to harmonize raw concrete, warm cedar, and floor-to-ceiling glass with the Pacific shoreline.',
  },
  highlights: [
    { id: 'hl-1', iconName: 'Award', title: 'Superhosts with exceptional ratings', description: 'Marcus & Elena have received 5-star ratings from 98% of recent guests.' },
    { id: 'hl-2', iconName: 'Key', title: 'Seamless self check-in', description: 'Check yourself in effortlessly with the smart keypad lock code.' },
    { id: 'hl-3', iconName: 'Laptop', title: 'Dedicated ocean-view workspace', description: 'A private study featuring an ergonomic Herman Miller chair and 1 Gbps fiber Wi-Fi.' },
    { id: 'hl-4', iconName: 'Calendar', title: 'Flexible cancellation policy', description: 'Cancel up to 5 days before check-in for a full refund.' }
  ],
  description: [
    'Welcome to The Glass House, an iconic architectural achievement perched high along the cliffs of Western Malibu. Seamlessly blending minimalist Scandinavian interior design with organic California warmth, this multi-level villa is sculpted from board-formed concrete and 14-foot motorized glass walls.',
    'Wake up to panoramic ocean vistas where dolphins frequently breach offshore. The open-concept living pavilion features a suspended bronze fireplace and polished terrazzo flooring that flows onto an expansive cantilevered teak deck.',
    'Culinary enthusiasts will delight in the custom kitchen equipped with Sub-Zero refrigeration and dual Miele induction cooktops. The cantilevered black-granite infinity pool appears to spill directly into the ocean horizon.'
  ],
  photos: [
    { id: 'p1', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85', title: 'Main Villa Exterior & Sun Deck', caption: 'Cantilevered architectural design with panoramic glass.', category: 'Exterior' },
    { id: 'p2', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85', title: 'Modern Infinity Pool at Sunset', caption: 'Heated infinity-edge pool blending with the Pacific Ocean.', category: 'Patio & Pool' },
    { id: 'p3', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85', title: 'Open Living Pavilion', caption: 'Double-height ceilings with minimalist Italian furnishings.', category: 'Living Room' },
    { id: 'p4', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85', title: 'Boffi Chef Kitchen', caption: 'Custom marble island with Sub-Zero refrigeration.', category: 'Kitchen' },
    { id: 'p5', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85', title: 'Primary Master Suite', caption: 'King bed with direct balcony access and ocean views.', category: 'Bedroom' },
    { id: 'p6', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85', title: 'Primary Spa Bathroom', caption: 'Freestanding stone soaking tub with ocean views.', category: 'Bathroom' },
    { id: 'p7', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85', title: 'Dining Area & Wine Display', caption: 'Solid oak dining table for 10 guests.', category: 'Kitchen' },
    { id: 'p8', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85', title: 'Courtyard & Zen Water Feature', caption: 'Private inner Japanese zen courtyard with olive trees.', category: 'Exterior' },
    { id: 'p9', url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85', title: 'Second Master Suite', caption: 'Spacious secondary king bedroom with private ensuite.', category: 'Bedroom' },
    { id: 'p10', url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85', title: 'Fireside Lounge & Media Room', caption: 'Sunken media lounge with 85-inch 4K OLED display.', category: 'Living Room' },
    { id: 'p11', url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85', title: 'Guest Bathroom Rain Shower', caption: 'Charcoal slate tile with rainfall showerhead.', category: 'Bathroom' },
    { id: 'p12', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85', title: 'Ocean Terrace & Fire Pit', caption: 'Conversation fire pit overlooking the Pacific coastline.', category: 'Patio & Pool' },
    { id: 'p13', url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=85', title: 'Queen Bedroom Three', caption: 'Dual queen beds with custom oak headboards.', category: 'Bedroom' },
    { id: 'p14', url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85', title: 'Private Study & Library Workspace', caption: 'Walnut desk with ergonomic Herman Miller chair.', category: 'Living Room' },
    { id: 'p15', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85', title: 'Coastal Bluff View', caption: 'Unobstructed bluff-top views across Santa Monica Bay.', category: 'Views' },
    { id: 'p16', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85', title: 'Heated Spa & Jacuzzi Deck', caption: 'Twelve-person bubbling hydrotherapy cedar spa.', category: 'Patio & Pool' }
  ],
  amenities: [
    { id: 'am-1', name: 'Fast Wi-Fi (1 Gbps fiber)', category: 'Internet and Office', iconName: 'Wifi', available: true },
    { id: 'am-2', name: 'Private heated infinity pool', category: 'Outdoor', iconName: 'Waves', available: true },
    { id: 'am-3', name: 'Private 12-person hot tub', category: 'Outdoor', iconName: 'Flame', available: true },
    { id: 'am-4', name: 'Chef kitchen with Sub-Zero appliances', category: 'Kitchen and Dining', iconName: 'UtensilsCrossed', available: true },
    { id: 'am-5', name: 'Dedicated oceanfront workspace', category: 'Internet and Office', iconName: 'Laptop', available: true },
    { id: 'am-6', name: 'Free parking on premises (4 cars + EV charger)', category: 'Parking and Facilities', iconName: 'Car', available: true },
    { id: 'am-7', name: 'Central air conditioning & climate control', category: 'Heating and Cooling', iconName: 'AirVent', available: true },
    { id: 'am-8', name: '85" 4K OLED TV with soundbar', category: 'Entertainment', iconName: 'Tv', available: true },
    { id: 'am-9', name: 'Washer and dryer', category: 'Bedroom & Laundry', iconName: 'Shirt', available: true },
    { id: 'am-10', name: 'Outdoor shower & surfboard rack', category: 'Outdoor', iconName: 'ShowerHead', available: true },
    { id: 'am-11', name: 'Indoor bronze wood-burning fireplace', category: 'Heating and Cooling', iconName: 'FlameKindling', available: true },
    { id: 'am-12', name: 'Smoke alarm & carbon monoxide detector', category: 'Home Safety', iconName: 'ShieldAlert', available: true }
  ],
  reviewScores: { cleanliness: 5.0, accuracy: 4.9, checkIn: 5.0, communication: 5.0, location: 4.9, value: 4.8 },
  reviews: [
    {
      id: 'rev-1',
      authorName: 'Sarah Jenkins',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      location: 'San Francisco, CA',
      date: 'September 2026',
      rating: 5,
      comment: 'An architectural masterpiece in every sense. Watching dolphins at breakfast from the infinity pool was magical. Marcus and Elena were incredible hosts.'
    },
    {
      id: 'rev-2',
      authorName: 'David Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      location: 'New York, NY',
      date: 'August 2026',
      rating: 5,
      comment: 'The photos do not even do justice to the quality of materials and design. The kitchen is fully equipped, and sunset by the fire pit is unmatched.'
    },
    {
      id: 'rev-3',
      authorName: 'Claire & Thomas Vance',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      location: 'London, UK',
      date: 'July 2026',
      rating: 5,
      comment: 'Our stay was sensational. The private study with high-speed internet let me handle meetings seamlessly. Immaculate cleanliness throughout.'
    }
  ],
  pricing: {
    basePricePerNight: 485,
    weekendPricePerNight: 540,
    cleaningFee: 180,
    serviceFeeRate: 0.142,
    occupancyTaxesRate: 0.08,
    minNights: 2,
    maxGuests: 8
  }
};