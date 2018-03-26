var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('public'));
 app.use(express.static('vendor'));


var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

app.get('/', function(request, response){
	console.log('GET /'); //for testing purposes
	// console.log('**********')
	// console.log(request)
	// console.log('**********')
	response.sendFile('views/index.html', { root : __dirname});
	console.log('dirname' + __dirname);
});

app.get('/api/albums', function(request, response){
  response.json(albums);
});

var tacos = [
  {name :'La Taqueria'},
  {name : 'El Farolito' },
  {name: 'Cancun'}, 
  {name: 'Gordos'},
];
app.get('/api/tacos', function(req, res){
  res.json(tacos);
});




app.listen(3000, function () {
console.log('Example app listening at... http://localhost:3000/');
});




