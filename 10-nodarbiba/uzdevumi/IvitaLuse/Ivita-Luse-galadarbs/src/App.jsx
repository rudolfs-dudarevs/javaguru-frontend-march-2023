import React from "react";
import GuestLayout from "./layouts/GuestLayout/GuestLayout";
import Home from "./pages/Home/Home";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
