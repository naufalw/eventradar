import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
config({ path: '.env' }); // or .env.local
const client = createClient({
    url: process.env.DATABASE_CONNECTION_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
});
export const db = drizzle(client);