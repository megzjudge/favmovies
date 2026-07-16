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

## License

MIT — see [LICENSE](LICENSE).
