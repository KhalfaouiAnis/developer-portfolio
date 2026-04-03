import SkillBadge from "@/components/ui/SkillBadge";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import {
    FaGithub,
} from "react-icons/fa";
import { Project } from "@/types";

export default function ProjectModal({
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
                            fill
                            src={project.image}
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