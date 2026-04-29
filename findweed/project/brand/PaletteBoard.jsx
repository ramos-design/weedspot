// Color palette artboard
function PaletteBoard() {
  const t = window.WS_TOKENS;

  const Swatch = ({ name, hex, role, light }) => (
    <div style={{
      background: hex,
      borderRadius: 14,
      padding: 24,
      height: 200,
      color: light ? t.colors.ink : t.colors.cream50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <div style={{
        fontFamily: t.fonts.mono,
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        opacity: 0.75,
      }}>{role}</div>
      <div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}>{name}</div>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 13,
          marginTop: 6,
          opacity: 0.85,
        }}>{hex.toUpperCase()}</div>
      </div>
    </div>
  );

  const Mini = ({ hex, label, light }) => (
    <div style={{
      background: hex,
      borderRadius: 8,
      height: 64,
      padding: "8px 10px",
      color: light ? t.colors.ink : t.colors.cream50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: t.fonts.mono,
      fontSize: 10,
    }}>
      <div style={{ opacity: 0.8, letterSpacing: "0.08em" }}>{label}</div>
      <div style={{ opacity: 0.95 }}>{hex.toUpperCase()}</div>
    </div>
  );

  return (
    <div style={{
      background: t.colors.cream50,
      padding: 48,
      width: 1080,
      fontFamily: t.fonts.body,
    }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: t.colors.bark600,
          marginBottom: 8,
        }}>Color · Earthy & warm</div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: t.colors.ink,
          lineHeight: 1.05,
          maxWidth: 700,
        }}>
          Mech, hořčice, terakota — tóny sobotního dopoledne v kavárně,
          ne neonový dispenzář.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}>
        <Swatch name="Moss" hex={t.colors.moss600} role="Primary" />
        <Swatch name="Mustard" hex={t.colors.mustard600} role="Accent · warm" />
        <Swatch name="Terracotta" hex={t.colors.terracotta600} role="Accent · spot" />
        <Swatch name="Cream" hex={t.colors.cream100} role="Surface" light />
      </div>

      <div style={{
        fontFamily: t.fonts.mono,
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: t.colors.bark600,
        marginBottom: 10,
      }}>Scale</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginBottom: 14 }}>
        <Mini hex={t.colors.moss900} label="moss/900" />
        <Mini hex={t.colors.moss800} label="moss/800" />
        <Mini hex={t.colors.moss700} label="moss/700" />
        <Mini hex={t.colors.moss600} label="moss/600" />
        <Mini hex={t.colors.moss500} label="moss/500" />
        <Mini hex={t.colors.moss400} label="moss/400" light />
        <Mini hex={t.colors.moss300} label="moss/300" light />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, marginBottom: 14 }}>
        <Mini hex={t.colors.mustard700} label="mustard/700" />
        <Mini hex={t.colors.mustard600} label="mustard/600" />
        <Mini hex={t.colors.mustard500} label="mustard/500" light />
        <Mini hex={t.colors.mustard300} label="mustard/300" light />
        <Mini hex={t.colors.terracotta700} label="terracotta/700" />
        <Mini hex={t.colors.terracotta600} label="terracotta/600" />
        <Mini hex={t.colors.terracotta500} label="terracotta/500" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
        <Mini hex={t.colors.cream50} label="cream/50" light />
        <Mini hex={t.colors.cream100} label="cream/100" light />
        <Mini hex={t.colors.cream200} label="cream/200" light />
        <Mini hex={t.colors.sand300} label="sand/300" light />
        <Mini hex={t.colors.bark600} label="bark/600" />
        <Mini hex={t.colors.bark800} label="bark/800" />
        <Mini hex={t.colors.ink} label="ink" />
      </div>
    </div>
  );
}

window.PaletteBoard = PaletteBoard;
