var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));


app.get('/*', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
  console.log('Chat front end listening on port 3000');
});