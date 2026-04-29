// Logo 12 — Leaf Radar (silnější soustředné kruhy)

function Logo12LeafRadar({ size = 240, color = "#1A1812", accent = "#52693E", label = true }) {
  const fs = size * 0.4;
  const icon = fs * 0.92;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.3 }}>
      <svg width={icon} height={icon} viewBox="0 0 80 80">
        <g fill="none" stroke={accent} strokeLinecap="round">
          <circle cx="40" cy="40" r="36" strokeWidth="1.6" opacity="0.25" />
          <circle cx="40" cy="40" r="27" strokeWidth="1.8" opacity="0.45" />
          <circle cx="40" cy="40" r="18" strokeWidth="2" opacity="0.7" />
        </g>
        <CannabisLeaf fill={accent} scale={0.78} x={40} y={42} />
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
        }}>WeedSpot<span style={{ color: accent }}>.</span></div>
      )}
    </div>
  );
}

window.Logo12LeafRadar = Logo12LeafRadar;
