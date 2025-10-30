# AI Agent Instructions for Shay's Portfolio

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

## Project Context

This is a **simplified single-server portfolio application** built with React/TypeScript frontend and Express backend:

- **Frontend**: Vite + React + TypeScript + Tailwind CSS + shadcn/ui components
- **Backend**: Express server with conditional Vite middleware (dev only)
- **Development**: Express server + Vite middleware on port 3000 
- **Production**: Express server serving static files + API routes

### Key Development Commands
```bash
npm run dev        # Single server with Vite middleware on port 3000
npm run build      # Builds client + compiles server TypeScript
npm start          # Runs production server
```

### Architecture Notes
- Uses `@` alias mapping to `client/src/` - always use this for internal imports
- Emerald gradient theme (`emerald-700` → `emerald-800`) is intentional; keep styling consistent and avoid layout changes unless Shay explicitly asks
- Contact form functionality via `/api/contact` endpoint with nodemailer (Gmail app password placeholders in `.env`)
- `handleContact` currently types `req`/`res` as `any` to avoid Express 5 typings conflicts; preserve or adjust carefully if upgrading types
- Environment variables in `.env` for email configuration; `.env.example` documents required keys

### Tooling & Utilities
- `scripts/generate-icons.ps1` regenerates the emerald "S" icon set used in `client/public/`
- Run `npm run build` then `npm start` before deploying to ensure the server boots correctly in production mode

---

*👋 Agent acknowledgment: Leave a small emoji or comment below when you've read these instructions*
<!-- Agents who have read this: 
🤖 Claude Sonnet 3.5 (Oct 2025) - Ready to help with your portfolio journey! Let's build something great together. 
-->