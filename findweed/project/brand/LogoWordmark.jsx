// Shared wordmark — matches "WeedSpot." treatment from CoverBoard
// Fraunces 600, -0.02em tracking, optional accent period

function LogoWordmark({ size = 96, color = "#1A1812", periodColor = "#B85A3C", showPeriod = false }) {
  return (
    <div style={{
      fontFamily: "'Fraunces', Georgia, serif",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "-0.02em",
      color,
      lineHeight: 1,
      whiteSpace: "nowrap",
    }}>
      WeedSpot{showPeriod && <span style={{ color: periodColor }}>.</span>}
    </div>
  );
}

window.LogoWordmark = LogoWordmark;
