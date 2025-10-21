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

    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        dropdown.appendChild(option);
    });

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
        'Philosophical Drama': [
            { url: 'https://www.imdb.com/list/ls033275136/?sort=user_rating%2Cdesc', icon: 'imdb' },
            { url: 'https://search.brave.com/search?q=Philosophical+Drama+list+of+films&summary=1&conversation=b004dc96feb281c1a8db3f', icon: 'link' },
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
        'Surreal Adventure': [
            { url: 'https://www.ranker.com/list/surrealism-movies-and-films/davis-williams?pos=1', icon: 'link' },
            { url: 'https://www.imdb.com/list/ls024295709/?sort=user_rating%2Cdesc', icon: 'imdb' },
            { url: 'https://www.imdb.com/list/ls070823747/?sort=user_rating%2Cdesc', icon: 'imdb' }
        ],
        'Magical Realism': [
            { url: 'https://www.imdb.com/list/ls564991576/', icon: 'imdb' },
            { url: 'https://en.wikipedia.org/wiki/Magical_realism', icon: 'wikipedia' }
        ],
        'Film Noir': [
            { url: 'https://www.imdb.com/interest/in0000054/', icon: 'imdb' }
        ]
    };

    window.filterMovies = function() {
        const selectedGenre = dropdown.value;
        movieListContainer.innerHTML = '';
        descriptionContainer.innerHTML = '';

        // 1. Add Description + ICONS AT END
        if (selectedGenre && genreDescriptions[selectedGenre]) {
            const descPara = document.createElement('p');
            
            // Add description text
            descPara.innerHTML = genreDescriptions[selectedGenre];
            
            // Add icons row at END of text
            if (genreLinks[selectedGenre] && genreLinks[selectedGenre].length > 0) {
                let iconsHtml = ' ';
                genreLinks[selectedGenre].forEach(link => {
                    let iconHtml = '';
                    if (link.icon === 'imdb') {
                        iconHtml = `<a href="${link.url}" target="_blank"><img src="/images/imdb.png" alt="IMDB" style="width:1.2em;height:1.2em;vertical-align:middle;margin:0 2px;"></a>`;
                    } else if (link.icon === 'wikipedia') {
                        iconHtml = `<a href="${link.url}" target="_blank"><img src="/images/wikipedia.png" alt="Wikipedia" style="width:1.2em;height:1.2em;vertical-align:middle;margin:0 2px;"></a>`;
                    } else {
                        iconHtml = `<a href="${link.url}" target="_blank" style="margin:0 2px;"><🔗></a>`;
                    }
                    iconsHtml += iconHtml;
                });
                descPara.innerHTML += iconsHtml;
            }
            
            descriptionContainer.appendChild(descPara);
        }

        // 2. Filter Movies (unchanged)
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

    filterMovies();
}

document.addEventListener('DOMContentLoaded', initializeDropdown);
