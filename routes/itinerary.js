import express from 'express';
import create from '../controllers/itinerary/create.js';
import readById from '../controllers/itinerary/readById.js';
import readByCity from '../controllers/itinerary/readByCity.js';
import readMany from '../controllers/itinerary/readMany.js';
import update from '../controllers/itinerary/update.js';
import destroy from '../controllers/itinerary/destroy.js';

const router = express.Router();

router.post('/', create);
router.get('/:id', readById);
router.get('/filter/:id', readByCity);
router.get('/', readMany);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;