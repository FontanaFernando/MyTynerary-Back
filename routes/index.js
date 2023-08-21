import { Router } from 'express';
import cityRouter from './city.js';

let router = Router();

router.use('/city', cityRouter);

export default router;
