'use client';

export default function Reels() {
  const reels = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Performance ${i + 1}`,
  }));

  return (
    <section id="reels">
      <div className="wrap">
        <div className="eyebrow">Reels</div>
        <h2 style={{ marginBottom: '56px' }}>
          On The <em>Floor</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 220px))',
          gap: '18px',
          justifyContent: 'center',
          maxWidth: '320px',
          margin: '0 auto',
        }}>
          {reels.map((reel) => (
            <div
              key={reel.id}
              style={{
                aspectRatio: '9 / 16',
                backgroundColor: 'var(--panel)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--blood)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(200, 54, 42, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--coal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: 'var(--ash)',
              }}>
                {reel.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
