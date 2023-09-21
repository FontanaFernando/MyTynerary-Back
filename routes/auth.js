import express from 'express';
import signUp from '../controllers/auth/signUp.js';
import signIn from '../controllers/auth/signIn.js';
import signInToken from '../controllers/auth/signInToken.js';
import passport from '../middlewares/passport.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

router.post('/signin/token', passport.authenticate( 'jwt', {session: false}), signInToken);

export default router;