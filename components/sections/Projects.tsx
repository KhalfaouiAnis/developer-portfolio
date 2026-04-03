"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import data from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import ProjectCard from "../ui/project/projectCard";
import ProjectModal from "../ui/project/modal";

type Filter = "all" | "fullstack" | "frontend" | "backend" | "mobile";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "fullstack", label: "Full-stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "mobile", label: "Mobile" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? data
      : data.filter((p) => p.category.includes(filter));

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Work"
        title="Personal projects"
        subtitle="A selection of things I've built in my own time — each one a full product from idea to deployment."
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-full border transition-colors",
              filter === value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </SectionWrapper>
  );
}
