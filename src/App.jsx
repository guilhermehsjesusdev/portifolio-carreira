import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0b0f19] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}