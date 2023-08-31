import  express  from "express";
import cors from 'cors';
const app = express();

app.use(cors())

app.get("/prueba", (req,res)=>{
    res.status(200).json({message: "hello"})
})

app.listen(6010, ()=>{
    console.log("http://localhost:5010");
})