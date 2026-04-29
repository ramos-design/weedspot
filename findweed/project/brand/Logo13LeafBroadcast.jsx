// Logo 13 — Broadcast (vlny vlevo i vpravo)

function Logo13LeafBroadcast({ size = 240, color = "#1A1812", accent = "#B85A3C", label = true }) {
  const fs = size * 0.4;
  const icon = fs * 0.95;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.3 }}>
      <svg width={icon} height={icon} viewBox="0 0 80 80">
        <g fill="none" stroke={accent} strokeLinecap="round" strokeWidth="2.2">
          <path d="M 22 28 A 14 14 0 0 0 22 52" opacity="0.85" />
          <path d="M 14 22 A 22 22 0 0 0 14 58" opacity="0.5" />
          <path d="M 6 16 A 30 30 0 0 0 6 64" opacity="0.22" />
          <path d="M 58 28 A 14 14 0 0 1 58 52" opacity="0.85" />
          <path d="M 66 22 A 22 22 0 0 1 66 58" opacity="0.5" />
          <path d="M 74 16 A 30 30 0 0 1 74 64" opacity="0.22" />
        </g>
        <CannabisLeaf fill={accent} scale={0.85} x={40} y={42} />
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

window.Logo13LeafBroadcast = Logo13LeafBroadcast;
