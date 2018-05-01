/*class User{
	var username, password;
}
*/
module.exports = (app, db)=>{
	app.get('/user/addUser', (req, res)=>{
		var name = req.query.username;
		var pass = req.query.password;
		console.log('User: '+name+' '+pass + 'succesfull added');
		res.json(req.query);
	});

	app.get('/user/removeUser', (req, res)=>{
		var token = req.query.token;
	});

	app.get('/user/editUser', (req, res)=>{
		var token = req.query.token;
		var newpass = req.query.newpass;
	});

	app.get('/login', (req, res)=>{
		var username = req.query.username;
		var pass = req.query.password;
	});

	app.get('/logout', (req, res)=>{
		var token = req.query.token;
	});

	app.get('/user/removeUser', (req, res)=>{
		var token = req.query.token;
	});

};

function addToken(user) {
	// body...
}

function removeToken(token){

}

function getToken(user){

}