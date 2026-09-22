'use client';

export default function Music() {
  const musicPlatforms = [
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/intl-es/artist/3ld4y01CjXQOIUjWVUdBQd?si=iFeBcAaISJai9AqMx5jd3Q',
      icon: '🎵'
    },
    { 
      name: 'SoundCloud', 
      url: 'https://soundcloud.com/segundo-pinto-887266750',
      icon: '☁️'
    },
    { 
      name: 'Apple Music', 
      url: 'https://music.apple.com/artist/kaelo',
      icon: '🎧'
    },
  ];

  return (
    <section id="music">
      <div className="wrap">
        <div className="eyebrow">Listen</div>
        <h2 style={{ marginBottom: '56px' }}>
          Selected <em>Sets</em>
        </h2>

        <div style={{ display: 'grid', gap: '40px' }}>
          {/* Platform Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}>
            {musicPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '20px',
                  border: '2px solid var(--line)',
                  borderRadius: '8px',
                  color: 'var(--txt)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '16px',
                }}
                className="hover:border-[var(--blood)] hover:text-[var(--blood)] hover:bg-[var(--blood)]/5"
              >
                <span>{platform.icon}</span>
                {platform.name}
              </a>
            ))}
          </div>

          {/* Description */}
          <div style={{
            padding: '24px',
            backgroundColor: 'var(--panel)',
            borderRadius: '8px',
            border: '1px solid var(--line)',
            color: 'var(--txt-2)',
            fontSize: '14px',
            lineHeight: '1.6',
          }}>
            <p>
              Escucha mis últimos sets y producciones en tus plataformas favoritas. 
              Disponible en Spotify, SoundCloud, Apple Music y más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
