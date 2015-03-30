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
app.get('/',function(req,res){
//code to send e-mail.
//Will be shown soon.

var mailOptions={
to : req.query.to,
subject : req.query.arrayNames[0],
//text : req.query.text
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});

//////// second field
var mailOptions2={
to : req.query.to2,
subject : req.query.arrayNames[1],
//text : req.query.text
}
console.log(mailOptions2);
smtpTransport.sendMail(mailOptions2, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});

//////// third field
var mailOptions3={
to : req.query.to3,
subject : req.query.arrayNames[2],
//text : req.query.text
}
console.log(mailOptions3);
smtpTransport.sendMail(mailOptions3, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});

//////// fourth field
var mailOptions4={
to : req.query.to4,
subject : req.query.arrayNames[3],
//text : req.query.text
}
console.log(mailOptions4);
smtpTransport.sendMail(mailOptions4, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});


});

var ip  = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

function displayAddress(theip, theport){
	console.log("Ip: " + theip + " Port: " + theport);
}
displayAddress(ip,port);
app.listen(port, ip);