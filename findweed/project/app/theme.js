// WeedSpot — App theme tokens & helpers
// Two themes: light (cream-based) + dark (moss-based)

window.WS_THEMES = {
  light: {
    bg:        "#F7F2E7",   // cream/50
    surface:   "#FFFFFF",
    surface2:  "#EFE8D6",   // cream/100
    border:    "#E4D9BD",   // cream/200
    text:      "#1A1812",
    textMuted: "#5C4F3A",
    textFaint: "#8C7E64",
    primary:   "#52693E",   // moss
    primaryBg: "#3D5132",
    accent:    "#B85A3C",   // terracotta
    accent2:   "#C8902A",   // mustard
    success:   "#52693E",
    danger:    "#94422A",
    map:       "#E4D9BD",
    mapInk:    "#9AAE6E",
    sheet:     "#FFFFFF",
    nav:       "rgba(255, 251, 240, 0.92)",
  },
  dark: {
    bg:        "#1F2A1C",   // moss/900
    surface:   "#2C3A26",   // moss/800
    surface2:  "#3D5132",   // moss/700
    border:    "rgba(199, 213, 150, 0.16)",
    text:      "#F7F2E7",
    textMuted: "#C4D196",
    textFaint: "#9AAE6E",
    primary:   "#9AAE6E",
    primaryBg: "#52693E",
    accent:    "#D17251",
    accent2:   "#E0A93A",
    success:   "#9AAE6E",
    danger:    "#D17251",
    map:       "#1A2417",
    mapInk:    "#3D5132",
    sheet:     "#2C3A26",
    nav:       "rgba(31, 42, 28, 0.92)",
  },
};

window.WS_FONTS = {
  display: "'Fraunces', Georgia, serif",
  body:    "'DM Sans', system-ui, sans-serif",
  mono:    "'JetBrains Mono', monospace",
};

window.useWSTheme = function(mode) {
  return window.WS_THEMES[mode] || window.WS_THEMES.light;
};
