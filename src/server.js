const express = require('express');
const cors = require('cors');
const iPhones = require('./data');

const app = express();

// Enhanced CORS configuration
app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.send('iPhone API is running... Go to /api/iphones to see all iPhones');
});

// Main iPhone endpoints
app.get('/api/iphones', (req, res) => {
    res.json({
        success: true,
        count: iPhones.length,
        data: iPhones
    });
});

// Alternative route (in case the main one doesn't work)
app.get('/iphones', (req, res) => {
    res.json({
        success: true,
        count: iPhones.length,
        data: iPhones
    });
});

// Get a single iPhone by ID
app.get('/api/iphones/:id', (req, res) => {
    const iPhone = iPhones.find(phone => phone.id === req.params.id);

    if (!iPhone) {
        return res.status(404).json({
            success: false,
            error: 'iPhone not found'
        });
    }

    res.json({
        success: true,
        data: iPhone
    });
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    console.error(err.stack);

    res.status(500).json({
        success: false,
        error: 'Server error',
        message: err.message
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the API at http://localhost:${PORT}/api/iphones`);
});