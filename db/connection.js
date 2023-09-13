import { MongoClient } from "mongodb";
import { CONFIG } from "../api/config/credentials.js"

const uri = CONFIG.mongo_uri;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    retryWrites: true
}

export const getConx = async() => {
    const client = await MongoClient.connect(uri, options);
    return client.db;
}

