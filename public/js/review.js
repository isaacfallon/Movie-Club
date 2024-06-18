const reviewForm = async function(event) {
    event.preventDefault();
    const user_id = document.querySelector('#user_id').value.trim;
    const movie_id = document.querySelector('#movie_id').value.trim;
    const content = document.querySelector('#review-content').value.trim;
    if (content) {
        const response = await fetch('/api/reviews/', {
            method: 'POST',
            body: JSON.stringify({ user_id, movie_id, content }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add review');
        }
    }
};

document
    .querySelector('.addreview-form')
    .addEventListener('submit', reviewForm);