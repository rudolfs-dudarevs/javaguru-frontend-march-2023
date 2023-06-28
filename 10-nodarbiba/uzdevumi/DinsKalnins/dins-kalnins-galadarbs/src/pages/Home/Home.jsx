import Hero from "../../components/Hero/hero";
import "./Home.css";
import Content from "../../components/Content/Content";
import Phones from "../../components/Phones/Phones";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Phones />
        <Content />
      </main>
    </>
  );
}

export default Home;
