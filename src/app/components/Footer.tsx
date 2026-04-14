const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atharva-bokade" },
  { label: "Behance", href: "https://www.behance.net/atharvabokade1" },
  { label: "X", href: "https://x.com/0xbokade?s=21" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full px-6 md:px-12 lg:px-16"
      style={{ background: "#0a0a0a" }}
    >
      {/* Top divider */}
      <div className="max-w-6xl mx-auto border-t border-white/[0.08]" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto py-14 flex flex-col md:flex-row justify-between gap-12">
        {/* Left — Brand */}
        <div className="flex flex-col max-w-xs">
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-[15px] tracking-tight leading-none">
              Atharva
            </span>
            <p className="text-[#6b6b6b] text-[13px] leading-none mt-1">
              UI/UX Designer
            </p>
          </div>
          <a
            href="mailto:atharva.dzine@gmail.com"
            className="text-[#a1a1aa] text-[13px] hover:text-white transition-colors duration-200 mt-4"
          >
            atharva.dzine@gmail.com
          </a>
        </div>

        {/* Right — Nav columns */}
        <div className="flex gap-16 md:gap-20">
          {/* Explore */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[11px] tracking-[0.1em] uppercase"
              style={{ color: "#5a5a5a" }}
            >
              Explore
            </span>
            <nav className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#8a8a8a] text-[13px] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span
              className="text-[11px] tracking-[0.1em] uppercase"
              style={{ color: "#5a5a5a" }}
            >
              Social
            </span>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#8a8a8a] text-[13px] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto border-t border-white/[0.08] py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-[#3d3d3d] text-[12px]">
          © 2026 Atharva. All rights reserved.
        </p>
        <p className="text-[#3d3d3d] text-[12px]">
          Update email &amp; social URLs in lib/site.ts
        </p>
      </div>
    </footer>
  );
}