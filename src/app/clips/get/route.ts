import { db } from "@/db"
import { events } from "@/db/schema"

export async function GET() {
    const data = await db.query.events.findMany()
    console.log(data)

    return Response.json(data)
}