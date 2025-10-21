function initializeDropdown() {
    const dropdown = document.getElementById('genreDropdown');
    const movieListContainer = document.getElementById('movieList');
    const descriptionContainer = document.getElementById('genreDescription');
    const movieSections = document.querySelectorAll('section .page');

    const genres = new Set();

    movieSections.forEach(section => {
        const genreP = Array.from(section.querySelectorAll('.series-details p')).find(p => 
            p.textContent.startsWith('Genre:')
        );
        
        if (genreP) {
            const genreText = genreP.textContent.replace('Genre: ', '').trim();
            const genreArray = genreText.split(',').map(g => g.trim());
            genreArray.forEach(genre => genres.add(genre));
        }
    });

    // Sort genres alphabetically and populate dropdown
    if (genres.size === 0) {
        console.warn('No genres found in movie sections—check your HTML structure.');
    }
    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        dropdown.appendChild(option);
    });

    // Genre descriptions
    const genreDescriptions = {
        'Psychological Thriller': "A tense, twisting tale where perception and reality blur, and a snaking plotline coils around the protagonist's unraveling inner world.",
        'Philosophical Drama': "A layered narrative where characters confront power, mortality, or the burden of choice, often forcing reckonings with consequence, control, or the void itself.",
        'Film Noir': 'A shadowy descent into urban corruption, fatal dames, and hard-boiled antiheroes, drenched in moral ambiguity and cigarette smoke.',
        'Male Camaraderie': "A rowdy journey of male bonding, innate brotherhood or rivalry-tested mateship, forged through banter, loyalty, and thrilling exploits against all odds.",
        'Magical Realism': "A grounded world subtly laced with supernatural, metaphysical, or unexplained phenomena, seamlessly absorbed into the logic of everyday life.",
        'Cerebral Crime': 'Woof woof woof.',
        'Intelligent Action': 'Woof woof woof.',
        'High-Stakes Adventure': 'Woof woof woof.',
        'High-Stakes Mystery': 'Woof woof woof.',
        'Surreal Adventure': 'Woof woof woof.',
        'Dystopian Sci-Fi': 'Woof woof woof.',
        'Dark Comedy': 'Woof woof woof.',
        'Biography': 'Woof woof woof.',
        'History': 'Woof woof woof.',
        'Drama': 'Woof woof woof.',
        'Satire': 'Woof woof woof.',
        'Romance': 'Woof woof woof.',   
        'Musical': 'Woof woof woof.',
        'Horror': 'Woof woof woof.',
        'Mystery': 'Woof woof woof.',
    };

    // COMPLETE GENRE LINKS WITH SMART ICONS
    const genreLinks = {
        'Male Camaraderie': [
            { url: 'https://en.wikipedia.org/wiki/Bromantic_comedy', icon: 'wikipedia', label: 'Bromantic Comedy' },
            { url: 'https://en.wikipedia.org/wiki/Buddy_film', icon: 'wikipedia', label: 'Buddy Film' },
            { url: 'https://www.imdb.com/search/title/?keywords=male-camaraderie&explore=keywords&sort=year,desc', icon: 'imdb', label: 'IMDB List' },
            { url: 'https://search.brave.com/search?q=male+camaraderie+films', icon: 'link', label: 'Brave Search' }
        ],
        'Dark Comedy': [
            { url: 'https://en.wikipedia.org/wiki/Black_comedy', icon: 'wikipedia', label: 'Black Comedy' },
            { url: 'https://www.imdb.com/interest/in0000035/', icon: 'imdb', label: 'IMDB Interest' },
            { url: 'https://www.imdb.com/list/ls066399600/', icon: 'imdb', label: 'IMDB List 1' },
            { url: 'https://www.imdb.com/list/ls052772888/?sort=user_rating%2Cdesc', icon: 'imdb', label: 'IMDB Top Rated' }
        ],
        'Psychological Thriller': [
            { url: 'https://en.wikipedia.org/wiki/Psychological_thriller', icon: 'wikipedia', label: 'Psych Thriller' },
            { url: 'https://www.imdb.com/interest/in0000182/', icon: 'imdb', label: 'IMDB Interest' },
            { url: 'https://www.imdb.com/search/title/?lists=ls002428615&sort=user_rating,desc', icon: 'imdb', label: 'IMDB Top Rated' }
        ],
        'Philosophical Drama': [
            { url: 'https://www.imdb.com/list/ls033275136/?sort=user_rating%2Cdesc', icon: 'imdb', label: 'IMDB List 1' },
            { url: 'https://search.brave.com/search?q=Philosophical+Drama+list+of+films&summary=1&conversation=b004dc96feb281c1a8db3f', icon: 'link', label: 'Brave Search' },
            { url: 'https://www.imdb.com/list/ls070122193/?sort=user_rating%2Cdesc', icon: 'imdb', label: 'IMDB List 2' }
        ],
        'Cerebral Crime': [
            { url: 'https://www.ranker.com/list/best-smart-clever-movies/ranker-film', icon: 'link', label: 'Ranker Smart Movies' },
            { url: 'https://www.imdb.com/list/ls051221092/?sort=user_rating%2Cdesc', icon: 'imdb', label: 'IMDB List' },
            { url: 'https://search.brave.com/search?q=Cerebral+Crime+films&summary=1&conversation=9ce824b1246953746acfcb', icon: 'link', label: 'Brave Search' }
        ],
        'Intelligent Action': [
            { url: 'https://www.ranker.com/list/best-intelligent-action-movies/elise-trenton', icon: 'link', label: 'Ranker Intelligent Action' },
            { url: 'https://www.listchallenges.com/the-101-best-intelligent-action-movies-ranked', icon: 'link', label: 'List Challenges' },
            { url: 'https://search.brave.com/search?q=High-Stakes+Action+films&summary=1&conversation=52ea844f93ebc1746f4c8c', icon: 'link', label: 'Brave Search' }
        ],
        'Surreal Adventure': [
            { url: 'https://www.ranker.com/list/surrealism-movies-and-films/davis-williams?pos=1', icon: 'link', label: 'Ranker Surrealism' },
            { url: 'https://www.imdb.com/list/ls024295709/?sort=user_rating%2Cdesc', icon: 'imdb', label: 'IMDB List 1' },
            { url: 'https://www.imdb.com/list/ls070823747/?sort=user_rating%2Cdesc', icon: 'imdb', label: 'IMDB List 2' }
        ],
        'Magical Realism': [
            { url: 'https://www.imdb.com/list/ls564991576/', icon: 'imdb', label: 'IMDB List' },
            { url: 'https://en.wikipedia.org/wiki/Magical_realism', icon: 'wikipedia', label: 'Wikipedia' }
        ],
        'Film Noir': [
            { url: 'https://www.imdb.com/interest/in0000054/', icon: 'imdb', label: 'IMDB Film Noir' }
        ]
    };

    window.filterMovies = function() {
        const selectedGenre = dropdown.value;
        movieListContainer.innerHTML = '';

        // Clear and rebuild description container
        descriptionContainer.innerHTML = '';

        // 1. Add Description (if exists)
        if (selectedGenre && genreDescriptions[selectedGenre]) {
            const descPara = document.createElement('p');
            descPara.textContent = genreDescriptions[selectedGenre];
            descriptionContainer.appendChild(descPara);
        }

        // 2. Add Links Section (if links exist) - SMART ICON LOGIC
        if (selectedGenre && genreLinks[selectedGenre] && genreLinks[selectedGenre].length > 0) {
            const linksDiv = document.createElement('div');
            linksDiv.className = 'genre-links';
            linksDiv.innerHTML = '<strong>Explore More:</strong> ';
            
            genreLinks[selectedGenre].forEach(link => {
                // SMART ICON LOGIC
                let iconHtml = '';
                if (link.icon === 'imdb') {
                    iconHtml = `<img src="/images/imdb.png" alt="IMDB" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;">`;
                } else if (link.icon === 'wikipedia') {
                    iconHtml = `<img src="/images/wikipedia.png" alt="Wikipedia" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;">`;
                } else {
                    iconHtml = '🔗 '; // DEFAULT EMOJI FOR ALL OTHER SITES
                }
                
                const linkSpan = document.createElement('span');
                linkSpan.innerHTML = `<a href="${link.url}" target="_blank">${iconHtml}${link.label}</a> | `;
                linksDiv.appendChild(linkSpan);
            });
            
            // Remove last "|"
            linksDiv.innerHTML = linksDiv.innerHTML.replace(/ \| $/, '');
            descriptionContainer.appendChild(linksDiv);
        }

        // 3. Filter Movies
        let hasMovies = false;
        movieSections.forEach(section => {
            const titleElement = section.querySelector('h2');
            if (!titleElement || 
                titleElement.textContent.trim() === 'Filter Movies by Genre' || 
                titleElement.textContent.trim() === 'Correlations') {
                return;
            }

            const genreP = Array.from(section.querySelectorAll('.series-details p')).find(p => 
                p.textContent.startsWith('Genre:')
            );

            const titleClone = titleElement.cloneNode(true);
            const flagSpan = titleClone.querySelector('.flag');
            if (flagSpan) flagSpan.remove();
            const title = titleClone.textContent.trim();

            let shouldShow = !selectedGenre;
            if (selectedGenre && genreP) {
                const movieGenres = genreP.textContent.replace('Genre: ', '').trim().split(',').map(g => g.trim());
                shouldShow = movieGenres.includes(selectedGenre);
            }

            if (shouldShow) {
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

    // Trigger on load
    filterMovies();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeDropdown);
