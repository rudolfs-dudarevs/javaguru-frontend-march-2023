import Header from './comp/Header'
import Hero from './comp/Hero'
import HowAppWork from './comp/HowAppWork'
import Highlights from './comp/Highlights'
import './App.css'

function App() {

  return (
    <>
        <Header />
        <main>
          <Hero />
          <HowAppWork />
          <Highlights />
        </main>
    </>
  )
}

export default App
