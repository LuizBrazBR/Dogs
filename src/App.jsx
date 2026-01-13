import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { GlobalContext } from "./UserContext";
import Conta from "./Components/Conta";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import PublicRoute from "./Components/Helper/PublicRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/conta"
              element={
                <ProtectedRoute>
                  <Conta />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login/*"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Routes>
          <Footer />
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
