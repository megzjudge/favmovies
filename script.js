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

  function parseYear(section) {
    // Looks for "Year:" paragraph (recommended), otherwise falls back to first 4-digit year anywhere in details
    const yearText = getFieldValue(section, 'Year');
    const m1 = yearText.match(/\b(18|19|20)\d{2}\b/);
    if (m1) return parseInt(m1[0], 10);

    const detailsText = section.querySelector('.series-details')?.textContent || '';
    const m2 = detailsText.match(/\b(18|19|20)\d{2}\b/);
    return m2 ? parseInt(m2[0], 10) : null;
  }

  // --- Your existing emoji injection for Genre paragraphs (unchanged logic) ---
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

  // Collect distinct values
  const genres = new Set();
  const countries = new Set();
  const years = [];

  movieSections.forEach(section => {
    const titleElement = section.querySelector('h2');
    if (!titleElement) return;

    const t = titleElement.textContent.trim();
    if (t === 'Filter Movies by Genre' || t === 'Correlations') return;

    const genreText = getFieldValue(section, 'Genre');
    parseList(genreText).forEach(g => genres.add(g));

    const countryText = getFieldValue(section, 'Country'); // expects "Country:" paragraph
    parseList(countryText).forEach(c => countries.add(c));

    const y = parseYear(section);
    if (y) years.push(y);
  });

  // Build Genre options
  Array.from(genres).sort().forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre + (genreEmojis[genre] ? ' ' + genreEmojis[genre] : '');
    if (genreEmojis[genre]) {
      option.style.textShadow = '2px 2px 5px rgba(255, 255, 255, 0.7)';
    }
    genreDropdown.appendChild(option);
  });

  // Build Country options
  Array.from(countries).sort().forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countryDropdown.appendChild(option);
  });

  // Build Year-range options (decades + optional “All time” buckets)
  const minYear = years.length ? Math.min(...years) : null;
  const maxYear = years.length ? Math.max(...years) : null;

  function addYearOption(label, value) {
    const option = document.createElement('option');
    option.value = value; // format: "start-end" e.g. "2000-2009"
    option.textContent = label;
    yearDropdown.appendChild(option);
  }

  if (minYear && maxYear) {
    // Decade buckets: 1980s, 1990s, 2000s, 2010s, 2020s ...
    const startDecade = Math.floor(minYear / 10) * 10;
    const endDecade = Math.floor(maxYear / 10) * 10;

    for (let d = startDecade; d <= endDecade; d += 10) {
      const start = d;
      const end = d + 9;
      addYearOption(`${d}s (${start}-${end})`, `${start}-${end}`);
    }

    // Optional: add a “2000s (2000-2010)” style if you specifically want decade inclusive to 2010
    // addYearOption(`2000s (2000-2010)`, `2000-2010`);
  }

  addEmojisToGenreParagraphs();

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

  const genreLinks = { /* keep your existing object as-is */ };

  function inYearRange(year, rangeValue) {
    if (!rangeValue) return true;
    if (!year) return false;
    const [start, end] = rangeValue.split('-').map(n => parseInt(n, 10));
    return year >= start && year <= end;
  }

  window.filterMovies = function () {
    const selectedGenre = genreDropdown.value;
    const selectedCountry = countryDropdown.value;
    const selectedYearRange = yearDropdown.value;

    movieListContainer.innerHTML = '';
    descriptionContainer.innerHTML = '';

    // Description stays genre-driven (as you have it)
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
      if (t === 'Filter Movies by Genre' || t === 'Correlations') return;

      const titleClone = titleElement.cloneNode(true);
      const flagSpan = titleClone.querySelector('.flag');
      if (flagSpan) flagSpan.remove();
      const title = titleClone.textContent.trim();

      const genreText = getFieldValue(section, 'Genre');
      const movieGenres = parseList(genreText).map(g => g.replace(/\s\S+$/, '').trim()); // strips emoji tail
      const countryText = getFieldValue(section, 'Country');
      const movieCountries = parseList(countryText);

      const year = parseYear(section);

      const matchesGenre = !selectedGenre || movieGenres.includes(selectedGenre);
      const matchesCountry = !selectedCountry || movieCountries.includes(selectedCountry);
      const matchesYear = inYearRange(year, selectedYearRange);

      if (matchesGenre && matchesCountry && matchesYear) {
        const movieItem = document.createElement('p');
        movieItem.textContent = title;
        movieListContainer.appendChild(movieItem);
        hasMovies = true;
      }
    });

    if (!hasMovies) {
      movieListContainer.innerHTML = '<p>No movies found.</p>';
    }
  };

  filterMovies();
}

document.addEventListener('DOMContentLoaded', initializeDropdown);
