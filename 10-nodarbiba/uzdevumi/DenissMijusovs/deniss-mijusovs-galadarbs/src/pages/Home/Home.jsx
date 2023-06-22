import ContentBlock from "../../components/ContentBlock/ContentBlock";
import PhoneBlock from "../../components/PhoneBlock/PhoneBlock";
import HeroBlock from "../../components/heroBlock/HeroBlock";
import "./Home.css";

function Home() {
  return (
    <>
      <main>
        <HeroBlock />
        <PhoneBlock />
        <ContentBlock />
      </main>
    </>
  );
}

export default Home;
