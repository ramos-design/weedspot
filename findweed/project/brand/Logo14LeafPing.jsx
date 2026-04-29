// Logo 14 — Ping (AirDrop-style nahoru z lístku)

function Logo14LeafPing({ size = 240, color = "#1A1812", accent = "#52693E", spark = "#C8902A", label = true }) {
  const fs = size * 0.4;
  const icon = fs * 0.95;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.3 }}>
      <svg width={icon} height={icon} viewBox="0 0 80 80">
        <g fill="none" stroke={accent} strokeLinecap="round" strokeWidth="2.4">
          <path d="M 32 22 A 10 10 0 0 1 48 22" opacity="0.95" />
          <path d="M 24 18 A 20 20 0 0 1 56 18" opacity="0.55" />
          <path d="M 16 14 A 30 30 0 0 1 64 14" opacity="0.22" />
        </g>
        <circle cx="40" cy="10" r="2.2" fill={spark} />
        <CannabisLeaf fill={accent} scale={0.78} x={40} y={52} />
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

window.Logo14LeafPing = Logo14LeafPing;
