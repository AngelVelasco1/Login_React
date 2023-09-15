import { MongoClient } from "mongodb";
import { CONFIG } from "../config/credentials.js"

const uri = `mongodb+srv://${CONFIG.user}:${CONFIG.password}@cluster0.tfk8jyc.mongodb.net/${CONFIG.db}`; 
const options = {
    retryWrites: true
}

export const getConx = async() => {
    try {
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch(err) {
        console.error({error: err.message});
    }
}

