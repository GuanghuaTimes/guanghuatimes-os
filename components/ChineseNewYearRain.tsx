"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type RainKind = "wallet" | "ingot";

function isInRange(now: Date, start: Date, end: Date) {
  return now.getTime() >= start.getTime() && now.getTime() <= end.getTime();
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="walletBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8b5a2b" />
          <stop offset="1" stopColor="#6f3f16" />
        </linearGradient>
      </defs>
      <rect x="10" y="18" width="44" height="30" rx="6" fill="url(#walletBody)" />
      <rect x="10" y="22" width="44" height="8" rx="4" fill="#a46b3a" opacity="0.9" />
      <rect x="34" y="26" width="18" height="14" rx="3" fill="#2b2b2b" opacity="0.35" />
      <circle cx="41" cy="33" r="2" fill="#ffd36b" />
      <circle cx="46" cy="33" r="2" fill="#ffd36b" />
    </svg>
  );
}

function IngotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ingotGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe38a" />
          <stop offset="0.6" stopColor="#f6c44e" />
          <stop offset="1" stopColor="#eaa22c" />
        </linearGradient>
      </defs>
      <path
        d="M14 26c4-8 12-12 18-12s14 4 18 12c2 4 3 8 3 12 0 8-6 14-14 14H25c-8 0-14-6-14-14 0-4 1-8 3-12z"
        fill="url(#ingotGold)"
      />
      <ellipse cx="32" cy="28" rx="14" ry="6" fill="#fff" opacity="0.25" />
      <path d="M22 38c3 2 7 3 10 3s7-1 10-3" stroke="#b87414" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55" />
    </svg>
  );
}

function RainItem({ kind, size }: { kind: RainKind; size: number }) {
  const Icon = kind === "wallet" ? WalletIcon : IngotIcon;
  return <Icon className="h-full w-full" />;
}

export default function ChineseNewYearRain({
  cc,
  start,
  end,
  enabled = true,
}: {
  cc: "cn" | "en";
  start?: string;
  end?: string;
  enabled?: boolean;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const active = useMemo(() => {
    if (!enabled) return false;
    const now = new Date();
    const startDate = start ? new Date(start) : new Date("2026-02-10T00:00:00+08:00");
    const endDate = end ? new Date(end) : new Date("2026-02-20T23:59:59+08:00");
    return isInRange(now, startDate, endDate);
  }, [enabled, start, end]);

  const isHome = useMemo(() => {
    const homePath = `/${cc}`;
    return pathname === homePath || pathname === `${homePath}/`;
  }, [cc, pathname]);

  const kind: RainKind = isHome ? "wallet" : "ingot";

  const items = useMemo(() => {
    const count = 22;
    return Array.from({ length: count }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 3.5;
      const duration = 3.8 + Math.random() * 3.2;
      const size = 18 + Math.round(Math.random() * 18);
      const rotate = -20 + Math.random() * 40;
      const opacity = 0.75 + Math.random() * 0.25;
      return { i, left, delay, duration, size, rotate, opacity };
    });
  }, [kind, pathname]);

  if (!mounted || !active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <style>{`
        @keyframes cny-rain-fall {
          0% { transform: translate3d(0, -120px, 0) rotate(var(--rot)); opacity: 0; }
          10% { opacity: var(--op); }
          100% { transform: translate3d(0, calc(100vh + 140px), 0) rotate(calc(var(--rot) + 220deg)); opacity: 0.05; }
        }
      `}</style>
      {items.map((it) => (
        <div
          key={it.i}
          style={{
            left: `${it.left}%`,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
            width: `${it.size}px`,
            height: `${it.size}px`,
            opacity: it.opacity,
            ["--rot" as any]: `${it.rotate}deg`,
            ["--op" as any]: `${it.opacity}`,
          }}
          className="absolute top-0 will-change-transform"
        >
          <div
            className="h-full w-full"
            style={{
              animationName: "cny-rain-fall",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDuration: `${it.duration}s`,
              animationDelay: `${it.delay}s`,
            }}
          >
            <RainItem kind={kind} size={it.size} />
          </div>
        </div>
      ))}
    </div>
  );
}
