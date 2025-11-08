import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const relatedPath = ["/", "/about", "/programs", "/resources", "/contact"].includes(location.pathname);
  const isTransparent = relatedPath && !scrolled;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-5 z-50 transition-all duration-300
      ${isTransparent ? "bg-transparent text-white" : "backdrop-blur-md bg-white/80 text-[#1e345e] shadow-sm"}`}
    >

      <div
        className={`text-2xl font-semibold tracking-wide transition-all ${isTransparent ? "text-white" : "text-[#1e345e]"
          }`}
      >
        <span className="font-bold">H+</span> SACA
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 font-medium">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition hover:text-[#D38A78] ${location.pathname === link.path
              ? isTransparent
                ? "border-b-2 border-white"
                : "border-b-2 border-[#1e345e]"
              : ""
              }`}
          >
            {link.name}
          </Link>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none relative w-8 h-8 transition-transform duration-300"
        >
          <span
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
          >
            <CgMenu />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
          >
            <CgClose />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-md flex flex-col items-center py-6 md:hidden shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`py-2 text-lg font-medium transition hover:text-[#b96b63] ${location.pathname === link.path
              ? "text-[#b96b63]"
              : "text-[#1e345e]"
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
