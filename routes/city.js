import express from 'express';
import create from '../controllers/city/create.js';
import read from '../controllers/city/read.js';
import update from '../controllers/city/update.js';
import destroy from '../controllers/city/destroy.js';

const router = express.Router();

router.post('/', create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;