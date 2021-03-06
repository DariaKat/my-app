import React from "react";
import Header from "../Header";
import Slider from "../Slider";
import Opening from "../Opening";
import MenuFood from "../MenuFood";
import Form from "../Form";
import Footer from "../Footer";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Opening />
      <MenuFood />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
