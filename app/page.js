import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Theme from "@/components/Theme";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import WorkHistory from "@/components/WorkHistory";

export default function Home() {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-4">
      <Theme attribute="class" defaultTheme="system" enableSystem>
        <ThemeSwitcher />
      </Theme>
      <div className="mt-20">
        <Header />
        <Contacts />
        <About />
        <WorkHistory />
        <Projects />
        <Skills />
        <Testimonials />
      </div>
    </main>
  );
}
