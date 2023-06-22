import "./Home.css";
import Hero from "../../components/Hero/Hero";
import HowAppWorks from "../../components/HowAppWorks/HowAppWorks";
import Instructions from "../../components/Instructions/Instructions";

const Home = () => {
  return (
    <main className="home__main">
        <Hero />
        <HowAppWorks />
        <Instructions />
    </main>
  );
};

export default Home;