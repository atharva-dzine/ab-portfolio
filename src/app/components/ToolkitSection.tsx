import React from "react";
import svgPaths from "../../imports/MacBookAir2/svg-zy1eiblvrm";
import wixLogo from "../../imports/MacBookAir2/fba46531d17953c85c53ead61629734e1cd6f889.png";

function FigmaIcon() {
  return (
    <svg width="17" height="25" viewBox="0 0 17 25" fill="none">
      <clipPath id="clip-figma"><rect width="17" height="25" fill="white" /></clipPath>
      <g clipPath="url(#clip-figma)">
        <path d={svgPaths.p3b556780} fill="#0ACF83" />
        <path d={svgPaths.p2f461400} fill="#A259FF" />
        <path d={svgPaths.p10333400} fill="#F24E1E" />
        <path d={svgPaths.p2fe40580} fill="#FF7262" />
        <path d={svgPaths.p1088cc80} fill="#1ABCFE" />
      </g>
    </svg>
  );
}

function PhotoshopIcon() {
  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none">
      <clipPath id="clip-ps"><rect width="26" height="25" fill="white" /></clipPath>
      <g clipPath="url(#clip-ps)">
        <path d={svgPaths.p1fc6b600} fill="#001E36" />
        <path d={svgPaths.p3e432800} fill="#31A8FF" />
      </g>
    </svg>
  );
}

function ChatGptIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d={svgPaths.p39506600} stroke="white" strokeLinejoin="round" strokeWidth="0.5" />
      <path d={svgPaths.p23157ec0} stroke="white" strokeLinejoin="round" strokeWidth="0.5" />
      <path d={svgPaths.pdc41f00} stroke="white" strokeLinejoin="round" strokeWidth="0.5" />
      <path d={svgPaths.p1ba2a00} stroke="white" strokeLinejoin="round" strokeWidth="0.5" />
      <path d={svgPaths.p3b8b8080} stroke="white" strokeLinejoin="round" strokeWidth="0.5" />
      <path d={svgPaths.p25ef6280} stroke="white" strokeLinejoin="round" strokeWidth="0.5" />
    </svg>
  );
}

function VsCodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={svgPaths.p1613af00} fill="#2196F3" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#262626" />
      <path d={svgPaths.p330e740} fill="white" />
    </svg>
  );
}

function Badge({ label, color }: { label: string; color: "purple" | "blue" | "red" }) {
  const styles = {
    purple: { bg: "rgba(210,119,255,0.1)", text: "#d277ff" },
    blue: { bg: "rgba(133,173,255,0.1)", text: "#85adff" },
    red: { bg: "rgba(255,110,128,0.1)", text: "#ff6e80" },
  };
  const s = styles[color];
  return (
    <span
      className="px-3 py-1 rounded-full text-[12px] font-bold whitespace-nowrap"
      style={{ background: s.bg, color: s.text }}
    >
      {label}
    </span>
  );
}

function ToolCard({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`bg-[#1f1f1f] rounded-[24px] p-8 flex flex-col gap-2 ${className}`}>
      <div className="bg-[#262626] rounded-[12px] w-12 h-12 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="text-white text-[20px] font-bold mt-4">{title}</h3>
      <p className="text-[#ababab] text-[14px] leading-5">{description}</p>
    </div>
  );
}

function WideCard({
  title,
  description,
  badges,
}: {
  title: string;
  description: string;
  badges: { label: string; color: "purple" | "blue" | "red" }[];
}) {
  return (
    <div
      className="rounded-[24px] p-8 col-span-1 md:col-span-2"
      style={{
        backgroundImage: "linear-gradient(161deg, rgb(31,31,31) 0%, rgb(25,25,25) 100%)",
      }}
    >
      <div className="flex gap-4 flex-wrap mb-10">
        {badges.map((b) => (
          <Badge key={b.label} label={b.label} color={b.color} />
        ))}
      </div>
      <h3 className="text-white text-[30px] font-bold">{title}</h3>
      <p className="text-[#ababab] text-[16px] leading-6 mt-2">{description}</p>
    </div>
  );
}

export function ToolkitSection() {
  return (
    <section className="bg-[#0e0e0e] py-20 px-[25px]" id="toolkit">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-white text-[36px] font-bold text-center">My Toolkit</h2>
          <p className="text-[#ababab] text-[16px] text-center">
            The tools and principles I use to breathe life into concepts.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[10px]">
          {/* Row 1 */}
          <ToolCard
            icon={<FigmaIcon />}
            title="Figma"
            description="Primary design and prototyping environment."
          />
          <ToolCard
            icon={<PhotoshopIcon />}
            title="Adobe Photoshop"
            description="A powerful tool for editing, and creating high-quality images."
          />
          <WideCard
            title="UX Principles"
            description="Data-driven decisions meeting human-centered empathy."
            badges={[
              { label: "Heuristics", color: "purple" },
              { label: "Research", color: "blue" },
              { label: "Testing", color: "red" },
            ]}
          />

          {/* Row 2 */}
          <div className="bg-[#1f1f1f] rounded-[24px] p-8 col-span-1 sm:col-span-2 flex flex-col gap-2">
            <h3 className="text-white text-[30px] font-bold">UI Design</h3>
            <p className="text-[#ababab] text-[16px] leading-6">
              Crafting clean, intuitive, and visually engaging user interfaces.
              <br />
              Strong understanding of typography, colour, and layout systems.
              <br />
              Focused on creating consistent, modern, and user-friendly designs.
            </p>
          </div>
          <ToolCard
            icon={<ChatGptIcon />}
            title="Chatgpt"
            description="Primary design and prototyping environment."
          />
          <div className="bg-[#1f1f1f] rounded-[24px] p-8 flex flex-col gap-2">
            {/* Cursor card - using custom SVG background */}
            <div className="w-12 h-12 shrink-0">
              <CursorIcon />
            </div>
            <h3 className="text-white text-[20px] font-bold mt-4">Cursor</h3>
            <p className="text-[#ababab] text-[14px] leading-5">AI editor for fast vibe-based coding.</p>
          </div>

          {/* Row 3 */}
          <ToolCard
            icon={
              <div className="w-[25px] h-[25px] flex items-center justify-center">
                <img src={wixLogo} alt="Wix" className="w-6 h-6 object-contain" />
              </div>
            }
            title="Wix Studio"
            description="Advanced builder for responsive, visually rich websites."
          />
          <ToolCard
            icon={<VsCodeIcon />}
            title="Vs Code"
            description="Powerful editor for building developer-ready solutions."
          />
          <WideCard
            title="Developer"
            description="Understanding technical constraints to design feasible, developer-friendly solutions."
            badges={[
              { label: "Problem solving", color: "purple" },
              { label: "React", color: "blue" },
              { label: "Github", color: "red" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}