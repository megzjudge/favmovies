function initializeDropdown() {
  const genreDropdown = document.getElementById('genreDropdown');
  const countryDropdown = document.getElementById('countryDropdown');
  const yearDropdown = document.getElementById('yearDropdown');

  const movieListContainer = document.getElementById('movieList');
  const descriptionContainer = document.getElementById('genreDescription');
  const movieSections = document.querySelectorAll('section .page');

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

  function isNonMovieSection(titleText) {
    const t = (titleText || '').trim();
    return (
      t === 'Filter Movies by Genre' ||
      t.startsWith('Correlations') // catches Correlations 1/3, 2/3, 3/3, etc
    );
  }

  function getFieldValue(section, label) {
    const p = Array.from(section.querySelectorAll('.series-details p'))
      .find(el => el.textContent.trim().startsWith(label + ':'));
    if (!p) return '';
    return p.textContent.replace(label + ':', '').trim();
  }

  function parseList(value) {
    return value
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
  }

  // ----- COUNTRY (flag-only in h2) -----
  function flagEmojiToISO(flag) {
    if (!flag) return '';

    const f = flag.trim();
    const cps = Array.from(f).map(ch => ch.codePointAt(0));

    // UK home nations subdivision flags (England/Scotland/Wales) are "tag sequence" flags.
    // They begin with BLACK FLAG (U+1F3F4). Treat them as GB so they group under UK.
    if (cps.length >= 1 && cps[0] === 0x1F3F4) {
      return 'GB';
    }

    // Standard country flags are 2 regional indicator symbols
    if (cps.length === 2) {
      const A = 0x1F1E6;
      const isRI1 = cps[0] >= A && cps[0] <= A + 25;
      const isRI2 = cps[1] >= A && cps[1] <= A + 25;
      if (isRI1 && isRI2) {
        return String.fromCharCode(cps[0] - A + 65) + String.fromCharCode(cps[1] - A + 65);
      }
    }

    return '';
  }

  // Make sure we display a consistent flag for each ISO group (e.g., GB always shows 🇬🇧)
  function normalizeFlagForISO(iso, rawFlag) {
    if (iso === 'GB') return '🇬🇧';
    return (rawFlag || '').trim();
  }

  function isoToCountryName(iso) {
    if (!iso) return '';
    try {
      const dn = new Intl.DisplayNames(['en'], { type: 'region' });
      return dn.of(iso) || iso;
    } catch {
      return iso;
    }
  }

  function getCountryISOFromSection(section) {
    const h2 = section.querySelector('h2');
    if (!h2) return '';
    const flagEl = h2.querySelector('.flag');
    const flag = flagEl ? flagEl.textContent.trim() : '';
    return flagEmojiToISO(flag);
  }

  // ----- YEAR parsing -----
  // Supports:
  //  - "Year: 2018"
  //  - "Year: 2018-2024" => expands to [2018,2019,2020,2021,2022,2023,2024]
  //  - "Year: 2018, 2020, 2024" => [2018,2020,2024]
  //  - mixed text; grabs all 4-digit years and any ranges
  function parseYearsFromSection(section) {
    const yearText = getFieldValue(section, 'Year');
    if (!yearText) return [];

    const years = new Set();

    // 1) Expand ranges like 2018-2024 (also supports en dash/em dash)
    const rangeRe = /\b(18|19|20)\d{2}\s*[-–—]\s*(18|19|20)\d{2}\b/g;
    let m;
    while ((m = rangeRe.exec(yearText)) !== null) {
      const start = parseInt(m[0].slice(0, 4), 10);
      const end = parseInt(m[0].slice(m[0].length - 4), 10);
      const a = Math.min(start, end);
      const b = Math.max(start, end);
      for (let y = a; y <= b; y++) years.add(y);
    }

    // 2) Add any standalone years mentioned
    const yearRe = /\b(18|19|20)\d{2}\b/g;
    while ((m = yearRe.exec(yearText)) !== null) {
      years.add(parseInt(m[0], 10));
    }

    return Array.from(years).sort((a, b) => a - b);
  }

  // ----- Emoji injection for Genre: paragraphs -----
  function addEmojisToGenreParagraphs() {
    movieSections.forEach(section => {
      const genreP = Array.from(section.querySelectorAll('.series-details p')).find(p =>
        p.textContent.startsWith('Genre:')
      );

      if (genreP) {
        const originalText = genreP.textContent.trim();
        const genresPart = originalText.replace('Genre: ', '').trim();
        const genreList = genresPart.split(',').map(g => g.trim());

        genreP.innerHTML = 'Genre: ';

        genreList.forEach((genre, index) => {
          if (index > 0) genreP.appendChild(document.createTextNode(', '));

          genreP.appendChild(document.createTextNode(genre));

          if (genreEmojis[genre]) {
            genreP.appendChild(document.createTextNode(' '));
            const emojiSpan = document.createElement('span');
            emojiSpan.textContent = genreEmojis[genre];
            emojiSpan.style.textShadow = '2px 2px 5px rgba(255, 255, 255, 0.7)';
            genreP.appendChild(emojiSpan);
          }
        });
      }
    });
  }

  // ----- Collect distinct values -----
  const genres = new Set();
  const countries = new Map(); // iso -> { name, flag }
  const allYears = new Set();

  movieSections.forEach(section => {
    const titleElement = section.querySelector('h2');
    if (!titleElement) return;

    const t = titleElement.textContent.trim();
    if (isNonMovieSection(t)) return;

    // Genres
    extractGenresFromSection(section).forEach(g => genres.add(g));

    // Countries from flag
    const iso = getCountryISOFromSection(section);
    if (iso) {
      const rawFlag = titleElement.querySelector('.flag')?.textContent.trim() || '';
      const flag = normalizeFlagForISO(iso, rawFlag);

      if (!countries.has(iso)) {
        countries.set(iso, { name: isoToCountryName(iso), flag });
      } else {
        // If we already have it, still ensure GB shows 🇬🇧
        const existing = countries.get(iso);
        if (iso === 'GB' && existing.flag !== '🇬🇧') {
          countries.set(iso, { ...existing, flag: '🇬🇧' });
        }
      }
    }

    // Years
    const ys = parseYearsFromSection(section);
    ys.forEach(y => allYears.add(y));
  });

  // ----- Populate dropdowns -----

  // Genre options
  Array.from(genres).sort().forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre + (genreEmojis[genre] ? ' ' + genreEmojis[genre] : '');
    if (genreEmojis[genre]) {
      option.style.textShadow = '2px 2px 5px rgba(255, 255, 255, 0.7)';
    }
    genreDropdown.appendChild(option);
  });

  // Country options
  Array.from(countries.entries())
    .sort((a, b) => a[1].name.localeCompare(b[1].name))
    .forEach(([iso, info]) => {
      const option = document.createElement('option');
      option.value = iso; // filter by ISO
      option.textContent = info.flag ? `${info.name} ${info.flag}` : info.name;
      countryDropdown.appendChild(option);
    });

  // Year options: include BOTH individual years and decade groups
  function addYearOption(label, value) {
    const option = document.createElement('option');
    option.value = value; // "year:2018" or "range:2000-2009"
    option.textContent = label;
    yearDropdown.appendChild(option);
  }

  const yearsSortedAsc = Array.from(allYears).sort((a, b) => a - b);
  const yearsSortedDesc = Array.from(allYears).sort((a, b) => b - a);

  // Decade groups first (if any years exist)
  if (yearsSortedAsc.length) {
    const minYear = yearsSortedAsc[0];
    const maxYear = yearsSortedAsc[yearsSortedAsc.length - 1];
    const startDecade = Math.floor(minYear / 10) * 10;
    const endDecade = Math.floor(maxYear / 10) * 10;

    for (let d = endDecade; d >= startDecade; d -= 10) {
    addYearOption(`${d}s (${d}-${d + 9})`, `range:${d}-${d + 9}`);
    }
  }

  // Then individual years (descending)
  yearsSortedDesc.forEach(y => addYearOption(String(y), `year:${y}`));

  // Add emojis to Genre: paragraphs after collecting
  addEmojisToGenreParagraphs();

    function extractGenresFromSection(section) {
        const genreP = Array.from(section.querySelectorAll('.series-details p'))
            .find(p => p.textContent.trim().startsWith('Genre:'));
        if (!genreP) return [];

        // Use textContent, then remove emoji characters only (do NOT remove words)
        const raw = genreP.textContent.replace('Genre:', '').trim();

        // Remove common emoji ranges (keeps letters/spaces/punctuation intact)
        const noEmoji = raw.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '').trim();

        return noEmoji.split(',').map(s => s.trim()).filter(Boolean);
    }

  // ----- Descriptions / links (your originals) -----
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

  // ----- Filtering helpers -----
  function matchesYearSelection(movieYears, selectedYearValue) {
    if (!selectedYearValue) return true;
    if (!movieYears || movieYears.length === 0) return false;

    if (selectedYearValue.startsWith('year:')) {
      const y = parseInt(selectedYearValue.replace('year:', ''), 10);
      return movieYears.includes(y);
    }

    if (selectedYearValue.startsWith('range:')) {
      const range = selectedYearValue.replace('range:', '');
      const [start, end] = range.split('-').map(n => parseInt(n, 10));
      return movieYears.some(y => y >= start && y <= end);
    }

    return true;
  }

  // ----- Main filter -----
  window.filterMovies = function () {
    const selectedGenre = genreDropdown.value;
    const selectedCountryISO = countryDropdown.value;
    const selectedYearValue = yearDropdown.value;

    // Clear existing results
    movieListContainer.innerHTML = '';
    descriptionContainer.innerHTML = '';

    // IMPORTANT: lock description position before adding anything
    ensureDescriptionAboveResults();

    // Genre description (unchanged)
    if (selectedGenre && genreDescriptions[selectedGenre]) {
      const descPara = document.createElement('p');
      descPara.innerHTML = genreDescriptions[selectedGenre];

      if (genreLinks[selectedGenre] && genreLinks[selectedGenre].length > 0) {
        let iconsHtml = ' ';
        genreLinks[selectedGenre].forEach(link => {
          let iconHtml = '';
          if (link.icon === 'imdb') {
            iconHtml = `<a href="${link.url}" target="_blank"><img src="/images/imdb.png" alt="IMDB" style="width:1.2em;height:1.2em;vertical-align:middle;margin:0 2px;"></a>`;
          } else if (link.icon === 'wikipedia') {
            iconHtml = `<a href="${link.url}" target="_blank"><img src="/images/wikipedia.png" alt="Wikipedia" style="width:1.2em;height:1.2em;vertical-align:middle;margin:0 2px;"></a>`;
          } else {
            iconHtml = `<a href="${link.url}" target="_blank" style="margin:0 2px;">🔗</a>`;
          }
          iconsHtml += iconHtml;
        });
        descPara.innerHTML += iconsHtml;
      }

      descriptionContainer.appendChild(descPara);
    }

    let hasMovies = false;

    movieSections.forEach(section => {
      const titleElement = section.querySelector('h2');
      if (!titleElement) return;

      const t = titleElement.textContent.trim();
      if (isNonMovieSection(t)) return;

      // Title (strip flag for display list)
      const titleClone = titleElement.cloneNode(true);
      const flagSpan = titleClone.querySelector('.flag');
      if (flagSpan) flagSpan.remove();
      const title = titleClone.textContent.trim();

      // Genre match
      const movieGenres = extractGenresFromSection(section);
      const matchesGenre = !selectedGenre || movieGenres.includes(selectedGenre);

      // Country match (flag-only)
      const movieCountryISO = getCountryISOFromSection(section);
      const matchesCountry = !selectedCountryISO || movieCountryISO === selectedCountryISO;

      // Year match (multi-year inclusive)
      const movieYears = parseYearsFromSection(section);
      const matchesYear = matchesYearSelection(movieYears, selectedYearValue);

      if (matchesGenre && matchesCountry && matchesYear) {
        const movieItem = document.createElement('p');
        movieItem.textContent = title;
        movieListContainer.appendChild(movieItem);
        hasMovies = true;
      }
    });

    // IMPORTANT: do NOT use movieListContainer.innerHTML here (it would delete the description container)
    if (!hasMovies) {
      const noMovies = document.createElement('p');
      noMovies.textContent = 'No movies found.';
      movieListContainer.appendChild(noMovies);
    }
  };

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

  // initial render
  filterMovies();
}

document.addEventListener('DOMContentLoaded', initializeDropdown);
