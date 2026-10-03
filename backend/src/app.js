import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/env.js';
import apiRoutes from './routes/index.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

// Security and standard middlewares
app.use(helmet());
app.use(cors({
  origin: [
    config.clientUrl,
    'https://business-web-app-nine.vercel.app',
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ],
  credentials: true
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// API Routes
app.use('/api/v1', apiRoutes);

// Root greeting
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Mexacrio Technologies API Gateway',
    version: 'v1',
    docs: '/api/v1/health'
  });
});

// Error handling middleware
app.use(errorHandler);

export default app;
