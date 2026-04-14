import { useState, useEffect, useRef } from "react";
import Medcare from "../../imports/Medcare/Medcare";
import Listmate from "../../imports/Listmate/Listmate";
import Irctc from "../../imports/Irctc/Irctc";
import HiddenGem from "../../imports/HiddenGem/HiddenGem";

const CARD_W = 446;
const CARD_H = 540;
const AUTO_INTERVAL = 3500;

const cards = [
  { id: 0, label: "MedCare", Component: Medcare, href: "https://www.behance.net/gallery/246185251/Medcare" },
  { id: 1, label: "ListMate", Component: Listmate, href: "https://www.listmate.live/" },
  { id: 2, label: "IRCTC", Component: Irctc, href: "https://www.behance.net/gallery/224497825/IRCTC-Redesign" },
  { id: 3, label: "Hidden Gem", Component: HiddenGem, href: "https://www.behance.net/gallery/224547805/Hidden-Gem-Travel-App" },
];

function NavButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 shrink-0"
      style={{
        background: "#1f1f1f",
        border: "1px solid rgba(133,173,255,0.15)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
      }}
      aria-label={direction === "left" ? "Previous project" : "Next project"}
    >
      {direction === "left" ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M11 13.5L6.5 9L11 4.5"
            stroke="#85adff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M7 4.5L11.5 9L7 13.5"
            stroke="#85adff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const total = cards.length;

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  // Auto-advance — resets whenever resetKey changes or paused toggles
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, resetKey, total]);

  // When user manually navigates, restart the timer
  const handleNav = (fn: () => void) => {
    fn();
    setResetKey((k) => k + 1);
  };

  const leftIdx = (active - 1 + total) % total;
  const rightIdx = (active + 1) % total;

  const LeftCard = cards[leftIdx].Component;
  const CenterCard = cards[active].Component;
  const RightCard = cards[rightIdx].Component;

  return (
    <section
      className="bg-black py-24 px-6 overflow-hidden"
      id="projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <h2 className="text-white text-[36px] font-bold text-center">
          Featured Projects
        </h2>

        {/* ── DESKTOP carousel (md+) ── */}
        <div className="hidden md:flex relative items-center justify-center w-full gap-0">
          {/* Left arrow */}
          <div className="z-20 mr-4 md:mr-6">
            <NavButton direction="left" onClick={() => handleNav(prev)} />
          </div>

          {/* Cards stage */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{ height: CARD_H }}
          >
            {/* Left side card */}
            <div
              className="absolute cursor-pointer select-none transition-all duration-500"
              style={{
                width: CARD_W * 0.62,
                height: CARD_H * 0.62,
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% - ${CARD_W * 0.72}px), -50%) rotate(-6deg)`,
                opacity: 0.35,
                filter: "blur(1.5px)",
                zIndex: 1,
              }}
              onClick={() => handleNav(prev)}
            >
              <LeftCard />
            </div>

            {/* Right side card */}
            <div
              className="absolute cursor-pointer select-none transition-all duration-500"
              style={{
                width: CARD_W * 0.62,
                height: CARD_H * 0.62,
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${CARD_W * 0.72}px), -50%) rotate(6deg)`,
                opacity: 0.35,
                filter: "blur(1.5px)",
                zIndex: 1,
              }}
              onClick={() => handleNav(next)}
            >
              <RightCard />
            </div>

            {/* Center active card */}
            <div
              className="absolute select-none transition-all duration-500"
              style={{
                width: CARD_W,
                height: CARD_H,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <a
                href={cards[active].href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                style={{ cursor: "pointer" }}
              >
                <CenterCard />
              </a>
            </div>
          </div>

          {/* Right arrow */}
          <div className="z-20 ml-4 md:ml-6">
            <NavButton direction="right" onClick={() => handleNav(next)} />
          </div>
        </div>

        {/* ── MOBILE carousel (< md) ── */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full">
          <div className="flex items-center gap-4 w-full justify-center">
            {/* Left arrow */}
            <NavButton direction="left" onClick={() => handleNav(prev)} />

            {/* Single card */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ width: "min(340px, 85vw)", aspectRatio: "446/540" }}
            >
              <a
                href={cards[active].href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    transform: `scale(${340 / CARD_W})`,
                    transformOrigin: "top left",
                  }}
                >
                  <CenterCard />
                </div>
              </a>
            </div>

            {/* Right arrow */}
            <NavButton direction="right" onClick={() => handleNav(next)} />
          </div>

          {/* Card label on mobile */}
          <p className="text-white/60 text-[13px] tracking-wide">
            {cards[active].label}
          </p>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNav(() => setActive(i))}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 20 : 8,
                height: 8,
                background: i === active ? "#85adff" : "#262626",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}