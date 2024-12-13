import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import StoreAutomation from "./components/StoreAutomation";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="space-y-[53px] md:space-y-[110px]">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <StoreAutomation />
      <Pricing />
    </main>
  );
}
