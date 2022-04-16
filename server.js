//adding the required modules 
const path = require("path");
const express = require("express");
const { clog } = require('./middleware/clog');
const fs = require('fs')
const api = require('./routes/index.js');

//creating the server application
const PORT = process.env.PORT || 3001;
const app = express();

//middleware clog
app.use(clog);

//middleware to parse json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);
app.use(express.static('public'));

//Get route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

//add listener
app.listen(PORT, () =>
console.log(`listening at http://localhost:${PORT}`)
);