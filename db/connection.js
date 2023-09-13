import { MongoClient } from "mongodb";
import { CONFIG } from "../api/config/credentials.js"

const uri = CONFIG.mongo_uri;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    retryWrites: true
}

export const getConx = async() => {
    try {
        const client = await MongoClient.connect(uri, options);
        return client.db;
    } catch(err) {
        console.error({error: err.message});
    }
}

