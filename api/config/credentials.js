import dotenv from "dotenv"
dotenv.config("../../");

export const CONFIG = {
    "server":  JSON.parse(process.env.SERVER),
    "user": process.env.USER,
    "password": process.env.PASSWORD,
    "db": process.env.DB,
    "private_key": process.env.PRIVATE_KEY
}