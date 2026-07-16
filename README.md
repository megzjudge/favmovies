# Favourite Movies

Megan Judge's personal list of favourite films and series — a static site with no build step, no framework, and no backend.

## What it is

78 movies and series, each shown as a poster card in a responsive grid. Click a card to flip it (front: poster; back: year(s), genre, runtime, and links out to IMDB / JustWatch / Wikipedia / YouTube). Filter the grid by genre, country, or year via the **Filters** panel, or switch to the **Correlations** tab for a short essay on the recurring themes across the list.

## Stack

Plain HTML/CSS/JS — no dependencies, no package.json, no build tooling. Open `index.html` in a browser and it works.

- `index.html` — page structure + all 78 card entries
- `styles.css` — layout, theming, the flip-card animation
- `script.js` — filter logic, view-tab switching, and the grid/correlations auto-fit sizing described below
- `images/` — posters + link icons
- `fonts/` — Rosehot (titles), via [dafont.com](https://www.dafont.com/rosehot.font)

## Layout notes

The page is a fixed-height app shell: a locked header (title, view tabs, filter panel) on top, and an independently-scrolling content area below it filling the rest of the viewport (`100dvh`).

- **Movies view**: the grid is sized in JS to fit a clean 6×3 screenful without scrolling on desktop — column/row size is computed from whichever is more restrictive, the available width ÷ 6 or the available height ÷ 3, so the grid works at any window size rather than assuming one.
- **Correlations view**: sized to fit the content area's height on desktop with zero scrolling — each of the two theme boxes shrinks its own font size (in JS) until its text actually fits, since the essay is long enough to overflow at normal reading size on plenty of real window heights.

## Design decisions (styles.css)

The whole palette sits on one deep navy (`rgb(10, 54, 107)`) with a mid-blue accent (`rgb(74, 144, 226)`) used consistently for borders, links, and highlights — nothing else competes with it, so the posters themselves stay the visually loudest thing on the page. Card backs use a `radial-gradient` from a lighter blue at the top down to that same navy, which reads as a subtle glow behind the text rather than a flat panel. Buttons (view tabs, dropdowns) follow the same pattern: navy fill, blue border, and a mid-blue solid fill only when active/hovered, so state changes are obvious without needing a whole second colour.

**Rosehot** (a decorative cursive font) is reserved entirely for titles — the site h1, card-back movie titles, and the correlations subarea headings — while body text stays in a plain sans-serif (Franklin Gothic Medium) for actual readability. Titles also get a `text-shadow` (2px offset, soft blur) to keep them legible over the gradient background regardless of which part of the gradient they land on; body text gets a lighter 1px shadow for the same reason, just less aggressive since it's not sitting over as much gradient variation.

Scrollbars are styled to match the palette rather than left as the browser default (`scrollbar-color`/`-webkit-scrollbar-thumb` with the same navy/blue pair, plus a gradient on the thumb itself) — done on `.app-content` and each `.correlations-subarea`, the two places that actually scroll now that the page itself is a fixed-height app shell.

The flip-hint icon (⟲, bottom-right of each poster) replaced what used to be a title + flag overlay on the card front — it's deliberately small and low-opacity (partial-alpha color/background/border) so it reads as a subtle affordance rather than competing with the poster art; the actual title and country flag live on the back, where there's room for them without a text-over-image legibility fight. The flag itself just inherits the back's title-sized `text-shadow` treatment rather than getting its own styling — one line of code, since it's already sitting in the same `<h3>`.

Year/Runtime/Genre values on the card back are italicised (their labels aren't) to visually separate "field name" from "field value" without needing a colon-heavy or all-caps treatment — a `<span class="detail-value">` around just the value, `font-style: italic` on that span alone. Link icons (IMDB/JustWatch/Wikipedia/YouTube) are fixed at 26px — small enough not to dominate the card back's limited space, big enough to stay tappable on mobile.

The footer deliberately lives *inside* the scrollable content area rather than pinned to the bottom of the viewport. A fixed footer would either float permanently over the last row of posters (visually cluttering the exact area the grid is designed to fill cleanly) or need its own carved-out strip of the fixed-height app shell, which would eat into the height math the grid and Correlations both depend on to fit without scrolling. Letting it scroll away with the rest of the content — appearing only once you've actually reached the end — keeps the "one clean screenful" feeling on both views intact.

## How it works (script.js)

**Flip cards** are driven by a `.is-flipped` class toggle, not a checkbox/radio hack — `transform: rotateY(180deg)` on `.movie-card-inner` with `transform-style: preserve-3d` and `backface-visibility: hidden` on each face does the actual 3D flip in CSS; the JS just listens for a click or Enter/Space (cards are `role="button"` + `tabindex`, so they're keyboard-operable) and toggles the class. Clicks on the real `<a>` links on the back face are deliberately *not* intercepted, so they navigate normally instead of re-flipping the card.

**Grid sizing** is computed, not guessed. `fitMovieGrid()` measures the content area's actual available width and height, then works out whichever is more restrictive — width ÷ 6 columns, or height ÷ 3 rows (converted through the card's fixed 2:3 aspect ratio) — and sets that as a `--card-w` custom property the grid's `grid-template-columns` reads from. That's what guarantees a full 6×3 screenful fits on desktop without scrolling, regardless of the exact window size, rather than a fixed pixel width that only happens to work at one resolution. It re-runs on window resize and whenever you switch back from Correlations.

**Filtering** populates the genre/country/year dropdowns by scanning each card's `data-genres`/`data-country`/`data-years` attributes once on load, then a single `filterMovies()` toggles a `.hidden` class on non-matching cards directly — no re-render, no rebuilding the grid. Picking one dropdown resets the other two (single-criterion filtering, by design, not a bug), and Filters/Correlations are independent toggles: opening the filter panel doesn't touch which content view is showing, and switching to Correlations closes the filter panel since it's irrelevant there.

Both Filters and Correlations sit behind a button rather than being permanently visible for the same underlying reason: the 6×3 grid's fit-without-scrolling math treats the header as one fixed-height block and hands the grid whatever's left. A permanently-open filter bar (or an always-visible essay) would either permanently shrink that remaining space — meaning the grid would have to target something smaller than a true 6×3, undermining the whole point of computing the fit in the first place — or force a layout reflow/rescale every time you opened one, which is exactly the kind of jump the fixed-size grid is designed to avoid. Keeping both collapsed by default means the header's height is predictable and stable, so the grid only ever needs to fit itself once, correctly, against a header that isn't quietly changing size underneath it.

**Correlations text** uses the same "measure, then adjust" approach as the grid: `fitCorrelationsText()` shrinks each theme box's own font-size (its heading/paragraph sizes are in `em`, so they scale down together) in small steps until `scrollHeight` no longer exceeds `clientHeight` — i.e. until the text actually fits with no internal scrolling, rather than assuming a fixed font size will happen to be small enough.

## License

MIT — see [LICENSE](LICENSE).
