import data from "@/data/work";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import Skill from "./Skill";

export default function WorkHistory() {
  return (
    <SectionWrapper>
      <Heading>Work Experience</Heading>
      {data.map((work) => (
        <div key={work.id} className="mt-6 flex gap-x-6">
          <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden border dark:border-zinc-700">
            <Image
              src={work.image}
              fill
              alt="Company logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 ">
            <h2 className="text-black dark:text-white capitalize font-bold text-base">
              {work.role}
            </h2>
            <span className="capitalize text-sm font-bold text-zinc-500">
              {work.company}
            </span>
            <div className="flex items-center gap-x-1">
              <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                {work.type}
              </span>
              <span className="text-black dark:text-white">-</span>
              <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                {work.date}
              </span>
            </div>
            {work.skills && (
              <div className="flex gap-2 flex-wrap my-2 pt-2">
                {work.skills.map((skill) => (
                  <Skill key={skill.id} {...skill} />
                ))}
              </div>
            )}
            {work.options && (
              <div className="mt-2">
                {work.options.map((option, index) => (
                  <li
                    className="text-zinc-900 text-base font-semibold dark:text-zinc-400"
                    key={index}
                  >
                    {option}
                  </li>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
