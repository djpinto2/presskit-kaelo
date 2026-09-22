'use client';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 28px',
      background: 'linear-gradient(180deg, rgba(10, 10, 11, 0.8), transparent)',
      backdropFilter: 'blur(3px)',
      borderBottom: '1px solid var(--line2)'
    }}>
      <a href="#top" style={{
        fontSize: 'clamp(18px, 4vw, 24px)',
        fontWeight: 700,
        fontFamily: "'Anton', sans-serif",
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
      }}>
        KΛΣLO·
        <span style={{ color: 'var(--blood)' }}>·</span>
      </a>

      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '32px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.42em',
      }}>
        <li><a href="#bio" style={{ color: 'var(--ash)' }}>Bio</a></li>
        <li><a href="#music" style={{ color: 'var(--ash)' }}>Music</a></li>
        <li><a href="#reels" style={{ color: 'var(--ash)' }}>Reels</a></li>
        <li><a href="#rider" style={{ color: 'var(--ash)' }}>Rider</a></li>
        <li><a href="#contact" style={{ color: 'var(--blood)', fontWeight: 700 }}>Bookings</a></li>
      </ul>
    </nav>
  );
}
