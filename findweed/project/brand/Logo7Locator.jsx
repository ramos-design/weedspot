// Logo 7 — Wordmark + leaf vyzařující signál (klid, balanc)

function Logo7Locator({ size = 240, color = "#1A1812", accent = "#B85A3C", label = true }) {
  const fs = size * 0.4;
  const icon = fs * 0.95;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.3 }}>
      <svg width={icon} height={icon} viewBox="0 0 80 80">
        <g fill="none" stroke={accent} strokeLinecap="round">
          <circle cx="40" cy="40" r="36" strokeWidth="1.6" opacity="0.22" />
          <circle cx="40" cy="40" r="28" strokeWidth="1.8" opacity="0.42" />
          <circle cx="40" cy="40" r="20" strokeWidth="2" opacity="0.65" />
        </g>
        <CannabisLeaf fill={accent} scale={0.9} x={40} y={42} />
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

window.Logo7Locator = Logo7Locator;
