import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import HowTheAppWorks from "../../components/HowTheAppWorks/HowTheAppWorks.jsx";
import ContactUs from "../../components/ContactUs/ContactUs.jsx";
import Order from "../../components/Order/Order.jsx";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <HowTheAppWorks />
      <Order
        image={<img src={Image1} alt="some keywords" />}
        preTitle="Create an account"
        title="Create/login to an existing account to get started"
        text="An account is created with your email and a desired password"
      />
      <Order
        image={<img src={Image2} alt="some keywords" />}
        preTitle="Explore varieties"
        title="Shop for your favorites meal as e dey hot."
        text="Shop for your favorite meals or drinks and enjoy while doing it."
        isImageRight
      />
      <Order
        image={<img src={Image3} alt="some keywords" />}
        preTitle="Checkout"
        title="When you done check out and get it delivered."
        text="When you done check out and get it delivered with ease."
      />
      <ContactUs />
    </>
  );
};

export default Home;
