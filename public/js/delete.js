document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.querySelectorAll('.delete-button');
    deleteButton.forEach(button => {
        button.addEventListener('click', async (event) => {
            const reviewId = button.getAttribute('data-review-id');
            try {
                const response = await fetch(`/api/reviews/${reviewId}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    // button.closest('.p-3').remove();
                    document.location.reload();
                }
            } catch (err) {
                alert('Failed to delete review');
            }
        });
    });
});
