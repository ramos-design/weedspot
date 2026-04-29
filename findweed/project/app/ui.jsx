// WeedSpot — Brand UI primitives: Logo, Leaf, Icons

function WSLeaf({ size = 24, color = "#B85A3C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: "block" }}>
      <g fill={color}>
        <path d="M20 4 C 20.6 10, 21 14, 21 18 L 19 18 C 19 14, 19.4 10, 20 4 Z" />
        <path d="M20 8 C 24 11, 26.5 14, 27.5 18 L 22 19 C 21 15, 20.5 12, 20 8 Z" transform="rotate(28 20 14)" />
        <path d="M20 8 C 16 11, 13.5 14, 12.5 18 L 18 19 C 19 15, 19.5 12, 20 8 Z" transform="rotate(-28 20 14)" />
        <path d="M20 12 C 26 16, 29 19, 30 24 L 22 24 C 21 19, 20.5 15, 20 12 Z" transform="rotate(55 20 18)" />
        <path d="M20 12 C 14 16, 11 19, 10 24 L 18 24 C 19 19, 19.5 15, 20 12 Z" transform="rotate(-55 20 18)" />
        <rect x="19" y="22" width="2" height="14" rx="1" />
      </g>
    </svg>
  );
}

function WSLogo({ size = 22, color, accent, label = true, theme }) {
  const t = theme || window.WS_THEMES.light;
  const c = color || t.text;
  const a = accent || t.accent;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: size * 0.45 }}>
      <svg width={size * 2.5} height={size * 1.7} viewBox="0 0 110 80">
        <path d="M 18 18 C 8 32, 8 48, 18 62" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 32 26 C 26 34, 26 46, 32 54" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 78 26 C 84 34, 84 46, 78 54" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 92 18 C 102 32, 102 48, 92 62" stroke={c} strokeWidth="3" fill="none" strokeLinecap="round" />
        <g transform="translate(36, 24) scale(0.95)">
          <WSLeafPath fill={a} />
        </g>
      </svg>
      {label && (
        <div style={{
          fontFamily: window.WS_FONTS.display,
          fontWeight: 800, fontSize: size, letterSpacing: "-0.025em",
          color: c, lineHeight: 1, whiteSpace: "nowrap",
        }}>WeedSpot<span style={{ color: a }}>.</span></div>
      )}
    </div>
  );
}

function WSLeafPath({ fill }) {
  return (
    <g fill={fill} transform="scale(0.85)">
      <path d="M20 4 C 20.6 10, 21 14, 21 18 L 19 18 C 19 14, 19.4 10, 20 4 Z" />
      <path d="M20 8 C 24 11, 26.5 14, 27.5 18 L 22 19 C 21 15, 20.5 12, 20 8 Z" transform="rotate(28 20 14)" />
      <path d="M20 8 C 16 11, 13.5 14, 12.5 18 L 18 19 C 19 15, 19.5 12, 20 8 Z" transform="rotate(-28 20 14)" />
      <path d="M20 12 C 26 16, 29 19, 30 24 L 22 24 C 21 19, 20.5 15, 20 12 Z" transform="rotate(55 20 18)" />
      <path d="M20 12 C 14 16, 11 19, 10 24 L 18 24 C 19 19, 19.5 15, 20 12 Z" transform="rotate(-55 20 18)" />
      <rect x="19" y="22" width="2" height="14" rx="1" />
    </g>
  );
}

// Minimal stroke icons
function WSIcon({ name, size = 22, color = "currentColor", fill = false }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search":   return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "map":      return <svg {...props}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>;
    case "home":     return <svg {...props}><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z"/></svg>;
    case "heart":    return fill ? <svg {...props} fill={color}><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg> : <svg {...props}><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg>;
    case "user":     return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case "filter":   return <svg {...props}><path d="M3 5h18M6 12h12M10 19h4"/></svg>;
    case "star":     return fill ? <svg {...props} fill={color}><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.6L2.6 9.8l6.5-.9Z"/></svg> : <svg {...props}><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.6L2.6 9.8l6.5-.9Z"/></svg>;
    case "chevron":  return <svg {...props}><path d="m9 6 6 6-6 6"/></svg>;
    case "back":     return <svg {...props}><path d="m15 6-6 6 6 6"/></svg>;
    case "close":    return <svg {...props}><path d="M6 6 18 18M18 6 6 18"/></svg>;
    case "share":    return <svg {...props}><path d="M12 3v13M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>;
    case "navigate": return <svg {...props}><path d="m3 11 18-7-7 18-2-8Z"/></svg>;
    case "clock":    return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "phone":    return <svg {...props}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>;
    case "globe":    return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case "plus":     return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "leaf":     return <svg {...props}><path d="M20 4c0 8-4 14-12 16 0-8 4-14 12-16Z"/><path d="M8 20 20 4"/></svg>;
    case "drop":     return <svg {...props}><path d="M12 3s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12Z"/></svg>;
    case "cup":      return <svg {...props}><path d="M5 8h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2M5 21h14"/></svg>;
    case "fork":     return <svg {...props}><path d="M7 3v6a2 2 0 0 0 4 0V3M9 11v10M17 3c-2 1-3 3-3 6s1 4 3 4v8"/></svg>;
    case "glass":    return <svg {...props}><path d="M5 4h14l-2 9a5 5 0 0 1-10 0L5 4ZM12 18v3M9 21h6"/></svg>;
    case "smoke":    return <svg {...props}><path d="M3 17h13M18 17h3M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2"/></svg>;
    case "ticket":   return <svg {...props}><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"/><path d="M14 6v12" strokeDasharray="2 2"/></svg>;
    case "list":     return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case "check":    return <svg {...props}><path d="m5 12 5 5L20 7"/></svg>;
    case "edit":     return <svg {...props}><path d="M4 20h4l10-10-4-4L4 16v4ZM14 6l4 4"/></svg>;
    case "grid":     return <svg {...props}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>;
    case "settings": return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.3l2-1.5-2-3.4-2.4.9a7 7 0 0 0-2.2-1.3L13.8 3h-3.6l-.5 2.4a7 7 0 0 0-2.2 1.3l-2.4-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .9.1 1.3l-2 1.5 2 3.4 2.4-.9a7 7 0 0 0 2.2 1.3l.5 2.4h3.6l.5-2.4a7 7 0 0 0 2.2-1.3l2.4.9 2-3.4-2-1.5c.1-.4.1-.9.1-1.3Z"/></svg>;
    case "camera":   return <svg {...props}><path d="M4 8h3l2-3h6l2 3h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="4"/></svg>;
    case "pin":      return <svg {...props}><path d="M12 21s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    default: return null;
  }
}

// Category icon renders the data icon name
function WSCatIcon({ catId, size = 22, color = "currentColor" }) {
  const cat = window.WS_DATA.categories.find(c => c.id === catId);
  return cat ? <WSIcon name={cat.icon} size={size} color={color} /> : null;
}

Object.assign(window, { WSLeaf, WSLogo, WSLeafPath, WSIcon, WSCatIcon });
