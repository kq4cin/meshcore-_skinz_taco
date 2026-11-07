import type { SVGProps } from 'react';
import type { WeatherIcon as WeatherKind } from '../lib/weather';

type P = SVGProps<SVGSVGElement>;
const base = (p: P): P => ({ viewBox: '0 0 48 48', 'aria-hidden': true, focusable: false, ...p });

/** Red chili pepper with a green stem, used as the taco skin's accent "star". */
const Chili = ({ x, y, s = 1, fill = 'var(--salsa)' }: { x: number; y: number; s?: number; fill?: string }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-1 -5 C4 -4 6 0 4 5 C2 9 -3 11 -7 10 C-3 8 -1 5 -2 1 C-2.5 -1 -2 -3 -1 -5 Z" fill={fill} stroke="var(--ink)" strokeWidth="1" strokeLinejoin="round" />
    <path d="M-1 -5 C-1 -7 1 -8 3 -8 M-2 -5 C0 -6 2 -5 3 -4" fill="none" stroke="var(--avocado)" strokeWidth="1.6" strokeLinecap="round" />
  </g>
);

/** Tortilla chip: a rounded triangle. */
const Chip = ({ x, y, r = 5, rot = 0 }: { x: number; y: number; r?: number; rot?: number }) => (
  <path
    d={`M0 ${-r} L${r * 0.9} ${r * 0.6} L${-r * 0.9} ${r * 0.6} Z`}
    transform={`translate(${x} ${y}) rotate(${rot})`}
    fill="var(--cheese)" stroke="var(--ink)" strokeWidth="1.2" strokeLinejoin="round"
  />
);

/** Side-view taco: folded shell with lettuce, tomato and beef peeking over the top edge. */
const Taco = ({ x = 0, y = 0, s = 1 }: { x?: number; y?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} strokeLinejoin="round">
    <path d="M-15 1 A16 16 0 0 1 17 -1 L15 3 L-13 3 Z" fill="var(--avocado-2)" stroke="var(--ink)" strokeWidth="1.2" />
    <circle cx="-9" cy="-9" r="2.6" fill="var(--salsa)" stroke="var(--ink)" strokeWidth=".8" />
    <circle cx="1" cy="-15" r="2.8" fill="var(--beef)" stroke="var(--ink)" strokeWidth=".8" />
    <circle cx="10" cy="-10" r="2.6" fill="var(--salsa)" stroke="var(--ink)" strokeWidth=".8" />
    <path d="M-16 4 A16 16 0 0 1 16 4 Z" fill="var(--cheese)" stroke="var(--ink)" strokeWidth="1.6" />
    <path d="M-11 4 A11 11 0 0 1 11 4" fill="none" stroke="var(--cheese-2)" strokeWidth="1.4" />
  </g>
);

/** Taco Core mascot: a smiling taco holding hot sauce, inside a serape-striped badge. */
export function Crest(p: P) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden focusable={false} {...p}>
      <circle cx="50" cy="50" r="48" fill="var(--mole)" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="var(--teal)" strokeWidth="7" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="var(--cheese)" strokeWidth="7" strokeDasharray="6 12" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="var(--salsa)" strokeWidth="7" strokeDasharray="6 12" strokeDashoffset="6" />
      <circle cx="50" cy="50" r="39" fill="var(--masa)" stroke="var(--ink)" strokeWidth="1.5" />
      <g strokeLinejoin="round">
        <path d="M18 70 A34 34 0 0 1 86 66 L82 74 L20 74 Z" fill="var(--avocado-2)" stroke="var(--ink)" strokeWidth="1.8" />
        <circle cx="23" cy="53" r="4" fill="var(--salsa)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="31" cy="44" r="4" fill="var(--beef)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="41" cy="38" r="4" fill="var(--salsa)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="53" cy="36" r="4" fill="var(--beef)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="64" cy="38.5" r="4" fill="var(--salsa)" stroke="var(--ink)" strokeWidth="1" />
        <circle cx="74" cy="45" r="4" fill="var(--beef)" stroke="var(--ink)" strokeWidth="1" />
        <path d="M17 75 A32 32 0 0 1 81 75 Z" fill="var(--cheese)" stroke="var(--ink)" strokeWidth="2.2" />
        <path d="M24 75 A25 25 0 0 1 74 75" fill="none" stroke="var(--cheese-2)" strokeWidth="1.6" />
      </g>
      <path d="M36 61 Q40 56 44 61 M54 61 Q58 56 62 61" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M41 66 Q49 76 57 66 Z" fill="var(--ink)" />
      <path d="M45 70.5 Q49 73 53 70.5 Q49 68.5 45 70.5 Z" fill="var(--salsa)" />
      <circle cx="31" cy="67" r="3.5" fill="#f08a6a" opacity=".85" />
      <circle cx="67" cy="67" r="3.5" fill="#f08a6a" opacity=".85" />
      <g strokeLinejoin="round" stroke="var(--ink)">
        <rect x="76" y="48" width="11" height="22" rx="3" fill="var(--salsa)" strokeWidth="1.5" />
        <rect x="79" y="40" width="5" height="9" fill="var(--crema)" strokeWidth="1.2" />
        <rect x="78.5" y="36" width="6" height="5" rx="1" fill="var(--ink)" strokeWidth="1" />
        <rect x="77.5" y="55" width="8" height="7" rx="1" fill="var(--cheese)" strokeWidth=".8" />
        <path d="M81.5 56.5 C83.5 58 83 60 81.5 61 C80 60 79.5 58 81.5 56.5 Z" fill="var(--salsa-2)" strokeWidth=".5" />
        <ellipse cx="76" cy="62" rx="4" ry="3" fill="var(--cheese)" strokeWidth="1.2" />
      </g>
      <Chili x={24} y={27} s={1.4} />
    </svg>
  );
}

export function MessagesIcon(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4 3 H22 A3 3 0 0 1 25 6 V15 A3 3 0 0 1 22 18 H12 L6 23 V18 H4 A3 3 0 0 1 1 15 V6 A3 3 0 0 1 4 3 Z" fill="var(--crema)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M27 6 H43 A3 3 0 0 1 46 9 V17 A3 3 0 0 1 43 20 H42 V25 L37 20 H27 A3 3 0 0 1 24 17 V9 A3 3 0 0 1 27 6 Z" fill="var(--crema)" stroke="var(--ink)" strokeWidth="2" />
      {[8, 13, 18].map((x) => <circle key={x} cx={x} cy="10.5" r="1.6" fill="var(--mole)" />)}
      {[30, 35, 40].map((x) => <circle key={x} cx={x} cy="13" r="1.6" fill="var(--mole)" />)}
      <Taco x={24} y={40} s={1.15} />
    </svg>
  );
}

export function NetworkIcon(p: P) {
  const nodes: Array<[number, number]> = [[8, 9], [40, 8], [42, 40], [7, 38], [24, 5]];
  return (
    <svg {...base(p)}>
      {nodes.map(([x, y]) => <line key={`${x}${y}`} x1="24" y1="24" x2={x} y2={y} stroke="var(--crema)" strokeWidth="2.2" />)}
      <circle cx="24" cy="24" r="7" fill="var(--salsa)" stroke="var(--ink)" strokeWidth="2" />
      <Chip x={8} y={10} r={6} rot={-15} />
      <Chip x={42} y={40} r={6} rot={160} />
      <Chip x={7} y={38} r={6} rot={200} />
      <circle cx="40" cy="8" r="4.5" fill="var(--avocado-2)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="24" cy="5" r="3.5" fill="var(--avocado-2)" stroke="var(--ink)" strokeWidth="1.2" />
    </svg>
  );
}

export function MapIcon(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M6 12l12-5 12 5 12-5v29l-12 5-12-5-12 5z" fill="var(--masa)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 12l12-5v29l-12 5z M30 12l12-5v29l-12 5z" fill="var(--masa-2)" />
      <path d="M6 12l12-5 12 5 12-5v29l-12 5-12-5-12 5z" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <Chili x={25} y={22} s={1.3} />
    </svg>
  );
}

export function SettingsIcon(p: P) {
  const teeth = Array.from({ length: 8 }, (_, i) => (
    <rect key={i} x="17" y="4" width="6" height="7" rx="1" fill="var(--cheese-2)" stroke="var(--ink)" strokeWidth="1" transform={`rotate(${i * 45} 20 20)`} />
  ));
  return (
    <svg {...base(p)}>
      {teeth}
      <circle cx="20" cy="20" r="11" fill="var(--cheese)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4.5" fill="var(--mole)" />
      <ellipse cx="38" cy="14" rx="4" ry="5.5" transform="rotate(35 38 14)" fill="var(--crema)" stroke="var(--ink)" strokeWidth="1.5" />
      <line x1="35" y1="19" x2="25" y2="40" stroke="var(--crema)" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="35" y1="19" x2="25" y2="40" stroke="var(--ink)" strokeWidth="1" strokeLinecap="round" opacity=".5" />
      <Taco x={14} y={42} s={0.62} />
    </svg>
  );
}

export function WeatherTabIcon(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="17" cy="17" r="9" fill="var(--cheese)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M14 40 A9 9 0 0 1 15 22 A12 12 0 0 1 37 24 A8 8 0 0 1 38 40 Z" fill="var(--crema)" stroke="var(--ink)" strokeWidth="2.2" />
      <Chili x={27} y={32} s={1.1} />
    </svg>
  );
}

export function WeatherGlyph({ kind, ...p }: P & { kind: WeatherKind }) {
  const cloud = <path d="M12 38 A8 8 0 0 1 13 22 A11 11 0 0 1 34 23 A7.5 7.5 0 0 1 35 38 Z" fill="var(--crema)" stroke="var(--ink)" strokeWidth="2" />;
  const sun = (r = 9, cx = 24, cy = 22) => (
    <g>
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={cx - 1.5} y={cy - r - 7} width="3" height="5" rx="1.5" fill="var(--cheese)" transform={`rotate(${i * 45} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r} fill="var(--cheese)" stroke="var(--ink)" strokeWidth="1.5" />
    </g>
  );
  const drops = (color: string) => [14, 22, 30].map((x) => <line key={x} x1={x + 2} y1="40" x2={x} y2="46" stroke={color} strokeWidth="2.5" strokeLinecap="round" />);
  const body = {
    sun: sun(10),
    cloud: <>{sun(7, 32, 16)}{cloud}</>,
    rain: <>{cloud}{drops('var(--teal)')}</>,
    storm: <>{cloud}<path d="M24 36 L18 46 H24 L21 52 L31 40 H25 L28 36 Z" fill="var(--cheese)" stroke="var(--ink)" strokeWidth="1" /></>,
    snow: <>{cloud}{[14, 22, 30].map((x) => <circle key={x} cx={x + 1} cy="44" r="2.2" fill="#fff" stroke="var(--teal)" strokeWidth="1" />)}</>,
    fog: <>{cloud}{[40, 45].map((y) => <line key={y} x1="10" y1={y} x2="38" y2={y} stroke="var(--mole-2)" strokeWidth="2.5" strokeLinecap="round" opacity=".7" />)}</>,
    wind: [16, 24, 32].map((y, i) => <path key={y} d={`M6 ${y} H${30 + i * 4} a5 5 0 1 0 -5 -5`} fill="none" stroke="var(--mole-2)" strokeWidth="3" strokeLinecap="round" />),
    unknown: <>{cloud}<Chili x={25} y={30} s={1.3} /></>,
  }[kind];
  return <svg viewBox="0 0 48 52" aria-hidden focusable={false} {...p}>{body}</svg>;
}

export const BackIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const SendIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M3 11.5 L21 3 L14.5 21 L11.5 13 Z" fill="currentColor" /></svg>
);

export const BluetoothIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M7 7 L17 16 L12 21 V3 L17 8 L7 17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const UsbIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M12 2 V18 M12 18 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0 M12 13 L7 9 V6 M12 11 L17 8 V5 M5.5 4 H8.5 V7 H5.5 Z M17 3 l1.5 2.5 h-3 Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
);

export const RefreshIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M20 11 A8 8 0 0 0 5.5 6.5 L4 8 M4 13 A8 8 0 0 0 18.5 17.5 L20 16 M4 3 V8 H9 M20 21 V16 H15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const BroadcastIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><circle cx="12" cy="12" r="2.5" fill="currentColor" /><path d="M7.8 7.8 a6 6 0 0 0 0 8.4 M16.2 7.8 a6 6 0 0 1 0 8.4 M4.9 4.9 a10 10 0 0 0 0 14.2 M19.1 4.9 a10 10 0 0 1 0 14.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);

export const ShareIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><path d="M12 15 V3 M7 8 L12 3 L17 8 M5 13 V20 H19 V13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export const AddPersonIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...p}><circle cx="9" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2.2" /><path d="M2 21 a7 7 0 0 1 14 0 M19 8 V14 M16 11 H22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
);
