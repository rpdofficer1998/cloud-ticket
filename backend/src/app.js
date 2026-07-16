const express = require('express');

const app = express();

const healthRoutes = require('./routes/health.routes');


app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to CloudTicket API!'
    });
});


app.use('/health', healthRoutes);


module.exports = app;