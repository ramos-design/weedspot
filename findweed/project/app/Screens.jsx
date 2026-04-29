// FindWeed — Categories / Browse + Saved + Profile + Submit + ReviewWrite
function CategoriesScreen({ dark = false, onBack, onOpenSpot }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  const accent = t.colors.terracotta600;

  const palette = {
    moss: { bg: t.colors.moss100, fg: t.colors.moss900 },
    terracotta: { bg: t.colors.terracotta100, fg: t.colors.terracotta700 },
    mustard: { bg: t.colors.mustard100, fg: t.colors.bark900 },
  };

  return (
    <div style={{ height: "100%", background: bg, color: fg, overflow: "auto" }}>
      <div style={{ padding: "56px 20px 12px", display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={onBack} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <ChevronLeftIcon size={26} color={fg} />
        </button>
        <h1 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 28, letterSpacing: "-0.025em", margin: 0 }}>Procházet</h1>
      </div>

      <div style={{ padding: "0 20px 100px" }}>
        <p style={{ fontFamily: t.fonts.body, fontSize: 15, color: muted, marginTop: 4, marginBottom: 20 }}>Najdi svou kategorii — od dispenzářů po brunch spoty.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {D.categories.map((c, i) => {
            const p = palette[c.color];
            const count = D.spots.filter(s => s.cat === c.id).length;
            const big = i === 0 || i === 3;
            return (
              <div key={c.id} style={{
                gridColumn: big ? "span 2" : "span 1",
                background: p.bg, color: p.fg, borderRadius: 20, padding: 18,
                aspectRatio: big ? "2.2/1" : "1/1.05",
                position: "relative", overflow: "hidden", cursor: "pointer",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div style={{ position: "absolute", right: -16, bottom: -16, fontSize: big ? 110 : 76, opacity: 0.18, lineHeight: 1 }}>{c.icon}</div>
                <div>
                  <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: big ? 24 : 19, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{c.label}</div>
                  <div style={{ fontFamily: t.fonts.body, fontSize: 12, opacity: 0.7, marginTop: 4, fontWeight: 500 }}>{count} spotů</div>
                </div>
                <div style={{ alignSelf: "flex-start", padding: "6px 12px", background: "rgba(255,255,255,0.55)", color: p.fg, borderRadius: 100, fontFamily: t.fonts.body, fontSize: 12, fontWeight: 700, position: "relative", zIndex: 1 }}>Prozkoumat ›</div>
              </div>
            );
          })}
        </div>

        {/* Curated lists */}
        <h2 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", marginTop: 28, marginBottom: 12 }}>Kurátorované sbírky</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { t: "Brunch & CBD", d: "12 míst · komunitní výběr", c: t.colors.terracotta600 },
            { t: "Friendly bary po půlnoci", d: "8 míst · ověřeno", c: t.colors.mustard600 },
            { t: "Mimo Prahu", d: "24 míst · celé Česko", c: t.colors.moss700 },
          ].map(it => (
            <div key={it.t} style={{ background: surface, borderRadius: 16, padding: 14, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${border}`, cursor: "pointer" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: it.c, display: "flex", alignItems: "center", justifyContent: "center", color: t.colors.cream50, fontFamily: t.fonts.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>✦</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 16, color: fg, letterSpacing: "-0.015em" }}>{it.t}</div>
                <div style={{ fontFamily: t.fonts.body, fontSize: 13, color: muted, marginTop: 1 }}>{it.d}</div>
              </div>
              <ChevronRightIcon size={18} color={muted} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SavedScreen({ dark = false, onBack, onOpenSpot }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const [tab, setTab] = React.useState("saved");
  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const accent = t.colors.terracotta600;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;

  const saved = D.spots.slice(0, 4);
  const visited = D.spots.slice(2, 6);
  const list = tab === "saved" ? saved : visited;

  return (
    <div style={{ height: "100%", background: bg, color: fg, overflow: "auto" }}>
      <div style={{ padding: "56px 20px 4px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 32, letterSpacing: "-0.025em", margin: 0 }}>Knihovna</h1>
        <button style={{ width: 40, height: 40, borderRadius: 100, background: "transparent", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <PlusIcon size={20} color={fg} />
        </button>
      </div>
      <p style={{ fontFamily: t.fonts.body, fontSize: 15, color: muted, padding: "0 20px", marginTop: 4, marginBottom: 18 }}>Tvoje uložené, navštívené a sbírky.</p>

      {/* tabs */}
      <div style={{ padding: "0 20px", display: "flex", gap: 6, borderBottom: `1px solid ${border}` }}>
        {[
          { id: "saved", label: `Uložené · ${saved.length}` },
          { id: "visited", label: `Navštíveno · ${visited.length}` },
          { id: "lists", label: "Sbírky · 2" },
        ].map(tb => (
          <button key={tb.id} onClick={() => setTab(tb.id)} style={{
            padding: "12px 4px", marginRight: 14, background: "transparent", border: "none", cursor: "pointer",
            fontFamily: t.fonts.body, fontSize: 14, fontWeight: 600,
            color: tab === tb.id ? fg : muted, position: "relative",
            borderBottom: tab === tb.id ? `2px solid ${accent}` : "2px solid transparent",
            marginBottom: -1,
          }}>{tb.label}</button>
        ))}
      </div>

      <div style={{ padding: "16px 20px 100px", display: "flex", flexDirection: "column", gap: 12 }}>
        {tab !== "lists" && list.map(s => <SpotCard key={s.id} spot={s} dark={dark} onClick={() => onOpenSpot && onOpenSpot(s.id)} />)}
        {tab === "lists" && (
          <>
            {[
              { t: "Praha 7 stálice", n: 6, c: t.colors.moss700 },
              { t: "Brunch víkend", n: 4, c: t.colors.terracotta600 },
            ].map(l => (
              <div key={l.t} style={{ background: dark ? t.colors.moss800 : t.colors.cream100, borderRadius: 18, padding: 14, display: "flex", alignItems: "center", gap: 12, border: `1px solid ${border}` }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: l.c }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 17, color: fg, letterSpacing: "-0.02em" }}>{l.t}</div>
                  <div style={{ fontFamily: t.fonts.body, fontSize: 13, color: muted, marginTop: 2 }}>{l.n} spotů · sdíleno se 2 přáteli</div>
                </div>
                <ChevronRightIcon size={18} color={muted} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function ProfileScreen({ dark = false, onBack }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const u = D.user;
  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  const accent = t.colors.terracotta600;

  return (
    <div style={{ height: "100%", background: bg, color: fg, overflow: "auto" }}>
      {/* Hero */}
      <div style={{ padding: "56px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: 100, background: t.colors.terracotta600, color: t.colors.cream50, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.fonts.display, fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em" }}>{u.avatar}</div>
          <div>
            <h1 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", margin: 0 }}>{u.name}</h1>
            <div style={{ fontFamily: t.fonts.body, fontSize: 14, color: muted, marginTop: 2 }}>{u.handle} · Praha</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 22 }}>
          <Stat n={u.saved} l="Uloženo" dark={dark} />
          <Stat n={u.visited} l="Navštíveno" dark={dark} />
          <Stat n={u.reviews} l="Recenze" dark={dark} />
        </div>

        <button style={{ width: "100%", height: 44, marginTop: 16, borderRadius: 100, background: surface, color: fg, border: `1px solid ${border}`, fontFamily: t.fonts.body, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Upravit profil</button>
      </div>

      {/* Activity */}
      <div style={{ padding: "24px 20px 100px" }}>
        <SectionTitle dark={dark}>Tvůj level · Průzkumník</SectionTitle>
        <div style={{ background: surface, borderRadius: 16, padding: 16, border: `1px solid ${border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>38 / 50 spotů</div>
            <div style={{ fontFamily: t.fonts.body, fontSize: 12, fontWeight: 600, color: accent }}>12 do dalšího levelu</div>
          </div>
          <div style={{ height: 8, background: dark ? "rgba(247,242,231,0.10)" : t.colors.sand200, borderRadius: 100, marginTop: 10, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "76%", background: accent, borderRadius: 100 }} />
          </div>
          <div style={{ fontFamily: t.fonts.body, fontSize: 13, color: muted, marginTop: 10 }}>Další level: <strong style={{ color: fg }}>Místní</strong> — odemkne sdílené sbírky.</div>
        </div>

        <SectionTitle dark={dark}>Nastavení</SectionTitle>
        <div style={{ background: surface, borderRadius: 16, border: `1px solid ${border}`, overflow: "hidden" }}>
          {[
            ["Notifikace", "Otevírací doby, nové spoty"],
            ["Soukromí", "Veřejný profil"],
            ["Region", "Česko · cs"],
            ["Stáhnutá data", "Offline mapa Prahy"],
            ["O FindWeed", "Verze 1.0"],
          ].map(([a, b], i, arr) => (
            <div key={a} style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none", cursor: "pointer" }}>
              <div>
                <div style={{ fontFamily: t.fonts.body, fontSize: 15, fontWeight: 500, color: fg }}>{a}</div>
                <div style={{ fontFamily: t.fonts.body, fontSize: 12, color: muted, marginTop: 1 }}>{b}</div>
              </div>
              <ChevronRightIcon size={16} color={muted} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ n, l, dark }) {
  const t = window.WS_TOKENS;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  return (
    <div style={{ background: surface, borderRadius: 14, padding: "12px 8px", textAlign: "center", border: `1px solid ${border}` }}>
      <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: fg }}>{n}</div>
      <div style={{ fontFamily: t.fonts.body, fontSize: 11, color: muted, marginTop: 1, fontWeight: 500 }}>{l}</div>
    </div>
  );
}

function SubmitScreen({ dark = false, onBack }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const [name, setName] = React.useState("");
  const [cat, setCat] = React.useState("cafe");
  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  const accent = t.colors.terracotta600;

  return (
    <div style={{ height: "100%", background: bg, color: fg, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "56px 20px 12px", display: "flex", alignItems: "center", gap: 10 }}>
        <button onClick={onBack} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <CloseIcon size={24} color={fg} />
        </button>
        <h1 style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", margin: 0 }}>Přidat spot</h1>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "8px 20px 24px" }}>
        <p style={{ fontFamily: t.fonts.body, fontSize: 15, color: muted, marginTop: 4, marginBottom: 20, textWrap: "pretty" }}>Pomoz komunitě. Doplň, co je friendly. Recenzujeme do 24 hodin.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Field label="Název místa" dark={dark}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="např. Café Listopad" style={inputStyle(dark, t)} />
          </Field>

          <Field label="Kategorie" dark={dark}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {D.categories.map(c => (
                <button key={c.id} onClick={() => setCat(c.id)} style={{
                  height: 36, padding: "0 12px", borderRadius: 100,
                  background: cat === c.id ? accent : "transparent",
                  color: cat === c.id ? t.colors.cream50 : fg,
                  border: cat === c.id ? "none" : `1px solid ${border}`,
                  fontFamily: t.fonts.body, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 5,
                }}>{c.icon} {c.label}</button>
              ))}
            </div>
          </Field>

          <Field label="Adresa" dark={dark}>
            <input placeholder="Ulice, město" style={inputStyle(dark, t)} />
          </Field>

          <Field label="Co tam je friendly?" dark={dark} hint="Vyber vše, co odpovídá. Komunita ověří.">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["CBD menu", "můžete kouřit venku", "tolerují vůni", "pet-friendly", "wifi & long-stay", "specialty kafe", "pozdní hodiny"].map(t2 => (
                <button key={t2} style={{
                  height: 32, padding: "0 12px", borderRadius: 100,
                  background: surface, color: fg, border: `1px solid ${border}`,
                  fontFamily: t.fonts.body, fontSize: 12, fontWeight: 500, cursor: "pointer",
                }}>+ {t2}</button>
              ))}
            </div>
          </Field>

          <Field label="Krátký popis" dark={dark} hint="2–3 věty. Ne marketing. Co bys řekl kámošovi.">
            <textarea rows="4" placeholder="Útulná kavárna v Holešovicích. CBD menu, knihy, terasa…" style={{ ...inputStyle(dark, t), height: 100, resize: "none", fontFamily: t.fonts.body, lineHeight: 1.5 }} />
          </Field>

          <Field label="Fotky" dark={dark} hint="Min. 1, max. 5. Ne stock.">
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <div style={{ width: 76, height: 76, borderRadius: 12, border: `2px dashed ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: muted }}>
                <CameraIcon size={22} color={muted} />
              </div>
            </div>
          </Field>
        </div>
      </div>

      <div style={{ padding: "12px 20px 28px", borderTop: `1px solid ${border}`, background: bg }}>
        <button style={{ width: "100%", height: 52, borderRadius: 100, background: accent, color: t.colors.cream50, border: "none", fontFamily: t.fonts.body, fontSize: 16, fontWeight: 600, cursor: "pointer", letterSpacing: "-0.01em" }}>Odeslat ke schválení</button>
      </div>
    </div>
  );
}

function Field({ label, hint, children, dark }) {
  const t = window.WS_TOKENS;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  return (
    <div>
      <div style={{ fontFamily: t.fonts.body, fontSize: 13, fontWeight: 600, color: fg, marginBottom: 6, letterSpacing: "-0.005em" }}>{label}</div>
      {children}
      {hint && <div style={{ fontFamily: t.fonts.body, fontSize: 12, color: muted, marginTop: 5 }}>{hint}</div>}
    </div>
  );
}

function inputStyle(dark, t) {
  return {
    width: "100%", height: 48, padding: "0 14px",
    background: dark ? t.colors.moss800 : t.colors.cream100,
    border: `1px solid ${dark ? "rgba(247,242,231,0.10)" : t.colors.sand200}`,
    borderRadius: 12, fontFamily: t.fonts.body, fontSize: 15, fontWeight: 500,
    color: dark ? t.colors.cream50 : t.colors.ink, outline: "none", boxSizing: "border-box",
  };
}

window.CategoriesScreen = CategoriesScreen;
window.SavedScreen = SavedScreen;
window.ProfileScreen = ProfileScreen;
window.SubmitScreen = SubmitScreen;
window.Stat = Stat;
window.Field = Field;
