export default function Reels() {
  const reels = [
    { title: "Set Bali 2024", date: "Junio 2024" },
    { title: "Set Moscú 2024", date: "Abril 2024" },
    { title: "Live Groove", date: "Marzo 2024" },
    { title: "Creta Vibe", date: "Febrero 2024" }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-center mb-16">Video Reels</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reels.map((reel, idx) => (
            <div 
              key={idx}
              className="rounded-lg bg-[var(--surface)] border border-[var(--line)] overflow-hidden hover:border-[var(--gold-2)] transition"
            >
              <div className="aspect-video bg-[var(--bg-2)] flex items-center justify-center">
                <span className="text-6xl">🎥</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--gold-2)] mb-1">
                  {reel.title}
                </h3>
                <p className="text-sm text-[var(--txt-3)]">{reel.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
