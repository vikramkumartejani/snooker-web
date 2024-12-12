import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import StoreAutomation from "./components/StoreAutomation";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <StoreAutomation />
      <Footer />
    </main>
  );
}
