# Airbnb Listing Clone : Pixel-Perfect Coastal Sanctuary

A high-fidelity, desktop-focused clone of an Airbnb listing page featuring an architectural oceanfront villa in Malibu. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, this project showcases an authentic multi-view experience including a dynamic 5-photo bento grid, an interactive sticky booking widget with real-time fee calculation, a categorized full-screen photo tour, and a keyboard-accessible cinematic lightbox.

---

## Live Demo

🔗 **Live URL:** [https://airbnb-listing-clone-2.vercel.app](https://airbnb-listing-clone-2.vercel.app)

---

## Features

- **Sticky Navigation Bar:** Authentic Airbnb brand logo (`#FF385C`), central search pill (*Anywhere | Any week | Add guests*), language selector, and user profile badge.
- **Hero Bento Grid:** 5-photo collage with 8px grid gaps, rounded outer corners, and a floating *"Show all photos"* button.
- **Two-Column Layout:**
  - **Left Column:** Host verification badges, key stay highlights, expandable property description, categorized amenities grid with full-modal viewer, 6-factor review score breakdown bars, and styled neighborhood map placeholder.
  - **Right Column (Sticky Booking Widget):** Floating card (`sticky top-28`) featuring per-night rate, interactive date range selector (calculating nights dynamically), guest counter stepper (Adults, Children, Infants, Pets with capacity bounds), and real-time fee arithmetic:
    $$\text{Total} = (\text{Nights} \times \text{Rate}) + \text{Cleaning Fee} + \text{Service Fee} + \text{Taxes}$$
- **View 2: Photo Tour Modal:** Full-screen gallery overlay organizing 16 high-resolution curated photographs into categorized sections (*Exterior*, *Patio & Pool*, *Living Room*, *Kitchen*, *Bedroom*, *Bathroom*, *Views*).
- **View 3: Lightbox Viewer:** Dark cinematic backdrop (`bg-black/95`) with high-resolution image transitions, photo index counter (`X / 16`), thumbnail scrub bar, and comprehensive keyboard navigation:
  - `ArrowRight` (`→`): Next photo (with wrapping)
  - `ArrowLeft` (`←`): Previous photo (with wrapping)
  - `Escape`: Closes Lightbox back to Photo Tour; second press returns to main listing
- **Accessibility & UX:** Strict WCAG 2.1 AA modal dialogs (`role="dialog"`, `aria-modal="true"`), focus management, event listener teardown on unmount, and background scroll locking (`overflow: hidden`).

---

## Tech Stack

- **Frontend Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict type-safety, zero `any` types)
- **Styling:** Tailwind CSS (Custom Airbnb design tokens & 8px spatial grid)
- **Icons:** Lucide-React
- **Motion & Transitions:** Framer Motion & CSS Keyframes
- **Deployment:** Vercel (Edge CDN)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone [https://github.com/an-iqbal/airbnb-listing-clone.git](https://github.com/an-iqbal/airbnb-listing-clone.git)
cd airbnb-listing-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Open Localhost
Navigate to [http://localhost:3000](http://localhost:3000) in your desktop browser.

### 5. Run Verification Tests
```bash
node scripts/verify-clone.js
```
*(Executes 61 automated assertions checking file structure, TypeScript typings, dynamic pricing calculation, and view transitions).*

---

## Contact Us

Have questions, suggestions, or feedback? I’d love to hear from you!

**Anwar Iqbal**: [anwariqbal.work@gmail.com](mailto:anwariqbal.work@gmail.com)

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or open a pull request.
