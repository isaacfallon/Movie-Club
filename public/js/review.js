// update form handler
const updateFormHandler = async (event) => {
    event.preventDefault();
};

// update / deleting users own review
const reviews = document.querySelectorAll(`.review-cards`);
const cancelButtons = document.querySelectorAll(`.cancel-update`);
const updateForm = document.querySelectorAll(`.update-form`);

// grabbing the logged in users id
const reviewsColumn = document.getElementById(`comment-column`);
const loggedInId = reviewsColumn.getAttribute(`data-loggedInId`);

// checking if the logged in users id matches the review users id
for(let i = 0; i < reviews.length; i++) {
    let reviewId = reviews[i].getAttribute(`data-userId`);
    if(reviewId === loggedInId) {
        const updateButton = document.querySelectorAll(`.update-review`)[i];
        const deleteButton = document.querySelectorAll(`.delete-review`)[i];
        // console.log(`got buttons`);
        if(updateButton && deleteButton) {
            updateButton.classList.remove(`d-none`);
            deleteButton.classList.remove(`d-none`);
            // showing update form on click
            updateButton.addEventListener(`click`, () => {
                document.querySelectorAll(`.update-card`)[i].classList.remove(`d-none`);
            });
            // hiding form on cancel
            cancelButtons[i].addEventListener(`click`, () => {
                document.querySelectorAll(`.update-card`)[i].classList.add(`d-none`);
            });
            // submitting update form
            updateForm[i].addEventListener(`submit`, updateFormHandler);
        };
    }
};

// posting a new review
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


// replying to reviews
const replyButtons = document.querySelectorAll(`.review-replies`);
const replyCards = document.querySelectorAll(`.reply-card`);
const replyCancel = document.querySelectorAll(`.cancel-reply`);

for(let i = 0; i < replyButtons.length; i++) {
    replyButtons[i].addEventListener(`click`, () => {
        replyCards[i].classList.remove(`d-none`);
    });

    replyCancel[i].addEventListener(`click`, () => {
        replyCards[i].classList.add(`d-none`);
    });
};

const clearReviewForm = function() {
    document.querySelector('#review-content').value = '';
};

document
    .querySelector('#clear-button')
    .addEventListener('click', clearReviewForm);
