---
version: alpha
name: Makhmal Premium Womenswear
description: A luxury editorial e-commerce experience for Pakistani womenswear, characterized by high-contrast monochrome palettes, serif-influenced sans-typography, and expansive grid layouts.
colors:
  background: "#FFFFFF"
  foreground: "#000000"
  primary: "#000000"
  primary-foreground: "#FFFFFF"
  brand: "#000000"
  brand-foreground: "#FFFFFF"
  muted: "#F4F4F5"
  muted-foreground: "#71717A"
  border: "#E4E4E7"
  surface: "#F9F9F9"
typography:
  font-family: "Montserrat"
  weights:
    normal: 400
    medium: 500
    semibold: 600
    bold: 700
  sizes:
    xs: 11px
    sm: 13px
    base: 16px
    lg: 18px
    xl: 20px
    heading: 32px
spacing:
  unit: 4px
  container-max: 1180px
rounded:
  default: 0px
  pill: 9999px
components:
  button:
    border: "1px solid {colors.primary}"
    padding: "10px 20px"
    text-transform: "uppercase"
  card:
    bg: "{colors.surface}"
    aspect-ratio: "4/5"
---

## Overview
The Makhmal visual identity is a study in editorial minimalism. It utilizes a stark monochrome foundation to let the rich textures and colors of the textile photography serve as the primary visual interest. The interface is characterized by high density in information (tracking, pricing) but low density in decorative elements. Navigation and calls to action are driven by heavy letter-spacing and thin borders. The tone is premium, authoritative, and clean, mimicking a high-end fashion magazine. Motion is subtle, focusing on scale-up transitions on image hover and smooth horizontal snapping for product carousels.

## Colors
The palette is strictly functional. The primary brand color is Black (#000000), used for all typography, icons, and primary buttons. The background is White (#FFFFFF), ensuring maximum contrast. A soft grey Surface color (#F9F9F9) is used as a placeholder or background for product images to provide subtle depth without introducing new hues. Semantic usage of colors is limited: the Brand color is the primary driver of action, while Muted Foreground (#71717A) is reserved for secondary metadata like SKU descriptions or breadcrumbs.

## Typography
Montserrat is the workhorse of the brand, chosen for its geometric clarity and versatility. The hierarchy is defined by extreme variations in tracking rather than just scale. Small caps and uppercase treatments with wide letter-spacing (up to 0.28em) are used for brand headers and utility links to convey luxury. Body text is kept small (13px) for a sophisticated look, while primary headings use a semibold weight (600) with tight tracking (-0.025em) to create a modern impact. Editorial accents like the free shipping bar use an even smaller 11px size with wide tracking to maintain legibility while staying unobtrusive.

## Layout
The layout follows a modular grid system within a 1180px container. It utilizes asymmetrical sections (e.g., 260px sidebar next to a fluid 3-column grid) to create visual rhythm. Image treatments often favor a 4:5 aspect ratio, common in fashion photography. Spacing is generous in vertical paddings (up to 96px for desktop sections) but tight in component gaps (12px to 20px) to keep products grouped effectively. Responsive behavior shifts from complex multi-column grids to single-column stacks with horizontal scrolling enabled for product lists to maintain the editorial feel on mobile.

## Elevation & Depth
Depth is achieved through layering and contrast rather than drop shadows. The design is essentially flat, using 1px borders (#E4E4E7) to define structure. The exception is the Region Selection dialog, which employs a significant shadow-xl for focus. Images use a slight darkening gradient overlay (linear-to-t) at the bottom to ensure white typography remains legible over complex photography. Overlays use a 50% opacity black backdrop to isolate modal content.

## Shapes
The design language is strictly rectangular. All buttons, image containers, and input fields utilize 0px corner radii (rounded-none). This sharpness contributes to the premium, professional aesthetic. Only utility-level indicators, like the cart count badge, use a fully rounded (pill) shape to distinguish them from navigation and product elements. Strokes are consistently thin (1px or 1.5px), maintaining a delicate feel.

## Components
- **Header**: A triple-column grid (Nav / Logo / Actions) that is sticky and features a 1px bottom border.
- **Hero Section**: Full-width or container-width photography with centered uppercase typography and an underlined text-link for CTA.
- **Product Card**: Uses a 4:5 aspect ratio image that swaps on hover to show an alternate angle. Labels are minimal, featuring a category tag in brand color and pricing in bold.
- **Navigation Menu**: Text-based with 12px uppercase labels and hover-state color transitions to the brand color.
- **Announcement Bar**: High-contrast (black background, white text) bar at the very top for urgent notifications.

## Do's and Don'ts
### Do's
- Use uppercase and wide letter-spacing for all primary and secondary headings.
- Maintain the 4:5 aspect ratio for all product-related imagery.
- Use thin 1px borders for buttons and section breaks.
- Ensure a minimum of 64px vertical padding between major homepage sections.

### Don'ts
- Do not use rounded corners on any primary UI elements like buttons or cards.
- Do not introduce accent colors; stick to black, white, and grey.
- Avoid heavy drop shadows on interactive elements.
- Do not use standard sentence case for navigation items.

## Accessibility
Accessibility is managed through high-contrast text-on-background pairings (black on white). Focus states are explicitly defined using a 2px outline with a ring-offset to ensure keyboard navigability is visible. Navigation items use semantic `<nav>` and `<ul>` structures. Images intended for storytelling include descriptive alt text, while decorative images use empty alt attributes. The font size for utility text (11px) is small, requiring high-contrast ratios to meet readability expectations. Screen-reader specific text is provided for icon-only buttons like the search and cart triggers.

## Assets
- **Font**: CameraPlainVariable (html inline style url()) - https://cdn.gpteng.co/mcp-widgets/v1/fonts/CameraPlainVariable.woff2
- **Font**: Montserrat 400 (css url()) - https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.ttf
- **Font**: Montserrat 500 (css url()) - https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew-.ttf
- **Font**: Montserrat 600 (css url()) - https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu170w-.ttf
- **Font**: Montserrat 700 (css url()) - https://fonts.gstatic.com/s/montserrat/v31/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-.ttf
- **Image**: ANDAAZ; Shop the look 4 - https://makhmal-brand-recreation.lovable.app/assets/cat-andaaz-B7MQIf1Z.jpg
- **Image**: SMART CASUAL; Shop the look 2 - https://makhmal-brand-recreation.lovable.app/assets/cat-smartcasual-DPen9NZZ.jpg
- **Image**: WEST NEW ARRIVALS - https://makhmal-brand-recreation.lovable.app/assets/cat-west-C-x56aBl.jpg
- **Image**: Hero campaign woman in black embroidered outfit - https://makhmal-brand-recreation.lovable.app/assets/hero-CwFBuYCH.jpg
- **Image**: Printed Lawn Kurta - https://makhmal-brand-recreation.lovable.app/assets/prod-2-C0JY6CBg.jpg
- **Image**: Embroidered Chiffon 3 Piece - https://makhmal-brand-recreation.lovable.app/assets/prod-3-DQzbX0Ej.jpg
- **Image**: Maroon Formal Suit - https://makhmal-brand-recreation.lovable.app/assets/prod-4-CKX-97ZD.jpg
- **Image**: Sage Embroidered 2 Piece - https://makhmal-brand-recreation.lovable.app/assets/prod-5-CWiR5F0.jpg
- **Image**: Black & Gold Party Kurti - https://makhmal-brand-recreation.lovable.app/assets/prod-6-BkMSzyul.jpg
- **Image**: 3 PIECE - https://makhmal-brand-recreation.lovable.app/assets/trend-3piece-BLn9E-L1.jpg
- **Image**: EMBROIDERED ELEGANCE - https://makhmal-brand-recreation.lovable.app/assets/trend-embroidered-CKRyftvh.jpg
- **Image**: OUTFITS; Shop the look 1 - https://makhmal-brand-recreation.lovable.app/assets/trend-outfits-CFdxjRbe.jpg
- **Image**: SUMMER WHITES; Shop the look 3 - https://makhmal-brand-recreation.lovable.app/assets/trend-summerwhites-BVpGmGX3.jpg
- **Image**: Unstitched teal floral outfit - https://makhmal-brand-recreation.lovable.app/assets/unstitched-Cfe5MT04.jpg
- **Image**: Meta/Social Preview - https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/26467c69-92f7-4e7e-b110-9cbf5670e1c4/id-preview-d13e0f94--a4726275-a47b-4977-a202-35925c1d92c1.lovable.app-1782736454508.png

- **Image**: https://makhmal-brand-recreation.lovable.app/assets/prod-5-CWiR5Nf0.jpg — contexts: img[src] | notes: Sage Embroidered 2 Piece