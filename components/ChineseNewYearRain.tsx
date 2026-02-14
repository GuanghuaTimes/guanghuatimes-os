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
        <linearGradient id="hongbaoRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff3b30" />
          <stop offset="0.55" stopColor="#e60012" />
          <stop offset="1" stopColor="#b8000f" />
        </linearGradient>
        <linearGradient id="hongbaoGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1a8" />
          <stop offset="0.5" stopColor="#ffd24d" />
          <stop offset="1" stopColor="#f0a200" />
        </linearGradient>
      </defs>
      <rect x="12" y="14" width="40" height="36" rx="6" fill="url(#hongbaoRed)" />
      <rect x="12" y="20" width="40" height="8" rx="4" fill="#ff5b4f" opacity="0.9" />
      <rect x="12" y="30" width="40" height="3" rx="1.5" fill="#7a0010" opacity="0.35" />
      <circle cx="32" cy="36" r="8" fill="url(#hongbaoGold)" />
      <circle cx="32" cy="36" r="6" fill="#ffea84" opacity="0.55" />
      <path d="M28.5 36h7" stroke="#b47400" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IngotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ingotGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff6bf" />
          <stop offset="0.28" stopColor="#ffe07a" />
          <stop offset="0.55" stopColor="#ffb800" />
          <stop offset="0.78" stopColor="#f79a00" />
          <stop offset="1" stopColor="#cc6d00" />
        </linearGradient>
        <linearGradient id="ingotRim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffb000" />
          <stop offset="0.5" stopColor="#ffeaa6" />
          <stop offset="1" stopColor="#ff9b00" />
        </linearGradient>
        <radialGradient id="ingotBowl" cx="50%" cy="35%" r="60%">
          <stop offset="0" stopColor="#fff7c9" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#ffd45b" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ff9900" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ingotShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a85200" stopOpacity="0" />
          <stop offset="1" stopColor="#7a3700" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path
        d="M9 30c1.2-10 10.8-18 23-18s21.8 8 23 18c0.5 4 0.8 6.8 0.8 10.2C55.8 49 49.2 54 41.3 54H22.7C14.8 54 8.2 49 8.2 40.2c0-3.4 0.3-6.2 0.8-10.2z"
        fill="url(#ingotGold)"
      />
      <path
        d="M12 26c3-7.5 11-12 20-12s17 4.5 20 12c-5.5 5.2-12.5 7.8-20 7.8S17.5 31.2 12 26z"
        fill="url(#ingotRim)"
        opacity="0.95"
      />
      <ellipse cx="32" cy="27.6" rx="17.2" ry="7.1" fill="#b85a00" opacity="0.2" />
      <ellipse cx="32" cy="27.2" rx="16" ry="6" fill="url(#ingotBowl)" opacity="0.85" />
      <path
        d="M17 42c4.5 3.2 10 4.8 15 4.8S42.5 45.2 47 42"
        stroke="#8a4d00"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M15 32c2.3-6.5 9.2-11 16-11"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.28"
      />
      <path
        d="M11.5 34c1.8 10.6 9.6 17.8 20.5 17.8h0c10.9 0 18.7-7.2 20.5-17.8"
        stroke="url(#ingotShadow)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
    </svg>
  );
}

function RainItem({ kind, size }: { kind: RainKind; size: number }) {
  if (kind === "wallet") return <WalletIcon className="h-full w-full" />;

  const ingotSrc = encodeURI("/金元宝.svg");

  return (
    <img
      src={ingotSrc}
      alt=""
      className="h-full w-full"
      draggable={false}
      style={{ width: size, height: size }}
    />
  );
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
  const [dismissed, setDismissed] = useState(false);

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
      const size =
        kind === "ingot"
          ? 28 + Math.round(Math.random() * 24)
          : 34 + Math.round(Math.random() * 22);
      const rotate = kind === "ingot" ? 0 : -20 + Math.random() * 40;
      const opacity = 0.75 + Math.random() * 0.25;
      return { i, left, delay, duration, size, rotate, opacity };
    });
  }, [kind, pathname]);

  if (!mounted || !active || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden pointer-events-none">
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="pointer-events-auto fixed bottom-4 right-4 rounded-full border bg-white/90 px-3 py-2 text-sm text-gray-800 shadow-sm backdrop-blur hover:bg-white dark:bg-slate-900/80 dark:text-gray-100"
        aria-label={cc === "cn" ? "关闭春节特效" : "Close"}
      >
        {cc === "cn" ? "关闭节日插件" : "Close"}
      </button>
      <style>{`
        @keyframes cny-rain-fall {
          0% { transform: translate3d(0, -120px, 0) rotate(var(--rot)); opacity: 0; }
          10% { opacity: var(--op); }
          66% { opacity: var(--op); }
          100% { transform: translate3d(0, calc(100vh + 140px), 0) rotate(calc(var(--rot) + var(--spin))); opacity: 0.05; }
        }

        @keyframes cny-ingot-sway {
          0% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(10px, 0, 0); }
          50% { transform: translate3d(-10px, 0, 0); }
          75% { transform: translate3d(7px, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
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
            ["--spin" as any]: kind === "ingot" ? "0deg" : "220deg",
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
            {kind === "ingot" ? (
              <div
                className="h-full w-full"
                style={{
                  animationName: "cny-ingot-sway",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDuration: `${Math.max(2.2, it.duration * 0.8)}s`,
                }}
              >
                <RainItem kind={kind} size={it.size} />
              </div>
            ) : (
              <RainItem kind={kind} size={it.size} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
