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

Install dependencies and start the backend in one terminal:

```bash
cd backend
npm install
Copy-Item .env.example .env
npm run dev
```

If `backend/.env` already exists, keep it and update `CLIENT_URL=http://localhost:5173`. Add your Gmail App Password to `SMTP_PASS` if the consultation form should send email.
The backend uses a local SQLite database at `backend/data/mexacrio.sqlite` and creates the `consultations` table on startup. No separate database server or SQL connection settings are required.

In a second terminal, start the frontend:

```bash
cd frontend
npm install
npm run dev -- --host 127.0.0.1
```

Open `http://localhost:5173`. The frontend sends API requests through the Vite proxy to the local backend at `http://localhost:5000`. The backend health check is at `http://localhost:5000/api/v1/health`.

From the repository root, `npm run build` installs frontend dependencies and builds the site into `frontend/dist`. Local production builds use `http://localhost:5000` as the API server.

## API

- `GET /` — API welcome response
- `GET /api/v1/health` — API health status
- `POST /api/v1/consultations` — Validate and store a consultation request in SQLite and an Excel workbook, then send an email notification

The consultation endpoint accepts `fullName`, `email`, `company`, `serviceInterest`, and `goalsAndScope`. Submissions are stored in the SQLite `consultations` table and appended to `backend/data/consultations.xlsx` before the email notification is sent. If the workbook is open or otherwise unavailable, the request is still accepted, the export is retried automatically, and the response advises the user not to submit again. At startup, saved database submissions are reconciled into the workbook. If notification delivery fails, the saved request is still accepted and the response indicates that the email was not sent.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
