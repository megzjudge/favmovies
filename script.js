function initializeDropdown() {
    const dropdown = document.getElementById('genreDropdown');
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

    // Function to add emojis to Genre: paragraphs
    function addEmojisToGenreParagraphs() {
        movieSections.forEach(section => {
            const genreP = Array.from(section.querySelectorAll('.series-details p')).find(p => 
                p.textContent.startsWith('Genre:')
            );
            
            if (genreP) {
                const originalText = genreP.textContent.trim();
                const genresPart = originalText.replace('Genre: ', '').trim();
                const genreList = genresPart.split(',').map(g => g.trim());
                
                // Clear and rebuild
                genreP.innerHTML = 'Genre: ';
                
                genreList.forEach((genre, index) => {
                    if (index > 0) {
                        const commaNode = document.createTextNode(', ');
                        genreP.appendChild(commaNode);
                    }
                    
                    const genreNode = document.createTextNode(genre);
                    genreP.appendChild(genreNode);
                    
                    if (genreEmojis[genre]) {
                        const spaceNode = document.createTextNode(' ');
                        genreP.appendChild(spaceNode);
                        
                        const emojiSpan = document.createElement('span');
                        emojiSpan.textContent = genreEmojis[genre];
                        emojiSpan.style.textShadow = '2px 2px 5px rgba(255, 255, 255, 0.7)'; // White shadow on emoji only
                        genreP.appendChild(emojiSpan);
                    }
                });
            }
        });
    }

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
        const displayText = genre + (genreEmojis[genre] ? ' ' + genreEmojis[genre] : '');
        option.textContent = displayText;
        if (genreEmojis[genre]) {
            option.style.textShadow = '2px 2px 5px rgba(255, 255, 255, 0.7)'; // White shadow for options with emoji
        }
        dropdown.appendChild(option);
    });

    // Add emojis to all Genre: paragraphs after collecting
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
                        iconHtml = `<a href="${link.url}" target="_blank" style="margin:0 2px;">🔗</a>`;
                    }
                    iconsHtml += iconHtml;
                });
                descPara.innerHTML += iconsHtml;
            }
            
            descriptionContainer.appendChild(descPara);
        }

        // 2. Filter Movies
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
                // Strip emojis from parsed genres for matching
                const movieGenresRaw = genreP.textContent.replace('Genre: ', '').trim().split(',').map(g => g.trim());
                const movieGenres = movieGenresRaw.map(g => g.replace(/\s\S+$/, '').trim());
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