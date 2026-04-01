"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import {
  FaGithub,
} from "react-icons/fa";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import data from "@/data/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type Filter = "all" | "fullstack" | "frontend" | "backend";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "fullstack", label: "Full-stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
        >
          {/* Image */}
          <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden bg-muted">
            <Image
              src={project.image}
              fill
              alt={project.shortTitle}
              className="object-cover"
            />
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-bold text-foreground leading-snug">
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-border">
              {project.skills.map((skill) => (
                <SkillBadge key={skill.id} {...skill} size="sm" />
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.source_code && (
                <Link
                  href={project.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-border bg-muted/50 hover:bg-accent transition-colors"
                >
                  <FaGithub size={15} />
                  Source code
                </Link>
              )}
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={15} />
                  Live demo
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35 }}
      className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          fill
          alt={project.shortTitle}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {project.shortTitle}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Mini tech list */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
          {project.skills.slice(0, 5).map((skill) => (
            <span
              key={skill.id}
              className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded"
            >
              {skill.name}
            </span>
          ))}
          {project.skills.length > 5 && (
            <span className="text-xs font-medium text-muted-foreground">
              +{project.skills.length - 5} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
