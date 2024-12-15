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
      <Hero data-aos="fade-up" />
      <WhyChooseUs data-aos="fade-up" />
      <Features data-aos="fade-up" />
      <FeaturesMobiles data-aos="fade-up" />
      <VideoTestimonials data-aos="fade-up" />
      <Testimonials data-aos="fade-up" />
      <StoreAutomation data-aos="fade-up" />
      <Pricing data-aos="fade-up" />
      <DownloadSection data-aos="fade-up" />
    </main>
  );
}
