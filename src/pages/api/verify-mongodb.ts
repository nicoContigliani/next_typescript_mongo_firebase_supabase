import { MongoClient, ServerApiVersion } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("entro");
    const uri = process.env.MONGO_URI_ATLAS || `mongodb+srv://nicocontigliani:ch8piRaA4WKxa3hi@clusterllakascript.tv2rm.mongodb.net/`;

    console.log("🚀 ~ handler ~ uri:", uri);

    if (!uri) {
        return res.status(500).json({ error: 'MongoDB URI is not defined' });
    }

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        await client.db('menuDB').command({ ping: 1 });
        if(res.status(200)) console.log('Successfully connected to MongoDB!');
        return res.status(200).json({ message: 'Successfully connected to MongoDB!' });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return res.status(500).json({ error: 'Failed to connect to MongoDB' });
    } finally {
        await client.close();
    }
}