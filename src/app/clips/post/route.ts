import { db } from "@/db"
import { events } from "@/db/schema"


export async function POST(request: Request){
    const a =  await request.formData()
console.log(a)
    const end_at = new Date(a.get("endAt")?.toString() ?? "0")
    const organizer = a.get("organizer") ?? ""
    const start_at = new Date(a.get("startAt")?.toString() ?? "")
    const gmap = a.get("gmap")?.toString() ?? ""
    const video  = a.get("video")?.toString() ?? ""
    const date = new Date(a.get("date")?.toString() ?? "0")

    let gmapLink = ""
    const b = await fetch(gmap)


    const result = b.url.split("/")
    const location = result[6].slice(1).split(",")




    await db.insert(events).values({end_at: end_at.toString() as string,
        start_at: start_at.toString() as string,
        organizer: organizer.toString() as string,
        url: "https://res.cloudinary.com/dpjgixhil/video/upload/v1724514033/qxxcq4zx9zau40cz971y.mp4",
        lat: parseFloat(location[0]) as number,
        long: parseFloat(location[1]) as number})

        return Response.json({this:"work"})
}