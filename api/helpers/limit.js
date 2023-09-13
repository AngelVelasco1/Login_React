import rateLimit from "express-rate-limit";

export let limitGrt = ()=>{
    return rateLimit({
        windowMs:  40 * 1000,
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 

        skip: (req,res)=>{
            if(req.headers["content-length"] > 100){
                res.status(413).send({
                    message: "Payload too large. Maximum size allowed: 100"
                });
                return true;
            }
        }, 
        message: (req,res)=>{
            res.status(429).send({
                message: "Too many requests"
            });
        }
    })    
}
