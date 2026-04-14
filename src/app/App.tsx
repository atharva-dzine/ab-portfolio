import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ToolkitSection } from "./components/ToolkitSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0e0e0e] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToolkitSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
