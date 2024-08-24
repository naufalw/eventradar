import {ChevronLeft} from "lucide-react"
import Link from "next/link"

export default function CreateClip (){

    return <div >
        <div className="w-full flex px-6 justify-between py-5 bg-gray-100 border-b-1 border-gray-600">
            <Link href={"/"}><ChevronLeft /></Link>
             <h1 className="text-center font-semibold">Create Clip</h1>
             <a className="opacity-0"><ChevronLeft /></a>
        </div>
        

    </div>
}