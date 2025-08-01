import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const linkClass = 'hover:text-blue-600 transition-colors'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Shalini Kumari</Link>
        <ul className="flex space-x-4">
          <li><NavLink to="/education" className={linkClass}>Education</NavLink></li>
          <li><NavLink to="/experience" className={linkClass}>Experience</NavLink></li>
          <li><NavLink to="/skills" className={linkClass}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
