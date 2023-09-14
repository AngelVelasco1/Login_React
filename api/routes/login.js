import { createToken } from "../auth/token.js"
import { Router } from "express"
import { loginV1 } from "../v1/login.js";
import session from "express-session";

export const loginStorage = Router();

loginStorage.use(session({ secret: "secret", resave: false, saveUninitialized: true}));
loginStorage.use(createToken);

loginStorage.post("/", loginV1, async (req, res) => {
    res.status(200).json(req.data);
});