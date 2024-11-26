import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { createContext } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans'
import './App.css'
import vans from './data'
import VanDetails from './pages/VanDetails'

const VansContext = createContext()

export default function App() {

  return (
    <VansContext.Provider value={vans}>
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vandetails/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
    </VansContext.Provider>
  )
}

export {VansContext}
