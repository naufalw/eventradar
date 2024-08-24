"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";

export default function CreateClip() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-[#000000]">
      <div className="max-w-md mx-auto">
        <div className=" flex px-6 justify-between py-5 border-b-1 border-gray-600">
          <Link href={"/"} className="text-white">
            <ChevronLeft />
          </Link>
          <h1 className="text-center text-white font-semibold">Create Clip</h1>
          <a className="opacity-0">
            <ChevronLeft />
          </a>
        </div>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="px-2 bg-[#000000] flex flex-col gap-y-4"
        >
          <Input
            className="h-12"
            type="text"
            {...register("organizer")}
            placeholder="Who organize?"
          />
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date" className="text-sm">
              Date
            </label>
            <Input
              className="h-12 "
              type="date"
              {...register("day")}
              placeholder="Day it will it starts?"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            {" "}
            <label htmlFor="date" className="text-sm">
              Start time
            </label>
            <Input
              className="h-12"
              type="time"
              {...register("start_at")}
              placeholder="Time will it starts?"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="date" className="text-sm">
              End time
            </label>
            <Input
              className="h-12"
              type="time"
              {...register("end_at")}
              placeholder="Time will it ends?"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            {" "}
            <label htmlFor="date" className="text-sm">
              Upload event clip
            </label>
            <Input
              className="h-24"
              type="file"
              {...register("video")}
              accept="video/mp4, video/mov"
              placeholder="Upload video"
            />
          </div>
        </form>
        <div className=" absolute w-screen max-w-md bottom-0 px-5 mb-6 ">
          <button
            onClick={handleSubmit((data) => fetch(""))}
            type="submit"
            className="bg-[#FF8834] rounded-lg w-full py-4"
          >
            Share clip
          </button>
        </div>
      </div>
    </div>
  );
}
