'use strict';

var express 	= require('express'),
    app     	= express(),
    bodyParser 	= require('body-parser'),
    mail		= require('./app/controllers/mailController.js');

/* Defines the views as .ejs files */
app.set('view engine', 'ejs');

/* Enables the use of body-parser in express*/
app.use(bodyParser.urlencoded({ extended: true }));

/* Defines /public as the static directory where css, img, and js are located */
app.use(express.static(__dirname + '/public'));


/*
* 	When reaching the root, reponds by sending the index.ejs view
*/
app.get('/', function(req, res) {
    res.render('index');
});


/*
* 	When the Terms of Sales formulary is posted, verifies that the customer has checked the box and shows him the formAchat.ejs page.
*	If the box has not been checked, sends him back to the previous page.
*/
app.post('/formAchat', function(req, res){
	if (req.body.check == 'on') {
		res.render('formAchat');
	}
	else{
		res.render('index');
	}
});

/*
*	When reaching /envoiMail, sends a mail in the appropriate language to the adress entered by the customer
*/
app.post('/envoiMail', function(req, res) {
	mail.envoiMail(req.body.langue, req.body.mail);
	res.send('Un mail vous a été envoyé !')
});


app.listen(3001);