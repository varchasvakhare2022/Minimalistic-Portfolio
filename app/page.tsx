import HeroSection from "@/components/HeroSection";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import DockNavigation from "@/components/DockNavigation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <DockNavigation />
      <div className="h-screen">
        <HeroSection />
      </div>
      <section id="work" className="min-h-screen flex items-center justify-center p-4">
        <div className="w-[80%] md:w-[70%] max-w-[80rem] h-[85vh] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] text-black rounded-[3rem] relative z-20 overflow-hidden bg-noise">
          <WorkList />
        </div>
      </section>
      <div id="services">
        <Services />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
