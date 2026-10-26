# Pustam Design & Implementation Knowledge Base

## 1. Active Working Branch
- **Active Branch**: `Update-Sujal` (tracking `origin/Update-Sujal`). Always make and push updates to this branch unless explicitly instructed otherwise.

## 2. Standardized Button Design System (Apple-Inspired)
Defined in `src/style.css`:
- **Base Class**: `.btn-apple-base` (rounded-2xl ~18px capsule, smooth spring hover, active:scale-[0.975]).
- **Variants**:
  - `.btn-apple-primary`: Gold/orange brand gradient with specular inner top highlight (`inset 0 1px 1.5px rgba(255,255,255,0.85)`).
  - `.btn-apple-glass`: Translucent frosted glass capsule with `backdrop-filter: blur(20px)`, top sheen highlight, subtle drop shadow.
  - `.btn-apple-secondary`: Deep navy translucent capsule.
  - `.btn-apple-whatsapp`: Verified emerald WhatsApp capsule with white icon & text.
  - `.btn-apple-youtube`: YouTube red pill button with specular sheen.
  - `.btn-apple-icon`: Circular 44px glass navigation/arrow buttons.
- **Rule**: Apply this consistent button system across all headers, cards, modals, and CTAs. Do not invent one-off ad-hoc button shapes or hover styles.

## 3. Infrastructure Gallery Rules
- **No Text Overlays**: Never display website-generated title overlays, captions, or badges directly over the photographs (e.g., no ": Installation", "Plant Production Section").
- **Balanced 12-Column Bento Grid**: All 17 authentic facility photographs must fill 100% width with exact column spans (e.g. 8+4, 4+4+4, 4+8, 6+6), completely eliminating empty right-hand space or uneven masonry columns.
- **No 3D Factory Illustration Banners**: The 3D converting illustration banner ("Reel-to-Book Continuous Workflow") was explicitly removed per user direction. Keep only the authentic factory photographs and the YouTube facility tour banner.

## 4. Product Showcase Rules
- **Clean & Creative Bento Showcase**: Display all 7 core notebook categories simultaneously in an editorial card grid (7 cols hero card, 5 cols supporting card, 4+4+4 middle trio, 6+6 bottom twin).
- **No Overcomplicated Split-Screens**: Keep product titles, descriptions, and enquiry CTA buttons placed **outside** the photograph. No technical spec matrices or giant category selector lists.
- **One Clear Enquiry CTA**: Exactly one frosted glass enquiry button per product card.

## 5. Export Section Rules
- **Preserve Original Layout & Content**:
  - Heading: "Made in India. 🇮🇳 Shipped Worldwide."
  - Metrics: "Worldwide (Global Supply Reach)" and "JNPT Port (Direct Sea Freight Link)".
  - Map: Clean light interactive SVG world map showing shipping route arcs from the Palghar manufacturing hub to global landmasses.
  - Button: "Inquire for Global Export →".

## 6. Scroll Performance & Parallax Rules
- **Zero Scroll Re-renders**: Never place continuous scroll progress or position in high-level React state (`useState`). Use `useRef` + `requestAnimationFrame` with direct GPU transforms (`scaleX`, `translate3d`).
- **Subtle Parallax**: Restrained ±16px to ±18px image glide inside overflow-hidden card viewports. Keep text, containers, and buttons rock-solid. Disable continuous parallax on screens <768px and when `prefers-reduced-motion` is enabled.

## 7. Section Reveal Animation System
- **Coordinated Sequence**:
  - Eyebrow Badge (`seq-delay-1` / 40ms)
  - Main Heading (`seq-delay-2` / 110ms)
  - Description (`seq-delay-3` / 180ms)
  - Visuals / Features (`seq-delay-4` / 260ms)
  - Grid Cards (`card-entrance` + `seq-delay-5` to `seq-delay-8`)
- **Mask Wipes**: `.mask-wipe-container` with `.mask-wipe-right` or `.mask-wipe-up` for smooth clipping-mask image reveals.
