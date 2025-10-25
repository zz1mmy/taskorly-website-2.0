'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo-container">
          <Image 
            src="/Logo_Lined_Reverse.png" 
            alt="TASKORLY Logo" 
            width={150} 
            height={150}
            className="logo-icon"
          />
        </div>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className="nav-links">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#about">About Us</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <ul>
              <li><Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="#features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
              <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
              <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
