# Vrindavan Tour Guide Website

## Overview

This is a full-stack web application for a professional Vrindavan tour guide service called "Madhusudhan Sharam". The application is built as a single-page marketing website with a React frontend and Express.js backend, designed to showcase tour packages, services, and facilitate bookings through WhatsApp integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (December 12, 2024)

✓ Fixed white text on white background contrast issues
✓ Updated Contact form select dropdown styling for better visibility
✓ Added explicit background colors to mobile navigation sheet
✓ Enhanced CSS utilities to prevent contrast issues
✓ Improved accessibility with proper ARIA labels

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom spiritual color palette (saffron, golden, cream tones)
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: React Query (@tanstack/react-query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution
- **Production Build**: esbuild for server bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (likely Neon Database based on dependencies)
- **Schema**: Shared schema between client and server in `/shared` directory
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Full-screen landing with call-to-action buttons
3. **About Section**: Guide information with spiritual messaging
4. **Tour Packages**: Three main packages (1-day, 3-day, 84 kos yatra)
5. **Services**: Professional guide services, transportation, accommodation
6. **Gallery**: Image showcase with modal viewing
7. **Testimonials**: Customer reviews and ratings
8. **Contact Form**: WhatsApp integration for bookings
9. **Footer**: Contact information and social links

### Backend Components
1. **Route Registration**: Centralized route management system
2. **Storage Interface**: Abstract storage layer with in-memory implementation
3. **Vite Integration**: Development server with HMR support
4. **Error Handling**: Centralized error middleware

### Shared Components
1. **Database Schema**: User model with Drizzle ORM
2. **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

### Client-Side Data Flow
1. React components use React Query for server state management
2. Forms use React Hook Form with Zod validation
3. WhatsApp integration for direct booking without backend processing
4. Smooth scrolling navigation between sections
5. Toast notifications for user feedback

### Server-Side Data Flow
1. Express middleware for logging and error handling
2. Storage interface abstracts database operations
3. Shared schema ensures type safety between client and server
4. Route registration system for modular API endpoint management

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive accessible component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Frontend build tool with HMR
- **TypeScript**: Type safety across the stack
- **ESLint/Prettier**: Code quality and formatting
- **Replit Integration**: Development environment support

### Database and Validation
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Runtime type validation
- **PostgreSQL**: Production database (via Neon)

### Communication
- **WhatsApp API**: Direct booking integration
- **Email**: Contact form submissions
- **Phone**: Direct calling functionality

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express API
- **Hot Module Replacement**: Real-time code updates
- **TypeScript Compilation**: Real-time type checking
- **Environment Variables**: Database URL and configuration

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server to `dist/index.js`
- **Static Serving**: Express serves built frontend assets
- **Database**: PostgreSQL via Neon Database
- **Deployment**: Node.js production server

### Key Architecture Decisions

1. **Monorepo Structure**: Single repository with shared code between client and server
2. **TypeScript Throughout**: End-to-end type safety from database to UI
3. **WhatsApp Integration**: Direct booking without complex backend booking system
4. **Static Content Focus**: Marketing website with minimal dynamic data requirements
5. **Spiritual Theme**: Custom color palette and messaging for religious tourism
6. **Mobile-First Design**: Responsive layout optimized for mobile devices
7. **Performance Optimization**: Image optimization and lazy loading for gallery
8. **Accessibility**: Radix UI ensures keyboard navigation and screen reader support