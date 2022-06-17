import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import Contact from "./pages/Contact";
import Property from "./pages/Property";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
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
