import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { GlobalContext } from "./UserContext";
import Conta from "./Components/Conta";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conta" element={<Conta />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
