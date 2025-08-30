import data from "@/data/about";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
      <Heading>About</Heading>
      <h3 className="text-xl md:text-2xl font-semibold capitalize text-black dark:text-white">
        {data.heading}
      </h3>
      <p className="mt-3 text-base md:text-lg font-semibold text-black dark:text-zinc-400">
        {data.bio}
      </p>
    </SectionWrapper>
  );
}
