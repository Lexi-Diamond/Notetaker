const uuid = require("uuid");
const fs = require("fs");
const router = require('express').Router();

router.get('/notes', (req,res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
})

router.post("/notes", (req, res) => {
    const {noteTitle, noteText} = req.body;
    const newNote = {noteTitle, noteText};
    newNote.id = uuid.v4();
    // console.log(newNote);
    // note.push(newNote);
    var allNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    console.log(allNotes);
    const 
    // fs.writeFileSync("./db/db.json", JSON.stringify(newNote));
    // res.json(newNote);
    

})

router.delete('/notes/:id', (req, res) => {
    const note = JSON.parse(ds.readFileSync('./db/db.json'));
    const deleteNote = note.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
})

module.exports = router;




