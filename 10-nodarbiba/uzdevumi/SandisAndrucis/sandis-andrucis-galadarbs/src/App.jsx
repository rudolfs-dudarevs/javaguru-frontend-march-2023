import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<UnderConstruction />} />
            <Route path="/faq" element={<UnderConstruction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;