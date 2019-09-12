const express = require('express')
const app = express()
var path = require('path');
const port = 5125;
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static("assets"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/assets/index.html");
});

app.get('/javascript', function (req, res) {
    res.sendFile(path.join(__dirname + '/chatscript.js'));
});

app.listen(port, "127.0.0.1", () => console.log(`Example app listening on port ${port}!`));


