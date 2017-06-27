'use strict';

var mailjet = require ('node-mailjet')
	.connect('84ff6bb884007b726e0233798d4d0382', '32bef8092196460441728f624dbfda4f');

/**
*
*
*/
function sendMail(langue, adresse) {
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
		subject = 'Votre commande a bien été prise en compte';
		text = 'Cher client, merci pour votre commande. Celle-ci vous sera expédiée dans les plus brefs délais.';
		html = '<h3>Cher client, merci pour votre commande.</h3><br/>Celle-ci vous sera expédiée dans les plus brefs délais.';
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
								"Email": adresse
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
	envoiMail : sendMail
};