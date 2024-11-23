
import Hero from "./components/Hero";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Education from "@/app/education/page";
import Projects from "@/app/projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero/>
        <Education/>
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>
    </div>
  );
}
