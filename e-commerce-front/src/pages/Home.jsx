import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Carusel from "../components/Carusel";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Carusel />
      <Footer />
    </>
  );
}

export default Home;
