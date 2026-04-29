// Tone of voice artboard
function VoiceBoard() {
  const t = window.WS_TOKENS;

  const Card = ({ kind, sample, note, bg, fg, accent }) => (
    <div style={{
      background: bg,
      color: fg,
      borderRadius: 16,
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 220,
    }}>
      <div style={{
        fontFamily: t.fonts.mono,
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: accent,
      }}>{kind}</div>
      <div style={{
        fontFamily: t.fonts.display,
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        textWrap: "balance",
      }}>“{sample}”</div>
      <div style={{
        fontFamily: t.fonts.body,
        fontSize: 13,
        lineHeight: 1.5,
        opacity: 0.78,
        marginTop: "auto",
      }}>{note}</div>
    </div>
  );

  const Pillar = ({ title, body }) => (
    <div>
      <div style={{
        fontFamily: t.fonts.display,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: "-0.015em",
        color: t.colors.ink,
        marginBottom: 6,
      }}>{title}</div>
      <div style={{
        fontFamily: t.fonts.body,
        fontSize: 15,
        lineHeight: 1.5,
        color: t.colors.bark600,
        textWrap: "pretty",
      }}>{body}</div>
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
        }}>Voice · Friendly local guide</div>
        <div style={{
          fontFamily: t.fonts.display,
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: "-0.025em",
          color: t.colors.ink,
          lineHeight: 1.05,
          maxWidth: 720,
        }}>
          Mluvíme jako kámoš, co tě bere na novou kavárnu — ne jako
          dispenzář, ne jako lékárna.
        </div>
      </div>

      {/* Pillars */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
        marginBottom: 32,
        paddingBottom: 28,
        borderBottom: `1px solid ${t.colors.sand300}`,
      }}>
        <Pillar title="Vřelý" body="Tykáme, ale nelíbáme. Jako server, co si tě pamatuje." />
        <Pillar title="Otevřený" body="Tráva je téma, ne tabu. Žádné mrkání ani eufemismy." />
        <Pillar title="Konkrétní" body="0.4 km, otevřeno do 22:00, CBD menu. Fakta před vibem." />
        <Pillar title="Český, ne americký" body="Žádné „dude“, žádné „lit“. Spíš „sobota, kafe, pohoda“." />
      </div>

      {/* Voice samples */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <Card
          kind="Tagline · primární"
          sample="Najdi své místo."
          note="Krátké, dvojsmyslné — místo na mapě i místo, kam patříš."
          bg={t.colors.moss900}
          fg={t.colors.cream50}
          accent={t.colors.mustard500}
        />
        <Card
          kind="Tagline · alt"
          sample="Tráva, kafe a kousek mapy."
          note="Lifestyle varianta pro social a out-of-home."
          bg={t.colors.terracotta600}
          fg={t.colors.cream50}
          accent={t.colors.cream100}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        <Card
          kind="Onboarding"
          sample="Řekni nám, kde jsi. My řekneme, kam zajít."
          note="První obrazovka. Žádný corporate suchar."
          bg={t.colors.cream100}
          fg={t.colors.ink}
          accent={t.colors.moss700}
        />
        <Card
          kind="Empty state"
          sample="Tady ještě nikdo nebyl. Buď první."
          note="Když v okolí nic není — pozvánka, ne omluva."
          bg={t.colors.mustard300}
          fg={t.colors.bark800}
          accent={t.colors.terracotta700}
        />
        <Card
          kind="Push"
          sample="Café Listopad otevřelo. Kafe čeká."
          note="Lokální, časový, lidský. Bez vykřičníků."
          bg={t.colors.bark800}
          fg={t.colors.cream50}
          accent={t.colors.mustard500}
        />
      </div>
    </div>
  );
}

window.VoiceBoard = VoiceBoard;
