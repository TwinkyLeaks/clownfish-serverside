const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db.js');
const route = require('./route.js')(app, db);


const port = 8000;



MongoClient.connect(db.url, (err, database)=>{
	if(err) return console.log(err);
	const userRoute = require('./routes/user.js')(app, database);
	app.listen(port, () => {
	  	console.log('We are live on ' + port);
	});
});