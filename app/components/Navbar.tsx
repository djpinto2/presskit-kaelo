'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="navbar sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="navbar__content flex items-center justify-between h-16">
          <Link href="#home" className="logo text-2xl font-bold text-[var(--gold-2)]">
            KAELO
          </Link>
          
          <nav className="nav__menu flex gap-8">
            <Link href="#home" className="nav__link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              Home
            </Link>
            <Link href="#about" className="nav__link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              About
            </Link>
            <Link href="#music" className="nav__link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              Music
            </Link>
            <Link href="#reels" className="nav__link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              Reels
            </Link>
            <Link href="#contact" className="nav__link text-[var(--txt-2)] hover:text-[var(--gold-2)] transition">
              Contact
            </Link>
          </nav>

          <button 
            onClick={() => setIsDark(!isDark)}
            className="theme-toggle text-xl hover:text-[var(--gold-2)] transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}
