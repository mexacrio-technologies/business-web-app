# Mexacrio Technologies frontend

React single-page website built with Vite and Tailwind CSS.

From this directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`. Its `/api` requests are proxied to the backend at `http://localhost:5000` during development. Production builds use `VITE_API_BASE_URL` from `.env.production` to reach the deployed backend; override it in the deployment environment if needed, then redeploy.

See the repository [README](../README.md) for full-stack setup and backend email configuration.
