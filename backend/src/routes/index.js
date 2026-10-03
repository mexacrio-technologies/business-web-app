import { Router } from 'express';
import healthRoutes from './health.routes.js';
import consultationRoutes from './consultation.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/consultations', consultationRoutes);

export default router;
