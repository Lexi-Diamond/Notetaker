const uuid = require("uuid");
const fs = require("fs");
const router = require('express').Router();

router.get('/notes', (req,res) => {
    const data = fs.readFileSync("./db/db.json");
    jes.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    const note = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = req.body;
    newNote.id = uuid.v4();
    note.push(newNote);
    fs.writeFileSync(".db.db.json", JSON.stringify(note));
    res.json(note);

})




