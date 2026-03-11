import Svg, { Circle, Path, Rect, Polygon, Ellipse, G } from 'react-native-svg';

/** Generates polygon points string for a 5-pointed star */
function star(cx: number, cy: number, r: number): string {
  const ir = r * 0.42;
  return Array.from({ length: 10 }, (_, i) => {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const radius = i % 2 === 0 ? r : ir;
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
  }).join(' ');
}

const INK = '#1A1A1A';

export default function ReadingIllustration() {
  return (
    <Svg viewBox="0 0 220 295" width={230} height={308}>

      {/* ── Stars ─────────────────────────────────── */}
      <Polygon points={star(150, 20, 11)} fill={INK} />
      <Polygon points={star(174, 52, 8.5)} fill={INK} />
      <Polygon points={star(133, 8, 6.5)} fill={INK} />
      <Polygon points={star(190, 30, 7)} fill={INK} />
      <Polygon points={star(168, 82, 6)} fill={INK} />
      <Polygon points={star(182, 64, 5)} fill={INK} />
      <Polygon points={star(144, 40, 4.5)} fill={INK} />

      {/* ── Book stack ────────────────────────────── */}
      {/* Bottom book – widest */}
      <Rect x="18" y="260" width="184" height="26" rx="5" fill={INK}
        transform="rotate(-2, 110, 273)" />
      {/* Second book */}
      <Rect x="25" y="238" width="170" height="23" rx="5" fill={INK}
        transform="rotate(1.2, 110, 249)" />
      {/* Third book */}
      <Rect x="32" y="219" width="156" height="21" rx="5" fill={INK}
        transform="rotate(-0.8, 110, 229)" />
      {/* Top book – narrowest */}
      <Rect x="40" y="202" width="140" height="19" rx="5" fill={INK} />

      {/* ── Lower body / sitting base ─────────────── */}
      <Ellipse cx="110" cy="200" rx="56" ry="17" fill={INK} />

      {/* Left foot curling out */}
      <Path
        d="M 54 206 C 42 214 36 228 47 236 C 58 244 73 236 73 222"
        fill={INK}
      />

      {/* Right foot curling out on the other side */}
      <Path
        d="M 166 206 C 178 214 182 226 172 234 C 162 242 148 235 150 222"
        fill={INK}
      />

      {/* ── Torso (slightly hunched forward) ─────── */}
      <Path
        d="M 82 200
           C 74 180 72 155 82 136
           C 90 122 130 122 138 136
           C 148 155 146 180 138 200
           Z"
        fill={INK}
      />

      {/* ── Arms reaching toward book ─────────────── */}
      {/* Left arm */}
      <Path
        d="M 82 162
           C 66 169 58 183 66 196
           L 84 188"
        fill={INK}
      />

      {/* Right arm */}
      <Path
        d="M 138 162
           C 154 169 162 183 154 196
           L 136 188"
        fill={INK}
      />

      {/* ── Open book in lap ─────────────────────── */}
      {/* Top curve (open pages arching up) */}
      <Path
        d="M 66 196
           C 66 181 82 174 110 176
           C 138 174 154 181 154 196
           L 150 208
           C 134 200 120 198 110 199
           C 100 198 86 200 70 208
           Z"
        fill={INK}
      />

      {/* ── Neck ──────────────────────────────────── */}
      <Rect x="101" y="120" width="18" height="18" rx="6" fill={INK} />

      {/* ── Head ──────────────────────────────────── */}
      <Circle cx="110" cy="100" r="26" fill={INK} />

      {/* ── Ponytail (arching upward from crown) ───── */}
      <Path
        d="M 122 80
           C 132 64 136 44 126 28
           C 120 16 106 17 106 32
           C 106 46 116 64 122 81
           Z"
        fill={INK}
      />

      {/* Small bump at ponytail base to blend into head */}
      <Ellipse cx="118" cy="80" rx="11" ry="7" fill={INK} />

    </Svg>
  );
}
