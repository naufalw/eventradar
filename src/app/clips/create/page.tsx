import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Input } from "@/components/ui/input"

export default function CreateClip() {

    return <div >
        <div className="w-full flex px-6 justify-between py-5 border-b-1 bg-[#1C1F20] border-gray-600">
            <Link href={"/"} className="text-white"><ChevronLeft /></Link>
            <h1 className="text-center text-white font-semibold">Create Clip</h1>
            <a className="opacity-0"><ChevronLeft /></a>
        </div>
        <form className="px-2 bg-[#1C1F20] flex flex-col gap-y-2">

            <Input className="h-12" type="text" name="organizer" placeholder="Who organize?" />
            <label htmlFor="date" className="text-sm">Date</label>
            <Input className="h-12" type="date" name="date" placeholder="Day it will it starts?" />
            <label htmlFor="date" className="text-sm">Start time</label>
            <Input className="h-12" type="time" name="start_at" placeholder="Time will it starts?" />
            <label htmlFor="date" className="text-sm">End time</label>
            <Input className="h-12" type="time" name="end_at" placeholder="Time will it ends?" />
        </form>
        <div className=" absolute w-screen  bottom-0 px-5 mb-6 "><button className="bg-[#FF8834] rounded-lg w-full py-4">Share event!</button></div>


    </div >
}