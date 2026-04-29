// FindWeed — Home screen: mapa nahoře, feed pod ní (drag-up bottom sheet)
function Home({ dark = false, onOpenSpot, onOpenSearch, onOpenMap, onOpenCategory }) {
  const t = window.WS_TOKENS;
  const D = window.WS_DATA;
  const [sheetState, setSheetState] = React.useState("mid"); // "low" | "mid" | "high"
  const [filter, setFilter] = React.useState("all");

  const bg = dark ? t.colors.moss900 : t.colors.cream50;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream50;
  const subtle = dark ? "rgba(247,242,231,0.08)" : t.colors.cream200;
  const border = dark ? "rgba(247,242,231,0.10)" : t.colors.sand200;
  const accent = t.colors.terracotta600;

  const filtered = filter === "all" ? D.spots : D.spots.filter(s => s.cat === filter);

  // sheet heights (relative to 852 viewport)
  const SHEET = { low: 120, mid: 420, high: 720 };
  const sheetH = SHEET[sheetState];

  return (
    <div style={{ height: "100%", background: bg, position: "relative", overflow: "hidden" }}>
      {/* MAP */}
      <MapCanvas dark={dark} spots={D.spots} onPinClick={onOpenSpot} />

      {/* TOP BAR */}
      <div style={{ position: "absolute", top: 56, left: 16, right: 16, display: "flex", flexDirection: "column", gap: 10, zIndex: 5 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div onClick={onOpenSearch} style={{ flex: 1, height: 48, borderRadius: 100, background: surface, boxShadow: "0 2px 12px rgba(28,42,30,0.10)", display: "flex", alignItems: "center", padding: "0 18px", gap: 10, cursor: "pointer", border: `1px solid ${border}` }}>
            <SearchIcon size={18} color={muted} />
            <span style={{ flex: 1, fontFamily: t.fonts.body, fontSize: 15, color: muted }}>Najít spot, město, kategorii…</span>
            <AppLogo size={11} color={muted} accent={accent} />
          </div>
          <button style={{ width: 48, height: 48, borderRadius: 100, background: surface, boxShadow: "0 2px 12px rgba(28,42,30,0.10)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <FilterIcon size={18} color={fg} />
          </button>
        </div>

        {/* category chips */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginRight: -16 }}>
          <Chip active={filter === "all"} onClick={() => setFilter("all")} dark={dark}>Vše</Chip>
          {D.categories.map(c => (
            <Chip key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)} dark={dark} icon={c.icon}>{c.label}</Chip>
          ))}
        </div>
      </div>

      {/* FAB — locate me */}
      <button style={{
        position: "absolute", right: 16, bottom: sheetH + 16, zIndex: 5,
        width: 52, height: 52, borderRadius: 100, background: surface,
        boxShadow: "0 4px 16px rgba(28,42,30,0.18)", border: `1px solid ${border}`,
        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        transition: "bottom 0.25s cubic-bezier(0.32,0.72,0,1)",
      }}>
        <LocateIcon size={22} color={accent} />
      </button>

      {/* BOTTOM SHEET */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 6,
        height: sheetH, background: bg, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        boxShadow: "0 -8px 32px rgba(28,42,30,0.14)",
        transition: "height 0.3s cubic-bezier(0.32,0.72,0,1)",
        display: "flex", flexDirection: "column", overflow: "hidden",
      }}>
        {/* drag handle */}
        <div onClick={() => setSheetState(sheetState === "low" ? "mid" : sheetState === "mid" ? "high" : "low")} style={{ padding: "10px 0 6px", display: "flex", justifyContent: "center", cursor: "pointer" }}>
          <div style={{ width: 36, height: 5, borderRadius: 100, background: dark ? "rgba(247,242,231,0.25)" : t.colors.sand300 }} />
        </div>

        {/* header */}
        <div style={{ padding: "4px 20px 12px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", color: fg }}>
              {filtered.length} spot{filtered.length === 1 ? "" : "ů"} kolem vás
            </div>
            <div style={{ fontFamily: t.fonts.body, fontSize: 13, color: muted, marginTop: 2 }}>Praha 7 · do 2 km</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: t.fonts.body, fontSize: 13, color: accent, fontWeight: 600, cursor: "pointer" }} onClick={() => onOpenCategory && onOpenCategory()}>
            Vše<span style={{ fontSize: 14 }}>›</span>
          </div>
        </div>

        {/* feed */}
        <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
          {filtered.map(s => (
            <SpotCard key={s.id} spot={s} dark={dark} onClick={() => onOpenSpot && onOpenSpot(s.id)} />
          ))}
        </div>
      </div>

      {/* TAB BAR (floating glass) */}
      <TabBar dark={dark} active="home" onMap={onOpenMap} onSearch={onOpenSearch} />
    </div>
  );
}

function Chip({ children, active, onClick, dark, icon }) {
  const t = window.WS_TOKENS;
  return (
    <button onClick={onClick} style={{
      flexShrink: 0, height: 36, padding: "0 14px", borderRadius: 100,
      background: active ? t.colors.terracotta600 : (dark ? "rgba(247,242,231,0.12)" : t.colors.cream50),
      color: active ? t.colors.cream50 : (dark ? t.colors.cream50 : t.colors.ink),
      border: active ? "none" : `1px solid ${dark ? "rgba(247,242,231,0.10)" : t.colors.sand200}`,
      boxShadow: active ? "none" : "0 2px 8px rgba(28,42,30,0.08)",
      fontFamily: t.fonts.body, fontSize: 13, fontWeight: 600, letterSpacing: "-0.005em",
      cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
    }}>
      {icon && <span style={{ fontSize: 13 }}>{icon}</span>}
      {children}
    </button>
  );
}

function SpotCard({ spot, dark, onClick }) {
  const t = window.WS_TOKENS;
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.6)" : t.colors.bark600;
  const surface = dark ? t.colors.moss800 : t.colors.cream100;
  const accent = t.colors.terracotta600;

  return (
    <div onClick={onClick} style={{
      background: surface, borderRadius: 18, padding: 12,
      display: "flex", gap: 12, cursor: "pointer",
      border: `1px solid ${dark ? "rgba(247,242,231,0.06)" : t.colors.sand200}`,
    }}>
      <SpotThumb tone={spot.img} cat={spot.cat} />
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: t.fonts.display, fontWeight: 700, fontSize: 17, letterSpacing: "-0.02em", color: fg, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{spot.name}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3, fontFamily: t.fonts.body, fontSize: 13, color: muted }}>
          <span style={{ color: spot.open ? t.colors.moss600 : t.colors.terracotta700, fontWeight: 600 }}>
            {spot.open ? "● Otevřeno" : "○ Zavřeno"}
          </span>
          <span>·</span>
          <span>{spot.hours}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontFamily: t.fonts.body, fontSize: 12, color: muted }}>
          <span style={{ color: fg, fontWeight: 600 }}>★ {spot.rating}</span>
          <span>({spot.reviews})</span>
          <span>·</span>
          <span>{spot.dist}</span>
          <span>·</span>
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{spot.tags[0]}</span>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); }} style={{ width: 36, height: 36, borderRadius: 100, background: "transparent", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", alignSelf: "flex-start" }}>
        <BookmarkIcon size={18} color={muted} />
      </button>
    </div>
  );
}

function SpotThumb({ tone = "moss", cat = "cafe" }) {
  const t = window.WS_TOKENS;
  const tones = {
    moss:       { bg: t.colors.moss700,       fg: t.colors.cream50 },
    terracotta: { bg: t.colors.terracotta600, fg: t.colors.cream50 },
    mustard:    { bg: t.colors.mustard600,    fg: t.colors.ink },
  };
  const c = tones[tone] || tones.moss;
  const cd = window.WS_DATA.categories.find(x => x.id === cat) || { icon: "·" };
  return (
    <div style={{
      width: 64, height: 64, borderRadius: 14, background: c.bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 60%)` }} />
      <span style={{ fontSize: 28 }}>{cd.icon}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Map canvas — stylized illustrated map (not real tiles)
// ─────────────────────────────────────────────────────────────
function MapCanvas({ dark, spots, onPinClick }) {
  const t = window.WS_TOKENS;
  const land = dark ? t.colors.moss900 : t.colors.cream100;
  const water = dark ? "#1A2820" : "#D9E5DA";
  const road = dark ? "rgba(247,242,231,0.10)" : t.colors.cream200;
  const roadStrong = dark ? "rgba(247,242,231,0.18)" : "#E9DFC9";
  const block = dark ? t.colors.moss800 : "#EFE4CC";
  const park = dark ? "rgba(123,141,101,0.30)" : "rgba(123,141,101,0.25)";

  return (
    <div style={{ position: "absolute", inset: 0, background: land, overflow: "hidden" }}>
      <svg width="100%" height="100%" viewBox="0 0 393 852" preserveAspectRatio="xMidYMid slice">
        {/* river */}
        <path d="M -20 320 Q 100 280, 200 360 T 420 380 L 420 460 Q 300 440, 200 460 T -20 420 Z" fill={water} />
        {/* parks */}
        <ellipse cx="80" cy="180" rx="70" ry="50" fill={park} />
        <ellipse cx="320" cy="600" rx="90" ry="60" fill={park} />
        {/* major roads */}
        <path d="M -20 200 L 420 220" stroke={roadStrong} strokeWidth="6" fill="none" />
        <path d="M -20 540 L 420 560" stroke={roadStrong} strokeWidth="5" fill="none" />
        <path d="M 120 -20 L 140 870" stroke={roadStrong} strokeWidth="5" fill="none" />
        <path d="M 280 -20 L 260 870" stroke={roadStrong} strokeWidth="5" fill="none" />
        {/* minor roads */}
        {[60, 120, 260, 380, 480, 720, 800].map((y, i) => (
          <line key={`h${i}`} x1="-20" y1={y} x2="420" y2={y} stroke={road} strokeWidth="2" />
        ))}
        {[40, 200, 340, 360].map((x, i) => (
          <line key={`v${i}`} x1={x} y1="-20" x2={x + 10} y2="870" stroke={road} strokeWidth="2" />
        ))}
        {/* building blocks */}
        {[
          [50,80,50,30],[160,90,40,40],[210,100,50,30],[300,80,40,50],
          [50,260,60,40],[180,260,50,40],[290,270,50,50],
          [50,580,60,50],[180,600,60,40],
          [60,680,60,40],[180,690,50,40],[300,680,50,50],
          [60,760,60,40],[200,770,80,40],[300,770,50,50],
        ].map(([x,y,w,h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill={block} opacity="0.7" />
        ))}
      </svg>

      {/* Pins — positioned at relative coords */}
      {spots.map(s => (
        <MapPin key={s.id} spot={s} onClick={() => onPinClick && onPinClick(s.id)} />
      ))}

      {/* "you are here" */}
      <div style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}>
        <div style={{ width: 22, height: 22, borderRadius: 100, background: t.colors.terracotta600, border: "3px solid white", boxShadow: "0 0 0 8px rgba(196,107,82,0.18), 0 2px 8px rgba(0,0,0,0.2)" }} />
      </div>
    </div>
  );
}

function MapPin({ spot, onClick }) {
  const t = window.WS_TOKENS;
  const cd = window.WS_DATA.categories.find(c => c.id === spot.cat);
  const tones = {
    moss: t.colors.moss700, terracotta: t.colors.terracotta600, mustard: t.colors.mustard600,
  };
  const color = tones[cd?.color] || t.colors.moss700;
  const left = `${spot.lng * 100}%`;
  const top = `${spot.lat * 100}%`;
  return (
    <button onClick={onClick} style={{
      position: "absolute", left, top, transform: "translate(-50%,-100%)",
      background: "transparent", border: "none", padding: 0, cursor: "pointer",
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.20))",
    }}>
      <svg width="36" height="44" viewBox="0 0 36 44">
        <path d="M 18 2 C 9 2, 2 9, 2 18 C 2 28, 18 42, 18 42 C 18 42, 34 28, 34 18 C 34 9, 27 2, 18 2 Z" fill={color} stroke="white" strokeWidth="2.5" />
        <text x="18" y="24" textAnchor="middle" fontSize="14" fill="white">{cd?.icon}</text>
      </svg>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Tab bar
// ─────────────────────────────────────────────────────────────
function TabBar({ dark, active = "home", onMap, onSearch, onSaved, onProfile, onHome }) {
  const t = window.WS_TOKENS;
  const bg = dark ? "rgba(28,42,30,0.92)" : "rgba(255,255,255,0.92)";
  const fg = dark ? t.colors.cream50 : t.colors.ink;
  const muted = dark ? "rgba(247,242,231,0.55)" : t.colors.bark600;
  const accent = t.colors.terracotta600;
  const tabs = [
    { id: "home", label: "Domů", icon: HomeIcon, fn: onHome },
    { id: "map",  label: "Mapa", icon: MapIcon, fn: onMap },
    { id: "search", label: "Hledat", icon: SearchIcon, fn: onSearch },
    { id: "saved", label: "Uloženo", icon: BookmarkIcon, fn: onSaved },
    { id: "profile", label: "Profil", icon: UserIcon, fn: onProfile },
  ];
  return (
    <div style={{
      position: "absolute", left: 16, right: 16, bottom: 24, zIndex: 60,
      height: 64, borderRadius: 100, background: bg, backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)", boxShadow: "0 8px 32px rgba(28,42,30,0.18)",
      display: "flex", alignItems: "center", justifyContent: "space-around",
      border: `1px solid ${dark ? "rgba(247,242,231,0.10)" : "rgba(28,42,30,0.05)"}`,
      padding: "0 8px",
    }}>
      {tabs.map(tb => {
        const isAct = tb.id === active;
        const Ic = tb.icon;
        return (
          <button key={tb.id} onClick={tb.fn} style={{
            flex: 1, background: "transparent", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: 8,
          }}>
            <Ic size={22} color={isAct ? accent : muted} />
            <span style={{ fontFamily: t.fonts.body, fontSize: 10, fontWeight: 600, color: isAct ? accent : muted, letterSpacing: "-0.005em" }}>{tb.label}</span>
          </button>
        );
      })}
    </div>
  );
}

window.Home = Home;
window.SpotCard = SpotCard;
window.TabBar = TabBar;
window.MapCanvas = MapCanvas;
window.SpotThumb = SpotThumb;
window.Chip = Chip;
