// Logo B — Stejný základ jako A, ale list a tečka v terracotta
// Decentní akcent zachovává brand paletu

function LogoSketchB({ size = 240, color = "#1A1812", accent = "#B85A3C", label = true }) {
  const fs = size * 0.46;
  const icon = fs * 1.1;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.22 }}>
      <svg width={icon} height={icon * 0.7} viewBox="0 0 110 80" style={{ overflow: "visible" }}>
        <path d="M 18 18 C 8 32, 8 48, 18 62" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 32 26 C 26 34, 26 46, 32 54" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 78 26 C 84 34, 84 46, 78 54" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 92 18 C 102 32, 102 48, 92 62" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        <CannabisLeaf fill={accent} scale={0.85} x={55} y={42} />
      </svg>
      {label && (
        <div style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: 800,
          fontSize: fs,
          letterSpacing: "-0.025em",
          color,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}>WeedSpot<span style={{ color: accent }}>.</span></div>
      )}
    </div>
  );
}

window.LogoSketchB = LogoSketchB;
