'use client';

import { useEffect, useRef } from 'react';
import { useAutoplay } from './useAutoplay';

// Video fijo detrás de todo el sitio. Al bajar desde el hero se oscurece
// para que las secciones de texto sigan siendo legibles.
export default function BackgroundVideo() {
  const dimRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useAutoplay(videoRef);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const k = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
      if (dimRef.current) dimRef.current.style.opacity = String(k);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-video" aria-hidden="true">
      <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster="/media/bg-poster.jpg">
        <source src="/media/bg.mp4" type="video/mp4" />
      </video>
      <div className="bg-video__shade" />
      <div className="bg-video__dim" ref={dimRef} />
    </div>
  );
}
