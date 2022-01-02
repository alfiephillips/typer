import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

// Check if the mongodb uri exists

if (!MONGO_URI) {
  throw new Error("Define the MONGO_URI environment variable.");
}

let cachedClient = null;
let cachedDb = null;

export default async function connectToDatabase() {
  // Check if cached

  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // Set options for configuration
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to the cluster

  let client = new MongoClient(MONGO_URI, options);

  await client.connect();

  let db = client.db("Typer");

  // Set cache

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
