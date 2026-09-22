export default function Reels() {
  const reels = [
    { title: "Set Bali 2024", file: "reel-01 (2).mp4", date: "Junio 2024" },
    { title: "Set Moscú 2024", file: "reel-02 (2).mp4", date: "Abril 2024" },
    { title: "Live Groove", file: "reel-03 (2).mp4", date: "Marzo 2024" },
    { title: "Creta Vibe", file: "reel-04 (2).mp4", date: "Febrero 2024" }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg)]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-16">Video Reels</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reels.map((reel, idx) => (
            <div 
              key={idx}
              className="rounded-lg bg-[var(--surface)] border border-[var(--line)] overflow-hidden hover:border-[var(--gold-2)] transition group"
            >
              <div className="aspect-video bg-[var(--bg-2)] relative group/video">
                <video
                  src={`/media/${reel.file}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/0 transition flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold-2)]/20 flex items-center justify-center group-hover/video:scale-110 transition">
                    <svg className="w-8 h-8 text-[var(--gold-2)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
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
