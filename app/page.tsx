import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import NavGpt from "./components/NavGpt";
import HeroGpt from "./components/HeroGpt";
import AboutGpt from "./components/AboutGpt";
import Divisions from "./components/Divisions";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyJoin from "./components/WhyJoin";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full min-h-screen bg-[#f3f3eb] text-[#171717]">
          <Hero />
          <About />
          <Divisions />
          <WhyJoin />
          <Events />
          <Contact />
          <Footer />
        </div>
        l
      </main>
    </div>
  );
}
