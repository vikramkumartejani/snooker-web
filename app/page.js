import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Features from "./components/Features";
import FeaturesMobiles from "./components/FeaturesMobiles";
import VideoTestimonials from "./components/VideoTestimonials";
import Testimonials from "./components/Testimonials";
import StoreAutomation from "./components/StoreAutomation";
import Pricing from "./components/Pricing";
import DownloadSection from "./components/DownloadSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Features />
      <FeaturesMobiles />
      <VideoTestimonials />
      <Testimonials />
      <StoreAutomation />
      <Pricing />
      <DownloadSection />
    </main>
  );
}
