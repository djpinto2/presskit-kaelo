'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="home" className="hero relative min-h-screen w-full overflow-hidden bg-[var(--bg)] flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/media/bg-video (2).mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/50 to-[var(--bg)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-[var(--gold-2)]/20 border border-[var(--gold-2)] text-[var(--gold-2)] rounded-full text-sm font-semibold">
            🎧 Professional DJ & Music Producer
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-2)] via-pink-500 to-purple-500">
            KAELO
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--txt-2)] mb-4">
          House • Tech House • Afro Tech
        </p>

        <p className="text-lg text-[var(--txt-3)] max-w-2xl mx-auto mb-12">
          13+ years of experience performing at the most prestigious venues in Buenos Aires. Specialized in creating immersive electronic music experiences with cutting-edge sound design and energy.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a 
            href="#music" 
            className="px-8 py-4 bg-[var(--gold-2)] text-[var(--bg)] font-bold rounded-lg hover:bg-opacity-90 transition transform hover:scale-105"
          >
            Listen on Platforms
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-[var(--gold-2)] text-[var(--gold-2)] font-bold rounded-lg hover:bg-[var(--gold-2)]/10 transition"
          >
            Book Performance
          </a>
        </div>

        <div className="mt-16 flex gap-6 justify-center">
          <a href="https://instagram.com/kaelo.ar" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-pink-500 transition text-lg">
            Instagram
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-green-500 transition text-lg">
            Spotify
          </a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener" className="text-[var(--gold-2)] hover:text-orange-500 transition text-lg">
            SoundCloud
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce text-[var(--gold-2)]">↓</div>
      </div>
    </section>
  );
}
