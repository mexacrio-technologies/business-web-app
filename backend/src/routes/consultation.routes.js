import { Router } from 'express';
import { createConsultation } from '../controllers/consultation.controller.js';

const router = Router();

router.post('/', createConsultation);

export default router;
