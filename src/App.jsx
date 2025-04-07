import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
