# Empire Central Plaza - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from hawnplaza.com but with enhanced modern polish, improved spacing, and refined typography. This is an upscale residential property marketing site requiring sophisticated visual treatment while maintaining accessibility and clarity.

## Typography System

**Font Family**: Inter or Poppins (Google Fonts)
- Headings: Bold weights (600-700) for impact and hierarchy
- Body: Regular weight (400) with generous line-height (1.6-1.8) for readability
- Scale: Clear size differentiation between H1 (hero headlines), H2 (section headers), H3 (card titles), and body text

## Layout System

**Spacing Units**: Use generous, consistent spacing throughout
- Sections: Large vertical padding (80-120px desktop, 48-64px mobile)
- Inner content: 32-48px spacing between major elements
- Cards/Components: 16-24px internal padding
- Max-width container: 1200px centered for optimal readability

**Grid Strategy**:
- Highlights: 3-4 column grid (desktop), 2 column (tablet), 1 column (mobile)
- Amenities: 2-3 column grid with icon/text cards
- Floorplans: 3 column grid cards (desktop), adapting responsively
- Retail: 2 column feature cards

## Color Palette

**Upscale, Light Aesthetic**:
- Backgrounds: Off-white (#F8F9FA, #FAFBFC) with subtle warmth
- Accent: Deep green (#2D5A3D) or dark gold (#B8860B) for CTAs and highlights
- Text: Dark gray (#2C3E50) for primary content, medium gray (#6C757D) for secondary
- Borders/Dividers: Very light gray (#E9ECEF) for subtle separation

## Navigation

**Sticky Header**:
- Logo text "Empire Central Plaza" (left, slightly larger, bold)
- Right-aligned navigation links with subtle hover states
- Mobile: Hamburger menu with smooth slide-in overlay
- Background: White with subtle shadow on scroll for depth

## Hero Section

**Full-Width Impact**:
- Large hero background: Use architectural/lifestyle imagery showing modern loft interiors or downtown Temple streetscape
- Dark gradient overlay (40-60% opacity) to ensure text readability
- Headline: "Historic Downtown. Modern Loft Living." - Large, bold, white text
- Subheadline: Lighter weight, slightly smaller, maintaining hierarchy
- Dual CTAs: "Schedule a Tour" (primary accent color) and "View Floorplans" (outlined/ghost button) with blurred backgrounds
- Minimum height: 70vh for desktop impact

## Section Design Patterns

**About the Building**: Single column centered text with max-width for optimal reading

**Quick Highlights**: 
- 4 cards in responsive grid
- Each card: Icon placeholder (simple CSS shapes/borders), title, short description
- Subtle hover effect: gentle lift with shadow increase

**Amenities**:
- Grid layout with 6-8 items
- Simple geometric shapes for icons (circles, squares) using CSS
- Two-tone treatment: building amenities vs. neighborhood amenities

**Neighborhood**:
- Two-column layout (60/40 split)
- Left: Rich text content about walkability and lifestyle
- Right: Styled placeholder for Google Maps with border and "View on Google Maps" button

**Floorplans**:
- Card-based grid (3 columns desktop)
- Each card: Bordered placeholder for floorplan image, unit type, square footage, description, CTA button
- Consistent card heights with subtle shadows

**Retail Spaces**:
- 2 prominent feature cards
- Larger format than amenity cards
- Clear differentiation between retail and office suites

## Contact/Apply Section

**High Conversion Design**:
- Bold section heading: "Ready to Lease?"
- Two-column layout: Form (left 60%), Contact info sidebar (right 40%)
- Form fields: Clean, modern inputs with clear labels and adequate spacing
- Success message: Subtle banner with confirmation messaging
- Contact info: Phone, email, address prominently displayed with visual hierarchy

## Footer

Simple, centered single-row design with copyright and attribution text in smaller, muted color

## Component Library

**Buttons**:
- Primary: Accent color background, white text, medium padding, rounded corners (4-6px)
- Secondary/Ghost: Outlined with accent color, transparent background
- Hover: Subtle scale (1.02-1.05) or shadow enhancement
- Blurred backgrounds when overlaying images

**Cards**:
- White background, subtle shadow, rounded corners (8px)
- Consistent internal padding (24-32px)
- Hover: Gentle lift effect (transform translateY(-4px))

**Form Elements**:
- Clean borders, adequate padding (12-16px)
- Focus states with accent color border
- Dropdown styling consistent with inputs
- Submit button uses primary button style

## Images

**Hero Section**: Large architectural/lifestyle image - modern loft interior with tall windows and urban views, or vibrant downtown Temple street scene

**Section Backgrounds**: Subtle off-white variations to create visual separation without harsh dividers

**Floorplan Placeholders**: Bordered boxes awaiting actual floorplan images, maintaining aspect ratio

**No external icons**: Use CSS-created geometric shapes for visual interest

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stacked navigation in hamburger menu
- Hero height: 60vh minimum
- Reduced vertical spacing (60% of desktop values)
- Touch-friendly button sizes (minimum 44px height)

**Tablet (768px - 1024px)**:
- 2-column grids where appropriate
- Adjusted spacing (80% of desktop)

**Desktop (> 1024px)**:
- Full multi-column layouts
- Maximum spacing and visual breathing room
- Hover states active

## Animations

- Smooth scroll behavior for anchor navigation
- Subtle hover transitions (0.2-0.3s ease)
- Mobile menu slide-in animation (0.3s)
- Minimal, purposeful motion - no excessive animations

## Accessibility

- Clear visual hierarchy with proper heading structure
- Adequate color contrast ratios (WCAG AA minimum)
- Form labels clearly associated with inputs
- Keyboard navigable elements
- Touch targets minimum 44x44px for mobile