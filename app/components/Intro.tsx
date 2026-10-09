'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useAutoplay } from './useAutoplay';

const VIDEO_SRC = '/media/bg.mp4';
const AUDIO_SRC = '/media/intro.m4a';
const LOGO_SRC = '/media/logo.svg';

const MIN_LOADING_MS = 3200; // duración mínima de la barra de carga
const MAX_WAIT_MS = 8000; // si el video tarda más, seguimos igual
const AUDIO_VOLUME = 0.85;
const AUDIO_FADE_IN_S = 2;
const AUDIO_FADE_OUT_S = 3; // fundido de salida tipo "outro"
const OVERLAY_FADE_MS = 1400;

type Phase = 'loading' | 'ready' | 'leaving' | 'done';

export default function Intro() {
  const [phase, setPhase] = useState<Phase>('loading');
  const [progress, setProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const [userMuted, setUserMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const mediaReadyRef = useRef(false);
  const leavingRef = useRef(false);
  useAutoplay(videoRef);

  // Web Audio permite hacer fundidos suaves también en iOS,
  // donde audio.volume es de solo lectura.
  const ensureGraph = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || ctxRef.current) return;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    ctx.createMediaElementSource(audio).connect(gain).connect(ctx.destination);
    ctxRef.current = ctx;
    gainRef.current = gain;
  }, []);

  const rampTo = useCallback((target: number, seconds: number) => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    const audio = audioRef.current;
    if (ctx && gain) {
      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(target, now + seconds);
    } else if (audio) {
      // Fallback sin Web Audio
      const from = audio.volume;
      const start = performance.now();
      const step = (t: number) => {
        const k = Math.min((t - start) / (seconds * 1000), 1);
        audio.volume = from + (target - from) * k;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, []);

  const startAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || leavingRef.current) return false;
    try {
      ensureGraph();
      const ctx = ctxRef.current;
      // resume() queda pendiente (sin rechazar) si no hubo interacción, por eso no se espera sola
      const resumed = ctx && ctx.state !== 'running' ? ctx.resume() : Promise.resolve();
      if (!ctx) audio.volume = 0;
      await audio.play();
      await Promise.race([resumed, new Promise((r) => setTimeout(r, 400))]);
      if (ctx && ctx.state !== 'running') throw new Error('suspended');
      rampTo(AUDIO_VOLUME, AUDIO_FADE_IN_S);
      setSoundOn(true);
      setSoundBlocked(false);
      return true;
    } catch {
      // El navegador bloqueó el autoplay con sonido: esperamos la primera interacción.
      audio.pause();
      setSoundBlocked(true);
      return false;
    }
  }, [ensureGraph, rampTo]);

  const stopAudio = useCallback(
    (fadeSeconds: number) => {
      const audio = audioRef.current;
      if (!audio) return;
      rampTo(0, fadeSeconds);
      window.setTimeout(() => audio.pause(), fadeSeconds * 1000 + 100);
      setSoundOn(false);
    },
    [rampTo]
  );

  // Intentar reproducir apenas carga la página
  useEffect(() => {
    startAudio();
  }, [startAudio]);

  // Si el autoplay fue bloqueado, arrancar con la primera interacción del usuario
  useEffect(() => {
    if (soundOn || userMuted || phase === 'leaving' || phase === 'done') return;
    const unlock = (e: Event) => {
      const target = e.target as HTMLElement | null;
      // El botón Enter y el toggle de sonido manejan el audio por su cuenta
      if (target?.closest('[data-intro-control]')) return;
      startAudio();
    };
    const opts = { capture: true } as const;
    window.addEventListener('pointerdown', unlock, opts);
    window.addEventListener('keydown', unlock, opts);
    return () => {
      window.removeEventListener('pointerdown', unlock, opts);
      window.removeEventListener('keydown', unlock, opts);
    };
  }, [soundOn, userMuted, phase, startAudio]);

  // Barra de carga: avanza con el tiempo, pero no llega al 100% hasta que el video esté listo
  useEffect(() => {
    const start = performance.now();
    const safety = window.setTimeout(() => (mediaReadyRef.current = true), MAX_WAIT_MS);
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min((t - start) / MIN_LOADING_MS, 1);
      const eased = 1 - Math.pow(1 - k, 3);
      const cap = mediaReadyRef.current ? 1 : 0.92;
      const value = Math.min(eased, cap) * 100;
      setProgress(value);
      if (value >= 100) {
        window.setTimeout(() => setPhase('ready'), 350);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, []);

  // Bloquear el scroll mientras la intro está visible
  useEffect(() => {
    if (phase === 'done') return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prev;
    };
  }, [phase]);

  const enter = () => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    stopAudio(AUDIO_FADE_OUT_S);
    window.scrollTo(0, 0);
    setPhase('leaving');
    window.setTimeout(() => setPhase('done'), OVERLAY_FADE_MS);
  };

  const toggleSound = () => {
    if (soundOn) {
      setUserMuted(true);
      stopAudio(0.6);
    } else {
      setUserMuted(false);
      startAudio();
    }
  };

  return (
    <>
      {/* El audio queda montado para que el fundido termine aunque la intro ya no se vea */}
      <audio ref={audioRef} src={AUDIO_SRC} preload="auto" loop playsInline />

      {phase !== 'done' && (
        <div className={`intro intro--${phase}`} role="dialog" aria-label="KAELO Press Kit intro">
          <video
            ref={videoRef}
            className="intro__video"
            src={VIDEO_SRC}
            poster="/media/bg-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlayThrough={() => (mediaReadyRef.current = true)}
            onLoadedData={() => (mediaReadyRef.current = true)}
          />
          <div className="intro__shade" />

          <div className="intro__center">
            <div className="intro__logo" aria-hidden="true">
              <img src={LOGO_SRC} alt="" className="intro__logo-ghost" />
              <img
                src={LOGO_SRC}
                alt=""
                className="intro__logo-fill"
                style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
              />
              {phase === 'loading' && (
                <span className="intro__logo-edge" style={{ left: `${progress}%` }} />
              )}
            </div>

            <div className="intro__meter" aria-hidden={phase !== 'loading'}>
              <div className="intro__track">
                <div className="intro__bar" style={{ transform: `scaleX(${progress / 100})` }} />
              </div>
              <div className="intro__count">
                <span>Loading</span>
                <span>{String(Math.floor(progress)).padStart(3, '0')}%</span>
              </div>
            </div>

            <div className="intro__reveal">
              <p className="intro__eyebrow">Abundance presents</p>
              <h1 className="intro__title">
                KAELO <span className="intro__sep">—</span> <span className="intro__press">Press Kit</span>
              </h1>
              <button
                type="button"
                className="intro__enter"
                onClick={enter}
                disabled={phase !== 'ready'}
                data-intro-control
              >
                <span>Enter Site</span>
                <span className="intro__arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            className={`intro__sound ${soundOn ? 'is-on' : ''} ${soundBlocked && !soundOn ? 'is-blocked' : ''}`}
            onClick={toggleSound}
            aria-pressed={soundOn}
            data-intro-control
          >
            <span className="intro__eq" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            {soundOn ? 'Sound On' : soundBlocked ? 'Tap for sound' : 'Sound Off'}
          </button>

          <div className="intro__corner">Sunset → Sunrise · BA / AR</div>
        </div>
      )}
    </>
  );
}
