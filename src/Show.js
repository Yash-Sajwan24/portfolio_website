import { useRef } from "react";
import SideEmail from "./components/SideEmail";
import SideSocials from "./components/SideSocials";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Credits from "./sections/Credits";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import SmallProjects from "./sections/Other Projects";
import ArchivePage from "./Archive";

function Show() {
  const mainRef = useRef(false);

  const toggleBlur = () => {
    mainRef.current.classList.toggle("blurBody");
  };

  return (
    <div>
      {/* <Canvas /> */}
      <main
        className="h-screen px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]"
        ref={mainRef}
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SmallProjects />
        <ArchivePage />
        <Contact />
        <Credits />
      </main>
      {/* side socials */}
      <SideSocials />
      <SideEmail />
    </div>
  );
}

export default Show;
