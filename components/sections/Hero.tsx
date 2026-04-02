"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const STATS = [
  { value: "6+", label: "Years experience" },
  { value: "5", label: "Projects shipped" },
  { value: "3", label: "Companies" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
}) as any

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(to right, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-150 h-150 rounded-full opacity-10 dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 293) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left column ── */}
          <div>
            {/* Available badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.07)}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.05]"
            >
              Anis
              <br />
              <span className="text-primary">Khalfaoui</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              {...fadeUp(0.14)}
              className="mt-4 text-xl sm:text-2xl font-semibold text-muted-foreground"
            >
              Software Engineer
              <span className="text-border mx-3">·</span>
              Full-Stack
            </motion.p>

            {/* Stack line */}
            <motion.p
              {...fadeUp(0.2)}
              className="mt-2 text-base text-muted-foreground font-mono"
            >
              Java · Spring · React · Next.js · Docker
            </motion.p>

            {/* Location */}
            <motion.div
              {...fadeUp(0.25)}
              className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <MapPin size={14} className="shrink-0" />
              Tunis, Tunisia — working remotely worldwide
            </motion.div>

            {/* Languages */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-4 flex flex-wrap gap-2"
            >
              {[
                { flag: "🇹🇳", lang: "Arabic", level: "Native" },
                { flag: "🇬🇧", lang: "English", level: "Fluent" },
                { flag: "🇫🇷", lang: "French", level: "Fluent" },
              ].map(({ flag, lang, level }) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-border bg-muted/60 text-muted-foreground"
                >
                  <span>{flag}</span>
                  {lang}
                  <span className="text-border">·</span>
                  {level}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.37)}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get in touch
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm font-semibold hover:bg-accent transition-colors"
              >
                View projects
              </a>
              <a
                href="/files/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm font-semibold hover:bg-accent transition-colors"
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              {...fadeUp(0.43)}
              className="mt-6 flex items-center gap-4"
            >
              <Link
                href="https://github.com/KhalfaouiAnis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anis-khalfaoui-a70022171"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedin size={20} />
              </Link>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-50 md:w-w-37.5 h-50 md:h-w-37.5 relative rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  fill
                  alt="Profile image"
                  className="w-full h-full object-contain scale-up bg-white"
                />
              </div>
              {/* Ring decoration */}
              <div
                aria-hidden
                className="absolute -inset-2 dark:-inset-1 dark:border-white/10 rounded-full border border-primary/20 animate-pulse"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-0.5 p-4 rounded-xl border border-border bg-muted/40 text-center"
                >
                  <span className="text-3xl font-black text-primary">
                    {value}
                  </span>
                  <span className="text-xs text-muted-foreground leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
