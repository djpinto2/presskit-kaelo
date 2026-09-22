'use client';

export default function Hero() {
  return (
    <header id="top" style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Video Background - Full Screen */}
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
          opacity: 0.9,
          zIndex: 0,
        }}
      >
        <source src="/media/bg-video (2).mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient - More Subtle */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10, 10, 11, 0.4), rgba(10, 10, 11, 0.5), rgba(10, 10, 11, 0.4))',
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
        padding: '40px 24px',
      }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'var(--bone)',
          animation: 'fadeInDown 0.8s ease-out',
        }}>
          ABUNDANCE presents — Official Press Kit
        </div>

        {/* Logo */}
        <div style={{
          fontSize: 'clamp(80px, 20vw, 200px)',
          fontFamily: "'Anton', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          fontWeight: 400,
          lineHeight: 1,
          background: 'linear-gradient(135deg, var(--bone), var(--blood))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'fadeInScale 1s ease-out 0.2s both',
        }}>
          KAELO
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'var(--bone)',
          animation: 'fadeInUp 0.8s ease-out 0.3s both',
        }}>
          From <span style={{ color: 'var(--blood)' }}>Sunset</span> to <span style={{ color: 'var(--blood)' }}>Sunrise</span>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: '16.5px',
          lineHeight: 1.6,
          color: 'var(--bone)',
          maxWidth: '600px',
          marginTop: '16px',
          animation: 'fadeInUp 0.8s ease-out 0.4s both',
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
          animation: 'fadeInUp 0.8s ease-out 0.5s both',
        }}>
          {['House', 'Tech House', 'Afro Tech'].map((genre, i) => (
            <span
              key={genre}
              style={{
                fontSize: '12px',
                padding: '8px 16px',
                border: '2px solid var(--blood)',
                color: 'var(--blood)',
                fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                transition: 'all 0.3s ease',
                animation: `fadeInUp 0.8s ease-out ${0.5 + i * 0.1}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--blood)';
                e.currentTarget.style.color = 'var(--bone)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--blood)';
                e.currentTarget.style.transform = 'none';
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
          animation: 'fadeInUp 0.8s ease-out 0.6s both',
        }}>
          <a 
            href="mailto:kaelo.ar@gmail.com" 
            style={{
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
              cursor: 'pointer',
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            Book KAELO
          </a>
          <a 
            href="#music" 
            style={{
              background: 'transparent',
              color: 'var(--bone)',
              border: '2px solid var(--bone)',
              padding: '14px 28px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.42em',
              fontWeight: 700,
              transition: 'all 0.3s ease',
              display: 'inline-block',
              cursor: 'pointer',
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--blood)';
              e.currentTarget.style.color = 'var(--blood)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = 'rgba(200, 54, 42, 0.1)';
            }} 
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--bone)';
              e.currentTarget.style.color = 'var(--bone)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
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
          animation: 'fadeInUp 0.8s ease-out 0.7s both',
        }}>
          <a href="https://instagram.com/kaelo.ar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bone)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blood)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--bone)'}>Instagram</a>
          <a href="https://open.spotify.com/intl-es/artist/3ld4y01CjXQOIUjWVUdBQd" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bone)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blood)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--bone)'}>Spotify</a>
          <a href="https://soundcloud.com/segundo-pinto-887266750" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--bone)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--blood)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--bone)'}>SoundCloud</a>
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
      }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.42em',
          color: 'var(--bone)',
          animation: 'pulse 2s infinite',
        }}>Scroll</p>
        <div style={{
          width: '1px',
          height: '32px',
          background: 'linear-gradient(180deg, var(--blood), transparent)',
          animation: 'slide 1.5s infinite',
        }} />
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes slide {
          0% { opacity: 1; }
          100% { opacity: 0; transform: translateY(32px); }
        }
      `}</style>
    </header>
  );
}
