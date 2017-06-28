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
*	When reaching /envoiMail, sends an e-mail in the appropriate language to the customer in order to warn him that everything went well and an e-mail to MissJune saying that a customer checked their page.
*/
app.post('/envoiMail', function(req, res) {
	if (checkValidRequest(req)) {
		mail.sendMailMissJune(req.body.societe, req.body.nom, req.body.prenom, req.body.lieu, req.body.mail);
		mail.sendMailCustomer(req.body.langue, req.body.mail);
		res.send('Un mail a été envoyé !');
	}
	else {
		res.send(checkValidRequest(req) +': '+req.body.check+' '+req.body.societe+req.body.nom+req.body.prenom+req.body.lieu+req.body.mail);
	}
});

function checkValidRequest(req){
	return(req.body.check === 'on' && req.body.societe!=='' && req.body.nom!=='' && req.body.prenom!=='' && req.body.lieu!=='' && req.body.mail!=='');
}

app.listen(3001);