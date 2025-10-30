# Shay's Next Steps Guide

Hey Shay! Here's a friendly checklist to keep your momentum going and get a portfolio live.  
Here is a front, if you like it, it's yours. It's a bit complicated, but you've got this!  


## Personalize the Content
- Update the copy in `client/src/components/` to reflect your latest projects, skills, and story.
- Swap the placeholder resume button in `PersonalInfoCard.tsx` for a real link or download when ready.
- Refresh social links in `ContactSection.tsx` if any URLs change.
- Need new icons? Run `powershell -ExecutionPolicy Bypass -File scripts/generate-icons.ps1` to regenerate the emerald "S" set, or drop in your own artwork.

## Wire Up the Contact Form
- Edit `.env` with your Gmail address and app password (instructions sit inside the file).
- Update `CONTACT_EMAIL` if submissions should land somewhere else.
- Restart the dev server after changing env vars so Express picks them up.

## Test Everything Locally
```powershell
npm install          # once, if you haven't yet
echo EMAIL_USER=... > .env  # fill in the real values
npm run dev          # verify the form works (check terminal for mail errors)
npm run build        # confirm the production build succeeds
npm start            # smoke-test the Express production bundle
```

## Publish the Portfolio (Pick One)
1. **Railway (recommended)**
   - Create an account at https://railway.app/
   - "New Project" → "Deploy from GitHub" (after you push the repo)
   - Set environment variables in the Railway dashboard
   - Railway builds with `npm install`, `npm run build` and starts `npm start`
2. **Render** (https://render.com/)
   - "New Web Service" → connect GitHub repo
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
   - Add env vars under "Environment"
3. **Vercel** (works great too!)
   - Import the repo at https://vercel.com/import
   - Framework preset: `Other`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Add env vars under "Settings" → "Environment Variables"

## Git & GitHub
- `git status` → review changes
- `git add . && git commit -m "Describe the update"`
- `git push origin main`
- From here, every push can auto-deploy if you wire it to the hosting platform.

---

You’ve got this! I’m here whenever you need a hand—just ask and we’ll tackle it together. 