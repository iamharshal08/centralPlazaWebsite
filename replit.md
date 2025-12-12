# Empire Central Plaza - Marketing Website

## Overview

Empire Central Plaza is a modern, responsive marketing website for a residential building in downtown Temple, Texas. The site showcases a renovated historic building with 19 residential units and 3 ground-floor retail spaces. It features a clean, upscale design with sections for residences, amenities, neighborhood information, floorplans, retail spaces, and a contact form.

This is a full-stack TypeScript application built with React, Express, and PostgreSQL, utilizing modern UI components and form handling. The site emphasizes walkable urban living and modern loft aesthetics while maintaining historic downtown charm.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**Routing**: Wouter for lightweight client-side routing

**UI Component System**: 
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library (New York style variant)
- Tailwind CSS for styling with custom design tokens
- Custom color palette featuring deep green/gold accents on light backgrounds

**State Management**:
- TanStack Query (React Query) for server state and API calls
- React Hook Form with Zod validation for form handling

**Design Approach**:
- Reference-based design inspired by hawnplaza.com
- Typography: Inter/Poppins with bold headings and generous spacing
- Responsive grid layouts (3-4 columns desktop, adaptive for mobile)
- Sticky navigation with smooth scroll behavior
- Full-width hero section with gradient overlay

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Development vs Production**:
- Development: Vite dev server middleware for HMR
- Production: Static file serving from built assets

**API Design**:
- RESTful endpoints under `/api` prefix
- Contact form submission endpoint (`POST /api/contact`)
- Contact retrieval endpoint (`GET /api/contact`)

**Error Handling**: Custom middleware for request logging and JSON response capture

### Data Storage

**ORM**: Drizzle ORM with PostgreSQL dialect

**Database Provider**: Neon serverless PostgreSQL (via `@neondatabase/serverless`)

**Schema Design**:
- `users` table: Basic user model with username/password
- `contact_submissions` table: Contact form data with name, email, phone, unit type, message, and timestamp

**Migration Strategy**: Drizzle Kit with migrations output to `/migrations` directory

**Validation**: 
- Drizzle Zod integration for schema validation
- Custom Zod schemas with email, phone, and text validation rules

**Fallback Storage**: In-memory storage implementation (`MemStorage`) for development without database

### External Dependencies

**UI Component Libraries**:
- @radix-ui/* - Accessible component primitives (accordion, dialog, dropdown, navigation, etc.)
- class-variance-authority - Component variant management
- cmdk - Command menu component
- embla-carousel-react - Carousel functionality
- lucide-react - Icon library

**Form & Validation**:
- react-hook-form - Form state management
- @hookform/resolvers - Form validation resolvers
- zod - Schema validation
- drizzle-zod - ORM-to-Zod schema generation

**Data Fetching**:
- @tanstack/react-query - Server state management and caching

**Styling**:
- tailwindcss - Utility-first CSS framework
- tailwind-merge & clsx - Class name utilities
- autoprefixer - CSS vendor prefixing

**Database**:
- @neondatabase/serverless - Serverless PostgreSQL client
- drizzle-orm - TypeScript ORM
- drizzle-kit - Schema migrations and management

**Date Handling**:
- date-fns - Date utility library

**Development Tools**:
- @replit/* plugins - Vite integration for Replit environment (cartographer, dev banner, runtime error modal)
- tsx - TypeScript execution for development server
- esbuild - Production bundling

**Build System**:
- Vite - Frontend build tool and dev server
- @vitejs/plugin-react - React support for Vite

**Session Management**:
- express-session (implied by connect-pg-simple dependency)
- connect-pg-simple - PostgreSQL session store