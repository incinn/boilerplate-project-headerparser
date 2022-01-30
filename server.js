require('dotenv').config();

var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
	res.json({
		"ipaddress": req.headers['x-forwarded-for'],
		"language": req.headers["accept-language"],
		"software": req.headers["user-agent"],
	});
});

var listener = app.listen(process.env.PORT, () => {
	console.log('Your app is listening on port ' + listener.address().port);
});

