# Shay Portfolio - AI Coding Agent Instructions

## Architecture Overview

This is a **dual-server portfolio application** built with React/TypeScript frontend and Express backend:

- **Frontend**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui components
- **Backend**: Express server with static serving capability
- **Development**: Concurrent dev servers (Vite on port 3000, Express on 3001)
- **Production**: Single Express server serving built static files

## Key Development Patterns

### Component Architecture
- All components are in `client/src/components/` with section-based naming (`PersonalInfoCard`, `ProjectsSection`, etc.)
- Uses **shadcn/ui component system** - components in `@/components/ui/` folder
- Components use `forwardRef` pattern and `cn()` utility for className merging
- Emerald color theme (`emerald-700`, `emerald-800`) used throughout for consistency

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
npm start          # Starts both servers via scripts/dev.ts
npm run dev        # Vite dev server only
```

The `npm start` command runs `tsx watch scripts/dev.ts` which:
1. Starts Express server on port 3001
2. Starts Vite dev server on port 3000
3. Configures API proxy from frontend to backend (`/api/*` → `localhost:3001`)

### Build & Deploy
```bash
npm run build      # Builds client + compiles server TypeScript
```

### Server Architecture
- **Development**: Two servers (Vite + Express) with API proxying
- **Production**: Single Express server with `setupStaticServing()` for SPA routing
- Express server serves static files and handles `/{*splat}` routes (except `/api/`)

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
- `server/` - Backend Express server
- `scripts/` - Development utilities
- Build output: `dist/public/` (configured in `vite.config.js`)

### Environment Considerations
- Custom Vite plugins handle source maps and CORS in development
- Port configuration: Vite (3000), Express (3001) defined in `vite.config.js`
- Production detection via `NODE_ENV === 'production'`

## Critical Integration Points

- **API Proxy**: Vite proxies `/api/*` to Express server during development
- **Static Serving**: Production uses Express `static-serve.ts` for SPA routing
- **Hot Reload**: `tsx watch` enables server restart; Vite handles client HMR
- **Build Pipeline**: Vite builds client, TypeScript compiles server separately

When making changes, ensure compatibility between the dual development setup and single-server production architecture.