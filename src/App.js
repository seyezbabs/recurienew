import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Machinelearn from "./components/Machinelearn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/machine-learning" element={<Machinelearn />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
