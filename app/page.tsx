import Hero from "./components/Hero";
import About from "./components/About";

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
