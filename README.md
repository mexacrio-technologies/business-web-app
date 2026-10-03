# Mexacrio Technologies

Full-stack company website for Mexacrio Technologies, with a React and Vite frontend and an Express API for consultation requests and email notifications.

## Project structure

```text
Business/
├── frontend/
│   ├── public/                 # Static assets and branding
│   └── src/
│       ├── components/         # Page sections and reusable UI
│       ├── App.jsx             # Main page composition
│       └── main.jsx            # React entry point
└── backend/
    └── src/
        ├── config/             # Environment configuration
        ├── controllers/        # Consultation and health handlers
        ├── middlewares/        # Error handling
        ├── routes/             # Versioned API routes
        ├── services/           # Email notification service
        ├── utils/              # API response and error types
        ├── app.js              # Express middleware and routes
        └── server.js           # HTTP server startup
```

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- A Gmail account with 2-Step Verification and an App Password for sending consultation notifications

## Run locally

Install and start the frontend:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server is available at `http://localhost:5173` and proxies `/api` requests to `http://localhost:5000`.

From the repository root, `npm run build` installs the frontend dependencies and creates the production bundle in `frontend/dist`.

Configure and start the backend in a second terminal:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Set `SMTP_PASS` in `backend/.env` to the Gmail App Password before submitting consultation requests. `SMTP_USER` is the Gmail account used to send messages; `CONTACT_EMAIL` is the mailbox that receives requests. Both default to `mexacrio.contact@gmail.com`. `MAIL_FROM` controls the sender name and address. Keep `.env` private and never commit it.

### Production frontend/backend URLs

- Frontend: `https://business-web-app-nine.vercel.app/`
- Backend: `https://business-web-app-7m1j.onrender.com`

The production frontend build reads `VITE_API_BASE_URL` from `frontend/.env.production` and sends API requests to the Render backend. On Render, set `CLIENT_URL=https://business-web-app-nine.vercel.app` (without a trailing slash); the backend normalizes it to the origin for CORS. If setting `VITE_API_BASE_URL` in the Vercel dashboard instead, use the same backend URL and redeploy the frontend.

## API

- `GET /` — API welcome response
- `GET /api/v1/health` — API health status
- `POST /api/v1/consultations` — Validate and email a consultation request

The consultation endpoint accepts `fullName`, `email`, `company`, `serviceInterest`, and `goalsAndScope`. Email delivery must be configured for a successful submission. Requests are emailed and are not persisted in a database.

## Search engine setup

The frontend publishes canonical metadata, social sharing tags, Organization/Service structured data, `robots.txt`, and an XML sitemap for `https://business-web-app-nine.vercel.app/`. After deployment, submit `https://business-web-app-nine.vercel.app/sitemap.xml` in Google Search Console and verify the production URL and brand image are publicly crawlable.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
