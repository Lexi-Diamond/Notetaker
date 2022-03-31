const { append } = require('express/lib/response');
const path = require('path');
const router = require('express').Router();

app.get("/notes", function(req,res) {
    res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(dirname, "./develop/public/index.html"));
});

