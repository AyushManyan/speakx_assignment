require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/db');
const dataRoutes = require('./routes/dataRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', dataRoutes);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});