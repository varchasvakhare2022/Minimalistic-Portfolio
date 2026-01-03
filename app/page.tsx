import HeroSection from "@/components/HeroSection";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="h-screen">
        <HeroSection />
      </div>
      <section id="work" className="min-h-screen bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#a0a0a0_100%)] text-black rounded-t-[3rem] rounded-b-[3rem] relative z-20">
        <WorkList />
      </section>
      <div>
        <Footer />
      </div>
    </main>
  );
}
