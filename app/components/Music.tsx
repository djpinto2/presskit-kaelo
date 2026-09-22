'use client';

export default function Music() {
  return (
    <section id="music">
      <div className="wrap">
        <div className="eyebrow">Listen</div>
        <h2 style={{ marginBottom: '56px' }}>
          Selected <em>Sets</em>
        </h2>

        <div style={{ display: 'grid', gap: '40px' }}>
          {/* Spotify Embed */}
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            minHeight: '352px',
            backgroundColor: 'var(--panel)',
            border: '1px solid var(--line)',
          }}>
            <iframe
              src="https://open.spotify.com/embed/playlist/KAELO?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              style={{ border: 'none', backgroundColor: 'var(--panel)' }}
            />
          </div>

          {/* SoundCloud Embed */}
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            minHeight: '166px',
            backgroundColor: 'var(--panel)',
            border: '1px solid var(--line)',
          }}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/KAELO"
              style={{ backgroundColor: 'var(--panel)' }}
            />
          </div>

          {/* External Links */}
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            {[
              { name: 'Spotify', url: 'https://spotify.com' },
              { name: 'SoundCloud', url: 'https://soundcloud.com' },
              { name: 'Apple Music', url: 'https://music.apple.com' },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                style={{
                  padding: '12px 20px',
                  border: '1px solid var(--line)',
                  color: 'var(--ash)',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--blood)';
                  e.currentTarget.style.color = 'var(--blood)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line)';
                  e.currentTarget.style.color = 'var(--ash)';
                }}
              >
                {platform.name} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
