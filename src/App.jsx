import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { GlobalContext } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import PublicRoute from "./Components/Helper/PublicRoute";
import User from "./Components/User/User";
import FeedPhotos from "./Feed/FeedPhotos";
import Feed from "./Feed/Feed";
import Photo from "./Feed/Photo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />

            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <User />
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
            <Route
              path="/photo/:id"
              element={
                <PublicRoute>
                  <Photo />
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
