import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Download } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CONTACTS = [
  {
    id: 1,
    label: "Email",
    value: "aniskhalfaoui9@gmail.com",
    href: "mailto:aniskhalfaoui9@gmail.com",
    icon: <MdEmail size={22} />,
    external: false,
  },
  {
    id: 2,
    label: "LinkedIn",
    value: "/in/anis-khalfaoui",
    href: "https://www.linkedin.com/in/anis-khalfaoui-a70022171",
    icon: <FaLinkedin size={20} />,
    external: true,
  },
  {
    id: 3,
    label: "GitHub",
    value: "/KhalfaouiAnis",
    href: "https://github.com/KhalfaouiAnis",
    icon: <FaGithub size={20} />,
    external: true,
  },
  {
    id: 4,
    label: "Facebook",
    value: "/Kalfaoui.Anis",
    href: "https://www.facebook.com/Kalfaoui.Anis/",
    icon: <FaFacebookSquare size={20} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          Hire me
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
          Open to full-time roles, freelance projects, and remote
          collaborations. Drop me a message and I&apos;ll get back to you
          within 24 hours.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:aniskhalfaoui9@gmail.com"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
        >
          <MdEmail size={18} />
          Say hello
        </a>
      </div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONTACTS.map((contact) => (
          <Link
            key={contact.id}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/30 hover:border-primary/40 hover:bg-muted/60 transition-all duration-200"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
              {contact.icon}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-muted-foreground mb-0.5">
                {contact.label}
              </p>
              <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                {contact.value}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CV download */}
      <div className="mt-8 flex justify-center">
        <a
          href="/files/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted/50 transition-all"
        >
          <Download size={15} />
          Download full CV (PDF)
        </a>
      </div>
    </SectionWrapper>
  );
}
