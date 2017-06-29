'use strict';

var mailjet = require ('node-mailjet')
	.connect('84ff6bb884007b726e0233798d4d0382', '32bef8092196460441728f624dbfda4f');

/**
*
* This function sends a mail to the client depending on his language.
*
* @param {String} langue : is the language of the user's browser
* @param {String} adresse : is the mail adress that the user typed in the input
*
*/
function sendMailMissJune(societe, nom, prenom, lieu, mail) {

	var now 	= new Date(),
		date 	= now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear()+' à '+now.getHours()+'h'+now.getMinutes(),
		subject = 'Un client a validé votre Reconnaissance de droits de propriété intellectuelle exclusifs',
		html 	= '<strong>Société : </strong>'+societe+'</br><strong>Nom : </strong>'+nom+'</br><strong>Prénom : </strong>'+prenom+'</br><strong>Lieu : </strong>'+lieu+'</br><strong>Date : </strong>'+date+'</br><strong>E-mail : </strong>'+mail,
		text 	= 'Société : '+societe+' / Nom : '+nom+' / Prénom : '+prenom+' / Lieu : '+lieu+' / Date : '+date+' / E-mail : '+mail;

	var request = mailjet
		.post("send")
		.request({
					"FromEmail": "gregoire@oxynum.fr",
					"FromName": "GregRbs de MailJet",
					"Subject": subject,
					"Text-part": text,
					"Html-part": html,
					"Recipients": [
							{
								"Email": 'gregoire@oxynum.fr'
							}
					]});

	request
	    .then(result => {
	        console.log(result.body)
	    })
	    .catch(err => {
	        console.log(err.statusCode)
	    });
}

function sendMailCustomer(langue, adresse) {
	var subject="",
		text ="",
		html ="";

	switch (langue){
	case "es":
		subject = 'Su pedido se ha tenido en cuenta';
		text = '<h3>Querido cliente, gracias por su pedido.</h3><br/> Esto se ha tenido en cuenta y será enviado tan pronto como sea posible';
		html = 'Querido cliente, gracias por su pedido. Esto se ha tenido en cuenta y será enviado tan pronto como sea posible';
		break;
	case "en":
		subject = 'Your order is getting ready';
		text = 'Dear customer, thank you for your order. We will send it as soon as possible.';
		html = '<h3>Dear customer, thank you for your order.</h3><br/>We will send it as soon as possible.';
		break;
	default:
		subject = 'Votre signature a bien été prise en compte';
		text = 'Cher client, nous vous remercions d\'avoir signé notre déclaration de reconnaissance de droits de propriété intellectuelle exclusifs.';
		html = '<strong>Cher client,</strong></br>Nous vous remercions d\'avoir signé notre déclaration de reconnaissance de droits de propriété intellectuelle exclusifs.</br></br>Vous pouvez retrouver notre déclaration quand vous le désirez en cliquant <a href="https://miss-june.com/">ici</a>.';
	}

	var request = mailjet
		.post("send")
		.request({
					"FromEmail": "gregoire@oxynum.fr",
					"FromName": "GregRbs de MailJet",
					"Subject": subject,
					"Text-part": text,
					"Html-part": html,
					"Recipients": [
							{
								"Email": 'rabasse.greg@gmail.com'
							}
					]});

	request
	    .then(result => {
	        console.log(result.body)
	    })
	    .catch(err => {
	        console.log(err.statusCode)
	    });
}

module.exports = {
	sendMailMissJune : sendMailMissJune,
	sendMailCustomer : sendMailCustomer
};