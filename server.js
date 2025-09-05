// --- Dependencies ---
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// --- Initializations ---
const app = express();
const PORT = 3000;

// --- Middleware ---
// Serve static files (like index.html and style.css) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// --- Routes ---
// This is the main endpoint to handle form submissions
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    // --- Server-side validation ---
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill out all fields.' });
    }

    // This is where the magic happens! The message is logged to the terminal.
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    // Send a success response back to the front-end
    res.status(200).json({ success: true, message: 'Thank you for your message! We will get back to you soon.' });
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
    console.log('When you submit the form, the message will appear in THIS terminal window.');
    console.log('Press Ctrl+C to stop the server.');
});

