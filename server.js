const express = require("express");
const html = require('./html');
const api = require('./api');
const app = express();

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html)

app.listen(PORT, function() {
    console.log("server listening on http://localhost/" + PORT);
})