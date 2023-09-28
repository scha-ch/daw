import type { Frequency } from "tone/build/esm/core/type/Units";

type TVerdisAScale = { [key: string]: { freq: Frequency; waveLength: number } };

const scale: TVerdisAScale = {
  C0: { freq: 16.05, waveLength: 2148.96 },
  "C#0": { freq: 17.01, waveLength: 2028.35 },
  D0: { freq: 18.02, waveLength: 1914.5 },
  "D#0": { freq: 19.09, waveLength: 1807.05 },
  E0: { freq: 20.23, waveLength: 1705.63 },
  F0: { freq: 21.43, waveLength: 1609.9 },
  "F#0": { freq: 22.7, waveLength: 1519.54 },
  G0: { freq: 24.05, waveLength: 1434.26 },
  "G#0": { freq: 25.48, waveLength: 1353.76 },
  A0: { freq: 27.0, waveLength: 1277.78 },
  "A#0": { freq: 28.61, waveLength: 1206.06 },
  B0: { freq: 30.31, waveLength: 1138.37 },
  C1: { freq: 32.11, waveLength: 1074.48 },
  "C#1": { freq: 34.02, waveLength: 1014.17 },
  D1: { freq: 36.04, waveLength: 957.25 },
  "D#1": { freq: 38.18, waveLength: 903.53 },
  E1: { freq: 40.45, waveLength: 852.81 },
  F1: { freq: 42.86, waveLength: 804.95 },
  "F#1": { freq: 45.41, waveLength: 759.77 },
  G1: { freq: 48.11, waveLength: 717.13 },
  "G#1": { freq: 50.97, waveLength: 676.88 },
  A1: { freq: 54.0, waveLength: 638.89 },
  "A#1": { freq: 57.21, waveLength: 603.03 },
  B1: { freq: 60.61, waveLength: 569.19 },
  C2: { freq: 64.22, waveLength: 537.24 },
  "C#2": { freq: 68.04, waveLength: 507.09 },
  D2: { freq: 72.08, waveLength: 478.63 },
  "D#2": { freq: 76.37, waveLength: 451.76 },
  E2: { freq: 80.91, waveLength: 426.41 },
  F2: { freq: 85.72, waveLength: 402.47 },
  "F#2": { freq: 90.82, waveLength: 379.89 },
  G2: { freq: 96.22, waveLength: 358.56 },
  "G#2": { freq: 101.94, waveLength: 338.44 },
  A2: { freq: 108.0, waveLength: 319.44 },
  "A#2": { freq: 114.42, waveLength: 301.52 },
  B2: { freq: 121.23, waveLength: 284.59 },
  C3: { freq: 128.43, waveLength: 268.62 },
  "C#3": { freq: 136.07, waveLength: 253.54 },
  D3: { freq: 144.16, waveLength: 239.31 },
  "D#3": { freq: 152.74, waveLength: 225.88 },
  E3: { freq: 161.82, waveLength: 213.2 },
  F3: { freq: 171.44, waveLength: 201.24 },
  "F#3": { freq: 181.63, waveLength: 189.94 },
  G3: { freq: 192.43, waveLength: 179.28 },
  "G#3": { freq: 203.88, waveLength: 169.22 },
  A3: { freq: 216.0, waveLength: 159.72 },
  "A#3": { freq: 228.84, waveLength: 150.76 },
  B3: { freq: 242.45, waveLength: 142.3 },
  C4: { freq: 256.87, waveLength: 134.31 },
  "C#4": { freq: 272.14, waveLength: 126.77 },
  D4: { freq: 288.33, waveLength: 119.66 },
  "D#4": { freq: 305.47, waveLength: 112.94 },
  E4: { freq: 323.63, waveLength: 106.6 },
  F4: { freq: 342.88, waveLength: 100.62 },
  "F#4": { freq: 363.27, waveLength: 94.97 },
  G4: { freq: 384.87, waveLength: 89.64 },
  "G#4": { freq: 407.75, waveLength: 84.61 },
  A4: { freq: 432.0, waveLength: 79.86 },
  "A#4": { freq: 457.69, waveLength: 75.38 },
  B4: { freq: 484.9, waveLength: 71.15 },
  C5: { freq: 513.74, waveLength: 67.15 },
  "C#5": { freq: 544.29, waveLength: 63.39 },
  D5: { freq: 576.65, waveLength: 59.83 },
  "D#5": { freq: 610.94, waveLength: 56.47 },
  E5: { freq: 647.27, waveLength: 53.3 },
  F5: { freq: 685.76, waveLength: 50.31 },
  "F#5": { freq: 726.53, waveLength: 47.49 },
  G5: { freq: 769.74, waveLength: 44.82 },
  "G#5": { freq: 815.51, waveLength: 42.3 },
  A5: { freq: 864.0, waveLength: 39.93 },
  "A#5": { freq: 915.38, waveLength: 37.69 },
  B5: { freq: 969.81, waveLength: 35.57 },
  C6: { freq: 1027.47, waveLength: 33.58 },
  "C#6": { freq: 1088.57, waveLength: 31.69 },
  D6: { freq: 1153.3, waveLength: 29.91 },
  "D#6": { freq: 1221.88, waveLength: 28.24 },
  E6: { freq: 1294.54, waveLength: 26.65 },
  F6: { freq: 1371.51, waveLength: 25.15 },
  "F#6": { freq: 1453.07, waveLength: 23.74 },
  G6: { freq: 1539.47, waveLength: 22.41 },
  "G#6": { freq: 1631.01, waveLength: 21.15 },
  A6: { freq: 1728.0, waveLength: 19.97 },
  "A#6": { freq: 1830.75, waveLength: 18.84 },
  B6: { freq: 1939.61, waveLength: 17.79 },
  C7: { freq: 2054.95, waveLength: 16.79 },
  "C#7": { freq: 2177.14, waveLength: 15.85 },
  D7: { freq: 2306.6, waveLength: 14.96 },
  "D#7": { freq: 2443.76, waveLength: 14.12 },
  E7: { freq: 2589.07, waveLength: 13.33 },
  F7: { freq: 2743.03, waveLength: 12.58 },
  "F#7": { freq: 2906.14, waveLength: 11.87 },
  G7: { freq: 3078.95, waveLength: 11.21 },
  "G#7": { freq: 3262.03, waveLength: 10.58 },
  A7: { freq: 3456.0, waveLength: 9.98 },
  "A#7": { freq: 3661.5, waveLength: 9.42 },
  B7: { freq: 3879.23, waveLength: 8.89 },
  C8: { freq: 4109.9, waveLength: 8.39 },
  "C#8": { freq: 4354.29, waveLength: 7.92 },
  D8: { freq: 4613.21, waveLength: 7.48 },
  "D#8": { freq: 4887.52, waveLength: 7.06 },
  E8: { freq: 5178.15, waveLength: 6.66 },
  F8: { freq: 5486.06, waveLength: 6.29 },
  "F#8": { freq: 5812.28, waveLength: 5.94 },
  G8: { freq: 6157.89, waveLength: 5.6 },
  "G#8": { freq: 6524.06, waveLength: 5.29 },
  A8: { freq: 6912.0, waveLength: 4.99 },
  "A#8": { freq: 7323.01, waveLength: 4.71 },
  B8: { freq: 7758.46, waveLength: 4.45 },
};

export default function useVerdisA() {
  const getFrequency = (key: keyof TVerdisAScale) => scale[key].freq;
  const getWaveLength = (key: keyof TVerdisAScale) => scale[key].waveLength;

  return { getFrequency, getWaveLength };
}
