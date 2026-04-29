// Typography artboard
function TypographyBoard() {
  const t = window.WS_TOKENS;

  const Spec = ({ label, value }) => (
    <div style={{
      fontFamily: t.fonts.mono,
      fontSize: 10,
      letterSpacing: "0.1em",
      color: t.colors.bark600,
    }}>
      <span style={{ opacity: 0.7 }}>{label}</span> <span style={{ opacity: 0.95 }}>{value}</span>
    </div>
  );

  return (
    <div style={{
      background: t.colors.cream50,
      padding: 48,
      width: 1080,
      fontFamily: t.fonts.body,
      color: t.colors.ink,
    }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: t.colors.bark600,
          marginBottom: 8,
        }}>Type · Display + Sans</div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.05,
          maxWidth: 720,
        }}>
          Fraunces dělá tu lifestyle vřelost, DM Sans dělá pohodlí v UI.
        </div>
      </div>

      {/* Display sample */}
      <div style={{
        background: t.colors.cream100,
        borderRadius: 16,
        padding: 36,
        marginBottom: 18,
      }}>
        <Spec label="DISPLAY" value="Fraunces · 600/700 · soft optical · -2% tracking" />
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: "-0.035em",
          lineHeight: 1,
          marginTop: 14,
        }}>
          Najdi své místo.
        </div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 56,
          fontWeight: 500,
          fontStyle: "italic",
          letterSpacing: "-0.02em",
          color: t.colors.moss700,
          marginTop: 10,
          lineHeight: 1.05,
        }}>
          dispenzáře · kavárny · komunita
        </div>
      </div>

      {/* Body sample */}
      <div style={{
        background: t.colors.cream100,
        borderRadius: 16,
        padding: 36,
        marginBottom: 18,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32,
      }}>
        <div>
          <Spec label="BODY" value="DM Sans · 400/500 · -1% tracking" />
          <div style={{
            fontFamily: t.fonts.body,
            fontSize: 19,
            lineHeight: 1.55,
            marginTop: 14,
            maxWidth: 460,
            textWrap: "pretty",
          }}>
            WeedSpot je průvodce po místech, která ti rozumí. Najdi
            ověřené dispenzáře, friendly kavárny a restaurace, kde
            jsou trávě nakloněni. V tvojí čtvrti, na cestách, kdykoli.
          </div>
        </div>
        <div>
          <Spec label="UI · LABEL" value="DM Sans · 500/600" />
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: t.colors.bark600 }}>OTEVŘENO TEĎ</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em" }}>Café Listopad · 0.4 km</div>
            <div style={{ fontSize: 15, color: t.colors.bark600 }}>Specialty kafe · CBD menu · pet-friendly</div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Spec label="MONO · META" value="JetBrains Mono · 11px caps" />
            <div style={{
              fontFamily: t.fonts.mono,
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: t.colors.terracotta700,
              marginTop: 10,
            }}>SPOT · 042 · PRAGUE 7</div>
          </div>
        </div>
      </div>

      {/* Pair example — headline + meta */}
      <div style={{
        background: t.colors.moss900,
        color: t.colors.cream50,
        borderRadius: 16,
        padding: 36,
      }}>
        <div style={{
          fontFamily: t.fonts.mono,
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          opacity: 0.7,
          marginBottom: 8,
        }}>SOBOTNÍ DOPOLEDNE · PRAHA</div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 64,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          textWrap: "balance",
          maxWidth: 820,
        }}>
          24 friendly míst do 15 minut chůze.
        </div>
        <div style={{
          fontFamily: t.fonts.body,
          fontSize: 18,
          marginTop: 14,
          opacity: 0.82,
          maxWidth: 640,
        }}>
          Kávu, oběd, něco zelenýho. Vyber si vibe a my ti ukážeme cestu.
        </div>
      </div>
    </div>
  );
}

window.TypographyBoard = TypographyBoard;
