// FindWeed — Detail spotu
function SpotDetail({ dark = false, spotId = 1, onBack }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const spot = D.spots.find(s => s.id === spotId) || D.spots[0];
  const reviews = D.reviews.filter(r => r.spot === spot.id);
  const cd = D.categories.find(c => c.id === spot.cat);

  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  const accent = t.colors.terracotta600;

  const tones = { moss: t.colors.moss700, terracotta: t.colors.terracotta600, mustard: t.colors.mustard600 };
  const heroBg = tones[spot.img];

  return (
    <div style={{ height: "100%", background: bg, overflow: "auto", color: fg }}>
      {/* Hero */}
      <div style={{ position: "relative", height: 320, background: heroBg, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 50%), radial-gradient(circle at 80% 90%, rgba(0,0,0,0.20), transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 96, opacity: 0.45 }}>{cd.icon}</div>

        {/* top bar */}
        <div style={{ position: "absolute", top: 56, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CircleBtn onClick={onBack}><ChevronLeftIcon size={20} color={t.colors.ink} /></CircleBtn>
          <div style={{ display: "flex", gap: 8 }}>
            <CircleBtn><ShareIcon size={18} color={t.colors.ink} /></CircleBtn>
            <CircleBtn><BookmarkIcon size={18} color={t.colors.ink} /></CircleBtn>
          </div>
        </div>

        {/* photo dots */}
        <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ width: i === 0 ? 18 : 5, height: 5, borderRadius: 3, background: i === 0 ? "white" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px 140px" }}>
        {/* title block */}
        <div>
          <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
            <Pill bg={cd.color === "moss" ? t.colors.moss100 : cd.color === "terracotta" ? t.colors.terracotta100 : t.colors.mustard100} color={cd.color === "moss" ? t.colors.moss900 : cd.color === "terracotta" ? t.colors.terracotta700 : t.colors.bark900} dark={dark}>{cd.label}</Pill>
            <Pill bg={spot.open ? t.colors.moss100 : "transparent"} color={spot.open ? t.colors.moss900 : t.colors.terracotta700} dark={dark}>
              {spot.open ? "● Otevřeno · " + spot.hours : "○ Zavřeno · " + spot.hours}
            </Pill>
          </div>
          <h1 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 32, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0 }}>{spot.name}</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, fontFamily: t.fonts.body, fontSize: 14, color: muted }}>
            <span style={{ color: fg, fontWeight: 700 }}>★ {spot.rating}</span>
            <span>({spot.reviews} recenzí)</span>
            <span>·</span>
            <span>{spot.area}</span>
            <span>·</span>
            <span>{spot.dist}</span>
          </div>
        </div>

        {/* primary actions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 18 }}>
          <ActionBtn icon={<DirectionIcon size={18} color={t.colors.cream50} />} label="Trasa" primary accent={accent} />
          <ActionBtn icon={<PhoneIcon size={18} color={fg} />} label="Volat" surface={surface} fg={fg} border={border} />
          <ActionBtn icon={<ShareIcon size={18} color={fg} />} label="Sdílet" surface={surface} fg={fg} border={border} />
        </div>

        {/* About */}
        <SectionTitle dark={dark}>O místě</SectionTitle>
        <p style={{ fontFamily: t.fonts.body, fontSize: 15, lineHeight: 1.55, color: muted, margin: 0, textWrap: "pretty" }}>
          Útulná specialty kavárna v Holešovicích s laid-back přístupem. Mají drobné CBD menu, knihy zdarma a personál, který nechá hosty sedět tak dlouho, jak potřebujete. Pet-friendly, wifi, terasa.
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
          {spot.tags.map(tg => (
            <span key={tg} style={{ fontFamily: t.fonts.body, fontSize: 12, fontWeight: 500, color: muted, padding: "6px 10px", borderRadius: 100, background: surface, border: `1px solid ${border}` }}>{tg}</span>
          ))}
        </div>

        {/* Hours */}
        <SectionTitle dark={dark}>Otevírací doba</SectionTitle>
        <div style={{ background: surface, borderRadius: 16, padding: 14, border: `1px solid ${border}` }}>
          {[
            ["Pondělí", "8:00 – 22:00"],
            ["Úterý", "8:00 – 22:00"],
            ["Středa", "8:00 – 22:00", true],
            ["Čtvrtek", "8:00 – 22:00"],
            ["Pátek", "8:00 – 24:00"],
            ["Sobota", "9:00 – 24:00"],
            ["Neděle", "9:00 – 20:00"],
          ].map(([d, h, today]) => (
            <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontFamily: t.fonts.body, fontSize: 14, color: today ? fg : muted, fontWeight: today ? 700 : 400 }}>
              <span>{d}{today && " · dnes"}</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Map mini */}
        <SectionTitle dark={dark}>Adresa</SectionTitle>
        <div style={{ background: surface, borderRadius: 16, overflow: "hidden", border: `1px solid ${border}` }}>
          <div style={{ height: 140, background: dark ? t.colors.moss800 : t.colors.cream200, position: "relative", overflow: "hidden" }}>
            <svg width="100%" height="100%" viewBox="0 0 360 140" preserveAspectRatio="xMidYMid slice">
              <line x1="0" y1="50" x2="360" y2="60" stroke={dark ? "rgba(247,242,231,0.18)" : "#E9DFC9"} strokeWidth="3" />
              <line x1="0" y1="100" x2="360" y2="105" stroke={dark ? "rgba(247,242,231,0.12)" : t.colors.cream100} strokeWidth="2" />
              <line x1="180" y1="0" x2="190" y2="140" stroke={dark ? "rgba(247,242,231,0.12)" : t.colors.cream100} strokeWidth="2" />
            </svg>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-100%)" }}>
              <svg width="36" height="44" viewBox="0 0 36 44">
                <path d="M 18 2 C 9 2, 2 9, 2 18 C 2 28, 18 42, 18 42 C 18 42, 34 28, 34 18 C 34 9, 27 2, 18 2 Z" fill={accent} stroke="white" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
          <div style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: t.fonts.body, fontSize: 14, fontWeight: 600, color: fg }}>Veletržní 822/15</div>
              <div style={{ fontFamily: t.fonts.body, fontSize: 13, color: muted, marginTop: 2 }}>170 00 Praha 7 · {spot.dist}</div>
            </div>
            <button style={{ background: accent, color: t.colors.cream50, border: "none", borderRadius: 100, padding: "10px 16px", fontFamily: t.fonts.body, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Otevřít v mapě</button>
          </div>
        </div>

        {/* Reviews */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 24 }}>
          <h2 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", margin: 0 }}>Recenze · {reviews.length}</h2>
          <span style={{ fontFamily: t.fonts.body, fontSize: 13, color: accent, fontWeight: 600 }}>Přidat recenzi</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
          {reviews.map(r => <ReviewCard key={r.id} r={r} dark={dark} />)}
        </div>
      </div>
    </div>
  );
}

function CircleBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: 100, background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      border: "none", display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    }}>{children}</button>
  );
}

function Pill({ bg, color, children, dark }) {
  const t = window.WS_TOKENS;
  return (
    <span style={{
      fontFamily: t.fonts.body, fontSize: 12, fontWeight: 600,
      padding: "5px 10px", borderRadius: 100, background: bg, color,
      letterSpacing: "-0.005em",
    }}>{children}</span>
  );
}

function ActionBtn({ icon, label, primary, accent, surface, fg, border }) {
  const t = window.WS_TOKENS;
  return (
    <button style={{
      height: 48, borderRadius: 14, border: primary ? "none" : `1px solid ${border}`,
      background: primary ? accent : surface, color: primary ? t.colors.cream50 : fg,
      display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      fontFamily: t.fonts.body, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: "-0.01em",
    }}>
      {icon}{label}
    </button>
  );
}

function SectionTitle({ children, dark }) {
  const t = window.WS_TOKENS;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  return <h2 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 10, color: fg }}>{children}</h2>;
}

function ReviewCard({ r, dark }) {
  const t = window.WS_TOKENS;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  const palette = [t.colors.moss700, t.colors.terracotta600, t.colors.mustard600];
  const avc = palette[r.user.charCodeAt(0) % 3];
  return (
    <div style={{ background: surface, borderRadius: 16, padding: 14, border: `1px solid ${border}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 100, background: avc, color: t.colors.cream50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.fonts.display, fontWeight: 700, fontSize: 16 }}>{r.avatar}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: t.fonts.body, fontWeight: 600, fontSize: 14, color: fg }}>{r.user}</div>
          <div style={{ fontFamily: t.fonts.body, fontSize: 12, color: muted, marginTop: 1 }}>před {r.when}</div>
        </div>
        <div style={{ display: "flex", gap: 1 }}>
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{ color: i <= r.rating ? t.colors.mustard600 : (dark ? "rgba(247,242,231,0.20)" : t.colors.sand300), fontSize: 14 }}>★</span>
          ))}
        </div>
      </div>
      <p style={{ fontFamily: t.fonts.body, fontSize: 14, lineHeight: 1.5, color: dark ? "rgba(247,242,231,0.85)" : t.colors.ink, marginTop: 10, marginBottom: 0, textWrap: "pretty" }}>{r.text}</p>
    </div>
  );
}

window.SpotDetail = SpotDetail;
window.ReviewCard = ReviewCard;
window.SectionTitle = SectionTitle;
window.Pill = Pill;
window.CircleBtn = CircleBtn;
