import data from "@/data/contacts";
import Heading from "./Heading";
import Link from "next/link";

import SectionWrapper from "./SectionWrapper";
import getContactIcon from "@/utils/getContactIcon";

export default function Contacts() {
  return (
    <SectionWrapper>
      <Heading>contacts</Heading>
      <div className="flex flex-wrap items-center gap-5 max-w-3xl">
        {data.map(({ id, label, link, name }) => (
          <Link
            href={link}
            key={id}
            target="_blank"
            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 hover:text-black hover:dark:text-white"
          >
            {getContactIcon(name)}
            <span className="text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
