'use client';

import React from 'react';
import { Globe, Menu, Search, User } from 'lucide-react';

interface NavbarProps {
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-[#FF385C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF385C] rounded-lg py-1 px-1 transition-transform active:scale-95"
          aria-label="Airbnb Home"
        >
          <svg
            className="h-8 w-8 fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.393.072 1.343-.377 2.673-1.265 3.738-1.077 1.29-2.677 2.046-4.385 2.075-1.921.033-3.666-.757-5.188-2.355l-.651-.714-.651.714c-1.522 1.598-3.267 2.388-5.188 2.355-1.708-.029-3.308-.785-4.385-2.075-.888-1.065-1.337-2.395-1.265-3.738.05-.914.293-1.802.96-3.393l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.347 0-2.38.643-3.414 2.502l-.533 1.025C10.155 10.27 6.096 18.784 5.16 21.018l-.133.32c-.57 1.359-.769 2.08-.81 2.8-.051.963.272 1.918.91 2.684.773.926 1.922 1.47 3.149 1.491 1.472.025 2.871-.621 4.148-1.929l1.576-1.611 1.576 1.611c1.277 1.308 2.676 1.954 4.148 1.929 1.227-.021 2.376-.565 3.149-1.491.638-.766.961-1.721.91-2.684-.041-.72-.24-1.441-.81-2.8l-.133-.32c-.936-2.234-4.995-10.748-6.89-14.491l-.533-1.025C18.38 3.643 17.347 3 16 3zm0 13c2.485 0 4.5 2.015 4.5 4.5 0 1.989-1.293 3.676-3.086 4.254l-.414.113-.5.101-.5-.101-.414-.113C12.793 24.176 11.5 22.489 11.5 20.5c0-2.485 2.015-4.5 4.5-4.5zm0 2c-1.381 0-2.5 1.119-2.5 2.5 0 1.218.868 2.235 2.029 2.456l.221.031.25.013.25-.013.221-.031c1.161-.221 2.029-1.238 2.029-2.456 0-1.381-1.119-2.5-2.5-2.5z" />
          </svg>
          <span className="font-bold text-xl tracking-tight hidden sm:inline text-[#FF385C]">
            airbnb
          </span>
        </a>

        <div
          role="button"
          tabIndex={0}
          onClick={onSearchClick}
          onKeyDown={(e) => e.key === 'Enter' && onSearchClick?.()}
          className="flex items-center border border-neutral-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        >
          <button className="px-3 hover:text-neutral-900 transition-colors focus:outline-none">
            Anywhere
          </button>
          <span className="h-4 w-px bg-neutral-300" aria-hidden="true" />
          <button className="px-3 hover:text-neutral-900 transition-colors focus:outline-none">
            Any week
          </button>
          <span className="h-4 w-px bg-neutral-300" aria-hidden="true" />
          <button className="px-3 text-neutral-500 hover:text-neutral-800 transition-colors focus:outline-none">
            Add guests
          </button>
          <div className="ml-2 bg-[#FF385C] text-white p-2 rounded-full flex items-center justify-center hover:bg-[#E00B41] transition-colors">
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="text-sm font-medium text-neutral-800 hover:bg-neutral-100 px-3.5 py-2.5 rounded-full transition-colors focus:outline-none">
            Airbnb your home
          </button>
          <button
            className="text-neutral-800 hover:bg-neutral-100 p-2.5 rounded-full transition-colors focus:outline-none"
            aria-label="Choose a language and currency"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            className="flex items-center gap-3 border border-neutral-300 rounded-full py-1.5 px-3.5 hover:shadow-md transition-all focus:outline-none ml-1 bg-white"
            aria-label="User profile menu"
          >
            <Menu className="w-4 h-4 text-neutral-700" />
            <div className="bg-neutral-600 text-white rounded-full p-1 flex items-center justify-center">
              <User className="w-3.5 h-3.5 fill-current" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};