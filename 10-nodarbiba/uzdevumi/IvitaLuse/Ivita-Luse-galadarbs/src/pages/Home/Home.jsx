import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Hero from "../../components/Hero/Hero";
import HowAppWorks from "../../components/HowAppWorks/HowAppWorks";
import UserInstructions from "../../components/UserInstructions/UserInstructions";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      <HowAppWorks />
      <UserInstructions />
      <ContactUs />
    </>
  );
};

export default Home;
