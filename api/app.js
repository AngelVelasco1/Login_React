import  express  from "express";
import cors from "cors";
import { CONFIG } from "./config/credentials.js";
import { loginStorage } from "./routes/login.js";

const app = express();
app.use(cors());
app.use(express.text());
app.use(express.json());

app.use("/login", loginStorage);

app.listen(CONFIG, ()=>{
    console.log(`Listening on ${CONFIG.hostname}:${CONFIG.port}`);
})