# Shay Portfolio - AI Coding Agent Instructions

## Developer Profile & Collaboration Style

**About Shay**: Backend Java developer who primarily works with IntelliJ and Spring Boot. This frontend portfolio project is outside his comfort zone - he's learning and needs supportive guidance.

**Collaboration Preferences**:
- 🤝 **Hand-holding welcome** - Provide detailed explanations and step-by-step guidance
- ❓ **Ask before acting** - Always confirm approach before making changes
- 🎯 **Stay focused** - Help avoid distractions from personal stories or off-topic suggestions  
- 🐛 **Frontend debugging help** - This React/TypeScript stack isn't his specialty
- 🎉 **Celebrate wins** - Acknowledge progress and encourage learning
- 😄 **Be friendly & funny** - Act like a coding partner, humor is welcome
- 🚫 **No Azure recommendations** - Don't suggest Azure unless specifically relevant

**Learning Style**: Still developing prompting skills - help him ask better questions and understand concepts clearly.

---

*👋 Agent acknowledgment: Leave a small emoji or comment below when you've read these instructions*
<!-- Agents who have read this: 
🤖 Claude Sonnet 3.5 (Oct 2025) - Ready to help with your portfolio journey! Let's build something great together. 
-->

## Architecture Overview

This is a **simplified single-server portfolio application** built with React/TypeScript frontend and Express backend:

- **Frontend**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui components
- **Backend**: Express server with conditional Vite middleware (dev only)
- **Development**: Express server + Vite middleware on port 3000 
- **Production**: Express server serving static files + API routes

## Key Development Patterns

### Component Architecture
- All components are in `client/src/components/` with section-based naming (`PersonalInfoCard`, `ProjectsSection`, etc.)
- Uses **shadcn/ui component system** - components in `@/components/ui/` folder
- Components use `forwardRef` pattern and `cn()` utility for className merging
- Emerald color theme (`emerald-700`, `emerald-800`) used throughout for consistency
 - Emerald color theme (`emerald-700`, `emerald-800`) used throughout for consistency—avoid altering layout or palettes unless Shay explicitly requests it

### Import Aliases
```tsx
import { Component } from '@/components/Component';
import { utils } from '@/lib/utils';
```
The `@` alias maps to `client/src/` - always use this for internal imports.

### Styling Conventions
- **Tailwind CSS** with CSS variables for theming (see `tailwind.config.js`)
- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes
- Consistent emerald gradient themes: `bg-gradient-to-r from-emerald-700 to-emerald-800`
- Dark mode support via `darkMode: ['class']` configuration

## Development Workflow

### Starting Development
```bash
npm run dev        # Single server with Vite middleware on port 3000
```

The `npm run dev` command runs `tsx watch server/index.ts` which:
1. Starts Express server on port 3000
2. Integrates Vite middleware for development
3. Serves API endpoints directly (`/api/*` routes)

### Build & Deploy
```bash
npm run build      # Builds client + compiles server TypeScript
npm start          # Runs production server
```

### Server Architecture
- **Development**: Single server (Express + Vite middleware) on port 3000
- **Production**: Express server serving static files and API routes
- Contact form functionality via `/api/contact` endpoint with nodemailer

## Project-Specific Conventions

### Component Structure
All main sections follow this pattern:
```tsx
export function SectionName() {
  return (
    <Card className="specific-styling">
      <CardContent className="p-8">
        {/* Section content */}
      </CardContent>
    </Card>
  );
}
```

### File Organization
- `client/` - All frontend code (Vite root)
- `server/` - Backend Express server (single file: `index.ts`)
- Build output: `dist/public/` (configured in `vite.config.js`)
- `.env` - Environment variables for email configuration
- `scripts/generate-icons.ps1` - regenerates the emerald "S" icon set in `client/public/`

### Environment Variables
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  
CONTACT_EMAIL=your-email@gmail.com
NODE_ENV=development
```

### Environment Considerations
- Single port (3000) for development and configurable for production
- Vite middleware integration for seamless development experience
- Production detection via `NODE_ENV === 'production'`

## Critical Integration Points

- **Vite Middleware**: Development uses Vite middleware directly in Express
- **Contact Form**: `/api/contact` endpoint with nodemailer integration
- **Express Typings**: `handleContact` currently types `req`/`res` as `any` to sidestep Express 5 typings issues; adjust cautiously if refactoring
- **Static Serving**: Production serves built files from `dist/public/`
- **Hot Reload**: `tsx watch` enables server restart; Vite middleware handles client HMR
- **Build Pipeline**: Vite builds client, TypeScript compiles server separately

This simplified architecture eliminates dual-server complexity while maintaining full functionality.