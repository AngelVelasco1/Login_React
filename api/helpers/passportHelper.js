import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { validateToken } from "../auth/token";

export default passport.use(new BearerStrategy(
    {passReqToCallback: true},
    async function(req, token, done) {
        console.log(token);
        const user = await validateToken(req, token)
        if(!user) return done(null, false)
        return done(null, user)
    }
))