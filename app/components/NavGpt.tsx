"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-transparent");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavBackground("bg-white shadow-md");
      } else {
        setNavBackground("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("click", handleScroll);
  }, []);
  return (
    <nav
      className={`${navBackground} fixed w-full z-10 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">CSEC ASTU</Link>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <Link href="#about-us" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-blue-600">
              Executives
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-blue-600">
              Events
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:text-blue-600"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 p-4 text-gray-700">
            <li>
              <Link
                href="#about-us"
                className="block hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#divisions"
                className="block hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Divisions
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className="block hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
