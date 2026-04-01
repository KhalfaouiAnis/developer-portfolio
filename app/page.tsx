import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
