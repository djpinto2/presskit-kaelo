'use client';

export default function Contact() {
  return (
    <section id="contact" style={{
      textAlign: 'center',
    }}>
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Bookings</div>

        <h2 style={{ marginBottom: '24px' }}>
          Let&apos;s <span className="blood">Work</span>
        </h2>

        <p style={{
          fontSize: '18px',
          color: 'var(--ash)',
          marginBottom: '48px',
          fontFamily: "'Space Mono', monospace",
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}>
          Clubs · Private events · Festivals · Beach clubs
        </p>

        <a
          href="mailto:kaelo.ar@gmail.com"
          style={{
            fontSize: 'clamp(36px, 8vw, 64px)',
            fontFamily: "'Anton', sans-serif",
            fontWeight: 400,
            textTransform: 'uppercase',
            textDecoration: 'underline',
            color: 'var(--bone)',
            display: 'inline-block',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--blood)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--bone)';
          }}
        >
          kaelo.ar@gmail.com
        </a>

        <div style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          marginTop: '56px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}>
          <a href="https://instagram.com/kaelo.ar" target="_blank" style={{ color: 'var(--ash)' }}>
            Instagram
          </a>
          <a href="https://spotify.com" target="_blank" style={{ color: 'var(--ash)' }}>
            Spotify
          </a>
          <a href="https://soundcloud.com" target="_blank" style={{ color: 'var(--ash)' }}>
            SoundCloud
          </a>
        </div>
      </div>
    </section>
  );
}
