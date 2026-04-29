# WeedSpot

> Najdi své místo. Komunitní mapa friendly podniků v Česku a Evropě.

WeedSpot je značka a webová aplikace inspirovaná [Weedmaps](https://weedmaps.com), zaměřená na český a evropský trh — mapa dispenzářů, CBD obchodů, kaváren, restaurací, barů a coffeeshopů, které mají rády trávu.

## Co je v repozitáři

- **[index.html](index.html)** — mobilní webová aplikace (mobile-first, iPhone 15 Pro frame na desktopu, fullscreen na mobilu). 8 obrazovek, klikatelná navigace, drag bottom-sheet, save/unsave, light/dark theme.
- **[desktop.html](desktop.html)** — desktopová landing page (sticky header, hero, features, kategorie, mapa, featured spoty, jak to funguje, recenze, CTA banner, footer). Plně responzivní.
- **[findweed/](findweed/)** — původní designový bundle z Claude Design (HTML/CSS/JS prototypy + chat transcript).

## Brand identity

- **Logo**: závorky kolem stylizovaného konopného listu v terakotě (varianta B z designové iterace)
- **Wordmark**: Fraunces 800 + barevná tečka
- **Paleta**: cream / moss / mustard / terracotta — earthy, café-friendly, ne rasta, ne klinické
- **Typografie**: Fraunces (display) × DM Sans (UI)

## Spuštění

Bez build kroku, čisté HTML/CSS/JS s React 18 + Babel přes CDN.

```bash
python3 -m http.server 8765
```

Pak v prohlížeči:
- `http://localhost:8765/` — mobilní aplikace
- `http://localhost:8765/desktop.html` — desktop landing page

## Stack

- React 18 (UMD CDN)
- Babel standalone (in-browser JSX transform)
- Vanilla CSS s custom properties (light/dark theme)
- localStorage pro persistenci uložených spotů a tématu
- Žádné dependencies, žádný build

## Struktura

```
WeedSpot/
├── index.html        # mobile app
├── desktop.html      # desktop landing
├── findweed/         # original design bundle
│   ├── README.md
│   ├── chats/        # design conversation transcript
│   └── project/      # original prototype files
└── README.md
```

## Stav

Klikatelný prototyp — žádné reálné API, data jsou hardcoded v souborech. Navržený jako základ pro produkční implementaci.
