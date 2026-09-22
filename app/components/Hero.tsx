export default function Hero() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[var(--bg)] to-[var(--bg-2)]">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text">
            KAELO
          </h1>
          <p className="text-2xl text-[var(--gold-2)]">
            House | Tech House | Afro Tech
          </p>
          <p className="text-xl text-[var(--txt-2)]">
            DJ & Producer • Buenos Aires 🇦🇷
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button className="btn btn--primary">Booking</button>
            <button className="btn btn--secondary">Contacto</button>
          </div>
        </div>
      </div>
    </section>
  );
}
