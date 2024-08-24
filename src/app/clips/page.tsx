import ClipsComponent from "@/components/Clips";
import { InView } from "react-intersection-observer";

export default function Clips() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="snap-always snap-center">
          <div className="relative min-h-screen flex bg-[#F3C969]">
            <ClipsComponent id={"awokowk"} url={"youtube.com"} ></ClipsComponent>
          </div>
        </div>
      </div>
  );
}