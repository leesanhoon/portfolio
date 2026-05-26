import mongoose from "mongoose";

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

declare global {
    var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
    conn: null,
    promise: null,
};

if (!global.mongooseCache) {
    global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("Please define MONGODB_URI in your environment variables.");
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(uri, {
            dbName: process.env.MONGODB_DB || "portfolio",
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
