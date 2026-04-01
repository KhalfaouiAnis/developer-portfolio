"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import data from "@/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [active, setActive] = useState(data[0].id);
  const currentCategory = data.find((c) => c.id === active)!;

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="Stack"
        title="Skills & technologies"
        subtitle="Grouped by area — click a category to explore the tools I use."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {data.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200",
              active === cat.id
                ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            {cat.label}
            <span
              className={cn(
                "ml-2 text-xs font-bold",
                active === cat.id ? "opacity-70" : "opacity-50"
              )}
            >
              {cat.skills.length}
            </span>
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {currentCategory.skills.map((skill) => {
            const isNext = skill.name.toLowerCase().includes("next");
            return (
              <div
                key={skill.id}
                className="skill-chip flex items-center gap-3 p-3 rounded-xl border border-border bg-muted/30 hover:border-primary/40 hover:bg-muted/60 transition-all duration-200"
              >
                <div
                  className={cn(
                    "relative w-7 h-7 shrink-0",
                    isNext && "bg-white rounded-full p-0.5"
                  )}
                >
                  <Image
                    src={skill.image}
                    fill
                    alt={skill.name}
                    className="object-contain"
                    sizes="28px"
                  />
                </div>
                <span className="text-sm font-medium text-foreground capitalize leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
