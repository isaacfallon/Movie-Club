const reviewForm = async function (event) {
    event.preventDefault();
    // const user_id = document.querySelector('#user_id').value.trim;
    // const movie_id = document.querySelector('#movie_id').value.trim;
    const movie = document.getElementById('movie-card');
    const movie_id = movie.getAttribute("data-id");

    const content = document.querySelector('#review-content').value.trim();

    if (content) {
        const response = await fetch('/api/reviews/', {
            method: 'POST',
            body: JSON.stringify({ movie_id, content }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add review');
        }
    }
};

document
    .querySelector('.addreview-form')
    .addEventListener('submit', reviewForm);

const clearReviewForm = function() {
    document.querySelector('#review-content').value = '';
};

document
    .querySelector('#clear-button')
    .addEventListener('click', clearReviewForm);