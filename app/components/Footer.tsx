export default function Footer() {
  return (
    <footer className="bg-[var(--bg-2)] border-t border-[var(--line)] py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">KAELO</h4>
            <p className="text-sm text-[var(--txt-2)]">
              DJ & Producer • House • Tech House
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Contacto</h4>
            <a href="mailto:kaelo.ar@gmail.com" className="text-sm text-[var(--txt-2)] hover:text-[var(--gold)]">
              kaelo.ar@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--gold-2)] mb-4">Social</h4>
            <div className="space-y-1 text-sm">
              <a href="#" className="text-[var(--txt-2)] hover:text-[var(--gold)] block">Instagram: @kaelo.ar</a>
              <a href="#" className="text-[var(--txt-2)] hover:text-[var(--gold)] block">SoundCloud</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--line)] pt-8 text-center text-sm text-[var(--txt-3)]">
          <p>&copy; 2026 KAELO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
