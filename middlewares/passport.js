import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
};

const fn = async (jwtPayload, done) => {
    try {
        const user = await User.findOne({ email: jwtPayload.email });

        if (!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    } catch (error) {
        done(error, false);
    }
};

passport.use(new Strategy(opts, fn));

export default passport;