import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./containers/Footer/Footer";
import Contact from "./pages/Contact";
import Property from "./pages/Property";
import Navbar from "./components/navbar/Navbar";
import Social from "./components/social/Social";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Social />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/properties" element={<Property />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
