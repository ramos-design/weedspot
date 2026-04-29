// Lock-up artboard — horizontal logos on light + dark + accent backgrounds
function LogoLockup({ Logo, name, tagline, size = 260 }) {
  const t = window.WS_TOKENS;
  const card = (bg, props) => (
    <div style={{
      background: bg,
      borderRadius: 16,
      padding: "44px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 200,
    }}>
      <Logo size={size} {...props} />
    </div>
  );
  return (
    <div style={{
      background: t.colors.cream50,
      padding: 40,
      width: 1080,
      fontFamily: t.fonts.body,
    }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: t.colors.bark600,
          marginBottom: 6,
        }}>{name}</div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: t.colors.ink,
          lineHeight: 1.15,
          textWrap: "pretty",
        }}>{tagline}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {card(t.colors.cream100, {})}
        {card(t.colors.moss900, { color: t.colors.cream50, accent: t.colors.mustard500, spark: t.colors.mustard300 })}
        {card(t.colors.terracotta600, { color: t.colors.cream50, accent: t.colors.cream50, spark: t.colors.mustard300 })}
      </div>
    </div>
  );
}

window.LogoLockup = LogoLockup;
