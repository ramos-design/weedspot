// FindWeed — Logo B (parens + accent), inline component for app use
function AppLogo({ size = 18, color, accent }) {
  const t = window.WS_TOKENS;
  const c = color || t.colors.ink;
  const a = accent || t.colors.terracotta600;
  const fs = size;
  const icon = fs * 1.3;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: fs * 0.18, lineHeight: 1 }}>
      <svg width={icon} height={icon * 0.7} viewBox="0 0 110 80" style={{ overflow: "visible", flexShrink: 0 }}>
        <path d="M 18 18 C 8 32, 8 48, 18 62" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 32 26 C 26 34, 26 46, 32 54" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 78 26 C 84 34, 84 46, 78 54" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 92 18 C 102 32, 102 48, 92 62" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <CannabisLeaf fill={a} scale={0.85} x={55} y={42} />
      </svg>
      <span style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontWeight: 800,
        fontSize: fs,
        letterSpacing: "-0.025em",
        color: c,
        whiteSpace: "nowrap",
      }}>FindWeed<span style={{ color: a }}>.</span></span>
    </div>
  );
}
window.AppLogo = AppLogo;
