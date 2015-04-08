var express = require('express')
var nodemailer = require("nodemailer");

var app=express();


var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "julianesp91@gmail.com",
pass: "wero2791"
}
});

app.get('/',function(req,res){
res.sendfile('index.html');
});

app.use('/public', express.static(__dirname+'/public'));

app.get('/send',function(req,res){
//code to send e-mail.
//Will be shown soon.

var mailOptions={
to : req.query.to,
subject : req.query.subject,
text : req.query.text
}
//console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
}); // end of function

var ip  = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

function displayAddress(theip, theport){
	console.log("Ip: " + theip + " Port: " + theport);
}
displayAddress(ip,port);
app.listen(port, ip);