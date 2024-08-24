import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
config({ path: '.env' }); // or .env.local
import * as schema from "./schema"

const client = createClient({
    url: "libsql://eventiclips-naufalw.turso.io" ,
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjQ1Mzg3OTQsInAiOnsicnciOnsibnMiOlsiNThiMmIzZTAtMWVjZi00NDA0LTg3ZTgtZmY4ZDg2NDQwNTJmIl19fX0.BNDl4alBqnExzzqk4KVLYLJsZogNb4zVaw8YDvWxRoYf4SA6HAgaOcS-NSJrGl7omtZh_cqVJbvwhmvlwE2-DQ",
});
export const db = drizzle(client, { schema });