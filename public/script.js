const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async function(event) {
    // Prevent the default browser behavior of reloading the page
    event.preventDefault();

    // Change button to a "Sending..." state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    responseMessage.textContent = ''; // Clear previous messages
    responseMessage.className = '';

    // Gather the form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        // Send the data to our Node.js server endpoint
        const response = await fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
            responseMessage.textContent = result.message;
            responseMessage.classList.add('success');
            form.reset();
        } else {
            responseMessage.textContent = result.message;
            responseMessage.classList.add('error');
        }

    } catch (error) {
        console.error('Error submitting form:', error);
        responseMessage.textContent = 'An unexpected error occurred. Please try again later.';
        responseMessage.classList.add('error');
    } finally {
        // Re-enable the button after the process is complete
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});
