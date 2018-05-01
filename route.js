module.exports = (app, db)=>{
	var i = 0;

	app.get('/getCounter',(req, res)=>{
		res.json(i);
		i++;
	});

	app.post('/user/adduser', (req, res)=>{
		console.log(req.params.username);
	});
};


