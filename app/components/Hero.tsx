export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[var(--bg)]">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/media/bg-video (2).mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4 py-32">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text">
            KAELO
          </h1>
          <p className="text-2xl text-[var(--gold-2)] font-semibold">
            House | Tech House | Afro Tech
          </p>
          <p className="text-xl text-[var(--txt-2)]">
            DJ & Producer • Buenos Aires 🇦🇷
          </p>
          <p className="text-lg text-[var(--txt-2)] max-w-2xl">
            Más de 13 años en la escena electrónica. Sets energéticos y progresivos 
            que generan una conexión única con la audiencia.
          </p>
          <div className="flex gap-4 pt-8">
            <button className="btn btn--primary">Booking</button>
            <button className="btn btn--secondary">Contacto</button>
          </div>
        </div>
      </div>
    </section>
  );
}
