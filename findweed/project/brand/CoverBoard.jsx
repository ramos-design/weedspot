// Hero / cover artboard — first impression of the brand
function CoverBoard() {
  const t = window.WS_TOKENS;
  return (
    <div style={{
      width: 1080,
      height: 720,
      background: `radial-gradient(ellipse at 80% 110%, ${t.colors.mustard300} 0%, ${t.colors.cream100} 45%, ${t.colors.cream50} 100%)`,
      padding: 56,
      fontFamily: t.fonts.body,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      {/* Decorative big pin in corner */}
      <svg
        width="520"
        height="520"
        viewBox="0 0 200 200"
        style={{ position: "absolute", right: -120, top: -100, opacity: 0.18 }}
      >
        <path
          d="M100 18 C148 18 174 56 174 92 C174 122 154 144 132 162 C118 174 108 184 100 192 C92 184 82 174 68 162 C46 144 26 122 26 92 C26 56 52 18 100 18 Z"
          fill={t.colors.terracotta600}
        />
      </svg>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: t.colors.bark600,
        }}>WeedSpot · Brand identity v0.1</div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 156,
          fontWeight: 700,
          letterSpacing: "-0.045em",
          lineHeight: 0.92,
          color: t.colors.ink,
          textWrap: "balance",
          maxWidth: 880,
        }}>
          Najdi <em style={{ color: t.colors.terracotta600, fontStyle: "italic", fontWeight: 600 }}>své místo</em>.
        </div>
        <div style={{
          fontFamily: t.fonts.body,
          fontSize: 22,
          color: t.colors.bark600,
          marginTop: 22,
          maxWidth: 680,
          lineHeight: 1.4,
        }}>
          Mapa dispenzářů, kaváren a restaurací, které mají rády trávu —
          od Prahy po Lisabon.
        </div>
      </div>

      <div style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: t.colors.bark600,
          lineHeight: 1.7,
        }}>
          1 / Logo směry<br/>
          2 / Barvy<br/>
          3 / Typografie<br/>
          4 / Voice
        </div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: t.colors.ink,
        }}>
          WeedSpot<span style={{ color: t.colors.terracotta600 }}>.</span>
        </div>
      </div>
    </div>
  );
}

window.CoverBoard = CoverBoard;
