import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from "./layouts/layout"
import Faq from "./pages/Faq"
import './App.css'

function App() {

  return (
    // <>
    //     <Header />
    //     <main>
    //       <Hero />
    //       <HowAppWork />
    //       <Highlights />
    //       <ContactUs />
    //     </main>
    //     <Footer />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
