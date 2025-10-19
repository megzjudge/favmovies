function initializeDropdown() {
    const dropdown = document.getElementById('genreDropdown');
    const movieListContainer = document.getElementById('movieList');
    const descriptionContainer = document.getElementById('genreDescription');
    const movieSections = document.querySelectorAll('section .page');

    const genres = new Set();

    movieSections.forEach(section => {
        // More robust genre detection: find any <p> starting with "Genre:"
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

    // Genre descriptions (pure text only—no genre name prefixed; add/edit as needed)
    const genreDescriptions = {
        'Psychological Thriller': "A tense, twisting tale where perception and reality blur, and a snaking plotline coils around the protagonist’s unraveling inner world.",
        'Philosophical Drama': "A layered narrative where characters confront power, mortality, or the burden of choice, often forcing reckonings with consequence, control, or the void itself.",
        'Cerebral Crime': 'Woof woof woof.',
        'High-Stakes Action': 'Woof woof woof.',
        'Surreal Adventure': 'Woof woof woof.',
        'Dystopian Sci-Fi': 'Woof woof woof.',
        'Magical Realism': "A grounded world subtly laced with supernatural, metaphysical, or unexplained phenomena, seamlessly absorbed into the logic of everyday life.",
        'Dark Comedy': 'Woof woof woof.',
        'Film Noir': 'Woof woof woof.',
        'Biography': 'Woof woof woof.',
        'History': 'Woof woof woof.',
        'Drama': 'Woof woof woof.',
        'Satire': 'Woof woof woof.',
        'Romance': 'Woof woof woof.',   
        'Musical': 'Woof woof woof.',
        'Horror': 'Woof woof woof.',
        'Mystery': 'Woof woof woof.',
    };

    window.filterMovies = function() {
        const selectedGenre = dropdown.value;
        movieListContainer.innerHTML = '';

        // Update description (pure text only—no title repeat or prefix)
        if (selectedGenre && genreDescriptions[selectedGenre]) {
            descriptionContainer.innerHTML = `<p>${genreDescriptions[selectedGenre]}</p>`;
        } else {
            descriptionContainer.innerHTML = '';
        }

        let hasMovies = false;

        movieSections.forEach(section => {
            // Skip the filter section and correlation sections
            const titleElement = section.querySelector('h2');
            if (!titleElement || 
                titleElement.textContent.trim() === 'Filter Movies by Genre' || 
                titleElement.textContent.trim() === 'Correlations') {
                return;
            }

            // Robust genre detection (same as above)
            const genreP = Array.from(section.querySelectorAll('.series-details p')).find(p => 
                p.textContent.startsWith('Genre:')
            );

            // Extract title without flag span
            const titleClone = titleElement.cloneNode(true);
            const flagSpan = titleClone.querySelector('.flag');
            if (flagSpan) {
                flagSpan.remove();
            }
            const title = titleClone.textContent.trim();

            // Show all if no genre selected, or filter if exact match
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

    // Optionally trigger once on load to show all movies initially
    filterMovies();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeDropdown);
