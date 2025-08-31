"use client";

import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/reviews";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Testimonials() {
  const [count, setCount] = useState(4);

  return (
    <SectionWrapper>
      <Heading>Satisfied Clients</Heading>
      <h1 className="text-xl md:text-3xl font-black capitalize mt-5">
        What{" "}
        <strong className="text-violet-600 dark:text-zinc-400">
          client's/collegues
        </strong>{" "}
        say
      </h1>
      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5 leading-[22px]">
        I engineered and developed applications that solve real word problems and make other people's life easier.
      </p>
      <div className="relative w-full">
        {data.length !== count && (
          <div className="absolute bottom-2 w-full h-full bg-gradient-to-t from-white/80 dark:from-[#121212]/90  to-transparent flex justify-center items-end z-20">
            <button
              onClick={() => setCount(count + 2)}
              className="h-[45px] bg-violet-600 text-white rounded-lg font-medium text-base capitalize px-4"
            >
              <FaArrowCircleDown className="scale-up" title="Show more..." />
            </button>
          </div>
        )}
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          breakpointCols={{
            default: 2,
            1200: 2,
            1000: 1,
            500: 1,
          }}
        >
          {data.slice(0, count).map((rating) => (
            <div
              key={rating.id}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-7 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="flex gap-5">
                <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden">
                  <Image
                    fill
                    alt="Reviewer image"
                    src={rating.image}
                    className="w-full h-full object-cover scale-up"
                  />
                </div>
                <div className="flex-1 ">
                  <h1 className="font-bold text-lg capitalize text-zinc-900 dark:text-zinc-300">
                    {rating.name}
                  </h1>
                  <span className="block mt-[1px] text-base text-zinc-500 dark:text-zinc-300 capitalize font-medium leading-[20px]">
                    {rating.company}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                {rating.comment}
              </p>
            </div>
          ))}
        </Masonry>
      </div>
    </SectionWrapper>
  );
}
