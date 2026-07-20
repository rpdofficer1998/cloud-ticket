
require("./config/db");

const express = require('express');

const app = express();

const healthRoutes = require('./routes/health.routes');

const eventRoutes = require('./routes/event.routes');


app.use(express.json());

app.use('/api/events', eventRoutes);


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to CloudTicket API!'
    });
});


app.use('/health', healthRoutes);


module.exports = app;