import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Form from "./components/form/form";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default App;
