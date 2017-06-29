'use strict';

var express 	= require('express'),
    app     	= express(),
    bodyParser 	= require('body-parser'),
    mail		= require('./app/controllers/mailController.js');

/* Equals 1 when the mails have been sent, 0 in the other case */
var isSentMail = 0;

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
    isSentMail = 0;
});


/*
*	When reaching /envoiMail, sends an e-mail in the appropriate language to the customer in order to warn him that everything went well and an e-mail to MissJune with all the details about the customer.
*/

app.post('/envoiMail', function(req, res) {
	if (checkValidRequest(req)) {
		if (isSentMail === 0) {
			mail.sendMailMissJune(req.body.societe, req.body.nom, req.body.prenom, req.body.lieu, req.body.mail);
			mail.sendMailCustomer(req.body.langue, req.body.mail);
			isSentMail ++;
		}
		res.render('remerciements');
	}
	else {
		res.send(checkValidRequest(req) +': '+req.body.check+' '+req.body.societe+req.body.nom+req.body.prenom+req.body.lieu+req.body.mail);
	}
});

function checkValidRequest(req){
	return(req.body.check === 'on' && req.body.societe!=='' && req.body.nom!=='' && req.body.prenom!=='' && req.body.lieu!=='' && req.body.mail!=='');
}

app.listen(3001);