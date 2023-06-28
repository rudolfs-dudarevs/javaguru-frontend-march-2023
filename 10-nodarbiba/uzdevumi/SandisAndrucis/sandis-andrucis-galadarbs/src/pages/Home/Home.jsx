import "./Home.css";
import Hero from "../../components/Hero/Hero";
import HowAppWorks from "../../components/HowAppWorks/HowAppWorks";
import Instructions from "../../components/Instructions/Instructions";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <main className="home__main">
        <Hero />
        <HowAppWorks />
        <Instructions />
        <ContactUs />
    </main>
  );
};

export default Home;