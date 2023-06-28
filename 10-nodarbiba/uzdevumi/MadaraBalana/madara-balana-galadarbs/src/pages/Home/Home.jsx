import React from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import HowTheAppWorks from "../../components/HowTheAppWorks/HowTheAppWorks.jsx";
import ContactUs from "../../components/ContactUs/ContactUs.jsx"
import Footer from "../../components/Footer/Footer.jsx";
import Order from "../../components/Order/Order.jsx"
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="sections">
      <Header />
      <Hero />
      <HowTheAppWorks />
      <Order
        image={Image1}
        preTitle="Create an account"
        title="Create/login to an existing account to get started"
        text="An account is created with your email and a desired password"
        imageIsRight={false}
      />
      <Order
        image={Image2}
        preTitle="Explore varieties"
        title="Shop for your favorites meal as e dey hot."
        text="Shop for your favorite meals or drinks and enjoy while doing it."
        imageIsRight={true}
      />
      <Order
        image={Image3}
        preTitle="Checkout"
        title="When you done check out and get it delivered."
        text="When you done check out and get it delivered with ease."
        imageIsRight={false}
      />
      <ContactUs />
    </div>
  );
};

export default Home;
