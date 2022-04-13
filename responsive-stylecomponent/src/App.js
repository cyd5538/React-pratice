import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Title from "./pages/Title"
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Title />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
