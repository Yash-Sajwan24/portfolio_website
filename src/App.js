import { useRef } from "react";
import Navbar from "./components/Navbar";
import SideEmail from "./components/SideEmail";
import SideSocials from "./components/SideSocials";
import { Route, Routes } from "react-router-dom";
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
