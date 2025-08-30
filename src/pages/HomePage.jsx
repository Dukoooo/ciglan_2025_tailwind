import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import SubFooter from "../components/layout/SubFooter";
import AboutSection from "../sections/AboutSection";
import HeroSection from "../sections/HeroSection";

function HomePage() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Footer />
      <SubFooter />
    </>
  );
}

export default HomePage;
