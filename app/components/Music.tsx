export default function Music() {
  const platforms = [
    {
      name: "Spotify",
      icon: "🎵",
      url: "https://open.spotify.com/artist/kaelo",
      description: "Stream all my latest tracks and playlists",
      color: "from-green-600 to-green-400"
    },
    {
      name: "SoundCloud",
      icon: "☁️",
      url: "https://soundcloud.com/kaelo",
      description: "Exclusive mixes and unreleased content",
      color: "from-orange-600 to-orange-400"
    },
    {
      name: "Bandcamp",
      icon: "🎧",
      url: "https://kaelo.bandcamp.com",
      description: "Original productions and EPs",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      name: "YouTube",
      icon: "📹",
      url: "https://youtube.com/@kaelo",
      description: "Live performances and music videos",
      color: "from-red-600 to-red-400"
    }
  ];

  return (
    <section id="music" className="music py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-[var(--txt-1)] mb-4">Music Platforms</h2>
          <p className="section-subtitle text-lg text-[var(--txt-3)]">Listen, follow, and support on your favorite platforms</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener"
              className="group relative overflow-hidden rounded-lg border border-[var(--line)] p-8 hover:border-[var(--gold-2)] transition"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-2xl font-bold text-[var(--txt-1)] mb-2">{platform.name}</h3>
                <p className="text-[var(--txt-3)] mb-4">{platform.description}</p>
                <div className="inline-flex items-center text-[var(--gold-2)] font-semibold group-hover:gap-2 transition gap-0">
                  Listen Now <span className="text-lg">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
