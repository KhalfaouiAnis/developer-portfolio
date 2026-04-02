import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">© {new Date().getFullYear()} Anis Khalfaoui</span>
            {" "}— All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/KhalfaouiAnis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anis-khalfaoui-a70022171"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
