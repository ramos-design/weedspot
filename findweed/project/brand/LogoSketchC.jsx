// Logo C — Cleaner, modernější varianta: jen jedny závorky, tlustší
// Méně skiced, víc geometric

function LogoSketchC({ size = 240, color = "#1A1812", label = true }) {
  const fs = size * 0.46;
  const icon = fs * 0.95;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.22 }}>
      <svg width={icon} height={icon * 0.78} viewBox="0 0 90 70" style={{ overflow: "visible" }}>
        {/* Single thick parens */}
        <path
          d="M 22 14 C 10 28, 10 42, 22 56"
          stroke={color}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 68 14 C 80 28, 80 42, 68 56"
          stroke={color}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
        <CannabisLeaf fill={color} scale={0.95} x={45} y={37} />
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

window.LogoSketchC = LogoSketchC;
