import { Db, MongoClient } from "mongodb";

let clientPromise: Promise<MongoClient> | null = null;

export async function getDatabase(): Promise<Db | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  clientPromise ??= new MongoClient(uri).connect();
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB ?? "qaro");
}
