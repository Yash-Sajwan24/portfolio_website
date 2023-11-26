import { useRef } from "react";
import Canvas from "./components/Canvas";
import Left from "./components/Left";
import Navbar from "./components/Navbar";
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
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Show from "./Show";

function App() {
  const mainRef = useRef(false);

  const toggleBlur = () => {
    mainRef.current.classList.toggle("blurBody");
  };

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Show />} />
      </Routes>
      <SideSocials />
      <SideEmail />
      <Navbar toggle={() => toggleBlur()} />
    </div>
  );
}

export default App;
