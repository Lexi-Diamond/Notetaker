const { append } = require("express/lib/response");
const fs = require("fs")
const router = require('express').Router();

app.get("/api/notes", function(req,res) {
    readFileAsync("./db/dbjson", "utf8").then(function(data){
        notes = [].concat(JSON.parse(data))
        res.json(notes);
    })
});

app.post("/api/notes", function(req, res) {
    const note = req.body;
    readFileAsync("./db/db.json", "utf8").then(function(data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length + 1
        notes.push(note);
        return notes})
        .then(function(notes) {
            writeFileAsync("./db/db.json", JSON.stringify(notes))
            res.join(note);
        })
    });

