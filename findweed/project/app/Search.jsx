// FindWeed — Search & filters
function SearchScreen({ dark = false, onBack, onOpenSpot }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const [q, setQ] = React.useState("");
  const [active, setActive] = React.useState({ open: true, dist: 2, cats: [] });

  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const subtle = dark ? "rgba(247,242,231,0.06)" : t.colors.cream200;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  const accent = t.colors.terracotta600;

  const recent = ["Café Listopad", "dispenzář Praha 7", "CBD oleje", "brunch terasa"];
  const trending = ["Otevřeno teď", "Nejlépe hodnocené", "Nové spoty", "Coffeeshopy NL"];

  const results = q ? D.spots.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.tags.some(tg => tg.toLowerCase().includes(q.toLowerCase()))) : [];

  return (
    <div style={{ height: "100%", background: bg, color: fg, display: "flex", flexDirection: "column" }}>
      {/* Search bar */}
      <div style={{ paddingTop: 56, padding: "56px 16px 12px", display: "flex", gap: 10, alignItems: "center" }}>
        <button onClick={onBack} style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <ChevronLeftIcon size={26} color={fg} />
        </button>
        <div style={{ flex: 1, height: 44, background: surface, borderRadius: 100, border: `1px solid ${border}`, display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
          <SearchIcon size={18} color={muted} />
          <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Najít spot, město, kategorii…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: t.fonts.body, fontSize: 15, color: fg }} />
          {q && <button onClick={() => setQ("")} style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0, display: "flex" }}><CloseIcon size={16} color={muted} /></button>}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "8px 16px 100px" }}>
        {!q && (
          <>
            {/* Filters */}
            <SectionLabel dark={dark}>Filtry</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
              <FilterRow label="Otevřeno právě teď" dark={dark}>
                <Switch on={active.open} onChange={v => setActive({ ...active, open: v })} />
              </FilterRow>
              <FilterRow label={`Vzdálenost do ${active.dist} km`} dark={dark}>
                <input type="range" min="0.5" max="10" step="0.5" value={active.dist} onChange={e => setActive({ ...active, dist: parseFloat(e.target.value) })} style={{ width: 130, accentColor: accent }} />
              </FilterRow>
            </div>

            <SectionLabel dark={dark}>Kategorie</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
              {D.categories.map(c => {
                const isAct = active.cats.includes(c.id);
                return (
                  <button key={c.id} onClick={() => setActive({ ...active, cats: isAct ? active.cats.filter(x => x !== c.id) : [...active.cats, c.id] })} style={{
                    height: 38, padding: "0 14px", borderRadius: 100,
                    background: isAct ? accent : surface,
                    color: isAct ? t.colors.cream50 : fg,
                    border: isAct ? "none" : `1px solid ${border}`,
                    fontFamily: t.fonts.body, fontSize: 13, fontWeight: 600,
                    display: "flex", alignItems: "center", gap: 6, cursor: "pointer",
                  }}>
                    <span>{c.icon}</span>{c.label}
                  </button>
                );
              })}
            </div>

            <SectionLabel dark={dark}>Naposledy hledané</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {recent.map(r => (
                <button key={r} onClick={() => setQ(r)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 4px", background: "transparent", border: "none", borderBottom: `1px solid ${border}`, cursor: "pointer", textAlign: "left" }}>
                  <ClockIcon size={16} color={muted} />
                  <span style={{ flex: 1, fontFamily: t.fonts.body, fontSize: 14, color: fg }}>{r}</span>
                  <ChevronRightIcon size={16} color={muted} />
                </button>
              ))}
            </div>

            <SectionLabel dark={dark}>Trendy</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {trending.map(tr => (
                <button key={tr} onClick={() => setQ(tr)} style={{ height: 36, padding: "0 14px", borderRadius: 100, background: subtle, border: `1px solid ${border}`, color: fg, fontFamily: t.fonts.body, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>{tr}</button>
              ))}
            </div>
          </>
        )}

        {q && (
          <>
            <div style={{ fontFamily: t.fonts.body, fontSize: 13, color: muted, padding: "8px 4px 12px" }}>
              {results.length} výsledků pro „{q}"
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {results.map(s => <SpotCard key={s.id} spot={s} dark={dark} onClick={() => onOpenSpot && onOpenSpot(s.id)} />)}
              {results.length === 0 && <EmptyResults dark={dark} q={q} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children, dark }) {
  const t = window.WS_TOKENS;
  const muted = dark ? "rgba(247,242,231,0.5)" : t.colors.bark600;
  return <div style={{ fontFamily: t.fonts.body, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: muted, textTransform: "uppercase", margin: "20px 0 10px" }}>{children}</div>;
}

function FilterRow({ label, children, dark }) {
  const t = window.WS_TOKENS;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const border = dark ? "rgba(247,242,231,0.08)" : t.colors.sand200;
  return (
    <div style={{ background: surface, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", border: `1px solid ${border}` }}>
      <span style={{ fontFamily: t.fonts.body, fontSize: 14, fontWeight: 500, color: fg }}>{label}</span>
      {children}
    </div>
  );
}

function Switch({ on, onChange }) {
  const t = window.WS_TOKENS;
  return (
    <button onClick={() => onChange(!on)} style={{
      width: 46, height: 28, borderRadius: 100, background: on ? t.colors.terracotta600 : "#D6CDB8",
      border: "none", padding: 2, cursor: "pointer", position: "relative", transition: "background 0.15s",
    }}>
      <div style={{ width: 24, height: 24, borderRadius: 100, background: "white", transform: `translateX(${on ? 18 : 0}px)`, transition: "transform 0.15s", boxShadow: "0 1px 2px rgba(0,0,0,0.2)" }} />
    </button>
  );
}

function EmptyResults({ q, dark }) {
  const t = window.WS_TOKENS;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  return (
    <div style={{ padding: "40px 0", textAlign: "center" }}>
      <div style={{ fontSize: 48, opacity: 0.4 }}>·</div>
      <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 20, color: dark ? t.colors.cream50 : t.colors.ink, marginTop: 8 }}>Nenašli jsme nic.</div>
      <div style={{ fontFamily: t.fonts.body, fontSize: 14, color: muted, marginTop: 4 }}>Zkuste jiný výraz nebo rozšiřte vzdálenost.</div>
    </div>
  );
}

window.SearchScreen = SearchScreen;
window.SectionLabel = SectionLabel;
window.Switch = Switch;
