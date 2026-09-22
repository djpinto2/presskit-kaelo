'use client';

export default function Reels() {
  const reels = [
    { id: 1, src: '/media/reel-01 (2).mp4', title: 'Performance 01' },
    { id: 2, src: '/media/reel-02 (2).mp4', title: 'Performance 02' },
    { id: 3, src: '/media/reel-03 (2).mp4', title: 'Performance 03' },
    { id: 4, src: '/media/reel-04 (2).mp4', title: 'Performance 04' },
  ];

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
          maxWidth: '920px',
          margin: '0 auto',
        }}>
          {reels.map((reel) => (
            <div
              key={reel.id}
              style={{
                aspectRatio: '9 / 16',
                backgroundColor: 'var(--panel)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid var(--line)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              className="group hover:border-[var(--blood)] hover:shadow-lg hover:-translate-y-1"
            >
              <video
                src={reel.src}
                controls
                playsInline
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(10, 10, 11, 0.9), transparent)',
                padding: '16px 12px',
                color: 'var(--txt)',
                fontSize: '12px',
                fontWeight: '600',
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
