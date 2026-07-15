function initializeMovies() {
  const genreDropdown = document.getElementById('genreDropdown');
  const countryDropdown = document.getElementById('countryDropdown');
  const yearDropdown = document.getElementById('yearDropdown');
  const descriptionContainer = document.getElementById('genreDescription');
  const noResults = document.getElementById('noResults');
  const cards = Array.from(document.querySelectorAll('.movie-card'));
  const appContent = document.querySelector('.app-content');
  const movieGrid = document.getElementById('movieGrid');

  const filtersTab = document.getElementById('filtersTab');
  const correlationsTab = document.getElementById('correlationsTab');
  const filterPanel = document.getElementById('filterPanel');
  const moviesPanel = document.querySelector('[data-view-panel="movies"]');
  const correlationsPanel = document.querySelector('[data-view-panel="correlations"]');

  const genreEmojis = {
    'Male Camaraderie': '🫂',
    'Dark Comedy': '🎭',
    'Psychological Thriller': '🧠',
    'Existential Drama': '⏳',
    'Cerebral Crime': '🎯',
    'Intelligent Action': '💥',
    'Surreal Adventure': '👣',
    'Magical Realism': '✨',
    'Dystopian Sci-Fi': '☠️',
    'Film Noir': '🐈‍⬛'
  };

  const genreDescriptions = {
    'Psychological Thriller': "A tense, twisting tale where perception and reality blur, ensnaring both protagonist and viewer in a snaking plotline coiling around an unraveling inner world.",
    'Existential Drama': "A layered narrative where characters confront power, mortality, or the burden of choice, often forcing reckonings with consequence, control, or the void itself.",
    'Film Noir': "A shadowy descent into the underbelly of society, filled with fatale dames and hard-edged antiheroes, riddled with grey ethics and the weight of consequence.",
    'Male Camaraderie': "A rowdy journey of male bonding, innate brotherhood or rivalry-tested mateship, forged through banter, loyalty, and thrilling exploits against all odds.",
    'Magical Realism': "A grounded world subtly laced with supernatural, metaphysical, or unexplained phenomena, seamlessly absorbed into the logic of everyday life.",
    'Cerebral Crime': "An intricate investigation where intellect clashes with deception, unraveling or orchestrating intelligent crimes through razor-sharp deduction and moral tension.",
    'Intelligent Action': "A pulse-pounding rush of explosive set pieces, narrow escapes, and relentless pursuit, orchestrated with cunning strategy and razor-sharp ingenuity.",
    'Surreal Adventure': "A dreamlike odyssey through strange circumstances and unlikely encounters, where the boundaries of the conceivable blur and curiosity leads one tumbling down the rabbit hole.",
    'Dystopian Sci-Fi': "A speculative lens on warped circumstances—within society or the self—where control, truth, and technology blur the boundaries of what it means to be human.",
    'Dark Comedy': "A wry comedy that grapples with grave subjects, mixing humour and melancholy to illuminate the absurd shadows of the human condition.",
  };

  const genreLinks = {
    'Male Camaraderie': [
      { url: 'https://en.wikipedia.org/wiki/Bromantic_comedy', icon: 'wikipedia' },
      { url: 'https://en.wikipedia.org/wiki/Buddy_film', icon: 'wikipedia' },
      { url: 'https://www.imdb.com/search/title/?keywords=male-camaraderie&explore=keywords&sort=year,desc', icon: 'imdb' },
      { url: 'https://search.brave.com/search?q=male+camaraderie+films', icon: 'link' }
    ],
    'Dark Comedy': [
      { url: 'https://en.wikipedia.org/wiki/Black_comedy', icon: 'wikipedia' },
      { url: 'https://www.imdb.com/interest/in0000035/', icon: 'imdb' },
      { url: 'https://www.imdb.com/list/ls066399600/', icon: 'imdb' },
      { url: 'https://www.imdb.com/list/ls052772888/?sort=user_rating%2Cdesc', icon: 'imdb' }
    ],
    'Psychological Thriller': [
      { url: 'https://en.wikipedia.org/wiki/Psychological_thriller', icon: 'wikipedia' },
      { url: 'https://www.imdb.com/interest/in0000182/', icon: 'imdb' },
      { url: 'https://www.imdb.com/search/title/?lists=ls002428615&sort=user_rating,desc', icon: 'imdb' }
    ],
    'Existential Drama': [
      { url: 'https://search.brave.com/search?q=Existential+Drama+genre&summary=1&conversation=d958cbb6d5164758391180', icon: 'link' },
      { url: 'https://search.brave.com/search?q=Philosophical+Drama+list+of+films&summary=1&conversation=b004dc96feb281c1a8db3f', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls027345204/?sort=user_rating%2Cdesc', icon: 'imdb' },
      { url: 'https://www.ranker.com/list/list-of-all-existentialism-movies/raul-cortez?pos=63&ref=listed_on', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls033275136/?sort=user_rating%2Cdesc', icon: 'imdb' },
      { url: 'https://www.imdb.com/list/ls070122193/?sort=user_rating%2Cdesc', icon: 'imdb' },
    ],
    'Cerebral Crime': [
      { url: 'https://www.ranker.com/list/best-smart-clever-movies/ranker-film', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls051221092/?sort=user_rating%2Cdesc', icon: 'imdb' },
      { url: 'https://search.brave.com/search?q=Cerebral+Crime+films&summary=1&conversation=9ce824b1246953746acfcb', icon: 'link' }
    ],
    'Intelligent Action': [
      { url: 'https://www.ranker.com/list/best-intelligent-action-movies/elise-trenton', icon: 'link' },
      { url: 'https://www.listchallenges.com/the-101-best-intelligent-action-movies-ranked', icon: 'link' },
      { url: 'https://search.brave.com/search?q=High-Stakes+Action+films&summary=1&conversation=52ea844f93ebc1746f4c8c', icon: 'link' }
    ],
    'Surreal Adventure': [
      { url: 'https://www.ranker.com/list/surrealism-movies-and-films/davis-williams?pos=1', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls024295709/?sort=user_rating%2Cdesc', icon: 'imdb' },
      { url: 'https://www.imdb.com/list/ls070823747/?sort=user_rating%2Cdesc', icon: 'imdb' }
    ],
    'Magical Realism': [
      { url: 'https://www.imdb.com/list/ls564991576/', icon: 'imdb' },
      { url: 'https://en.wikipedia.org/wiki/Magical_realism', icon: 'wikipedia' },
      { url: 'https://www.ranker.com/list/best-movies-with-magical-realism/ben-pearson?pos=65', icon: 'link' }
    ],
    'Dystopian Sci-Fi': [
      { url: 'https://www.imdb.com/interest/in0000160/', icon: 'imdb' },
      { url: 'https://www.imdb.com/list/ls003911192/?sort=user_rating%2Cdesc', icon: 'imdb' },
      { url: 'https://en.wikipedia.org/wiki/Utopian_and_dystopian_fiction', icon: 'wikipedia' },
      { url: 'https://en.wikipedia.org/wiki/List_of_dystopian_films', icon: 'wikipedia' }
    ],
    'Film Noir': [
      { url: 'https://www.imdb.com/interest/in0000054/', icon: 'imdb' },
      { url: 'https://en.wikipedia.org/wiki/Film_noir', icon: 'wikipedia' }
    ]
  };

  function isoToCountryName(iso) {
    if (!iso) return '';
    try {
      const dn = new Intl.DisplayNames(['en'], { type: 'region' });
      return dn.of(iso) || iso;
    } catch {
      return iso;
    }
  }

  // ---- Populate dropdowns from each card's data attributes ----
  const genres = new Set();
  const countries = new Map(); // iso -> flag
  const allYears = new Set();

  cards.forEach(card => {
    (card.dataset.genres || '').split('|').filter(Boolean).forEach(g => genres.add(g));
    const iso = card.dataset.country;
    if (iso) {
      const flag = card.querySelector('.movie-card-back .flag');
      if (!countries.has(iso)) countries.set(iso, flag ? flag.textContent.trim() : '');
    }
    (card.dataset.years || '').split('|').filter(Boolean).forEach(y => allYears.add(parseInt(y, 10)));
  });

  Array.from(genres).sort().forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre + (genreEmojis[genre] ? ' ' + genreEmojis[genre] : '');
    genreDropdown.appendChild(option);
  });

  Array.from(countries.entries())
    .sort((a, b) => isoToCountryName(a[0]).localeCompare(isoToCountryName(b[0])))
    .forEach(([iso, flag]) => {
      const option = document.createElement('option');
      option.value = iso;
      const name = isoToCountryName(iso);
      option.textContent = flag ? `${name} ${flag}` : name;
      countryDropdown.appendChild(option);
    });

  function addYearOption(label, value) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    yearDropdown.appendChild(option);
  }

  const yearsSortedAsc = Array.from(allYears).sort((a, b) => a - b);
  const yearsSortedDesc = Array.from(allYears).sort((a, b) => b - a);

  if (yearsSortedAsc.length) {
    const minYear = yearsSortedAsc[0];
    const maxYear = yearsSortedAsc[yearsSortedAsc.length - 1];
    const startDecade = Math.floor(minYear / 10) * 10;
    const endDecade = Math.floor(maxYear / 10) * 10;
    for (let d = endDecade; d >= startDecade; d -= 10) {
      addYearOption(`${d}s (${d}-${d + 9})`, `range:${d}-${d + 9}`);
    }
  }
  yearsSortedDesc.forEach(y => addYearOption(String(y), `year:${y}`));

  function matchesYearSelection(cardYears, selectedYearValue) {
    if (!selectedYearValue) return true;
    if (!cardYears.length) return false;
    if (selectedYearValue.startsWith('year:')) {
      const y = parseInt(selectedYearValue.replace('year:', ''), 10);
      return cardYears.includes(y);
    }
    if (selectedYearValue.startsWith('range:')) {
      const [start, end] = selectedYearValue.replace('range:', '').split('-').map(n => parseInt(n, 10));
      return cardYears.some(y => y >= start && y <= end);
    }
    return true;
  }

  // ---- Filtering: single active criterion at a time (picking one resets
  // the other two) — same interaction model as before. Unlike before, this
  // now shows/hides the real grid cards in place instead of writing a
  // separate plain-text list; with nothing selected, the full grid shows
  // (browsing everything is the point of the grid), filters just narrow it.
  function filterMovies() {
    const selectedGenre = genreDropdown.value;
    const selectedCountryISO = countryDropdown.value;
    const selectedYearValue = yearDropdown.value;

    descriptionContainer.innerHTML = '';

    if (selectedGenre && genreDescriptions[selectedGenre]) {
      const descPara = document.createElement('p');
      descPara.innerHTML = genreDescriptions[selectedGenre];
      if (genreLinks[selectedGenre] && genreLinks[selectedGenre].length > 0) {
        let iconsHtml = ' ';
        genreLinks[selectedGenre].forEach(link => {
          let iconHtml = '';
          if (link.icon === 'imdb') {
            iconHtml = `<a href="${link.url}" target="_blank" rel="noopener"><img src="images/imdb.png" alt="IMDB"></a>`;
          } else if (link.icon === 'wikipedia') {
            iconHtml = `<a href="${link.url}" target="_blank" rel="noopener"><img src="images/wikipedia.png" alt="Wikipedia"></a>`;
          } else {
            iconHtml = `<a href="${link.url}" target="_blank" rel="noopener">🔗</a>`;
          }
          iconsHtml += iconHtml;
        });
        descPara.innerHTML += iconsHtml;
      }
      descriptionContainer.appendChild(descPara);
    }

    let visibleCount = 0;
    cards.forEach(card => {
      const cardGenres = (card.dataset.genres || '').split('|').filter(Boolean);
      const matchesGenre = !selectedGenre || cardGenres.includes(selectedGenre);

      const matchesCountry = !selectedCountryISO || card.dataset.country === selectedCountryISO;

      const cardYears = (card.dataset.years || '').split('|').filter(Boolean).map(y => parseInt(y, 10));
      const matchesYear = matchesYearSelection(cardYears, selectedYearValue);

      const visible = matchesGenre && matchesCountry && matchesYear;
      card.classList.toggle('hidden', !visible);
      if (visible) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
  }

  let isResetting = false;
  function resetDropdown(dropdown) {
    dropdown.value = '';
  }

  genreDropdown.addEventListener('change', () => {
    if (isResetting) return;
    isResetting = true;
    resetDropdown(countryDropdown);
    resetDropdown(yearDropdown);
    isResetting = false;
    filterMovies();
  });

  countryDropdown.addEventListener('change', () => {
    if (isResetting) return;
    isResetting = true;
    resetDropdown(genreDropdown);
    resetDropdown(yearDropdown);
    isResetting = false;
    filterMovies();
  });

  yearDropdown.addEventListener('change', () => {
    if (isResetting) return;
    isResetting = true;
    resetDropdown(genreDropdown);
    resetDropdown(countryDropdown);
    isResetting = false;
    filterMovies();
  });

  filterMovies();

  // ---- Grid sizing: on desktop, compute a card width that makes exactly
  // 3 rows fill the content area's height, so the first screenful of
  // movies never needs scrolling — column count is then whatever fits that
  // width naturally (auto-fill in the CSS), not a hardcoded guess. Only
  // runs above the mobile breakpoint; below it the CSS media queries take
  // over with their own fixed column counts and this is a no-op.
  function fitMovieGrid() {
    if (window.innerWidth <= 768) return;
    if (!moviesPanel.classList.contains('active')) return;

    const cols = 6, rows = 3;
    const contentStyle = getComputedStyle(appContent);
    const availableHeight = appContent.clientHeight
      - parseFloat(contentStyle.paddingTop)
      - parseFloat(contentStyle.paddingBottom);
    const availableWidth = appContent.clientWidth
      - parseFloat(contentStyle.paddingLeft)
      - parseFloat(contentStyle.paddingRight);

    const gridStyle = getComputedStyle(movieGrid);
    const rowGap = parseFloat(gridStyle.rowGap) || 18;
    const colGap = parseFloat(gridStyle.columnGap) || 18;

    // A fixed 6x3 grid has two independent constraints — 6 columns must fit
    // the available width, and 3 rows must fit the available height. Since
    // cards are locked to a 2:3 aspect ratio, satisfying both at once means
    // taking whichever constraint is more restrictive (the smaller of the
    // two candidate widths), not just picking one dimension and hoping.
    const widthPerCol = (availableWidth - colGap * (cols - 1)) / cols;
    let heightPerRow = (availableHeight - rowGap * (rows - 1)) / rows;
    if (!isFinite(heightPerRow) || heightPerRow < 100) heightPerRow = 100;
    const widthFromHeight = heightPerRow / 1.5; // aspect-ratio 2/3 (w:h) => h = 1.5w

    const cardWidth = Math.max(100, Math.min(widthPerCol, widthFromHeight));
    movieGrid.style.setProperty('--card-w', cardWidth + 'px');
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      fitMovieGrid();
      fitCorrelationsText();
    }, 150);
  });

  // ---- View tabs: Filters (collapsible panel) / Correlations (swaps the
  // grid out for the essay) — independent controls, not a linked tab
  // group: Filters just opens/closes its dropdown panel without touching
  // which content view is showing; Correlations swaps the content view and,
  // since filters only apply to the movie grid, closes the filter panel
  // when switching away from it. ----
  function setFiltersOpen(open) {
    filterPanel.hidden = !open;
    filtersTab.setAttribute('aria-expanded', String(open));
    filtersTab.classList.toggle('active', open);
  }

  // Shrinks each subarea's own font-size (its h3/p sizes are in em, so they
  // scale down together) until its content actually fits without needing
  // to scroll — a fixed font-size can't guarantee this since the "Society
  // vs. the Self" paragraph is long enough to overflow at normal reading
  // size on plenty of real desktop window heights. Resets to the CSS
  // default first so growing the window back doesn't leave text stuck
  // small from an earlier, shorter measurement.
  function fitCorrelationsText() {
    if (!correlationsPanel.classList.contains('active')) return;
    if (window.innerWidth <= 768) return; // mobile: natural scroll is fine
    const subareas = correlationsPanel.querySelectorAll('.correlations-subarea');
    subareas.forEach(area => {
      area.style.fontSize = '';
      let guard = 0;
      while (area.scrollHeight > area.clientHeight + 1 && guard < 120) {
        const current = parseFloat(getComputedStyle(area).fontSize);
        const next = current - 0.5;
        if (next < 6) break;
        area.style.fontSize = next + 'px';
        guard++;
      }
    });
  }

  function setCorrelationsShowing(showing) {
    correlationsPanel.classList.toggle('active', showing);
    moviesPanel.classList.toggle('active', !showing);
    correlationsTab.setAttribute('aria-pressed', String(showing));
    correlationsTab.classList.toggle('active', showing);
    if (showing) {
      setFiltersOpen(false);
      fitCorrelationsText();
    } else {
      fitMovieGrid();
    }
  }

  filtersTab.addEventListener('click', () => {
    setFiltersOpen(filterPanel.hidden);
  });

  correlationsTab.addEventListener('click', () => {
    setCorrelationsShowing(!correlationsPanel.classList.contains('active'));
  });

  fitMovieGrid();

  // ---- Flip-card interaction ----
  // Cards are role="button" + tabindex (not a real <button>) because the
  // back face contains real <a> links, and a <button> can't legally contain
  // interactive content. Clicks on those links are left alone (not
  // intercepted) so they navigate normally; only clicks/keypresses on the
  // card itself toggle the flip.
  function toggleFlip(card) {
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
  }

  cards.forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      toggleFlip(card);
    });
    card.addEventListener('keydown', e => {
      if (e.target !== card) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        toggleFlip(card);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeMovies);
