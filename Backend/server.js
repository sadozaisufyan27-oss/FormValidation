const express = require("express");

const app = express();

const PORT = 5000;

// Middleware to read JSON data
app.use(express.json());

// POST route for contact form
app.post("/api/contact", (req, res) => {

    // Get data from request body
    const { name, email, message } = req.body;

    // Validate empty fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }

    // Validate name length
    if (name.trim().length < 3) {
        return res.status(400).json({
            success: false,
            message: "Name must be at least 3 characters."
        });
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid email."
        });
    }

    // Validate message length
    if (message.trim().length < 10) {
        return res.status(400).json({
            success: false,
            message: "Message must be at least 10 characters."
        });
    }

    // Successful response
    res.status(201).json({
        success: true,
        message: "Contact form submitted successfully."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
