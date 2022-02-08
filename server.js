// adding the required modules 
const path = require("path");
const express = require("express");
const { appendFile } = require("fs");

// creating the server application
const PORT = process.env.PORT || 3000;

// read url
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// js files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//use public folder
app.use(express.static("public"));

// add listener
app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});
