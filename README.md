# Favourite Movies

Personal list of favourite films and series — a static site with no build step, no framework, and no backend.

## What it is

78 movies and series, each shown as a poster card in a responsive grid. Click a card to flip it (front: poster; back: year(s), genre, runtime, and links out to IMDB / JustWatch / Wikipedia / YouTube). Filter the grid by genre, country, or year via the **Filters** panel, or switch to the **Correlations** tab for a short essay on the recurring themes across the list.

## Stack

Plain HTML/CSS/JS — no dependencies, no package.json, no build tooling. Open `index.html` in a browser and it works.

- `index.html` — page shell only; the movie grid is rendered into an empty container at runtime
- `movies.json` — the 78 movie/series entries (title, year(s), genre(s), country, runtime(s), poster, links) — edit this to add/change a movie, not the HTML
- `styles.css` — layout, theming, the flip-card animation
- `script.js` — fetches `movies.json` and renders the cards, then does filter logic, view-tab switching, and the grid/correlations auto-fit sizing described below
- `images/` — posters + link icons
- `fonts/` — Rosehot (titles), via [dafont.com](https://www.dafont.com/rosehot.font)

## Layout notes

The page is a fixed-height app shell: a locked header (title, view tabs, filter panel) on top, and an independently-scrolling content area below it filling the rest of the viewport (`100dvh`).

- **Movies view**: the grid is sized in JS to fit a clean 6×3 screenful without scrolling on desktop — column/row size is computed from whichever is more restrictive, the available width ÷ 6 or the available height ÷ 3, so the grid works at any window size rather than assuming one.
- **Correlations view**: sized to fit the content area's height on desktop with zero scrolling — each of the two theme boxes shrinks its own font size (in JS) until its text actually fits, since the essay is long enough to overflow at normal reading size on plenty of real window heights.

## Design decisions (styles.css)

- One navy/mid-blue palette throughout (borders, links, buttons, gradients) so the posters stay the visually loudest thing on the page.
- **Rosehot** for titles only (h1, card-back titles, correlations headings); body text stays in a plain sans-serif for readability. Titles get a stronger `text-shadow` to stay legible over the gradient backgrounds.
- Scrollbars are palette-styled, not left as browser default.
- The flip-hint icon (⟲) replaced a title/flag overlay on the card front — small and low-opacity so it doesn't compete with the poster; title/flag live on the back where there's room.
- Year/Runtime/Genre values are italicised (labels aren't), to separate field from value without extra punctuation.
- The footer lives *inside* the scrollable area, not pinned — a fixed footer would sit permanently over the last row of posters or the essay text, cluttering exactly the content it's supposed to stay out of the way of. Letting it scroll away keeps both views reading as one clean screenful.

## How it works (script.js)

- **Flip cards**: a `.is-flipped` class toggle drives a CSS 3D transform; works via click or Enter/Space. Links on the back face aren't intercepted, so they navigate normally instead of re-flipping the card.
- **Grid sizing is computed, not guessed**: `fitMovieGrid()` measures available width/height of the screen and takes whichever is more restrictive (width ÷ 6 columns vs. height ÷ 3 rows, via the card's 2:3 aspect ratio) to guarantee a full 6×3 screenful fits on desktop at any window size.
- **Filtering** toggles a `.hidden` class on non-matching cards from `data-genres`/`data-country`/`data-years` attributes — no re-render. Picking one dropdown resets the other two (single-criterion, by design).
- **Filters/Correlations sit behind a button** rather than staying open, because the grid's fit math treats the header as one fixed-height block — a permanently-open panel would shrink or destabilise that space and undermine the fit-without-scrolling goal.
- **Images lazy-load** (native `loading="lazy"`, not custom JS) — with 78 posters plus link icons on the page, only the ones actually near the viewport get fetched up front.
- **Correlations text** uses the same measure-then-adjust approach: `fitCorrelationsText()` shrinks each box's own font-size until it fits with no scrolling.

## License

MIT — see [LICENSE](LICENSE).
