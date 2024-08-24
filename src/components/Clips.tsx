"use client"

import { InView } from "react-intersection-observer";

export default function ClipsComponent({
  id,
  url,
}: {
  id: string;
  url: string;
}) {
  return (
    <div>
      <InView>
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            className="container max-w-screen-xl mx-auto flex justify-center items-center text-2xl"
          >
            <h2>This is item {id}</h2>
          </div>
        )}
      </InView>
    </div>
  );
}
