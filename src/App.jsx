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
import HostVans from './pages/host/Vans'
import VanDetailed from './pages/host/VanDetailed'
import HostLayout from "./components/HostLayout";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVanPhotos from "./pages/host/HostVanPhotos";


const VansContext = createContext();

export default function App() {
  return (
    <VansContext.Provider value={vans}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* index shows up with parent as part of its content */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="host" element={<HostLayout />} >
            {/* index shows up with host as part of its content */}
              <Route index element={<Dashboard/>} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans/>} />
              <Route path="vans/:id" element={<VanDetailed/>} >
                <Route index element={<HostVanInfo/>} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="vans/:id" element={<VanDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VansContext.Provider>
  );
}

export { VansContext };
