'use client';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line)',
      padding: '80px 0 40px',
      textAlign: 'center',
      backgroundColor: 'rgba(19, 19, 21, 0.5)',
    }}>
      <div className="wrap">
        {/* Logo */}
        <div style={{
          fontSize: '48px',
          fontFamily: "'Anton', sans-serif",
          fontWeight: 400,
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          KΛΣLO
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--ash)',
          marginBottom: '32px',
        }}>
          From Sunset to Sunrise
        </p>

        {/* Socials */}
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          marginBottom: '32px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          textTransform: 'uppercase',
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
          <a href="mailto:kaelo.ar@gmail.com" style={{ color: 'var(--blood)' }}>
            Bookings
          </a>
        </div>

        {/* Credits */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          color: 'var(--steel)',
          borderTop: '1px solid var(--line2)',
          paddingTop: '24px',
        }}>
          <p>© 2024 KAELO — All Rights Reserved</p>
          <p style={{ marginTop: '8px' }}>
            Official Press Kit | Managed by <a href="https://abundance.ar" style={{ color: 'var(--blood)' }}>ABUNDANCE</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
