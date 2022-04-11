const uuid = require("uuid");
const fs = require("fs");
const router = require('express').Router();

router.get('/notes', (req,res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    const note = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = req.body;
    newNote.id = uuid.v4();
    console.log(newNote);
    note.push(newNote);
    fs.writeFileSync("./db.db.json", JSON.stringify(newNote));
    res.json(newNote);

})

router.delete('/notes/:id', (req, res) => {
    const note = JSON.parse(ds.readFileSync('./db.db.json'));
    const deleteNote = note.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync('./db.db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
})

module.exports = router;




