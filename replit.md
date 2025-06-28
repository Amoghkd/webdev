# Our Love Story - 9 Months Anniversary App

## Overview

A romantic Hello Kitty-inspired Progressive Web App (PWA) built with React + Vite and styled with Tailwind CSS. This kawaii-aesthetic web application celebrates a 9-month relationship anniversary with interactive memories, love notes, and animated effects. The app features a cute pink color scheme, floating hearts, sparkle effects, and various romantic components designed for mobile-first usage with PWA installation capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with local state and localStorage persistence
- **Styling**: Tailwind CSS with custom kawaii color palette and animations
- **UI Components**: Radix UI primitives with shadcn/ui styling system
- **PWA Support**: Full Progressive Web App implementation with manifest.json

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement with Vite middleware integration

## Key Components

### Core Features
1. **Welcome Section**: Animated greeting with Hello Kitty theming and smooth scrolling navigation
2. **Memory Timeline**: Scrollable photo timeline with relationship milestones and descriptions
3. **Love Notes Generator**: Random romantic message display with gothic typography contrast
4. **Day Counter**: Real-time calculation of days together and countdown to 1-year anniversary
5. **Easter Egg**: Hidden Hello Kitty interaction with special message modal
6. **Message Input**: Local storage-based note saving with toast notifications

### Interactive Elements
- **Floating Hearts**: Continuous animated heart particles across the screen
- **Sparkle Effects**: Click-triggered sparkle animations for enhanced interactivity
- **Smooth Animations**: CSS transitions and transforms for kawaii aesthetic
- **Mobile-First Design**: Responsive layout optimized for iOS Safari PWA installation

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Love Notes Table**: Stored romantic messages with timestamps
- **Memories Table**: Photo timeline entries with titles, descriptions, and dates
- All schemas include Zod validation for type safety

## Data Flow

### Client-Side Data Management
1. **Static Data**: Memories and love notes stored in TypeScript files for easy updates
2. **Local Storage**: User-generated notes persist locally using custom useLocalStorage hook
3. **State Management**: React Query for server state management with optimistic updates
4. **Date Calculations**: Real-time anniversary counters using custom useDateCounter hook

### Server Communication
- RESTful API design with `/api` prefix for all backend routes
- Express middleware for request logging and error handling
- Type-safe database operations using Drizzle ORM with PostgreSQL
- Session-based authentication using connect-pg-simple

## External Dependencies

### Key Libraries
- **UI Framework**: React 18 with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **UI Components**: Comprehensive Radix UI primitive collection
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **Development**: Vite with React plugin and runtime error overlay
- **Fonts**: Google Fonts (Fredoka One, Poppins, Cinzel) for kawaii and gothic typography

### PWA Dependencies
- **Manifest**: Complete PWA manifest with icons, shortcuts, and installation metadata
- **Service Worker**: Implicit through Vite PWA plugin configuration
- **Mobile Optimization**: Viewport meta tags and Apple-specific PWA support

## Deployment Strategy

### Production Build Process
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: ESBuild compiles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied to PostgreSQL instance
4. **Static Assets**: Vite handles asset optimization and fingerprinting

### Environment Configuration
- **Development**: Hot reload with Vite dev server and Express API
- **Production**: Static file serving through Express with optimized bundles
- **Database**: Environment-based connection string configuration
- **PWA**: Production builds include full PWA capabilities for mobile installation

### Hosting Recommendations
- **Frontend + Backend**: Suitable for platforms like Replit, Vercel, or Railway
- **Database**: Neon Database provides serverless PostgreSQL hosting
- **CDN**: Vite's built-in asset optimization works with any CDN provider

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```