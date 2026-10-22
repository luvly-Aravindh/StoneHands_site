# Storm Water Barrier (Stone Hands)

Single-page product site for the Storm Water Barrier modular flood barrier.
React 19 + Vite + Tailwind CSS v3, with AOS (Animate On Scroll) scroll animations.

Live: https://stone-hands.netlify.app/

## Run

```bash
npm install
npm run dev       # dev server
npm run build     # production build (outputs to /dist)
npm run preview   # preview the production build locally
```

## Structure

- `src/App.jsx` composes the page sections in order and calls `AOS.init()` once.
- `src/components/`: Header, HeroBanner, ProtectSection, MeetBarrier, ModernSolution,
  HowItWorks, BuiltToDefend, Specifications, Certifications, IdealForProtection, OrderNow, Footer.
- `src/assets/` holds all images and icons.
- `public/assets/Banner.jpg` is the hero background (referenced by `.banner-wrapper` in CSS).
- `src/index.css` holds the Google Fonts import, Tailwind directives, the hero `.banner-*`
  styles and the `fadeSlideUp` entrance animation. AOS styles come from `aos/dist/aos.css`.

## Notes

- Scroll animations use the `aos` package; `data-aos` attributes are set on elements in
  HowItWorks, Specifications, Certifications and Footer.
- The ORDER NOW buttons are not yet wired to a checkout; add the link in the section components.
