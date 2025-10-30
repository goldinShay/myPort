# Shay's Maybe Portfolio

A simplified (haha) single-server portfolio application built with Vite + React + TypeScript on the frontend and Express on the backend. Development and production run off a single Express server (port 3000) that conditionally enables Vite middleware during development.

## 1. Prerequisites (Ubuntu / WSL / Linux)

- **Node.js 20+** (tested with Node 22). Install via [`nvm`](https://github.com/nvm-sh/nvm):
  ```bash
  nvm install 22
  nvm use 22
  ```
- **npm 10+** (bundled with recent Node versions).
- Optional: **IntelliJ IDEA** with the **Node.js** plugin enabled (recommended if you prefer IntelliJ over a separate editor).

## 2. Clone & Install

```bash
# Clone the repository
git clone https://github.com/PastelPrism/portfolio-shay.git
cd portfolio-shay

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env
```

Update the new `.env` file with real values:
```env
EMAIL_USER=your-gmail-address
EMAIL_PASS=your-gmail-app-password
CONTACT_EMAIL=destination-email
NODE_ENV=development
```
> Gmail now requires an **App Password** (not your normal password). Generate one from your Google Account under **Security → App passwords**.

## 3. Run in Development

```bash
npm run dev
```
This starts the Express server with Vite middleware on port **3000**. Open <http://localhost:3000> to preview changes. The server restarts automatically when files change.

### IntelliJ 
- Open the project folder via **File → Open…**.
- Enable the **Node.js** plugin if prompted.
- Use IntelliJ’s integrated terminal to run the commands above.
- Add a **Run Configuration → npm** entry for `npm run dev` if you prefer one-click start.

## 4. Build & Preview Production

```bash
npm run build    # Builds client assets and compiles the server
npm start        # Runs the compiled Express server (port 3000)
```
`npm start` reads from `dist/server/index.js`, so always run `npm run build` before it.

## 5. Contact Form Notes

- The contact form posts to `/api/contact` and uses **nodemailer**.
- With Gmail, set `EMAIL_USER` to your address and `EMAIL_PASS` to the generated App Password.
- The backend currently types the request/response handlers as `any` to avoid Express 5 typing regressions. Adjust carefully if you change Express typings.



## 6. Deploying

Any Node-friendly host works. Typical workflow:

1. Push the repo to GitHub.
2. Choose a platform (Railway, Render, Vercel, Fly.io, etc.).
3. Configure build/start commands:
   - Build: `npm run build`
   - Start: `npm start`
4. Add environment variables (`EMAIL_USER`, `EMAIL_PASS`, `CONTACT_EMAIL`, `NODE_ENV`).

### Suggested Platforms
- **Railway**: simple, inexpensive Node hosting. Auto-detects the build/start commands.
- **Render**: free tier available (app sleeps when idle). Configure the environment variables under “Environment”.
- **Vercel**: set framework to `Other`, build to `npm run build`, output to `dist`, and specify `npm start` as the server command.

## 8. Git Workflow

```bash
git status
# review changes
git add <files>
git commit -m "Describe the update"
git push origin main
```
Once connected, your hosting provider can auto-deploy on every push.

---
You now have everything needed to keep the portfolio updated and deploy it. If you get stuck, ask for help—this project is designed so you can grow into the frontend while staying productive. If you ask an AI agent for help, ask them to read the Agents files first. You’ve got this! :D
