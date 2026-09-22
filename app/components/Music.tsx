export default function Music() {
  const platforms = [
    { name: "Spotify", url: "#", followers: "3K+" },
    { name: "SoundCloud", url: "#", followers: "2.5K+" },
    { name: "Bandcamp", url: "#", followers: "800+" }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Escucha Mis Sets</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <a 
              key={idx}
              href={platform.url}
              className="p-8 rounded-lg bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--gold-2)] transition text-center"
            >
              <h3 className="text-2xl font-semibold text-[var(--gold-2)] mb-2">
                {platform.name}
              </h3>
              <p className="text-[var(--txt-2)]">{platform.followers} seguidores</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
