'use client';

export default function Hero() {
  return (
    <header id="top" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '140px',
      paddingBottom: '90px',
      overflow: 'hidden',
    }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6,
          zIndex: 0,
        }}
      >
        <source src="/media/bg-video (2).mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(10, 10, 11, 0.3), rgba(10, 10, 11, 0.7))',
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
      }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'var(--ash)',
        }}>
          ABUNDANCE presents — Official Press Kit
        </div>

        {/* Logo */}
        <div style={{
          fontSize: 'clamp(64px, 15vw, 190px)',
          fontFamily: "'Anton', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          fontWeight: 400,
          lineHeight: 1,
        }}>
          KAELO
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'var(--ash)',
        }}>
          From <span style={{ color: 'var(--blood)' }}>Sunset</span> to <span style={{ color: 'var(--blood)' }}>Sunrise</span>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: '16.5px',
          lineHeight: 1.6,
          color: 'var(--ash)',
          maxWidth: '600px',
          marginTop: '16px',
        }}>
          Argentine DJ | House · Tech House · Afro Tech<br/>
          13+ years shaping dancefloors across Buenos Aires
        </p>

        {/* Genre Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginTop: '16px',
        }}>
          {['House', 'Tech House', 'Afro Tech'].map((genre) => (
            <span
              key={genre}
              style={{
                fontSize: '12px',
                padding: '8px 16px',
                border: '1px solid var(--blood)',
                color: 'var(--blood)',
                fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '32px',
        }}>
          <a href="mailto:kaelo.ar@gmail.com" style={{
            background: 'var(--blood)',
            color: 'var(--bone)',
            padding: '14px 28px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.42em',
            fontWeight: 700,
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
            Book KAELO
          </a>
          <a href="https://www.spotify.com" target="_blank" style={{
            background: 'transparent',
            color: 'var(--bone)',
            border: '1px solid var(--line)',
            padding: '14px 28px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.42em',
            fontWeight: 700,
            transition: 'all 0.3s ease',
            display: 'inline-block',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--blood)';
            e.currentTarget.style.color = 'var(--blood)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--line)';
            e.currentTarget.style.color = 'var(--bone)';
            e.currentTarget.style.transform = 'none';
          }}>
            Listen
          </a>
        </div>

        {/* Socials */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginTop: '32px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          textTransform: 'uppercase',
        }}>
          <a href="https://instagram.com/kaelo.ar" target="_blank" style={{ color: 'var(--ash)' }}>Instagram</a>
          <a href="https://spotify.com" target="_blank" style={{ color: 'var(--ash)' }}>Spotify</a>
          <a href="https://soundcloud.com" target="_blank" style={{ color: 'var(--ash)' }}>SoundCloud</a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'bounce 2s infinite',
      }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'var(--ash)',
        }}>Scroll</p>
        <div style={{
          width: '1px',
          height: '32px',
          background: 'linear-gradient(180deg, var(--blood), transparent)',
          animation: 'slide 1.5s infinite',
        }} />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes slide {
          0% { opacity: 1; }
          100% { opacity: 0; transform: translateY(32px); }
        }
      `}</style>
    </header>
  );
}
