import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
