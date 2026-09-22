'use client';

export default function Rider() {
  const equipment = [
    { name: 'Mixer', items: 'Pioneer DJM-900 or DJM-A9' },
    { name: 'Players', items: 'Pioneer CDJ-3000 x2 or Technics SL-1200' },
    { name: 'Monitoring', items: 'Quality nearfield monitors + headphones' },
    { name: 'Network', items: 'Stable internet connection for streaming' },
    { name: 'PA', items: 'Professional PA system (min 2kW)' },
  ];

  return (
    <section id="rider">
      <div className="wrap">
        <div className="eyebrow">Technical Rider</div>
        <h2 style={{ marginBottom: '56px' }}>
          Setup <em>Preference</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
        }}>
          {equipment.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'var(--panel)',
                border: '1px solid var(--line)',
                padding: '24px',
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--blood)';
                e.currentTarget.style.transform = `rotate(0deg) translateY(-3px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.transform = `rotate(${Math.random() * 2 - 1}deg)`;
              }}
            >
              <div style={{
                fontSize: '12px',
                fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--blood)',
                marginBottom: '8px',
              }}>
                {item.name}
              </div>
              <div style={{
                fontSize: '16px',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                color: 'var(--bone)',
                marginBottom: '8px',
                lineHeight: 1.4,
              }}>
                {item.items}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'var(--ash)',
              }}>
                Essential for optimal performance
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '56px',
          padding: '24px',
          backgroundColor: 'var(--panel)',
          border: '1px solid var(--line)',
          borderRadius: '2px',
        }}>
          <p style={{ color: 'var(--ash)', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--bone)' }}>Note:</strong> Setup can be adapted based on venue capabilities.
            KAELO is flexible and experienced with various configurations. Contact for specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
