import { Router } from 'express';
import cityRouter from './city.js';
import itineraryRouter from './itinerary.js';

let router = Router();

router.use((req, res, next) => {
    console.log('Time (router): ', new Date().getFullYear());
    next();
});

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
});

router.use('/city', cityRouter);
router.use('/itinerary', itineraryRouter);

export default router;
