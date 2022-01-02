import { MongoClient } from "mongodb";

import bcrypt from "bcrypt";
import validator from "validator";

const MONGO_URI = process.env.MONGO_URI;

// Check if the mongodb uri exists

if (!MONGO_URI) {
  throw new Error("Define the MONGO_URI environment variable.");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
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

export class MongoHelper {
  async createUser(res, username, email, password) {
    // Find the user table

    const { db } = await connectToDatabase();
    const users = db.collection("user");

    // Error handling for database insertion

    if (!username || !email || !password) {
      return res.status(400).json({
        data: {
          user: null,
          message: "Failed creating user.",
          error: "Data fields are empty!",
        },
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        data: {
          method: "POST",
          user: null,
          message: "Failed creating user.",
          error: "Email is not valid!",
        },
      });
    }

    if (username.length > 16 || username.length < 4) {
      return res.status(400).json({
        data: {
          method: "POST",
          user: null,
          message: "Failed creating user.",
          error: "Username must be between 4 and 16 characters!",
        },
      });
    }

    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        returnScore: false,
      })
    ) {
      return res.status(400).json({
        data: {
          method: "POST",
          user: null,
          message: "Failed creating user.",
          error: "Password has not met the specified criteria!",
        },
      });
    }

    // Hash the password

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    password = await bcrypt.hash(password, salt);

    // Create the field for insertion

    const doc = {
      username,
      email,
      password,
    };

    // Create a unique index for username and email

    await users.createIndex({ username: 1, email: 1 }, { unique: true });

    try {
      await users.insertOne(doc);
      return res.status(200).json({
        data: {
          method: "POST",
          user: doc,
          message: "User has been successfully created.",
          error: null,
        },
      });
    } catch (err) {
      return res.status(500).json({
        data: {
          method: "POST",
          user: null,
          message: "Internal server error.",
          error: err.message,
        },
      });
    }
  }
}
