var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(app.router);

app.get('/MockServer/:query', function(req, res){
	fs.readFile(__dirname + '/Data/' + req.params.query + '.json', 'UTF-8', function (err, data) {
		if (err) {
			console.log(err);
			res.send('Bad Endpoint');
		} else {
			res.send(JSON.parse(data));
		}
	});
});

app.listen(4000);