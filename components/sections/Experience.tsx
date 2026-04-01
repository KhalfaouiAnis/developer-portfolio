import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import data from "@/data/work";

const TYPE_LABELS: Record<string, string> = {
  remote: "Remote",
  "on site": "On-site",
  hybrid: "Hybrid",
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="Career"
        title="Work experience"
        subtitle="Companies I've worked with and the impact I've delivered."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-12">
          {data.map((job, index) => (
            <div key={job.id} className="relative flex gap-6 sm:gap-8 timeline-item">
              {/* Dot + logo */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`timeline-dot relative w-10 h-10 rounded-full overflow-hidden border-2 ${
                    job.current
                      ? "border-primary shadow-md shadow-primary/20"
                      : "border-border"
                  } bg-background`}
                >
                  <Image
                    src={job.image}
                    fill
                    alt={`${job.company} logo`}
                    className="object-contain p-1"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
                  <div>
                    <h3 className="text-base font-bold text-foreground leading-snug">
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full border border-border bg-muted/50 font-medium">
                      {TYPE_LABELS[job.type] ?? job.type}
                    </span>
                    {job.current && (
                      <span className="px-2 py-0.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 font-semibold">
                        Current
                      </span>
                    )}
                    <span className="font-medium">{job.date}</span>
                  </div>
                </div>

                {/* Achievement bullets */}
                {job.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {job.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <SkillBadge key={skill.id} {...skill} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
