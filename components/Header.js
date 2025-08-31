"use client";

import data from "@/data/header";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import HeaderInfo from "./HeaderInfo";

export default function Header() {
  const { image, name, jobTitle, experience, education, address, languages } = data;

  return (
    <header className="flex flex-wrap flex-col items-center gap-x-8 gap-y-9 md:flex-row pb-7">
      <section className="w-[200px] md:w-[150px] h-[200px] md:h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          alt="Profile image"
          className="w-full h-full object-contain scale-up bg-white"
        />
      </section>
      <section className="flex-1">
        <h1 className="text-4xl md:text-5xl font-black capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        <h3 className="mt-2 text-lg md:text-xl font-semibold md:font-bold capitalize dark:text-zinc-400">
          {jobTitle}
        </h3>
        <div className="flex flex-wrap gap-y-1 mt-2 items-center gap-x-4">
          <HeaderInfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-700 dark: dark:text-zinc-400 scale-up"
                size={16}
              />
            }
            text={address}
          />
          <HeaderInfo
            Icon={
              <BsTerminalFill
                className="text-violet-700 dark: dark:text-zinc-400 scale-up"
                size={16}
              />
            }
            text={experience}
          />
          <HeaderInfo
            Icon={
              <IoIosSchool
                className="text-violet-700 dark: dark:text-zinc-400 scale-up"
                size={16}
              />
            }
            text={education}
          />
        </div>
        <div className="flex flex-wrap gap-y-1 mt-2 items-center gap-x-4">
          <HeaderInfo
            Icon={languages.arab.icon}
            text={languages.arab.label}
          />
          <HeaderInfo
            Icon={languages.english.icon}
            text={languages.english.label}
          />
          <HeaderInfo
            Icon={languages.frensh.icon}
            text={languages.frensh.label}
          />
        </div>
      </section>
    </header>
  );
}
