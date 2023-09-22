import dotenv from "dotenv"
dotenv.config();

export const CONFIG = {
    "port": process.env.VITE_PORT_BACKEND,
    "hostname": process.env.VITE_HOSTNAME,
    "user": process.env.USER_ATLAS,
    "password": process.env.PASSWORD,
    "db": process.env.DB,
    "private_key": process.env.PRIVATE_KEY
}