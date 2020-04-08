import React from "react";
import "./App.css";
import Header from "./component/header";
import SliderSection from "./component/sliderSection";
import EshoperHomeBody from "./component/eshoperHomeBody";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Header />;
      <SliderSection />
      <EshoperHomeBody />
      <Footer />;
    </>
  );
}

export default App;
