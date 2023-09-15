import express from "express"
import { createToken } from "../auth/token.js"
import { Router } from "express"
import { loginV1 } from "../v1/login.js";
import { limitGrt } from "../helpers/limit.js"

export const loginStorage = Router();



loginStorage.use(limitGrt());

loginStorage.post("/", createToken, loginV1)