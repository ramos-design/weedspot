// FindWeed — shared SVG primitives + UI atoms
function CannabisLeaf({ fill = "#C25E2C", scale = 1, x = 0, y = 0 }) {
  // 7-leaflet, centred at (x,y), reasonable scale 0.5–2
  const s = scale * 0.18;
  const path = `
    M 0 -42
    C -3 -36, -8 -28, -6 -18
    C -14 -22, -22 -24, -28 -22
    C -24 -14, -18 -8, -10 -6
    C -20 -4, -28 0, -32 6
    C -24 8, -16 8, -8 4
    C -14 10, -16 18, -12 24
    C -6 20, -2 14, 0 6
    C 2 14, 6 20, 12 24
    C 16 18, 14 10, 8 4
    C 16 8, 24 8, 32 6
    C 28 0, 20 -4, 10 -6
    C 18 -8, 24 -14, 28 -22
    C 22 -24, 14 -22, 6 -18
    C 8 -28, 3 -36, 0 -42
    Z
  `;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`}>
      <path d={path} fill={fill} />
      <line x1="0" y1="0" x2="0" y2="36" stroke={fill} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}
window.CannabisLeaf = CannabisLeaf;

function Icon({ name, size = 22, color = "currentColor", strokeWidth = 1.8 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search":   return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "map":      return <svg {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/></svg>;
    case "list":     return <svg {...p}><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>;
    case "home":     return <svg {...p}><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></svg>;
    case "compass":  return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="m15 9-2 6-4 0 2-6z" fill={color}/></svg>;
    case "bookmark": return <svg {...p}><path d="M6 4h12v17l-6-4-6 4z"/></svg>;
    case "user":     return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>;
    case "filter":   return <svg {...p}><path d="M3 5h18M6 12h12M10 19h4"/></svg>;
    case "clock":    return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "navigate": return <svg {...p}><path d="m3 11 18-8-8 18-2-8z"/></svg>;
    case "star":     return <svg {...p} fill={color}><path d="m12 3 2.6 6 6.4.5-4.9 4.3 1.5 6.2L12 16.8 6.4 20l1.5-6.2L3 9.5 9.4 9z" stroke="none"/></svg>;
    case "phone":    return <svg {...p}><path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>;
    case "globe":    return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case "share":    return <svg {...p}><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="m16 6-4-4-4 4M12 2v14"/></svg>;
    case "chevron-right": return <svg {...p}><path d="m9 6 6 6-6 6"/></svg>;
    case "chevron-left":  return <svg {...p}><path d="m15 6-6 6 6 6"/></svg>;
    case "chevron-down":  return <svg {...p}><path d="m6 9 6 6 6-6"/></svg>;
    case "x":        return <svg {...p}><path d="m6 6 12 12M18 6 6 18"/></svg>;
    case "plus":     return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case "check":    return <svg {...p}><path d="m5 12 5 5 9-11"/></svg>;
    case "camera":   return <svg {...p}><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>;
    case "leaf":     return <svg {...p}><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14M5 19l7-7"/></svg>;
    case "heart":    return <svg {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>;
    case "send":     return <svg {...p}><path d="m4 12 16-8-6 18-3-7-7-3z"/></svg>;
    case "menu-dots":return <svg {...p}><circle cx="6" cy="12" r="1.6" fill={color}/><circle cx="12" cy="12" r="1.6" fill={color}/><circle cx="18" cy="12" r="1.6" fill={color}/></svg>;
    default: return null;
  }
}
window.Icon = Icon;

// Tiny "photo" placeholder — colored block w/ subtle pattern, NOT a generated image
function SpotImg({ tone = "moss", style = {}, label }) {
  const t = window.WS_TOKENS;
  const palette = {
    moss:       { bg: t.colors.moss700, fg: t.colors.moss600, accent: t.colors.cream100 },
    terracotta: { bg: t.colors.terracotta600, fg: t.colors.terracotta700, accent: t.colors.cream100 },
    mustard:    { bg: t.colors.mustard500, fg: t.colors.mustard600, accent: t.colors.bark700 },
  };
  const p = palette[tone] || palette.moss;
  return (
    <div style={{ background: p.bg, position: "relative", overflow: "hidden", ...style }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
        <circle cx="80" cy="20" r="50" fill={p.fg} opacity="0.55" />
        <circle cx="22" cy="78" r="36" fill={p.fg} opacity="0.4" />
        <CannabisLeaf fill={p.accent} scale={0.8} x={50} y={56} />
      </svg>
      {label && <div style={{ position: "absolute", left: 10, bottom: 8, fontFamily: "'Fraunces', serif", fontSize: 11, fontWeight: 600, color: p.accent, opacity: 0.85, letterSpacing: "0.02em", textTransform: "uppercase" }}>{label}</div>}
    </div>
  );
}
window.SpotImg = SpotImg;
