// Realistic stylized cannabis leaf — 7 leaflets, ROUNDED (not jagged), central spine
// Smooth curved leaflets with soft serration suggested via curves, not sharp points

function CannabisLeaf({ fill = "#52693E", vein, scale = 1, x = 40, y = 40 }) {
  const v = vein || fill;

  const leaflets = [
    { angle:   0, length: 22, width: 4.4 }, // top center (longest, widest)
    { angle: -40, length: 18, width: 3.8 },
    { angle:  40, length: 18, width: 3.8 },
    { angle: -75, length: 13, width: 3.2 },
    { angle:  75, length: 13, width: 3.2 },
    { angle:-115, length:  9, width: 2.6 },
    { angle: 115, length:  9, width: 2.6 },
  ];

  // Smooth, rounded leaflet — pointed almond shape using cubic Bezier curves
  // Wider belly, rounded shoulders, soft tip
  const leaflet = (len, w) => {
    const tip = -len;
    const base = 2;
    // Wide belly at ~30% from base, smooth curve up to tip
    return [
      `M 0 ${base}`,
      // right side: from base, bulge out, then curve in toward tip
      `C ${w * 1.3} ${base - len * 0.1}, ${w * 1.1} ${base - len * 0.55}, ${w * 0.4} ${base - len * 0.85}`,
      `C ${w * 0.2} ${base - len * 0.95}, ${w * 0.05} ${tip + 1}, 0 ${tip}`,
      // left side mirrored
      `C ${-w * 0.05} ${tip + 1}, ${-w * 0.2} ${base - len * 0.95}, ${-w * 0.4} ${base - len * 0.85}`,
      `C ${-w * 1.1} ${base - len * 0.55}, ${-w * 1.3} ${base - len * 0.1}, 0 ${base}`,
      "Z",
    ].join(" ");
  };

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {leaflets.map((lf, i) => (
        <g key={i} transform={`rotate(${lf.angle})`}>
          <path d={leaflet(lf.length, lf.width)} fill={fill} />
          <line x1="0" y1="1" x2="0" y2={-lf.length + 1} stroke={v} strokeWidth="0.5" opacity="0.3" />
        </g>
      ))}
      <rect x="-0.7" y="2" width="1.4" height="6" rx="0.7" fill={fill} />
    </g>
  );
}

window.CannabisLeaf = CannabisLeaf;
