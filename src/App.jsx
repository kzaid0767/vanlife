import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import "./App.css";
import vans from "./data";
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./components/Layout";
import Reviews from "./pages/host/Reviews";
import Income from "./pages/host/Income";
import Dashboard from "./pages/host/Dashboard"

const VansContext = createContext();

export default function App() {
  return (
    <VansContext.Provider value={vans}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/host" element={<Dashboard />} >
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
            <Route path="/vans/:id" element={<VanDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VansContext.Provider>
  );
}

export { VansContext };
