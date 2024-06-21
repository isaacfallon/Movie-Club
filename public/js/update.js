document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.querySelectorAll('.update-submit');
    updateButton.forEach(button => {
        button.addEventListener('click', async (event) => {
            const reviewId = button.getAttribute('data-review-id');
            const content = document.querySelector('#update-content').value;
            try {
                // alert(reviewId)
                const response = await fetch(`/api/reviews/${reviewId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        content
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    document.location.reload();
                    // button.closest('.p-3').remove();
                }
            } catch (err) {
                alert('Failed to update review');
            }
        });
    });
});
