export default function Footer() {
  return (
    <footer className="footer bg-[var(--bg-2)] border-t border-[var(--line)] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-[var(--gold-2)] mb-4">KAELO</h3>
            <p className="text-[var(--txt-3)]">Professional DJ | House • Tech House • Afro Tech</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--txt-1)] mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#home" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition block">Home</a>
              <a href="#music" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition block">Music</a>
              <a href="#reels" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition block">Performances</a>
              <a href="#contact" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition block">Booking</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--txt-1)] mb-4">Social</h3>
            <div className="space-y-2">
              <a href="https://instagram.com/kaelo.ar" target="_blank" rel="noopener" className="text-[var(--txt-3)] hover:text-pink-500 transition block">Instagram</a>
              <a href="https://soundcloud.com" target="_blank" rel="noopener" className="text-[var(--txt-3)] hover:text-orange-500 transition block">SoundCloud</a>
              <a href="https://spotify.com" target="_blank" rel="noopener" className="text-[var(--txt-3)] hover:text-green-500 transition block">Spotify</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--line)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--txt-3)]">
            &copy; 2026 KAELO. DJ Press Kit & Booking Portal
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition">Privacy</a>
            <a href="#" className="text-[var(--txt-3)] hover:text-[var(--gold-2)] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
