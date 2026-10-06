import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Me from "./pages/Me";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Extracurriculars from "./pages/Extracurriculars";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
      </Routes>
    </>
  );
}
