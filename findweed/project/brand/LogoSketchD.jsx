// Logo D — Sketched signal lines místo závorek (jako wifi vlny po stranách)
// Drží myšlenku "list vyzařuje signál" ale odlišný vizuál

function LogoSketchD({ size = 240, color = "#1A1812", accent = "#52693E", label = true }) {
  const fs = size * 0.46;
  const icon = fs * 1.05;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.22 }}>
      <svg width={icon} height={icon * 0.72} viewBox="0 0 100 72" style={{ overflow: "visible" }}>
        {/* Hand-drawn signal lines, 3 each side, varying length */}
        <g stroke={color} strokeWidth="2.6" strokeLinecap="round" fill="none">
          <line x1="14" y1="36" x2="22" y2="36" />
          <line x1="6" y1="28" x2="18" y2="28" opacity="0.6" />
          <line x1="6" y1="44" x2="18" y2="44" opacity="0.6" />
          <line x1="78" y1="36" x2="86" y2="36" />
          <line x1="82" y1="28" x2="94" y2="28" opacity="0.6" />
          <line x1="82" y1="44" x2="94" y2="44" opacity="0.6" />
        </g>
        <CannabisLeaf fill={accent} scale={1} x={50} y={38} />
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
        }}>WeedSpot</div>
      )}
    </div>
  );
}

window.LogoSketchD = LogoSketchD;
