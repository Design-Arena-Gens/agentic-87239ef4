import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { LogosMarquee } from "./components/LogosMarquee";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WorkShowcase } from "./components/WorkShowcase";

export default function Page() {
  return (
    <main>
      <Hero />
      <LogosMarquee />
      <ServicesSection />
      <ProcessSection />
      <WorkShowcase />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
