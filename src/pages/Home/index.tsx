import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import AboutSection from "./__components/Aboutus";
import Banner from "./__components/Banner";
import ContactUs from "./__components/Contactus";
import ResumeComponent from "./__components/ResumeComponent";
import StepsSection from "./__components/StepsSection";
import SubscriptionComponent from "./__components/SubscriptionComponent";
import TestimonialsSection from "./__components/TestimonialsSection";
import WhyChooseUs from "./__components/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="relative w-full bg-white">
      <Navbar />
      <Banner />
      <StepsSection />
      <AboutSection />
      <main className="container mx-auto pt-20">
        <TestimonialsSection />

        <WhyChooseUs />

        <SubscriptionComponent />

        <ResumeComponent />
      </main>
      <ContactUs />

      <Footer />
    </div>
  );
};

export default HomePage;
