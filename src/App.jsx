import { useState } from 'react'

import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {


  return (
    <div>
      <nav>
        <NavLink to="/data-vizor/" end>Home</NavLink>
        <NavLink to="/data-vizor/about">About Us</NavLink>
        <NavLink to="/data-vizor/services">Services</NavLink>
        <NavLink to="/data-vizor/prices">Prices</NavLink>
        <NavLink to="/data-vizor/contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
