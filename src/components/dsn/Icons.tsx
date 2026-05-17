import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export const Compass = (p: P) => (
  <svg width={16} height={16} {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m14.5 9.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);
export const ChevDown = (p: P) => (
  <svg width={14} height={14} {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const ChevRight = (p: P) => (
  <svg width={14} height={14} {...base} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const Arrow = (p: P) => (
  <svg width={14} height={14} {...base} {...p}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>
);
export const ArrowDown = (p: P) => (
  <svg width={14} height={14} {...base} {...p}><path d="M12 5v14" /><path d="m5 13 7 7 7-7" /></svg>
);
export const Search = (p: P) => (
  <svg width={14} height={14} {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Pin = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
export const Bed = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M3 8v10" /><path d="M21 18v-6a3 3 0 0 0-3-3H3" />
    <path d="M3 14h18" /><circle cx="8" cy="11.5" r="1.5" />
  </svg>
);
export const Star = (p: P) => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 6.9L12 17.9 5.7 21l1.2-6.9-5-4.9 7-1L12 2Z" />
  </svg>
);
export const Heart = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M12 20s-7-4.4-9.2-9.2A5 5 0 0 1 12 6.6 5 5 0 0 1 21.2 10.8C19 15.6 12 20 12 20Z" />
  </svg>
);
export const Check = (p: P) => (
  <svg width={14} height={14} {...base} strokeWidth={2} {...p}><path d="m5 12 4 4 10-10" /></svg>
);
export const Shield = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.5 8.5 8 9 4.5-.5 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const Calendar = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);
export const Map = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
    <path d="M9 4v16M15 6v16" />
  </svg>
);
export const Grid = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);
export const Sliders = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M4 6h10M18 6h2" /><circle cx="16" cy="6" r="2" />
    <path d="M4 12h4M12 12h8" /><circle cx="10" cy="12" r="2" />
    <path d="M4 18h12M20 18h0" /><circle cx="18" cy="18" r="2" />
  </svg>
);
export const Coffee = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M4 8h13v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
    <path d="M17 10h2a2 2 0 0 1 0 4h-2" />
    <path d="M8 3v2M12 3v2" />
  </svg>
);
export const Castle = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M3 21h18" />
    <path d="M5 21V9l2 1 2-2 2 1 2-1 2 2 2-1 2 2v10" />
    <path d="M5 9V5l2 1V5l2 1V5l2 1V5l2 1V5l2 1V5l2 1v4" />
    <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
  </svg>
);
export const Tent = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M3 20 12 4l9 16" /><path d="M12 4v16" /><path d="M3 20h18" />
  </svg>
);
export const Wave = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M3 12c2 0 2-1.5 4-1.5S9 12 11 12s2-1.5 4-1.5S17 12 19 12s2-1.5 2-1.5" />
    <path d="M3 17c2 0 2-1.5 4-1.5S9 17 11 17s2-1.5 4-1.5S17 17 19 17s2-1.5 2-1.5" />
  </svg>
);
export const Dog = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M10 5c-2 0-3 1-3 3v3c0 3 2 5 5 5s5-2 5-5V8c0-2-1-3-3-3l-1 2-1-2-1 2-1-2Z" />
    <path d="M9 16v2M15 16v2" />
    <circle cx="10" cy="10" r=".7" fill="currentColor" />
    <circle cx="14" cy="10" r=".7" fill="currentColor" />
  </svg>
);
export const Wifi = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M5 12a10 10 0 0 1 14 0" />
    <path d="M8.5 15.5a5 5 0 0 1 7 0" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);
export const Plus = (p: P) => (
  <svg width={14} height={14} {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Menu = (p: P) => (
  <svg width={14} height={14} {...base} strokeWidth={1.7} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const X = (p: P) => (
  <svg width={14} height={14} {...base} strokeWidth={1.8} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Home = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="m3 11 9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9Z" />
  </svg>
);
export const User = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <circle cx="12" cy="9" r="3.5" />
    <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
  </svg>
);
export const Sun = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
  </svg>
);
export const Leaf = (p: P) => (
  <svg width={14} height={14} {...base} {...p}>
    <path d="M20 4c-2 12-9 16-15 16C5 14 9 6 20 4Z" />
    <path d="M5 20c4-6 8-9 13-12" />
  </svg>
);
export const AlertCircle = (p: P) => (
  <svg width={14} height={14} {...base} strokeWidth={1.8} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v5" />
    <path d="M12 16h.01" />
  </svg>
);
