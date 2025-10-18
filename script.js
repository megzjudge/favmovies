function initializeDropdown() {
    const dropdown = document.getElementById('genreDropdown');
    const movieListContainer = document.getElementById('movieList');
    const movieSections = document.querySelectorAll('section .page');

    const genres = new Set();
    movieSections.forEach(section => {
        const genreP = section.querySelector('.series-details p:nth-child(2)');
        if (genreP && genreP.textContent.startsWith('Genre:')) {
            const genreText = genreP.textContent.replace('Genre: ', '').trim();
            const genreArray = genreText.split(',').map(g => g.trim());
            genreArray.forEach(genre => genres.add(genre));
        }
    });

    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        dropdown.appendChild(option);
    });

    window.filterMovies = function() {
        const selectedGenre = dropdown.value;
        movieListContainer.innerHTML = '';

        if (!selectedGenre) {
            movieListContainer.innerHTML = '<p>Please select a genre.</p>';
            return;
        }

        let hasMovies = false;
        movieSections.forEach(section => {
            const genreP = section.querySelector('.series-details p:nth-child(2)');
            const title = section.querySelector('h2').textContent.replace(/🇺[🇸🇦]/, '').trim();
            if (genreP && genreP.textContent.includes(selectedGenre)) {
                const movieItem = document.createElement('p');
                movieItem.textContent = title;
                movieListContainer.appendChild(movieItem);
                hasMovies = true;
            }
        });

        if (!hasMovies) {
            movieListContainer.innerHTML = '<p>No movies found for this genre.</p>';
        }
    };
}

document.addEventListener('DOMContentLoaded', initializeDropdown);
