'use strict';

var express 	= require('express'),
    app     	= express(),
    bodyParser 	= require('body-parser'),
    mail		= require('./app/controllers/mailController.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/formAchat', function(req, res){
	if (req.body.check == 'on') {
		res.render('formAchat');
	}
	else{
		res.render('index');
	}
});

app.post('/envoiMail', function(req, res) {
	mail.envoiMail(req.body.langue, req.body.mail);
	res.send('Un mail vous a été envoyé !')
});

app.listen(3001);