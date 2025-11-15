import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Proficiency from "@/components/Proficiency";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
      <Hero />
        <Skills />
        <Proficiency />
        <Education />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
