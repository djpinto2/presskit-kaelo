export default function Rider() {
  const specs = [
    { label: "Equipamiento", items: ["CDJ-3000", "DJM-900NXS2", "Technics 1200"] },
    { label: "Duración de Set", items: ["45 min - 4 horas"] },
    { label: "Géneros", items: ["House", "Tech House", "Afro Tech"] }
  ];

  return (
    <section className="py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center mb-16">Rider Técnico</h2>
        
        <div className="space-y-8">
          {specs.map((spec, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-[var(--surface)] border border-[var(--line)]">
              <h3 className="text-lg font-semibold text-[var(--gold-2)] mb-4">
                {spec.label}
              </h3>
              <ul className="space-y-2">
                {spec.items.map((item, i) => (
                  <li key={i} className="text-[var(--txt-2)] flex items-center gap-2">
                    <span className="text-[var(--gold-2)]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
