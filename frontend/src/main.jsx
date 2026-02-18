import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import { ThemeProvider } from "./Landing/ThemeContext";
import HomePage from "./Landing/Home/HomePage";
import TermsPage from "./Landing/Terms/TermsPage";
import NavBar from "./Landing/NavBar";
import Footer from "./Landing/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <NavBar />
      <div className="main-content"> {/* Add this wrapper */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);