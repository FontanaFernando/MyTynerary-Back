import express from 'express';
import create from '../controllers/city/create.js';
import read from '../controllers/city/read.js';
import readMany from '../controllers/city/readMany.js';
import update from '../controllers/city/update.js';
import destroy from '../controllers/city/destroy.js';

const router = express.Router();

router.post('/', create);
router.get('/:id', read);
router.get('/', readMany);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;