var express = require('express');

var app = express();

var db = require('./models');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
//for bodyparser to know that the body being sent is a json obj 
app.use(bodyParser.json());

app.get('/', function (req, res) {
  db.ProducerGallery.findAll()
  .then(function (gallery) {
    res.json(gallery);
  });
});

app.post('/producers', function (req, res) {
  var data = req.body;
  var producer = {
    artist: data.artist,
    link: data.link,
    description: data.description
  };
  db.ProducerGallery.create(producer)
    .then(function (creation) {
      return res.redirect('/');
    });
});


app.listen(3000, function () {
  console.log('Server is now listening on port 3000 foo!');
});