// WeedSpot — Stylized minimap SVG
// Renders a Prague-ish abstract map with streets, blocks, river, park

function WSMap({ width = 393, height = 360, theme, spots = [], activeId, onPin, showUser = true, scale = 1 }) {
  const t = theme;
  // Fixed seed paths (deterministic, hand-tuned)
  const streets = [
    "M 0 80 Q 80 70, 160 90 T 393 100",
    "M 0 160 Q 100 150, 200 170 T 393 175",
    "M 0 240 Q 120 220, 240 250 T 393 260",
    "M 60 0 Q 70 100, 90 220 T 110 360",
    "M 180 0 Q 200 120, 220 240 T 240 360",
    "M 300 0 Q 310 120, 330 240 T 350 360",
  ];
  const blocks = [
    { x: 18,  y: 28,  w: 44, h: 44 }, { x: 80,  y: 30,  w: 90, h: 38 }, { x: 200, y: 24, w: 90, h: 46 }, { x: 310, y: 30, w: 64, h: 40 },
    { x: 18,  y: 112, w: 36, h: 38 }, { x: 76,  y: 108, w: 92, h: 42 }, { x: 200, y: 110, w: 88, h: 46 }, { x: 308, y: 112, w: 70, h: 38 },
    { x: 18,  y: 192, w: 38, h: 36 }, { x: 84,  y: 184, w: 80, h: 50 }, { x: 200, y: 188, w: 80, h: 48 }, { x: 312, y: 192, w: 64, h: 40 },
    { x: 18,  y: 280, w: 36, h: 60 }, { x: 84,  y: 282, w: 78, h: 56 }, { x: 200, y: 280, w: 80, h: 60 }, { x: 312, y: 286, w: 60, h: 56 },
  ];

  return (
    <svg width={width} height={height} viewBox={`0 0 393 360`}
         style={{ display: "block", background: t.map }}>
      {/* base */}
      <rect width="393" height="360" fill={t.map} />

      {/* park splotches */}
      <g fill={t.mapInk} opacity="0.45">
        <ellipse cx="120" cy="135" rx="46" ry="30" />
        <ellipse cx="290" cy="220" rx="55" ry="34" />
        <ellipse cx="60"  cy="300" rx="32" ry="22" />
      </g>

      {/* river */}
      <path d="M -10 200 C 100 230, 200 180, 280 220 S 410 240, 410 250 L 410 270 C 320 250, 200 290, 100 260 S -10 240, -10 230 Z"
            fill={t.mapInk} opacity="0.55" />

      {/* blocks */}
      <g fill={t.surface2} opacity="0.65">
        {blocks.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="3" />
        ))}
      </g>

      {/* streets */}
      <g stroke={t.surface} strokeWidth="3" fill="none" opacity="0.8">
        {streets.map((d, i) => <path key={i} d={d} />)}
      </g>
      <g stroke={t.surface2} strokeWidth="1" fill="none" opacity="0.7">
        {streets.map((d, i) => <path key={i + "th"} d={d} strokeDasharray="2 4" />)}
      </g>

      {/* labels — subtle */}
      <g fill={t.textFaint} fontFamily={window.WS_FONTS.body} fontSize="9" letterSpacing="0.06em" opacity="0.55">
        <text x="22" y="22">HOLEŠOVICE</text>
        <text x="200" y="22">LETNÁ</text>
        <text x="22" y="178">PRAHA 1</text>
        <text x="220" y="178">VINOHRADY</text>
        <text x="22" y="270">SMÍCHOV</text>
        <text x="220" y="270">VRŠOVICE</text>
      </g>

      {/* user location */}
      {showUser && (
        <g transform="translate(196.5, 180)">
          <circle r="22" fill={t.accent} opacity="0.12" />
          <circle r="14" fill={t.accent} opacity="0.22" />
          <circle r="6"  fill={t.accent} stroke={t.surface} strokeWidth="2.5" />
        </g>
      )}

      {/* pins */}
      {spots.map((s) => {
        const cat = window.WS_DATA.categories.find(c => c.id === s.cat);
        const x = s.x * 393;
        const y = s.y * 360;
        const active = s.id === activeId;
        return (
          <g key={s.id} transform={`translate(${x}, ${y})`} style={{ cursor: "pointer" }} onClick={() => onPin && onPin(s)}>
            {active && <circle r="22" fill={cat.color} opacity="0.18" />}
            <g transform={`translate(0, ${active ? -2 : 0})`}>
              <path d={`M 0 -22 C -10 -22, -16 -14, -16 -6 C -16 4, 0 14, 0 14 C 0 14, 16 4, 16 -6 C 16 -14, 10 -22, 0 -22 Z`}
                    fill={cat.color} stroke={t.surface} strokeWidth="2" />
              <circle cy="-8" r="5" fill={t.surface} opacity="0.9" />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

window.WSMap = WSMap;
