// Logo 15 — Constellation (lístek + rozeseté tečky kolem)

function Logo15LeafConstellation({ size = 240, color = "#1A1812", accent = "#52693E", spark = "#B85A3C", label = true }) {
  const fs = size * 0.4;
  const icon = fs * 0.95;

  const ring = (r, count, offset, sizes) =>
    Array.from({ length: count }).map((_, i) => {
      const a = (i / count) * Math.PI * 2 + offset;
      return { x: 40 + Math.cos(a) * r, y: 40 + Math.sin(a) * r, sz: sizes[i % sizes.length] };
    });

  const dots = [
    ...ring(20, 8, 0.2, [1.2, 1.6]),
    ...ring(30, 10, 0.05, [1, 1.4]),
  ];

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.3 }}>
      <svg width={icon} height={icon} viewBox="0 0 80 80">
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.sz}
            fill={i % 7 === 3 ? spark : accent}
            opacity={i < 8 ? 0.85 : 0.45}
          />
        ))}
        <CannabisLeaf fill={accent} scale={0.7} x={40} y={42} />
      </svg>
      {label && (
        <div style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: 700,
          fontSize: fs,
          letterSpacing: "-0.02em",
          color,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}>WeedSpot<span style={{ color: spark }}>.</span></div>
      )}
    </div>
  );
}

window.Logo15LeafConstellation = Logo15LeafConstellation;
