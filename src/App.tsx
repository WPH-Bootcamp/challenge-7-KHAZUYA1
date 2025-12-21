import Navbar from './components/container/Navbar';
import Hero from './components/container/HeroSection';
import LogoSection from './components/container/LogoSection';
import StatsSection from './components/container/StatsSection';
import ProcessSection from './components/container/ProcessSection';
import ServicesSection from './components/container/ServicesSection';
import IndustrySection from './components/container/IndustrySection';
import PortfolioSection from './components/container/PortfolioSection';
// Pastikan import ini sudah BENAR (tanpa s)
import TestimonialsSection from './components/container/TestimonialsSection';

// --- Import Komponen Tahap Akhir ---
import FaqSection from './components/container/FaqSection';
import ContactSection from './components/container/ContactSection';
import Footer from './components/container/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] min-h-screen transition-colors duration-300 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <LogoSection />
        <StatsSection />
        <ProcessSection />
        <ServicesSection />
        <IndustrySection />
        <PortfolioSection />
        <TestimonialsSection />
        
        {/* --- Komponen Tahap Akhir --- */}
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;