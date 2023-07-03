import Hero from '../comp/Hero'
import HowAppWork from '../comp/HowAppWork'
import Highlights from '../comp/Highlights'
import ContactUs from '../comp/ContactUs'

const Home = () => {
    return (
    <>
        <main>
          <Hero />
          <HowAppWork />
          <Highlights />
          <ContactUs />
        </main>
    </>
    )
}

export default Home