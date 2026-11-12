// ==========================================
// GENRE EMOJIS
// ==========================================

  const genreEmojis = {
    'Male Camaraderie': '🫂',
    'Camp Comedy': '🎭',
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
    'Absurdist Comedy': '😈',
    'Grumpy x Sunshine': '🐝',
    'Carnivalesque': '🎲',
    'Picaresque': '🏍️',
    'Folklore Animation': "🧚‍♀️",
    'Anthropomorphic Animation': "🐾",
    'Dark Romance': '🥀'
  };

  // ==========================================
  // GENRE DESCRIPTIONS
  // ==========================================

  const genreDescriptions = {
    'Psychological Thriller': "A tense, twisting tale where perception and reality blur, ensnaring both protagonist and viewer in a snaking plotline coiling around an unraveling inner world.",
    'Existential Drama': "A layered narrative where characters confront power, mortality, or the burden of choice, often forcing reckonings with consequence, control, or the void itself - giving one a reason to exist when questioning it.",
    'Film Noir': "A shadowy descent into the underbelly of society, filled with fatale dames and hard-edged antiheroes, riddled with grey ethics and the weight of consequence. An umbrella term for Classic Noir, Neo-Noir, and Dark Crime.",
    'Male Camaraderie': "A rowdy journey of male bonding, innate brotherhood or rivalry-tested mateship, forged through banter, loyalty, and thrilling exploits against all odds.",
    'Magical Realism': "A grounded world subtly laced with supernatural, metaphysical, or unexplained phenomena, seamlessly absorbed into the logic of everyday life.",
    'Cerebral Crime': "An intricate investigation where intellect clashes with deception, unraveling or orchestrating intelligent crimes through razor-sharp deduction and moral tension.",
    'Intelligent Action': "A pulse-pounding rush of explosive set pieces, narrow escapes, and relentless pursuit, orchestrated with cunning strategy and razor-sharp ingenuity.",
    'High-Stakes Action': "A raw, intense, pulse-increasing confrontation where the gun is already in hand and everything is running against the clock, room holding its breath and seconds from catastrophe.",
    'Surreal Adventure': "A dreamlike odyssey through strange circumstances and unlikely encounters, where the boundaries of the conceivable blur and curiosity leads one tumbling down the rabbit hole.",
    'Rebellion Adventure': "A defiant refusal to be broken, controlled or claimed, the adventure of rebellion itself a journey — fought across open terrain or through the serpentine layers of the Self.",
    'Dystopian Sci-Fi': "A speculative lens on warped circumstances—within society or the self—where control, truth, and technology blur the boundaries of what it means to be human.",
    'Grumpy x Sunshine': "A slow-burn love where one's armour and the other's warmth grind against each other until both are reshaped — the closed one learning to let someone in, and the open one learning to commit.",
    'Carnivalesque': "In a way, the world turned upside down - not chaos for its own sake - but something normal order forbids being the new norm - like carnivals, where a type of chaos is made entirely normal.",
    'Picaresque': "A morally-grey rogue or underdog moving through a corrupt or absurd world — sardonic wit the only moral compass along with their cunning. The next town, the next case, the next con is already waiting.",
    'Absurdist Comedy': "Breaks the logic of the world, its a challenge to give up on logic and making sense of the situation, the absurd says 'reality is meaningless', it tries to keep you analysing until you break into laughter.",
    'Camp Comedy': "Joy in the Absurd, it's a partying, 'reality is too boring, let's make it more'. It's exagguration of reality to find joy in the awareness of the absurd nature of life.",
    'Folklore Animation': "Traditional stories, myths, legends, fairy tales, cultural norms, and oral traditions of a particular culture - preserved and transmitted through the medium of animation.",
    'Anthropomorphic Animation': "Non-human entities — animals, objects, vehicles, abstract concepts — are given human traits, form, behaviour, or speech - a form of projection where humans infer the Self onto non-humanoids to express the Self.",
    'Dark Romance': "The attraction is the friction itself: belligerence, obsession, antagonism, egoism, a gap between that they keep trying to close by leaning harder. A love that struggles, defies odds, or opens the Self up to it's hidden sides."
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

    'Rebellion Adventure': [
      { url: 'https://www.spot.ph/entertainment/movies-music-tv/71532/movies-about-revolution-rebellion-a00171-20170921-lfrm', icon: 'link' },
      { url: 'https://www.indiewire.com/feature/best-teen-rebellion-movies-100828/', icon: 'link' },
      { url: 'https://bestsimilar.com/tag/9094-rebel', icon: 'link' },
      { url: 'https://bestsimilar.com/tag/10946-rebellion', icon: 'link' },
      { url: 'https://www.cbr.com/greatest-rebellion-movies-ranked/', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls003839686/', icon: 'imdb' },
      { url: 'https://en.wikipedia.org/wiki/List_of_films_about_revolution', icon: 'wikipedia' }
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
      { url: 'https://en.wikipedia.org/wiki/Film_noir', icon: 'wikipedia' },
      { url: 'https://www.imdb.com/interest/in0000054/', icon: 'imdb' },
      { url: 'https://tvtropes.org/pmwiki/pmwiki.php/Main/FilmNoir', icon: 'link' },
      { url: 'https://screenrant.com/modern-film-noir-movies-best-list/', icon: 'link' },
      { url: 'https://cinenoir.net/awards/century-masterpieces/21st-century/modern-film-noir-a-curated-selection-of-critical-acclaim/', icon: 'link' },
      { url: 'https://nofilmschool.com/film-noir-meaning', icon: 'link' },
      { url: 'https://www.backstage.com/magazine/article/neo-noir-films-75751/', icon: 'link' }
    ],

    'Grumpy x Sunshine': [
      { url: 'https://www.youtube.com/watch?v=Zv-QbPapZkw', icon: 'youtube' },
      { url: 'https://collider.com/best-romance-movies-grumpy-sunshine-ranked/', icon: 'link' },
      { url: 'https://lissag7.medium.com/my-favorite-grumpy-sunshine-romances-7811eeee3602', icon: 'link' },
      { url: 'http://archive.today/2026.03.29-210042/https://www.canberratimes.com.au/story/9014307/author-natalie-murrays-top-five-grumpy-sunshine-romance-movies/', icon: 'link' },
      { url: 'https://movieweb.com/iconic-cheerful-meets-grumpy-romance-movies/', icon: 'link' }
    ],

    'Carnivalesque': [
      { url: 'https://en.wikipedia.org/wiki/Carnivalesque', icon: 'wikipedia' },
      { url: 'https://link.springer.com/chapter/10.1007/978-0-333-98569-4_7', icon: 'link' },
      { url: 'https://call-for-papers.sas.upenn.edu/cfp/2010/05/23/cinema-and-the-carnivalesque%E2%80%942011-scms-panel-in-new-orleans-0310-0313', icon: 'link' },
      { url: 'https://beverlyboy.com/filmmaking/what-is-carnivalesque-theory-in-film-nnarratives/', icon: 'link' }
    ],

    'Picaresque': [
      { url: 'https://www.tasteofcinema.com/2020/10-great-picaresque-movies-to-stumble-across-the-world-with/', icon: 'link' },
      { url: 'https://en.wikipedia.org/wiki/Picaresque_novel', icon: 'wikipedia' },
      { url: 'https://tvtropes.org/pmwiki/pmwiki.php/Main/Picaresque', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls068162289/', icon: 'imdb' }
    ],
    
    'Absurdist Comedy': [
      { url: 'https://en.wikipedia.org/wiki/Surreal_humour', icon: 'link' },
      { url: 'https://www.imdb.com/list/ls526033980/', icon: 'imdb' },
      { url: 'https://cinenoir.net/awards/comedy/just-for-laughs/the-unhinged-lens-10-essential-absurd-comedies-for-discerning-viewers/', icon: 'link' },
      { url: 'https://en.wikipedia.org/wiki/Absurdist_fiction', icon: 'wikipedia' },
      { url: 'https://altcomedy.com/absurdist-comedy', icon: 'link' }
    ],

    'Camp Comedy': [
      { url: 'https://www.ranker.com/list/best-camp-comedy-movies-list/ranker-film', icon: 'link' },
      { url: 'https://en.wikipedia.org/wiki/Camp_(style)', icon: 'wikipedia' },
      { url: 'https://en.wikipedia.org/wiki/Comedy_film#Camp_and_bawdy_comedy', icon: 'wikipedia' },
      { url: 'https://www.advocate.com/arts-entertainment/film/2015/05/13/16-camp-classics-keep-us-laughing', icon: 'link' }
    ],

    'Dark Romance': [
      { url: 'https://screenvibedaily.com/dark-romance-movies/', icon: 'link' },
      { url: 'https://www.cbr.com/best-dark-romance-movies-ranked/', icon: 'link' },
      { url: 'https://www.imdb.com/interest/dark-romance/', icon: 'imdb' },
      { url: 'https://www.imdb.com/chart/movie/in0000149/', icon: 'imdb' },
      { url: 'https://www.penguin.co.uk/discover/articles/dark-romance-guide', icon: 'link' }
    ],

    'Folklore Animation': [
      { url: '', icon: 'link' }
    ],
    
    'Anthropomorphic Animation': [
      { url: '', icon: 'link' }
    ],
    
    'Disagreeableness': [
      { url: '', icon: 'link' }
    ],
    
    'Openness': [
      { url: '', icon: 'link' }
    ]
    
  };

  // ==========================================
  // CATEGORIES EMOJIS
  // ==========================================

  const categoriesEmojis = {
    'Love': '❤️',
    'Friendship': '🤝',
    'The Brain': '📝',
    'Purpose': '🌊',
    'Disagreeableness': '🕹️',
    'Openness': '🌀'
  };

  // ==========================================
  // CATEGORIES DESCRIPTIONS
  // ==========================================

  const categoriesDescriptions = {
    'Love': "Love crossing the boundary it shouldn't — biology, death, a side, a lie... Love as the curtain revealing truths to the overall situation surrounding the characters, love fought for, the characters growing or learning something required to obtain their partner. <br><br>I tend to be enamored with <a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/Tsundere'>Tsundere</a> characters, skirting on characters having <a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/EvilDesiresInnocence'>hyper contrastive</a> personalities, such as in <a href='http://archive.today/2026.03.29-210042/https://www.canberratimes.com.au/story/9014307/author-natalie-murrays-top-five-grumpy-sunshine-romance-movies/'>Grumpy x Sunshine</a>. In a sense, <a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/TenderTomboyishnessFoulFemininity'>Tender Tomboyishness, Foul Femininity</a> vs <a href='https://tvtropes.org/pmwiki/pmwiki.php/Main/TheDragon'>The Dragon</a>, as they are inevitably the same person in the end.",
    'Friendship': "The Self reflected in the Other — seeing characters reflect each other, maybe someone psychologically different, a beast or a machine. The friend as the part of you that can only be seen from the outside, and shows you the limit of what you can handle reflected back in the mirror. That sometimes, being a villain for your friend, is the truest friendship.",
    'The Brain': "The mind, ego, Self, and/or personality shown as being used differently — bent, split, or pointed somewhere it wasn't meant to go. Not just watching someone think, but watching what happens when the brain is repurposed, pushed past its normal operating parameters, or broken open to find something else inside.",
    'Purpose': "The drive for something a character has learnt they cannot live without, the struggle and fight for it, as though their life depends on it — freedom, survival, creation, business, status, ego — movies usually about someone refusing to stop.",
    'Reasons for Living': "Obscure reasons for living I never considered before watching them - a new weird thing I picked up in a movie as a brain hack that a character does that keeps my inquisitiveness busy for 10 years trying to solve how the character's mind could do something I couldn't usually, but sometimes its just an oddity, a quirk that I never considered I cared about.",
    'Disagreeableness': "These films are/or have characters that reflect my own personality back at me - Disagreeableness (low agreeableness) is the trait of antagonism, bluntness, friction, self-liberation (Self vs Other), and a refusal to conform to social expectations. 'You are completely incarcerated by your conceptualized Self,' (Guy Ritchie, 2007).",
    'Openness': "These films are/or have characters that reflect my own personality back at me - High Openness to Experience is the trait of curiousity, pattern-seeking, aestheticism, intellectual exploration, possibility divergence, seeking to see all sides of everything. Seeing the world as incomplete without the next door, pattern, or 'what if.' It's always seeking the pattern."
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

  const featuredMovies = Array.isArray(data)
    ? []
    : (data.featuredMovies || []);
  
  const movies = Array.isArray(data)
    ? data
    : (data.movies || []);
  
  const compactMovies = Array.isArray(data)
    ? []
    : (data.compactMovies || []);

  movieGrid.innerHTML = movies
    .map(movie => buildCardHtml(movie))
    .join('');

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

  const compactGrid = document.getElementById('compactMovieGrid');

  compactGrid.innerHTML = compactMovies
    .map(movie => buildCardHtml(movie, true))
    .join('');

  compactSection.hidden = compactMovies.length === 0;

  // ==========================================
  // RENDER FEATURED MOVIE COLLECTION
  // ==========================================
  
  let featuredSection = document.getElementById('featuredMovieSection');
  
  if (!featuredSection) {
    featuredSection = document.createElement('section');
  
    featuredSection.id = 'featuredMovieSection';
    featuredSection.className =
      'grid-section featured-grid-section';
  
    featuredSection.innerHTML = `
      <div id="featuredMovieGrid" class="featured-movie-grid"></div>`;
  
    movieGrid.insertAdjacentElement('beforebegin',featuredSection);}
  
  const featuredGrid = document.getElementById('featuredMovieGrid');
  
  featuredGrid.innerHTML = featuredMovies
    .map(movie => buildCardHtml(movie))
    .join('');
  
  featuredSection.hidden = featuredMovies.length === 0;
}

// ==========================================
// COUNTRY NAME CONVERSION
// ==========================================

function isoToCountryName(iso) {
  if (!iso) return '';
  try {
    const dn = new Intl.DisplayNames(['en'], { type: 'region' });
    return dn.of(iso) || iso;
  } catch {
    return iso;
  }
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
  const categoriesAttr = (movie.categories || []).join('|');

  const detailsHtml = [];

  if (movie.country) {
    detailsHtml.push(
      `<p title="${escapeHtml(isoToCountryName(movie.country))}">🌏 <span class="flag">${escapeHtml(movie.flag || '')}</span></p>`
    );
  }

  if (movie.titles) {
    detailsHtml.push(
      `<p title="${escapeHtml(movie.titles)}">🎬 <span class="detail-value">${escapeHtml(movie.titles)}</span></p>`
    );
  }

if (movie.notes) {
  const lines = Array.isArray(movie.notes)
    ? movie.notes
    : [{ label: null, value: movie.notes, italic: false }];

  lines.forEach(line => {
    if (!line.value) return;

    if (line.label === null || line.label === undefined) {
      detailsHtml.push(
        `<p class="detail-note${line.italic ? ' italic' : ''}">${escapeHtml(line.value)}</p>`
      );
    } else {
      detailsHtml.push(
        `<p>${escapeHtml(line.label)}: <span class="detail-value${line.italic ? ' italic' : ''}">${escapeHtml(line.value)}</span></p>`
      );
    }
  });
}   
  
  if (movie.years.length) {
    detailsHtml.push(
      `<p>🗓️ <span class="detail-value">${movie.years.join(', ')}</span></p>`
    );
  }

  if (movie.runtime) {
    detailsHtml.push(
      `<p>⏰ <span class="detail-value">${escapeHtml(movie.runtime)}</span></p>`
    );
  }

  detailsHtml.push(
    `<p>${movie.genres
      .map(g => `<span class="genre-chip" data-genre="${escapeHtml(g)}" title="${escapeHtml(genreDescriptions[g] || '')}" role="button" tabindex="0">${genreEmojis[g] ? genreEmojis[g] + ' ' : ''}${escapeHtml(g)}</span>`)
      .join(', ')}</p>`
  );

  const validCategories = (movie.categories || []).filter(Boolean);
  if (validCategories.length) {
    const notes = movie.categoryNotes || {};
    detailsHtml.push(
      `<p>📚 <span class="detail-value">${validCategories
        .map(c => `${categoriesEmojis[c] ? categoriesEmojis[c] + ' ' : ''}${escapeHtml(c)}${notes[c] ? ' — ' + escapeHtml(notes[c]) : ''}`)
        .join(', ')}</span></p>`
    );
  }   

  const linksHtml = movie.links.map(l =>
    `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener"><img src="${escapeHtml(l.icon)}" alt="${escapeHtml(l.alt)}" loading="lazy"></a>`
  ).join('');

  const cardClass = compact
    ? 'movie-card compact-movie-card'
    : 'movie-card';

  return `<article class="${cardClass}" tabindex="0" role="button" aria-pressed="false" aria-label="Show details for ${escapeHtml(movie.title)}"
    data-genres="${escapeHtml(genresAttr)}" data-country="${escapeHtml(movie.country)}" data-years="${escapeHtml(yearsAttr)}" data-categories="${escapeHtml(categoriesAttr)}">
    <div class="movie-card-inner">
      <div class="movie-card-face movie-card-front">
        <img src="${escapeHtml(movie.image)}" alt="${escapeHtml(movie.imageAlt)}" loading="lazy">
        <span class="movie-card-flip-hint" aria-hidden="true">&#8635;</span>
      </div>
      <div class="movie-card-face movie-card-back">
        <h3>${escapeHtml(movie.title)}</h3>
        <div class="movie-card-details">${detailsHtml.join('')}</div>
        <div class="movie-card-links">${linksHtml}</div>
      </div>
    </div>
  </article>`;
}

// ==========================================
// STATISTICS RENDERING
// ==========================================

function buildCooccurrenceData(cards) {
  const genreToCat = {};
  const catToGenre = {};

  cards.forEach(card => {
    const genres = (card.dataset.genres || '').split('|').filter(Boolean);
    const cats = (card.dataset.categories || '').split('|').filter(Boolean);

    genres.forEach(g => {
      genreToCat[g] = genreToCat[g] || {};
      cats.forEach(c => {
        genreToCat[g][c] = (genreToCat[g][c] || 0) + 1;
      });
    });

    cats.forEach(c => {
      catToGenre[c] = catToGenre[c] || {};
      genres.forEach(g => {
        catToGenre[c][g] = (catToGenre[c][g] || 0) + 1;
      });
    });
  });

  return { genreToCat, catToGenre };
}

function donutSlice(cx, cy, r, startAngle, endAngle) {
  const x1 = cx + r * Math.cos(startAngle);
  const y1 = cy + r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle);
  const y2 = cy + r * Math.sin(endAngle);
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

function linkDonutHover(container) {
  const slices = container.querySelectorAll('.donut-slice');
  const legendItems = container.querySelectorAll('.legend-item');

  function highlight(index) {
    slices.forEach((s, i) => {
      s.style.opacity = i === index ? '1' : '0.3';
    });
    legendItems.forEach((l, i) => {
      l.style.opacity = i === index ? '1' : '0.4';
    });
  }

  function reset() {
    slices.forEach(s => s.style.opacity = '1');
    legendItems.forEach(l => l.style.opacity = '1');
  }

  legendItems.forEach((item, i) => {
    item.addEventListener('mouseenter', () => highlight(i));
    item.addEventListener('mouseleave', reset);
  });

  slices.forEach((slice, i) => {
    slice.addEventListener('mouseenter', () => highlight(i));
    slice.addEventListener('mouseleave', reset);
  });
}

function renderDonut(container, data, title, emoji) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, v]) => sum + v, 0);
  if (!total) return;

  const size = 160, r = 60, cx = size / 2, cy = size / 2;
  const colors = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#34495e','#d35400','#16a085'];

  let angle = -Math.PI / 2;
  let paths = '';

  entries.forEach(([key, count], i) => {
    const slice = (count / total) * Math.PI * 2;
    paths += `<path d="${donutSlice(cx, cy, r, angle, angle + slice)}"
      fill="${colors[i % colors.length]}"
      class="donut-slice">
      <title>${key}: ${count} (${Math.round(count/total*100)}%)</title>
    </path>`;
    angle += slice;
  });

  const innerR = r * 0.55;
  const inner = `<circle cx="${cx}" cy="${cy}" r="${innerR}" fill="rgb(10, 54, 107)"/>`;

  container.innerHTML = `
    <div class="correlation-card">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${title || 'breakdown'}">
        ${paths}${inner}
      </svg>
      <div class="donut-legend">
        ${entries.map(([k, v], i) =>
          `<span class="legend-item" style="--c:${colors[i % colors.length]}">
            <i></i>${k} (${v})
          </span>`
        ).join('')}
      </div>
    </div>`;

  linkDonutHover(container.querySelector('.correlation-card'));
}

function renderStats(panel) {
  const cards = Array.from(document.querySelectorAll('.movie-card'));

  panel.innerHTML = `
    <h2>📊 Statistics</h2>
    <div class="stats-filter">
      <label class="sr-only" for="statsGenreSelect">Select a genre</label>
      <select id="statsGenreSelect">
        <option value="">📂 Select a genre…</option>
      </select>
    </div>
    <div id="statsResults" class="stats-results"></div>
  `;

  const select = panel.querySelector('#statsGenreSelect');
  const results = panel.querySelector('#statsResults');

  // Populate genre options
  const genreCounts = new Map();
  cards.forEach(card => {
    (card.dataset.genres || '').split('|').filter(Boolean)
      .forEach(g => genreCounts.set(g, (genreCounts.get(g) || 0) + 1));
  });

  Array.from(genreCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach(([genre, count]) => {
      const opt = document.createElement('option');
      opt.value = genre;
      opt.textContent = `${genreEmojis[genre] || ''} ${genre} (${count})`;
      select.appendChild(opt);
    });

  select.addEventListener('change', () => {
    const selectedGenre = select.value;
    if (!selectedGenre) {
      results.innerHTML = '';
      return;
    }

    // Find all cards that have this genre
    const matchingCards = cards.filter(card =>
      (card.dataset.genres || '').split('|').filter(Boolean)
        .includes(selectedGenre)
    );

    // 1. Other genres on the same films
    const otherGenres = {};
    matchingCards.forEach(card => {
      (card.dataset.genres || '').split('|').filter(Boolean)
        .forEach(g => {
          if (g !== selectedGenre) {
            otherGenres[g] = (otherGenres[g] || 0) + 1;
          }
        });
    });

    // 2. Decade distribution
    const decades = {};
    matchingCards.forEach(card => {
      (card.dataset.years || '').split('|').filter(Boolean)
        .forEach(y => {
          const year = parseInt(y, 10);
          const decade = Math.floor(year / 10) * 10;
          const label = `${decade}s`;
          decades[label] = (decades[label] || 0) + 1;
        });
    });

    // 3. Categories
    const cats = {};
    matchingCards.forEach(card => {
      (card.dataset.categories || '').split('|').filter(Boolean)
        .forEach(c => {
          cats[c] = (cats[c] || 0) + 1;
        });
    });

    results.innerHTML = `
      <div class="stats-grid">
        <div class="stats-chart-group">
          <h4>🎬 Co-occurring Genres</h4>
          <div id="statsGenreDonut"></div>
        </div>
        <div class="stats-chart-group">
          <h4>🗓️ Decade Distribution</h4>
          <div id="statsYearDonut"></div>
        </div>
        <div class="stats-chart-group">
          <h4>📚 Categories</h4>
          <div id="statsCatDonut"></div>
        </div>
      </div>
    `;

    const gDonut = results.querySelector('#statsGenreDonut');
    const yDonut = results.querySelector('#statsYearDonut');
    const cDonut = results.querySelector('#statsCatDonut');

    if (Object.keys(otherGenres).length) {
      renderDonut(gDonut, otherGenres, '', null);
    } else {
      gDonut.innerHTML = '<p class="stats-empty">No co-occurring genres.</p>';
    }

    if (Object.keys(decades).length) {
      const sorted = {};
      Object.keys(decades).sort((a, b) => parseInt(a) - parseInt(b))
        .forEach(k => { sorted[k] = decades[k]; });
      renderDonut(yDonut, sorted, '', null);
    } else {
      yDonut.innerHTML = '<p class="stats-empty">No year data.</p>';
    }

    if (Object.keys(cats).length) {
      renderDonut(cDonut, cats, '', null);
    } else {
      cDonut.innerHTML = '<p class="stats-empty">No categories.</p>';
    }
  });
}

// ==========================================
// INITIALIZATION
// ==========================================

async function initializeMovies() {
  await renderMovieCards();

  const genreDropdown = document.getElementById('genreDropdown');
  const countryDropdown = document.getElementById('countryDropdown');
  const yearDropdown = document.getElementById('yearDropdown');
  const taughtDropdown = document.getElementById('taughtDropdown');

  const descriptionContainer = document.getElementById('genreDescription');
  const noResults = document.getElementById('noResults');

  const cards = Array.from(
    document.querySelectorAll('.movie-card')
  );

  const appContent = document.querySelector('.app-content');
  const movieGrid = document.getElementById('movieGrid');

  const filtersTab = document.getElementById('filtersTab');
  const correlationsTab = document.getElementById('correlationsTab');
  const statsTab = document.getElementById('statsTab');

  const filterPanel = document.getElementById('filterPanel');

  const moviesPanel = document.querySelector(
    '[data-view-panel="movies"]'
  );

  const correlationsPanel = document.querySelector(
    '[data-view-panel="correlations"]'
  );

  const statsPanel = document.querySelector(
    '[data-view-panel="statistics"]'
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
  
    const hasActiveFilter =
      genreDropdown.value ||
      countryDropdown.value ||
      yearDropdown.value ||
      taughtDropdown.value;
  
    if (scrolledPastFirstCard && !filtersWereClosedByScroll) {
      if (!hasActiveFilter && !filterPanel.hidden) {
        setFiltersOpen(false);
      }
  
      if (!hasActiveFilter) {
        descriptionContainer.hidden = true;
      }
  
      filtersWereClosedByScroll = true;
    }
  
    if (!scrolledPastFirstCard) {
      filtersWereClosedByScroll = false;
      if (!hasActiveFilter) {
        descriptionContainer.hidden = false;
      }
    }
  }   

  // ==========================================
  // POPULATE DROPDOWNS
  // ==========================================

  const genreCounts = new Map();
  const countries = new Map();
  const allYears = new Set();
  const taughtCounts = new Map();

  cards.forEach(card => {
    (card.dataset.genres || '')
      .split('|')
      .filter(Boolean)
      .forEach(g => {
        genreCounts.set(g, (genreCounts.get(g) || 0) + 1);
      });
  
    (card.dataset.categories || '')
      .split('|')
      .filter(Boolean)
      .forEach(c => {
        taughtCounts.set(c, (taughtCounts.get(c) || 0) + 1);
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
        `${genreEmojis[genre] ? genreEmojis[genre] + ' ' : ''}${genre} (${count})`;
      genreDropdown.appendChild(option);
    });   

Array.from(taughtCounts.entries())
  .sort((a, b) => b[1] - a[1])
  .forEach(([category, count]) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent =
      `${categoriesEmojis[category] ? categoriesEmojis[category] + ' ' : ''}${category} (${count})`;
    taughtDropdown.appendChild(option);
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
        ? `${flag} ${name}`
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
    const selectedTaught = taughtDropdown.value;
  
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
      } else if (
        selectedTaught &&
        categoriesDescriptions[selectedTaught]
      ) {
        const descPara = document.createElement('p');
        descPara.innerHTML = categoriesDescriptions[selectedTaught];
        descriptionContainer.appendChild(descPara);
      }   
  
    let visibleCount = 0;
  
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
  
      const cardCategories = (card.dataset.categories || '')
        .split('|').filter(Boolean);
      const matchesTaught =
        !selectedTaught ||
        cardCategories.includes(selectedTaught);
  
      const visible =
        matchesGenre &&
        matchesCountry &&
        matchesYear &&
        matchesTaught;
  
      card.classList.toggle('hidden', !visible);
  
      if (visible) visibleCount++;
    });
    
    const sections = [
      document.getElementById('featuredMovieSection'),
      document.getElementById('compactMovieSection'),
      movieGrid.closest('.grid-section')
    ];

    sections.forEach(section => {
      if (!section) return;
      const hasVisible = section.querySelector('.movie-card:not(.hidden)');
      section.hidden = !hasVisible;
    });

    descriptionContainer.querySelectorAll('a').forEach(a => {
      a.target = '_blank';
      a.rel = 'noopener';
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
    resetDropdown(taughtDropdown);
    isResetting = false;
    filterMovies();
  });

  taughtDropdown.addEventListener('change', () => {
    if (isResetting) return;
  
    isResetting = true;
    resetDropdown(genreDropdown);
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
    resetDropdown(taughtDropdown);
    isResetting = false;

    filterMovies();
  });


  yearDropdown.addEventListener('change', () => {
    if (isResetting) return;

    isResetting = true;
    resetDropdown(genreDropdown);
    resetDropdown(countryDropdown);
    resetDropdown(taughtDropdown);
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

  setFiltersOpen(true);

  function setStatsShowing(showing) {
    statsPanel.classList.toggle('active', showing);
    moviesPanel.classList.toggle('active', !showing);
    correlationsPanel.classList.toggle('active', false);

    statsTab.setAttribute('aria-pressed', String(showing));
    statsTab.classList.toggle('active', showing);
    correlationsTab.setAttribute('aria-pressed', 'false');
    correlationsTab.classList.toggle('active', false);

    appContent.classList.toggle('statistics-showing', showing);
    appContent.classList.remove('correlations-showing');

    const featuredSection = document.getElementById('featuredMovieSection');
    if (featuredSection) featuredSection.hidden = showing;

    const compactSection = document.getElementById('compactMovieSection');
    if (compactSection) compactSection.hidden = showing;

    if (showing) {
      setFiltersOpen(false);
      renderStats(statsPanel);
    } else {
      fitMovieGrid();
    }
  }

  function setCorrelationsShowing(showing) {
    correlationsPanel.classList.toggle('active', showing);
    moviesPanel.classList.toggle('active', !showing);
    statsPanel.classList.toggle('active', false);

    correlationsTab.setAttribute('aria-pressed', String(showing));
    correlationsTab.classList.toggle('active', showing);
    statsTab.setAttribute('aria-pressed', 'false');
    statsTab.classList.toggle('active', false);

    appContent.classList.toggle('correlations-showing', showing);
    appContent.classList.remove('statistics-showing');

    const featuredSection = document.getElementById('featuredMovieSection');
    if (featuredSection) featuredSection.hidden = showing;

    const compactSection = document.getElementById('compactMovieSection');
    if (compactSection) compactSection.hidden = showing;

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

  statsTab.addEventListener('click', () => {
    const isShowing = statsPanel.classList.contains('active');
    setStatsShowing(!isShowing);
  });

  correlationsTab.addEventListener('click', () => {
    const isShowing = correlationsPanel.classList.contains('active');
    setCorrelationsShowing(!isShowing);
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

  cards.forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
    
      const chip = e.target.closest('[data-genre]');
      if (chip) {
        e.stopPropagation();
        genreDropdown.value = chip.dataset.genre;
        filterMovies();
        card.classList.remove('is-flipped');
        card.setAttribute('aria-pressed', 'false');
        return;
      }
    
      toggleFlip(card);
    });   

    card.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
    
      const chip = e.target.closest('[data-genre]');
      if (chip) {
        e.preventDefault();
        genreDropdown.value = chip.dataset.genre;
        filterMovies();
        card.classList.remove('is-flipped');
        card.setAttribute('aria-pressed', 'false');
        return;
      }
    
      if (e.target !== card) return;
      e.preventDefault();
      toggleFlip(card);
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
