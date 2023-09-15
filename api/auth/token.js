import { SignJWT, jwtVerify } from "jose";
import { getConx } from "../db/connection.js";
import { ObjectId } from "mongodb";
import { CONFIG } from "../config/credentials.js";

const encoder = new TextEncoder();
const db = await getConx();

export const createToken = async(res, req, next) => {
    try {
        if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Data not founded"});
    
        const result = await db.collection('users').findOne(req.body);
        if(JSON.stringify(Object.keys(req.body) !== JSON.stringify(["name", "password"]))) return res.status(417).send("You don't provide name or password")
        if (!result) return res.status(401).send({message: "User not found"});
        
        const id = result._id.toString();
        const jwtConstructor = await new SignJWT({ id: id})
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(CONFIG.private_key));
    
        req.data = {status: 200, token: jwtConstructor};
        next(); 
    } catch(err) {
        console.log({messagere: err.message});
    }
} 

export const validateToken = async(req,  token) => {
    try {
        const tokenData = await jwtVerify(token, encoder.encode(CONFIG.private_key));
        const res = await db.collection("users").findOne(
            {
                _id: new ObjectId(tokenData.payload.id),
                [`allowances.${req.baseUrl}`]:`${req.headers["accept-version"]}`
            }
        );

        if(!res.allowances[req.baseUrl].includes(req.method)) return { error: "Don't accepted for this method"}
        
        let {_id, allowances, ...users} = res
        return users
    }
    catch(err) {
        return {message: err.message}
    }
}

