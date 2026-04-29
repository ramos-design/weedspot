// FindWeed — Onboarding (3 steps)
function Onboarding({ dark = false, onDone }) {
  const t = window.WS_TOKENS;
  const [step, setStep] = React.useState(0);
  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.65)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const accent = t.colors.terracotta600;

  const steps = [
    {
      art: <OnboardArt1 dark={dark} />,
      title: "Najdi své místo.",
      body: "Mapa dispenzářů, kaváren a restaurací, které mají rády trávu. V tvém okolí, kdykoli.",
    },
    {
      art: <OnboardArt2 dark={dark} />,
      title: "Otevřeno teď, do 15 minut.",
      body: "Filtruj podle typu, vzdálenosti a otevírací doby. Najdi to nejlepší místo právě teď.",
    },
    {
      art: <OnboardArt3 dark={dark} />,
      title: "Sdílej, recenzuj, objevuj.",
      body: "Komunita ověřuje, co je friendly a co ne. Přidej svůj spot a pomoz ostatním.",
    },
  ];
  const s = steps[step];

  return (
    <div style={{ height: "100%", background: bg, color: fg, display: "flex", flexDirection: "column", padding: "0 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 56, paddingBottom: 8 }}>
        <AppLogo size={16} color={fg} accent={accent} />
        <button onClick={onDone} style={{ background: "transparent", border: "none", color: muted, fontFamily: t.fonts.body, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Přeskočit</button>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 28 }}>
        <div style={{ width: "100%", aspectRatio: "1/1", maxWidth: 320, background: surface, borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
          {s.art}
        </div>
        <div>
          <h1 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 36, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, textWrap: "balance" }}>{s.title}</h1>
          <p style={{ fontFamily: t.fonts.body, fontSize: 16, lineHeight: 1.5, color: muted, marginTop: 12, marginBottom: 0, textWrap: "pretty" }}>{s.body}</p>
        </div>
      </div>

      <div style={{ paddingBottom: 44, display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
          {steps.map((_, i) => (
            <div key={i} style={{ width: i === step ? 22 : 6, height: 6, borderRadius: 3, background: i === step ? accent : (dark ? "rgba(247,242,231,0.25)" : t.colors.sand300), transition: "width 0.2s" }} />
          ))}
        </div>
        <button
          onClick={() => step === steps.length - 1 ? onDone() : setStep(step + 1)}
          style={{ background: accent, color: t.colors.cream50, border: "none", borderRadius: 100, padding: "16px 24px", fontFamily: t.fonts.body, fontSize: 16, fontWeight: 600, cursor: "pointer", letterSpacing: "-0.01em" }}
        >
          {step === steps.length - 1 ? "Pojďme najít spot" : "Dál"}
        </button>
      </div>
    </div>
  );
}

function OnboardArt1({ dark }) {
  const t = window.WS_TOKENS;
  return (
    <svg width="80%" height="80%" viewBox="0 0 200 200">
      <g fill="none" stroke={t.colors.terracotta600} strokeLinecap="round">
        <circle cx="100" cy="100" r="86" strokeWidth="2.5" opacity="0.18" />
        <circle cx="100" cy="100" r="64" strokeWidth="3" opacity="0.4" />
        <circle cx="100" cy="100" r="42" strokeWidth="3" opacity="0.7" />
      </g>
      <CannabisLeaf fill={t.colors.terracotta600} scale={2.2} x={100} y={106} />
    </svg>
  );
}
function OnboardArt2({ dark }) {
  const t = window.WS_TOKENS;
  return (
    <svg width="80%" height="80%" viewBox="0 0 200 200">
      <rect x="20" y="40" width="160" height="120" rx="16" fill={dark ? t.colors.moss700 : t.colors.cream200} />
      {[40, 70, 100, 130, 160].map((y, i) => (
        <line key={i} x1="32" y1={y + 10} x2="168" y2={y + 10} stroke={dark ? t.colors.moss900 : t.colors.sand300} strokeWidth="1.5" opacity="0.5" />
      ))}
      <circle cx="70"  cy="80"  r="9" fill={t.colors.moss600} />
      <circle cx="120" cy="100" r="11" fill={t.colors.terracotta600} />
      <circle cx="90"  cy="130" r="8" fill={t.colors.mustard600} />
      <circle cx="150" cy="65"  r="7" fill={t.colors.moss700} />
    </svg>
  );
}
function OnboardArt3({ dark }) {
  const t = window.WS_TOKENS;
  return (
    <svg width="80%" height="80%" viewBox="0 0 200 200">
      {[
        { cx: 60,  cy: 70,  r: 22, c: t.colors.moss600,       label: "T" },
        { cx: 130, cy: 90,  r: 28, c: t.colors.terracotta600, label: "J" },
        { cx: 90,  cy: 140, r: 24, c: t.colors.mustard600,    label: "L" },
      ].map((b, i) => (
        <g key={i}>
          <circle cx={b.cx} cy={b.cy} r={b.r} fill={b.c} />
          <text x={b.cx} y={b.cy + 6} textAnchor="middle" fill={t.colors.cream50} fontSize="20" fontWeight="700" fontFamily="'Fraunces', serif">{b.label}</text>
        </g>
      ))}
      <path d="M 75 80 Q 100 105 115 100" stroke={t.colors.bark600} strokeWidth="1.5" fill="none" strokeDasharray="3 4" opacity="0.5" />
      <path d="M 130 110 Q 110 130 100 130" stroke={t.colors.bark600} strokeWidth="1.5" fill="none" strokeDasharray="3 4" opacity="0.5" />
    </svg>
  );
}
window.Onboarding = Onboarding;
