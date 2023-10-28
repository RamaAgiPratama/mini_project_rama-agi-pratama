import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Terimakasih from "../pages/Terimakasih";
import Reviews from "../pages/Reviews";

const Routers = () => {
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route
        path="/register"
        element={
          registered ? (
            <Login onLogin={() => setLoggedIn(true)} />
          ) : (
            <Register onRegister={() => setRegistered(true)} />
          )
        }
      />
      <Route
        path="/login"
        element={
          loggedIn ? <Home /> : <Login onLogin={() => setLoggedIn(true)} />
        }
      />
      <Route path="/terimakasih" element={<Terimakasih />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
