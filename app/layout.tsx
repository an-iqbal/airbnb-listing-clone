import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Glass House — Oceanfront Architectural Sanctuary | Airbnb Clone',
  description: 'Book your stay at The Glass House in Malibu, California.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-[#222222] bg-white font-sans">{children}</body>
    </html>
  );
}