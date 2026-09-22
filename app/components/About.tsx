export default function About() {
  const stats = [
    { number: "13+", label: "Years of Experience" },
    { number: "100+", label: "Performances" },
    { number: "5K+", label: "Followers" }
  ];

  return (
    <section id="about" className="about py-24 px-4 bg-[var(--bg-2)]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="about__text">
            <h2 className="text-4xl font-bold text-[var(--txt-1)] mb-6">About KAELO</h2>
            <div className="space-y-4 text-[var(--txt-3)]">
              <p>
                With over 13 years of experience in electronic music, KAELO has become a prominent figure in Buenos Aires' underground scene. Specializing in House, Tech House, and Afro Tech, I craft immersive sonic journeys that captivate dancefloors.
              </p>
              <p>
                My sound combines deep grooves with hypnotic rhythms, drawing inspiration from global music trends while maintaining a distinctly Argentine flavor. Each performance is carefully curated to create unforgettable moments on the dance floor.
              </p>
              <p>
                Whether performing at intimate clubs or large festival stages, KAELO brings technical precision, creative mixing, and infectious energy to every set.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats grid grid-cols-1 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="stat border-l-4 border-[var(--gold-2)] pl-6 py-2"
              >
                <h3 className="text-4xl font-bold text-[var(--gold-2)]">{stat.number}</h3>
                <p className="text-[var(--txt-3)] text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
