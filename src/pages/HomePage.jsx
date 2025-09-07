import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import SubFooter from "../components/layout/SubFooter";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import HeroSection from "../sections/HeroSection";
import ScrollToTop from "../utils/ScrollToTop";
import GallerySection from "../sections/GallerySection";

function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
      <SubFooter />
    </>
  );
}

export default HomePage;
