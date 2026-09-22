'use client';

export default function Bio() {
  const stats = [
    { num: '13+', label: 'Years behind the decks' },
    { num: '3', label: 'Signature genres' },
    { num: '100%', label: 'Dancefloor focused' },
  ];

  const residencies = ['Moscú', 'Creta', 'Bali', 'Groove'];

  return (
    <section id="bio">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow">Biography</div>

        {/* Heading */}
        <h2 style={{ marginBottom: '56px' }}>
          Built To <em>Move</em><br/>
          The <span className="blood">Floor</span>
        </h2>

        {/* Bio Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Bio Text */}
          <div style={{ color: 'var(--ash)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '16px' }}>
              KAELO is an Argentine DJ with over 13 years of experience shaping dancefloors across Buenos Aires.
              Specializing in House, Tech House, and Afro Tech, he brings a <strong style={{ color: 'var(--bone)' }}>refined energy</strong> to every set.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Resident at <strong style={{ color: 'var(--bone)' }}>Moscú, Creta, Bali, and Groove</strong>, KAELO combines technical precision with emotional depth,
              creating unforgettable experiences from sunset to sunrise.
            </p>
            <p>
              His sound is <strong style={{ color: 'var(--bone)' }}>dancefloor-focused</strong>, always in service of the crowd's energy and the moment's vibe.
            </p>
          </div>

          {/* Bio Photo Placeholder */}
          <div style={{
            position: 'relative',
            aspectRatio: '1',
            backgroundColor: 'var(--panel)',
            border: '1px solid var(--line)',
            borderRadius: '2px',
            overflow: 'hidden',
            transform: 'rotate(-1.2deg)',
            filter: 'grayscale(35%) contrast(1.2)',
            transition: 'all 0.3s ease',
          }} onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)';
            e.currentTarget.style.transform = 'rotate(-1.2deg) scale(1.05)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'grayscale(35%) contrast(1.2)';
            e.currentTarget.style.transform = 'rotate(-1.2deg)';
          }}>
            <img
              src="/media/logo.png"
              alt="KAELO"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '80px',
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                padding: '24px',
                transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--blood)';
                e.currentTarget.style.transform = `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg) translateY(-3px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.transform = `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`;
              }}
            >
              <div style={{
                fontSize: 'clamp(48px, 7vw, 90px)',
                fontFamily: "'Anton', sans-serif",
                fontWeight: 400,
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: '12px',
                fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--ash)',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Residencies Marquee */}
        <div style={{
          overflow: 'hidden',
          marginTop: '56px',
        }}>
          <div style={{
            display: 'flex',
            gap: '56px',
            width: 'max-content',
            animation: 'scroll 28s linear infinite',
            paddingRight: '56px',
          }} className="marquee-track">
            {/* First set */}
            {residencies.map((venue, i) => (
              <div key={i} style={{ whiteSpace: 'nowrap', fontSize: '18px', color: 'var(--ash)' }}>
                Club residencies: {venue} <span style={{ color: 'var(--blood)' }}>·</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {residencies.map((venue, i) => (
              <div key={`dup-${i}`} style={{ whiteSpace: 'nowrap', fontSize: '18px', color: 'var(--ash)' }}>
                {venue} <span style={{ color: 'var(--blood)' }}>·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
