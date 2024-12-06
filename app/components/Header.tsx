"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaTelegram,
  FaXmark,
} from "react-icons/fa6";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navHeight = menuOpen?("translate-x-96 hidden"): "flex translate-x-0";
  return (
    <div className="flex w-full z-50 fixed left-0 right-0 top-0 justify-between items-center lg:px-14 px-5 py-4 bg-white bg-opacity-70 backdrop:blur-lg border border-[rgba(255,255,255, 0.3)] ">
      <Link className="relative rounded w-2/5" href="/">
        <Image src="/csec-logo.jpg" width={40} height={40} alt="CSEC ASTU" />
      </Link>
      <div className="flex gap-3 text-xl max-lg:hidden">
        <Link href="/" className="hover:text-blue-600" >
          <button>Home</button>
        </Link>

        <Link href="/events" className="hover:text-blue-600">
          <button>Events</button>
        </Link>
        <Link href="teams" className="hover:text-blue-600">
          <button>Executives</button>
        </Link>
        <Link href="/sponsors" className="hover:text-blue-600">
          <button>Sponsors</button>
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          <button>Contact Us</button>
        </Link>
      </div>
      <div className="flex gap-3 text-[#171717] max-md:hidden">
        <a
          href="https://t.me/csec_astu"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaTelegram size={24} />
        </a>
        <a
          href="https://t.me/csec_astu"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://t.me/csec_astu"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaLinkedin size={24} />
        </a>
        <button className="border-l-2 pl-3">
          <FaMoon size={24} />
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden transition-all duration-300">
        {menuOpen ? (
          <FaXmark
            size={24}
            onClick={() => {
              setMenuOpen(!menuOpen);
              // setNavHeight("translate-x-96 hidden");
            }}
          />
        ) : (
          <FaBars
            size={24}
            onClick={() => {
              setMenuOpen(!menuOpen);
              // setNavHeight("flex translate-x-0");
            }}
          />
        )}

        <div
          className={`flex-col -z-20 transition-all duration-700 pt-20 items-center absolute top-0 left-20 right-0 bottom-0 h-screen ${navHeight} bg-white bg-opacity-90 backdrop:blur-lg border border-[rgba(255,255,255, 0.8)] gap-3 text-xl`}
        >
          <Link href="/" className="hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
            <button>Home</button>
          </Link>

          <Link href="/events" className="hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
            <button>Events</button>
          </Link>
          <Link href="teams" className="hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
            <button>Executives</button>
          </Link>
          <Link href="/sponsors" className="hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
            <button>Sponsors</button>
          </Link>
          <Link href="/contact" className="hover:text-blue-600" onClick={()=>setMenuOpen(!menuOpen)}>
            <button>Contact Us</button>
          </Link>
          <div className="flex gap-3 text-[#171717] border-t mt-20 pt-5">
            <a
              href="https://t.me/csec_astu"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaTelegram size={24} />
            </a>
            <a
              href="https://github.com/csec_astu"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/company/csec_astu"
              target="_blank"
              className="hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
            <button className="border-l-2 pl-3">
              <FaMoon size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
