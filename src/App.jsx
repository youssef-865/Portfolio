import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/1-header/Header";
import Footer from "./components/5-footer/Footer";
import Layout from "./components/layout/Layout"; // Ensure this file exists

function App() {

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="divider"></div>
      <Layout />
      <div className="divider"></div>
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <button
          className="scroll2top icon-arrow-up-thick"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></button>
      )}
    </BrowserRouter>
  );
}

export default App;
