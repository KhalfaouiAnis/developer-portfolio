import { GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import data from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        label="Background"
        title="Education"
        subtitle="Academic foundations that shaped my engineering approach."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-10">
          {data.map((edu) => (
            <div key={edu.id} className="relative flex gap-6 sm:gap-8">
              {/* Icon dot */}
              <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border-2 border-border bg-background flex items-center justify-center">
                <GraduationCap size={18} className="text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1.5">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-snug">
                      {edu.degree} — {edu.field}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {edu.school}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium">{edu.location}</span>
                    <span className="px-2 py-0.5 rounded-full border border-border bg-muted/50 font-medium">
                      {edu.startYear} – {edu.endYear}
                    </span>
                  </div>
                </div>

                {edu.description && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
