import data from "@/data/skills";
import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import Skill from "./Skill";

export default function Skills() {
  return (
    <SectionWrapper>
      <Heading>Skills</Heading>
      <p className="text-base">Programming languages ​​and frameworks I have used during my development journey</p>
      <div className="flex flex-wrap items-center gap-5 mt-4">
        {data.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
