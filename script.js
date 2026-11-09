  // ==========================================
  // GENRE EMOJIS
  // ==========================================

  const genreEmojis = {
    'Male Camaraderie': '🫂',
    'Dark Comedy': '🎭',
    'Psychological Thriller': '🧠',
    'Existential Drama': '⏳',
    'Cerebral Crime': '🎯',
    'Intelligent Action': '💥',
    'High-Stakes Action': '⏱️',
    'Surreal Adventure': '👣',
    'Rebellion Adventure': '🔥',
    'Magical Realism': '✨',
    'Dystopian Sci-Fi': '☠️',
    'Film Noir': '🐈‍⬛',
    'Grumpy x Sunshine': '🐝'
  };


  // ==========================================
  // GENRE DESCRIPTIONS
  // ==========================================

  const genreDescriptions = {
    'Psychological Thriller': "A tense, twisting tale where perception and reality blur, ensnaring both protagonist and viewer in a snaking plotline coiling around an unraveling inner world.",
    'Existential Drama': "A layered narrative where characters confront power, mortality, or the burden of choice, often forcing reckonings with consequence, control, or the void itself.",
    'Film Noir': "A shadowy descent into the underbelly of society, filled with fatale dames and hard-edged antiheroes, riddled with grey ethics and the weight of consequence.",
    'Male Camaraderie': "A rowdy journey of male bonding, innate brotherhood or rivalry-tested mateship, forged through banter, loyalty, and thrilling exploits against all odds.",
    'Magical Realism': "A grounded world subtly laced with supernatural, metaphysical, or unexplained phenomena, seamlessly absorbed into the logic of everyday life.",
    'Cerebral Crime': "An intricate investigation where intellect clashes with deception, unraveling or orchestrating intelligent crimes through razor-sharp deduction and moral tension.",
    'Intelligent Action': "A pulse-pounding rush of explosive set pieces, narrow escapes, and relentless pursuit, orchestrated with cunning strategy and razor-sharp ingenuity.",
    'High-Stakes Action': "A raw, intense, pulse-increasing confrontation where the gun is already in hand and everything is running against the clock, room holding its breath and seconds from catastrophe.",
    'Surreal Adventure': "A dreamlike odyssey through strange circumstances and unlikely encounters, where the boundaries of the conceivable blur and curiosity leads one tumbling down the rabbit hole.",
    'Rebellion Adventure': "A defiant refusal to be broken or claimed, the adventure of rebellion itself a journey — fought across open terrain or through the serpentine layers of the Self.",
    'Dystopian Sci-Fi': "A speculative lens on warped circumstances—within society or the self—where control, truth, and technology blur the boundaries of what it means to be human.",
    'Dark Comedy': "A wry comedy that grapples with grave subjects, mixing humour and melancholy to illuminate the absurd shadows of the human condition.",
    'Grumpy x Sunshine': "."
  };


  // ==========================================
  // GENRE LINKS
  // ==========================================

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
      { url: 'https://www.imdb.com/list/ls070122193/?sort=user_rating%2Cdesc', icon: 'imdb' }
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

    'High-Stakes Action': [
      { url: 'https://shebudgets.com/lifestyle/entertainment/high-stakes-action-movies-where-one-hero-does-it-all/', icon: 'link' },
      { url: 'https://www.flyingwrestler.com/2017/01/what-are-the-stakes/', icon: 'link' },
      { url: 'https://theactionelite.com/how-high-stakes-scenes-define-great-action-movies/', icon: 'link' },
      { url: 'https://www.theupcoming.co.uk/2025/04/08/the-best-films-set-in-the-world-of-high-stakes-entertainment/', icon: 'link' }
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
    ],

    'Grumpy x Sunshine': [
      { url: 'https://collider.com/best-romance-movies-grumpy-sunshine-ranked/', icon: 'link' },
      { url: 'https://lissag7.medium.com/my-favorite-grumpy-sunshine-romances-7811eeee3602', icon: 'link' },
      { url: 'http://archive.today/2026.03.29-210042/https://www.canberratimes.com.au/story/9014307/author-natalie-murrays-top-five-grumpy-sunshine-romance-movies/', icon: 'link' },
      { url: 'https://movieweb.com/iconic-cheerful-meets-grumpy-romance-movies/', icon: 'link' }
    ]
  };


// ==========================================
// JSON RENDERING
// ==========================================

async function renderMovieCards() {
  const movieGrid = document.getElementById('movieGrid');

  const res = await fetch('movies.json');

  if (!res.ok) {
    throw new Error('Unable to load movies.json');
  }

  const data = await res.json();

  // Support both the original array format and
  // the new separated movies/compactMovies format.
  const featuredMovies = Array.isArray(data)
    ? []
    : (data.featuredMovies || []);
  
  const movies = Array.isArray(data)
    ? data
    : (data.movies || []);
  
  const compactMovies = Array.isArray(data)
    ? []
    : (data.compactMovies || []);

  // Render the main movie collection.
  movieGrid.innerHTML = movies
    .map(movie => buildCardHtml(movie))
    .join('');

  // Create the compact subsection.
  let compactSection = document.getElementById(
    'compactMovieSection'
  );

  if (!compactSection) {
    compactSection = document.createElement('section');

    compactSection.id = 'compactMovieSection';
    compactSection.className =
      'grid-section compact-grid-section';

    compactSection.innerHTML = `
      <div id="compactMovieGrid" class="compact-movie-grid"></div>
    `;

    const mainSection = movieGrid.closest('.grid-section');

    if (mainSection) {
      mainSection.insertAdjacentElement(
        'afterend',
        compactSection
      );
    } else {
      movieGrid.insertAdjacentElement(
        'afterend',
        compactSection
      );
    }
  }

  // Render the compact movie collection.
  const compactGrid = document.getElementById(
    'compactMovieGrid'
  );

  compactGrid.innerHTML = compactMovies
    .map(movie => buildCardHtml(movie, true))
    .join('');

  compactSection.hidden = compactMovies.length === 0;

  // ==========================================
  // RENDER FEATURED MOVIE COLLECTION
  // ==========================================
  
  let featuredSection = document.getElementById(
    'featuredMovieSection'
  );
  
  if (!featuredSection) {
    featuredSection = document.createElement('section');
  
    featuredSection.id = 'featuredMovieSection';
    featuredSection.className =
      'grid-section featured-grid-section';
  
    featuredSection.innerHTML = `
      <div id="featuredMovieGrid" class="featured-movie-grid"></div>
    `;
  
    movieGrid.insertAdjacentElement(
      'beforebegin',
      featuredSection
    );
  }
  
  const featuredGrid = document.getElementById(
    'featuredMovieGrid'
  );
  
  featuredGrid.innerHTML = featuredMovies
    .map(movie => buildCardHtml(movie))
    .join('');
  
  featuredSection.hidden = featuredMovies.length === 0;

}

// ==========================================
// MOVIE DATA AND CARD RENDERING
// ==========================================

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildCardHtml(movie, compact = false) {
  const genresAttr = movie.genres.join('|');
  const yearsAttr = movie.years.join('|');

  const flagHtml = movie.flag
    ? ` <span class="flag">${escapeHtml(movie.flag)}</span>`
    : '';

  const detailsHtml = movie.detailLines.map(d => {
    if (!d.label) return `<p>${escapeHtml(d.value)}</p>`;

    let valueHtml;

    if (d.label === 'Genre') {
      valueHtml = d.value
        .split(', ')
        .map(g => `${genreEmojis[g] ? genreEmojis[g] + ' ' : ''}${escapeHtml(g)}`)
        .join(', ');
    } else if (d.italic) {
      valueHtml = `<span class="detail-value">${escapeHtml(d.value)}</span>`;
    } else {
      valueHtml = escapeHtml(d.value);
    }

    return `<p>${escapeHtml(d.label)}: ${valueHtml}</p>`;
  }).join('');

  const linksHtml = movie.links.map(l =>
    `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener"><img src="${escapeHtml(l.icon)}" alt="${escapeHtml(l.alt)}" loading="lazy"></a>`
  ).join('');

  const cardClass = compact
    ? 'movie-card compact-movie-card'
    : 'movie-card';

  return `<article class="${cardClass}" tabindex="0" role="button" aria-pressed="false" aria-label="Show details for ${escapeHtml(movie.title)}"
    data-genres="${escapeHtml(genresAttr)}" data-country="${escapeHtml(movie.country)}" data-years="${escapeHtml(yearsAttr)}">
    <div class="movie-card-inner">
      <div class="movie-card-face movie-card-front">
        <img src="${escapeHtml(movie.image)}" alt="${escapeHtml(movie.imageAlt)}" loading="lazy">
        <span class="movie-card-flip-hint" aria-hidden="true">&#8635;</span>
      </div>
      <div class="movie-card-face movie-card-back">
        <h3>${escapeHtml(movie.title)}${flagHtml}</h3>
        <div class="movie-card-details">${detailsHtml}</div>
        <div class="movie-card-links">${linksHtml}</div>
      </div>
    </div>
  </article>`;
}

// ==========================================
// INITIALIZATION
// ==========================================

async function initializeMovies() {
  await renderMovieCards();

  const genreDropdown = document.getElementById('genreDropdown');
  const countryDropdown = document.getElementById('countryDropdown');
  const yearDropdown = document.getElementById('yearDropdown');

  const descriptionContainer = document.getElementById('genreDescription');
  const noResults = document.getElementById('noResults');

  // Includes BOTH main and compact movie cards.
  const cards = Array.from(
    document.querySelectorAll('.movie-card')
  );

  const appContent = document.querySelector('.app-content');
  const movieGrid = document.getElementById('movieGrid');

  const filtersTab = document.getElementById('filtersTab');
  const correlationsTab = document.getElementById('correlationsTab');

  const filterPanel = document.getElementById('filterPanel');

  const moviesPanel = document.querySelector(
    '[data-view-panel="movies"]'
  );

  const correlationsPanel = document.querySelector(
    '[data-view-panel="correlations"]'
  );
  
  // ==========================================
  // AUTO-CLOSE FILTERS ON SCROLL
  // ==========================================

  let filtersWereClosedByScroll = false;
  
  function updateFilterVisibility() {
    const firstCard = document.querySelector(
      '#featuredMovieGrid .movie-card'
    ) || movieGrid.querySelector('.movie-card');
  
    if (!firstCard) return;
  
    const scrolledPastFirstCard =
      appContent.scrollTop > 50;
  
    if (scrolledPastFirstCard && !filtersWereClosedByScroll) {
      const hasActiveFilter =
        genreDropdown.value ||
        countryDropdown.value ||
        yearDropdown.value;
  
      if (!hasActiveFilter && !filterPanel.hidden) {
        setFiltersOpen(false);
      }
  
      descriptionContainer.hidden = true;
  
      filtersWereClosedByScroll = true;
    }
  
    if (!scrolledPastFirstCard) {
      filtersWereClosedByScroll = false;
      descriptionContainer.hidden = false;
    }
  }     
  
  let scrollTicking = false;
  
  appContent.addEventListener('scroll', () => {
    if (scrollTicking) return;
  
    scrollTicking = true;
  
    requestAnimationFrame(() => {
      updateFilterVisibility();
      scrollTicking = false;
    });
  }, { passive: true });

updateFilterVisibility();

// ==========================================
// COUNTRY NAME CONVERSION
// ==========================================

  function isoToCountryName(iso) {
    if (!iso) return '';

    try {
      const dn = new Intl.DisplayNames(['en'], {
        type: 'region'
      });

      return dn.of(iso) || iso;
    } catch {
      return iso;
    }
  }


  // ==========================================
  // POPULATE DROPDOWNS
  // ==========================================

  const genreCounts = new Map();
  const countries = new Map();
  const allYears = new Set();

  cards.forEach(card => {
    (card.dataset.genres || '')
      .split('|')
      .filter(Boolean)
      .forEach(g => {
        genreCounts.set(g, (genreCounts.get(g) || 0) + 1);
      });

    const iso = card.dataset.country;

    if (iso) {
      const flag = card.querySelector(
        '.movie-card-back .flag'
      );

      if (!countries.has(iso)) {
        countries.set(
          iso,
          flag ? flag.textContent.trim() : ''
        );
      }
    }

    (card.dataset.years || '')
      .split('|')
      .filter(Boolean)
      .forEach(y => allYears.add(parseInt(y, 10)));
  });


  Array.from(genreCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach(([genre, count]) => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent =
        `${genre}${genreEmojis[genre] ? ' ' + genreEmojis[genre] : ''} (${count})`;
      genreDropdown.appendChild(option);
    });   


  Array.from(countries.entries())
    .sort((a, b) =>
      isoToCountryName(a[0]).localeCompare(
        isoToCountryName(b[0])
      )
    )
    .forEach(([iso, flag]) => {
      const option = document.createElement('option');

      option.value = iso;

      const name = isoToCountryName(iso);

      option.textContent = flag
        ? `${name} ${flag}`
        : name;

      countryDropdown.appendChild(option);
    });


  function addYearOption(label, value) {
    const option = document.createElement('option');

    option.value = value;
    option.textContent = label;

    yearDropdown.appendChild(option);
  }


  const yearsSortedAsc = Array.from(allYears)
    .sort((a, b) => a - b);

  const yearsSortedDesc = Array.from(allYears)
    .sort((a, b) => b - a);


  if (yearsSortedAsc.length) {
    const minYear = yearsSortedAsc[0];
    const maxYear = yearsSortedAsc[yearsSortedAsc.length - 1];

    const startDecade = Math.floor(minYear / 10) * 10;
    const endDecade = Math.floor(maxYear / 10) * 10;

    for (
      let d = endDecade;
      d >= startDecade;
      d -= 10
    ) {
      addYearOption(
        `${d}s (${d}-${d + 9})`,
        `range:${d}-${d + 9}`
      );
    }
  }

  yearsSortedDesc.forEach(y =>
    addYearOption(String(y), `year:${y}`)
  );


  // ==========================================
  // YEAR FILTERING
  // ==========================================

  function matchesYearSelection(
    cardYears,
    selectedYearValue
  ) {
    if (!selectedYearValue) return true;

    if (!cardYears.length) return false;

    if (selectedYearValue.startsWith('year:')) {
      const y = parseInt(
        selectedYearValue.replace('year:', ''),
        10
      );

      return cardYears.includes(y);
    }

    if (selectedYearValue.startsWith('range:')) {
      const [start, end] = selectedYearValue
        .replace('range:', '')
        .split('-')
        .map(n => parseInt(n, 10));

      return cardYears.some(
        y => y >= start && y <= end
      );
    }

    return true;
  }


  // ==========================================
  // MOVIE FILTERING
  // ==========================================

  function filterMovies() {
    const selectedGenre = genreDropdown.value;
    const selectedCountryISO = countryDropdown.value;
    const selectedYearValue = yearDropdown.value;

    descriptionContainer.innerHTML = '';

    if (
      selectedGenre &&
      genreDescriptions[selectedGenre]
    ) {
      const descPara = document.createElement('p');

      descPara.innerHTML =
        genreDescriptions[selectedGenre];

      if (
        genreLinks[selectedGenre] &&
        genreLinks[selectedGenre].length > 0
      ) {
        let iconsHtml = ' ';

        genreLinks[selectedGenre].forEach(link => {
          let iconHtml = '';

          if (link.icon === 'imdb') {
            iconHtml = `
              <a href="${link.url}"
                 target="_blank"
                 rel="noopener">
                <img src="images/imdb.png" alt="IMDB">
              </a>`;
          } else if (link.icon === 'wikipedia') {
            iconHtml = `
              <a href="${link.url}"
                 target="_blank"
                 rel="noopener">
                <img src="images/wikipedia.png"
                     alt="Wikipedia">
              </a>`;
          } else {
            iconHtml = `
              <a href="${link.url}"
                 target="_blank"
                 rel="noopener">🔗</a>`;
          }

          iconsHtml += iconHtml;
        });

        descPara.innerHTML += iconsHtml;
      }

      descriptionContainer.appendChild(descPara);
    }


    let visibleCount = 0;

    // IMPORTANT:
    // This filters both the main and compact collections.
    cards.forEach(card => {
      const cardGenres = (card.dataset.genres || '')
        .split('|')
        .filter(Boolean);

      const matchesGenre =
        !selectedGenre ||
        cardGenres.includes(selectedGenre);

      const matchesCountry =
        !selectedCountryISO ||
        card.dataset.country === selectedCountryISO;

      const cardYears = (card.dataset.years || '')
        .split('|')
        .filter(Boolean)
        .map(y => parseInt(y, 10));

      const matchesYear = matchesYearSelection(
        cardYears,
        selectedYearValue
      );

      const visible =
        matchesGenre &&
        matchesCountry &&
        matchesYear;

      card.classList.toggle('hidden', !visible);

      if (visible) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
  }


  // ==========================================
  // FILTER EVENT LISTENERS
  // ==========================================

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


  // ==========================================
  // GRID SIZING
  // ==========================================

  function fitMovieGrid() {
    if (window.innerWidth <= 768) return;

    if (!moviesPanel.classList.contains('active')) {
      return;
    }

    const cols = 6;
    const rows = 3;

    const contentStyle = getComputedStyle(appContent);

    const availableHeight =
      appContent.clientHeight
      - parseFloat(contentStyle.paddingTop)
      - parseFloat(contentStyle.paddingBottom);

    const availableWidth =
      appContent.clientWidth
      - parseFloat(contentStyle.paddingLeft)
      - parseFloat(contentStyle.paddingRight);

    const gridStyle = getComputedStyle(movieGrid);

    const rowGap = parseFloat(gridStyle.rowGap) || 18;
    const colGap = parseFloat(gridStyle.columnGap) || 18;

    const widthPerCol =
      (availableWidth - colGap * (cols - 1)) / cols;

    let heightPerRow =
      (availableHeight - rowGap * (rows - 1)) / rows;

    if (
      !isFinite(heightPerRow) ||
      heightPerRow < 100
    ) {
      heightPerRow = 100;
    }

    const widthFromHeight = heightPerRow / 1.5;

    const cardWidth = Math.max(
      100,
      Math.min(widthPerCol, widthFromHeight)
    );

    movieGrid.style.setProperty(
      '--card-w',
      cardWidth + 'px'
    );
  }


  // ==========================================
  // CORRELATIONS TEXT SIZING
  // ==========================================

  function fitCorrelationsText() {
    if (!correlationsPanel.classList.contains('active')) {
      return;
    }

    if (window.innerWidth <= 768) return;

    const subareas = correlationsPanel.querySelectorAll(
      '.correlations-subarea'
    );

    subareas.forEach(area => {
      area.style.fontSize = '';

      let guard = 0;

      while (
        area.scrollHeight > area.clientHeight + 1 &&
        guard < 120
      ) {
        const current = parseFloat(
          getComputedStyle(area).fontSize
        );

        const next = current - 0.5;

        if (next < 6) break;

        area.style.fontSize = next + 'px';

        guard++;
      }
    });
  }


  // ==========================================
  // WINDOW RESIZING
  // ==========================================

  let resizeTimer = null;

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      fitMovieGrid();
      fitCorrelationsText();
    }, 150);
  });


  // ==========================================
  // VIEW TABS
  // ==========================================

  function setFiltersOpen(open) {
    filterPanel.hidden = !open;

    filtersTab.setAttribute(
      'aria-expanded',
      String(open)
    );

    filtersTab.classList.toggle('active', open);
  }

  // Open filters by default
  setFiltersOpen(true);

  function setCorrelationsShowing(showing) {
    correlationsPanel.classList.toggle(
      'active',
      showing
    );
  
    moviesPanel.classList.toggle(
      'active',
      !showing
    );
  
    correlationsTab.setAttribute(
      'aria-pressed',
      String(showing)
    );
  
    correlationsTab.classList.toggle(
      'active',
      showing
    );
  
    appContent.classList.toggle(
      'correlations-showing',
      showing
    );

    const featuredSection = document.getElementById(
      'featuredMovieSection'
    );
    
    if (featuredSection) {
      featuredSection.hidden = showing;
    }
  
    // Hide the compact movie section on correlations page
    const compactSection = document.getElementById(
      'compactMovieSection'
    );
  
    if (compactSection) {
      compactSection.hidden = showing;
    }
  
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
    setCorrelationsShowing(
      !correlationsPanel.classList.contains('active')
    );
  });

  fitMovieGrid();

  // ==========================================
  // FLIP-CARD INTERACTION
  // ==========================================

  function toggleFlip(card) {
    const flipped = card.classList.toggle('is-flipped');

    card.setAttribute(
      'aria-pressed',
      flipped ? 'true' : 'false'
    );
  }

  // Both main and compact cards receive
  // the same click and keyboard interactions.

  cards.forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;

      toggleFlip(card);
    });


    card.addEventListener('keydown', e => {
      if (e.target !== card) return;

      if (
        e.key === 'Enter' ||
        e.key === ' ' ||
        e.key === 'Spacebar'
      ) {
        e.preventDefault();

        toggleFlip(card);
      }
    });
  });

}


// ==========================================
// DOM READY
// ==========================================

document.addEventListener(
  'DOMContentLoaded',
  initializeMovies
);
