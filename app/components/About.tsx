export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#141829]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#e4e7eb] mb-6">Sobre KAELO</h2>
            <p className="text-[#a8adb8] mb-4 leading-relaxed">
              DJ con más de 13 años de experiencia en la escena electrónica de Buenos Aires. Me especializo en House, Tech House y Afro Tech, con un sonido único que combina elementos tradicionales con tendencias modernas.
            </p>
            <p className="text-[#a8adb8] mb-8 leading-relaxed">
              He tocado en los principales venues de la ciudad incluyendo Moscú, Creta, Bali y Groove. Mi enfoque es crear experiencias sonoras inolvidables que conecten con el público.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5]">13+</div>
                <p className="text-sm text-[#a8adb8] mt-2">Años en la música</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5]">50+</div>
                <p className="text-sm text-[#a8adb8] mt-2">Eventos anuales</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#06ffa5]">5★</div>
                <p className="text-sm text-[#a8adb8] mt-2">Valoración</p>
              </div>
            </div>
          </div>

          {/* Right Content - Genre Cards */}
          <div className="space-y-6">
            <div className="bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg p-8 hover:border-[#60a5fa] transition group">
              <h3 className="text-2xl font-bold text-[#60a5fa] mb-3">House</h3>
              <p className="text-[#a8adb8]">Grooves clásicos con toques modernos. Perfecto para abrir pista.</p>
            </div>
            <div className="bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg p-8 hover:border-[#60a5fa] transition group">
              <h3 className="text-2xl font-bold text-[#60a5fa] mb-3">Tech House</h3>
              <p className="text-[#a8adb8]">La combinación perfecta de ritmo y tecnología. Energía controlada.</p>
            </div>
            <div className="bg-[#1a1f3a] border border-[#60a5fa]/20 rounded-lg p-8 hover:border-[#60a5fa] transition group">
              <h3 className="text-2xl font-bold text-[#60a5fa] mb-3">Afro Tech</h3>
              <p className="text-[#a8adb8]">Elementos africanos con beats electrónicos. Ritmos hipnotizantes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
