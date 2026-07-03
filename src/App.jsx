import { useEffect } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";

import Contact from "./pages/Contact";

import Home from "./pages/Home";
//import Menu from "./pages";


function App() {


  return (

    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
