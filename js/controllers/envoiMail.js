switch (langue){
	case "ES":
		var subject = 'Su pedido se ha tenido en cuenta';
		var text = '<h3>Querido cliente, gracias por su pedido.</h3><br/> Esto se ha tenido en cuenta y será enviado tan pronto como sea posible';
		var html = 'Querido cliente, gracias por su pedido. Esto se ha tenido en cuenta y será enviado tan pronto como sea posible';
		break;
	case "EN":
		var subject = 'Your order is getting ready';
		var text = 'Dear customer, thank you for your order. We will send it as soon as possible.';
		var html = '<h3>Dear customer, thank you for your order.</h3><br/>We will send it as soon as possible.';
		break;
	default:
		var subject = 'Votre commande a bien été prise en compte';
		var text = 'Cher client, merci pour votre commande. Celle-ci vous sera expédiée dans les plus brefs délais.';
		var html = '<h3>Cher client, merci pour votre commande.</h3><br/>Celle-ci vous sera expédiée dans les plus brefs délais.';
}

var mailjet = require ('node-mailjet')
	.connect('84ff6bb884007b726e0233798d4d0382', '32bef8092196460441728f624dbfda4f')
var request = mailjet
	.post("send")
	.request({
				"FromEmail":"gregoire@oxynum.fr",
				"FromName":"GregRbs de MailJet",
				"Subject":subject,
				"Text-part":text,
				"Html-part":html,
				"Recipients":[
						{
							"Email": "rabasse.greg@gmail.com"
						}
				]
			});
request
    .then(result => {
        console.log(result.body)
    })
    .catch(err => {
        console.log(err.statusCode)
    })