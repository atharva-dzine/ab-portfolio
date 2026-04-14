export function CTASection() {
  return (
    <section className="bg-[#0e0e0e] py-24 px-6" id="contact">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-white text-[56px] md:text-[72px] font-black leading-tight tracking-[-3.6px]"
          >
            Let's make something
          </h2>
          <h2
            className="text-[56px] md:text-[72px] font-black leading-tight tracking-[-3.6px]"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(45.89deg, rgb(133,173,255) 0%, rgb(210,119,255) 50%, rgb(255,110,128) 100%)",
              }}
            >
              unforgettable
            </span>
            <span className="text-white">.</span>
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atharva.dzine@gmail.com&su=Project Inquiry&body=Hi Atharva, I'd like to work with you on..."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-[#0e0e0e] px-10 py-5 rounded-full text-[18px] font-bold hover:bg-[#f0f0f0] transition-colors inline-block text-center"
>
  Start a Project
</a>

  <a
    href="/Atharva_final.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download="Atharva_Resume.pdf"
    className="text-white px-10 py-5 rounded-full text-[18px] font-bold hover:bg-white/5 transition-colors inline-block text-center"
    style={{
      background: "#1f1f1f",
      border: "1px solid rgba(72,72,72,0.3)",
    }}
  >
    Resume / CV
  </a>
</div>
      </div>
    </section>
  );
}