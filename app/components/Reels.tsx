'use client';

import { useState } from 'react';

export default function Reels() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const reels = [
    {
      title: "Set Bali 2024",
      description: "Sunset set from iconic Bali venue with tropical vibes",
      file: "reel-01 (2).mp4",
      date: "Junio 2024",
      duration: "45:32"
    },
    {
      title: "Set Moscú 2024",
      description: "Underground deep house session in Moscow",
      file: "reel-02 (2).mp4",
      date: "Abril 2024",
      duration: "38:15"
    },
    {
      title: "Live Groove",
      description: "High-energy tech house performance",
      file: "reel-03 (2).mp4",
      date: "Marzo 2024",
      duration: "42:00"
    },
    {
      title: "Creta Vibe",
      description: "Mediterranean coastal electronic music session",
      file: "reel-04 (2).mp4",
      date: "Febrero 2024",
      duration: "36:45"
    }
  ];

  return (
    <section id="reels" className="reels py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-[var(--txt-1)] mb-4">Live Performances & Sets</h2>
          <p className="section-subtitle text-lg text-[var(--txt-3)]">Watch exclusive recordings from my latest performances</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reels.map((reel, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden border border-[var(--line)] hover:border-[var(--gold-2)] transition"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-[var(--bg)] overflow-hidden">
                {playingIndex === idx ? (
                  <video
                    src={`/media/${reel.file}`}
                    autoPlay
                    controls
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <video
                      src={`/media/${reel.file}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                      <button
                        onClick={() => setPlayingIndex(idx)}
                        className="w-16 h-16 rounded-full bg-[var(--gold-2)] flex items-center justify-center hover:scale-110 transition group-hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-[var(--bg)]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 px-3 py-1 rounded-full text-white text-sm font-semibold">
                      {reel.duration}
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-6 bg-[var(--bg)]">
                <h3 className="text-xl font-bold text-[var(--gold-2)] mb-2">{reel.title}</h3>
                <p className="text-[var(--txt-3)] text-sm mb-3">{reel.description}</p>
                <p className="text-[var(--txt-3)] text-xs font-semibold">{reel.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
