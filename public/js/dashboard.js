const updateForm = document.querySelectorAll(`.update-form`);
const updateButtons = document.querySelectorAll(`.update-button`);
const cancelButtons = document.querySelectorAll(`.cancel-update`);
const updateCards = document.querySelectorAll(`.update-card`);
const reviewsLength = document.querySelectorAll(`.review-cards`).length;

// showing form on button click
for (let i = 0; i < reviewsLength; i++) {
  updateButtons[i].addEventListener(`click`, () => {
    updateCards[i].classList.remove(`d-none`);
  });
};

// closing form on button click
for (let i = 0; i < reviewsLength; i++) {
  cancelButtons[i].addEventListener(`click`, () => {
    updateCards[i].classList.add(`d-none`);
  });
};

// update form handler
const updateFormHandler = async (event) => {
  event.preventDefault();
};

for (let i = 0; i < reviewsLength; i++) {
  updateForm[i].addEventListener(`submit`, updateFormHandler);
}