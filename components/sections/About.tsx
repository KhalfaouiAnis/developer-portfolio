import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading label="About me" title="Who I am" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-4">
          <p className="text-lg text-foreground font-medium leading-relaxed">
            Hey, I&apos;m{" "}
            <span className="text-primary font-bold">Anis</span> — a dedicated
            and results-oriented Software Engineer with{" "}
            <span className="font-bold">5+ years of experience</span> designing
            scalable web applications and collaborating with cross-functional
            teams across Europe and the MENA region.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I&apos;m proficient in <strong className="text-foreground">JavaScript / TypeScript</strong>,{" "}
            <strong className="text-foreground">React / Next.js</strong>,{" "}
            <strong className="text-foreground">Java / Spring Boot</strong>, and{" "}
            <strong className="text-foreground">PostgreSQL / MongoDB</strong>. I
            have a proven ability to deliver projects on time, improve
            operational efficiency, and write clean, testable code that
            scales.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I&apos;m currently working remotely at{" "}
            <span className="font-medium text-foreground">Punitech GmbH</span>{" "}
            and open to new full-time roles, freelance projects, and remote
            collaborations worldwide.
          </p>
        </div>

        {/* Quick-facts card */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-muted/30 p-6 space-y-4">
            {[
              { label: "Location", value: "Tunis, Tunisia" },
              { label: "Availability", value: "Open to opportunities" },
              { label: "Focus", value: "Full-stack · Backend-heavy" },
              { label: "Languages", value: "Arabic · English · French" },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-start gap-4">
                <span className="text-sm font-medium text-muted-foreground shrink-0">
                  {label}
                </span>
                <span className="text-sm font-semibold text-foreground text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
