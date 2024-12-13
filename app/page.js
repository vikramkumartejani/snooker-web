import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import StoreAutomation from "./components/StoreAutomation";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import DownloadSection from "./components/DownloadSection";
import Features from "./components/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Features />
      <Testimonials />
      <StoreAutomation />
      <Pricing />
      <DownloadSection />
    </main>
  );
}
