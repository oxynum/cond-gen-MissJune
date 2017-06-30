'use strict';

var mailjet = require ('node-mailjet')
	.connect('45cc238a0e29dcb4800ad5f04105240e', 'af71fd0e654463cf195246acb92d202d');

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
					"FromEmail": "stephanie.missjune@gmail.com",
					"FromName": "Site web: MissJune",
					"Subject": subject,
					"Text-part": text,
					"Html-part": html,
					"Recipients": [
							{
								"Email": 'stephanie.missjune@gmail.com'
							}
					]});

	request
	    .then(function(success){
	        console.log(success.body)
	    })
	    .catch(function(err) {
	        console.log(err.statusCode)
	    });
}

function sendMailCustomer(langue, adresse) {
	var subject="",
		text ="",
		html ="";

	switch (langue){
	case "es":
		subject = 'Su firma ha sido registrado';
		text = 'Querido cliente, le agradecemos por haber firmado nuestra declaración de reconocimiento de derechos exclusivos de propiedad intelectual.';
		html = '<strong>Querido cliente,</strong></br>Le agradecemos por haber firmado nuestra declaración de reconocimiento de derechos exclusivos de propiedad intelectual.</br></br>Usted puede recobrar nuestra declaración cuando usted lo desea haciendo clic <a href="https://miss-june.com/">aquí</a>.';
		break;
	case "en":
		subject = 'Your signature was successfuly registered';
		text = 'Dear customer, thank you for signing our statement of recognition of exclusive intellectual property rights.';
		html = '<strong>Dear customer,</strong></br>Thank you for signing our statement of recognition of exclusive intellectual property rights.</br></br>You can find our this document whenever you want just by clicking <a href="https://miss-june.com/">here</a>.';
		break;
	default:
		subject = 'Votre signature a bien été prise en compte';
		text = 'Cher client, nous vous remercions d\'avoir signé notre déclaration de reconnaissance de droits de propriété intellectuelle exclusifs.';
		html = '<strong>Cher client,</strong></br>Nous vous remercions d\'avoir signé notre déclaration de reconnaissance de droits de propriété intellectuelle exclusifs.</br></br>Vous pouvez retrouver notre déclaration quand vous le désirez en cliquant <a href="https://miss-june.com/">ici</a>.';
	}

	var request = mailjet
		.post("send")
		.request({
					"FromEmail": "stephanie.missjune@gmail.com",
					"FromName": "MissJune",
					"Subject": subject,
					"Text-part": text,
					"Html-part": html,
					"Recipients": [
							{
								"Email": adresse
							}
					]});

	request
	    .then(function(success){
	        console.log(success.body)
	    })
	    .catch(function(err) {
	        console.log(err.statusCode)
	    });
}

module.exports = {
	sendMailMissJune : sendMailMissJune,
	sendMailCustomer : sendMailCustomer
};