import dotenv from "dotenv"

dotenv.config();

export const CONFIG = {
    "server":  JSON.parse(process.env.SERVER),
    "mongo_uri": process.env.MONGO_URI,
    "private_key": process.env.PRIVATE_KEY
}