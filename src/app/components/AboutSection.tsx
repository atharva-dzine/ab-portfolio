import aboutImg from "../../imports/MacBookAir2/eb7c9c2214f7775e45330506272b128064397d48.png";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#0e0e0e] pt-4 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-14 items-center pt-10">
        {/* Heading */}
        <h2 className="text-white text-[36px] font-bold text-center">
          About Me
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 items-start w-full max-w-4xl mx-auto">
          {/* Photo */}
          <div className="shrink-0">
            <div
              className="w-[280px] h-[320px] rounded-[20px] overflow-hidden shadow-lg"
              style={{ boxShadow: "0px 1.9px 1.9px 0px rgba(0,0,0,0.25)" }}
            >
              <img
                src={aboutImg}
                alt="About Atharva"
                className="w-full h-full object-cover object-left-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 text-[#ababab] text-[18px] leading-relaxed">
            <p>
              I'm a UI/UX designer passionate about crafting intuitive and meaningful digital experiences. With
              a strong focus on user-centered design, I enjoy turning complex ideas into simple, elegant
              solutions. My work blends creativity with functionality, aiming to solve real-world problems
              through thoughtful design.
            </p>
            <p>
              Currently, I'm exploring interaction design and building case studies that focus on accessibility,
              usability, and impactful storytelling. I love experimenting with new tools, traveling for
              inspiration, and capturing moments through photography.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}