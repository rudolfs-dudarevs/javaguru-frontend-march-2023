import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Hero from "../../components/Hero/Hero";
import HowAppWorks from "../../components/HowAppWorks/HowAppWorks";
import UserInstructions from "../UserInstructions/UserInstructions";
import Footer from "../Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <BurgerMenu />
      <Hero />
      <HowAppWorks />
      <UserInstructions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
