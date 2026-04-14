import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — clicks to hero */}
        <button
          onClick={() => handleClick("Home", "#hero")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <span className="text-white font-bold text-base tracking-tight hover:opacity-80 transition-opacity">Atharva</span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleClick(label, href)}
              className={`relative text-[14px] tracking-[-0.35px] pb-1 transition-colors duration-200 ${
                active === label
                  ? "text-[#f4f4f5]"
                  : "text-[#a1a1aa] hover:text-[#f4f4f5]"
              }`}
            >
              {label}
              {active === label && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3b82f6] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=atharva.dzine@gmail.com&su=Project Inquiry&body=Hi Atharva, I'd like to work with you on..."
  target="_blank"
  rel="noopener noreferrer"
            className="bg-white text-[#0e0e0e] text-sm font-bold px-5 py-2 rounded-full hover:bg-[#f0f0f0] transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => { handleClick(label, href); setMenuOpen(false); }}
              className={`text-left text-sm py-1 ${active === label ? "text-white font-bold" : "text-[#a1a1aa]"}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}