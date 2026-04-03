import { motion } from 'framer-motion';
import { X, Package } from 'lucide-react';
import { Project } from '@/types';
import SkillBadge from '../SkillBadge';

export default function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {

    return (
        <>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Modal panel */}
            <motion.div
                key="modal"
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
                    initial={{ scale: 0.92, y: 24, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.94, y: 16, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 end-4 z-10 w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all"
                    >
                        <X size={16} />
                    </button>

                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 aspect-square md:aspect-auto flex-shrink-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[85vh]">
                            <p className="text-xs font-bold uppercase tracking-widest text-solar-500 mb-2">
                                {project.category}
                            </p>

                            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                                {project.title}
                            </h2>

                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="mb-7">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                                    <Package size={12} />
                                    Tech stack
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {project.skills.map((skill) => (
                                        <SkillBadge key={skill.id} {...skill} size="sm" />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
