import type { Project } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
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
            <div className="relative w-full aspect-video overflow-hidden bg-muted">
                <Image
                    src={project.image}
                    fill
                    alt={project.shortTitle}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

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