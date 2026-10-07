'use client';

import { useEffect, type RefObject } from 'react';

const GESTURES = ['touchstart', 'touchend', 'click', 'keydown'] as const;

// Los celulares en modo ahorro de batería / datos bloquean el autoplay aunque
// el video esté muteado. Forzamos play() al montar y, si lo bloquean,
// reintentamos con la primera interacción del usuario.
export function useAutoplay(ref: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      if (video.paused) video.play().catch(() => {});
    };
    const removeGestures = () =>
      GESTURES.forEach((e) => window.removeEventListener(e, tryPlay, true));
    const onVisible = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };

    GESTURES.forEach((e) => window.addEventListener(e, tryPlay, { capture: true, passive: true }));
    video.addEventListener('playing', removeGestures);
    video.addEventListener('canplay', tryPlay);
    document.addEventListener('visibilitychange', onVisible);
    tryPlay();

    return () => {
      removeGestures();
      video.removeEventListener('playing', removeGestures);
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [ref]);
}
