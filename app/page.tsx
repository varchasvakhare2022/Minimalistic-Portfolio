import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <section id="work" className="min-h-screen">
        <WorkList />
      </section>
      <Footer />
    </main>
  );
}
