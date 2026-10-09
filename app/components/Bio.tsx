'use client';

import { useEffect, useRef, useState } from 'react';

export default function Bio() {
  const stats = [
    { num: '13+', label: 'Years behind the decks' },
    { num: '3', label: 'Signature genres' },
    { num: '100%', label: 'Dancefloor focused' },
  ];

  const residencies = [
    { name: 'Moscú', note: 'ex Pacha' },
    { name: 'Creta' },
    { name: 'Bali' },
    { name: 'Groove' },
  ];

  // Los clubes aparecen uno por uno cuando la sección entra en pantalla
  const residenciesRef = useRef<HTMLDivElement>(null);
  const [residenciesVisible, setResidenciesVisible] = useState(false);

  useEffect(() => {
    const el = residenciesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResidenciesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
                fontFamily: "var(--font-anton), sans-serif",
                fontWeight: 400,
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: '12px',
                fontFamily: "var(--font-space-mono), monospace",
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--ash)',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Club Residencies */}
        <div
          ref={residenciesRef}
          className={`residencies ${residenciesVisible ? 'is-visible' : ''}`}
        >
          <h3 className="residencies__title">
            Club <span className="blood">Residencies</span>
          </h3>
          <ul className="residencies__list">
            {residencies.map((club, i) => (
              <li
                key={club.name}
                className="residencies__item"
                style={{ transitionDelay: `${0.25 + i * 0.22}s` }}
              >
                <span className="residencies__num">0{i + 1}</span>
                <span className="residencies__name">{club.name}</span>
                {club.note && <span className="residencies__note">({club.note})</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
