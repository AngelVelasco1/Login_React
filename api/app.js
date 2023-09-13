import  express  from "express";
import cors from 'cors';
import { CONFIG } from "./config/credentials.js";

const app = express();
app.use(cors());

app.listen(CONFIG.server, ()=>{
    console.log(`Listening on ${CONFIG.server.hostname}:${CONFIG.server.port}`);
})