import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full min-h-screen  bg-[#f3f3eb] text-[#171717]">
          <Header />
          <Hero />
          <About />
        </div>
      </main>
    </div>
  );
}
