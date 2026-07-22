"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const VOLUME_KEY = "path-of-musashi-bgm-volume";
const ENABLED_KEY = "path-of-musashi-bgm-enabled";

export function useBgm(track: string | undefined) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [volume, setVolumeState] = useState(() => {
    if (typeof window === "undefined") return 0.5;
    const saved = localStorage.getItem(VOLUME_KEY);
    return saved ? parseFloat(saved) : 0.5;
  });

  const [enabled, setEnabledState] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem(ENABLED_KEY) !== "false";
  });

  useEffect(() => {
    if (!track) return;

    const audio = new Audio(track);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    if (enabled) {
      audio.play().catch(() => {});
    }

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
    // volume & enabled intentionally excluded — synced by a separate effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    if (enabled && audio.paused) {
      audio.play().catch(() => {});
    } else if (!enabled && !audio.paused) {
      audio.pause();
    }
  }, [volume, enabled]);

  const setVolume = useCallback((v: number) => {
    const clamped = Math.max(0, Math.min(1, v));
    setVolumeState(clamped);
    localStorage.setItem(VOLUME_KEY, String(clamped));
  }, []);

  const setEnabled = useCallback((e: boolean) => {
    setEnabledState(e);
    localStorage.setItem(ENABLED_KEY, String(e));
  }, []);

  return { volume, setVolume, enabled, setEnabled };
}
