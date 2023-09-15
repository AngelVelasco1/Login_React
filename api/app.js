import  express  from "express";
import cors from "cors";
import { CONFIG } from "./config/credentials.js";
import { loginStorage } from "./routes/login.js";

const app = express();
app.use(express.text());
app.use(express.json());
app.use(cors());



app.use("/login", loginStorage);

app.listen(CONFIG.server, ()=>{
    console.log(`Listening on ${CONFIG.server.hostname}:${CONFIG.server.port}`);
})