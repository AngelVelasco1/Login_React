import { SignJWT, jwtVerify } from "jose";
import { getConx } from "../../db/connection.js";
import { ObjectId } from "mongodb";
import { CONFIG } from "../config/credentials.js";

const encoder = new TextEncoder();
const db = await getConx();

export const createToken = async(res, req, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "Data not founded"});
    
    const result = await db.collection('users').findOne(req.body);
    if (!result) return res.status(401).send({mesaage: "User not found"});

    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(CONFIG.key));
    res.status(200).json({token: jwtConstructor});
    next(); 
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

        let {_id, allowances, ...users} = res
        if(!res.allowances[req.baseUrl].includes(req.method)) return { error: "Don't accepted for this method"}
        
        return users
    }
    catch(err) {
        return {message: err.message}
    }
}

