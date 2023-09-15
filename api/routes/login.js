import express from "express"
import { createToken } from "../auth/token.js"
import { Router } from "express"
import { loginV1 } from "../v1/login.js";
import { limitGrt } from "../helpers/limit.js"
import session from "express-session";

export const loginStorage = Router();


loginStorage.use(express.urlencoded({ extended: true }));
loginStorage.use(session({ secret: "secret", resave: false, saveUninitialized: true}));


loginStorage.use(limitGrt(), createToken);

loginStorage.post("/ghgh", loginV1)