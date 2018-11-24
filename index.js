const express = require('express');
const http = require('http');

const app = express();

const router = express.Router();

const server = http.createServer(app);

/*routes starts*/
const UsersRoutes = require('./Users/Users.js');
/*routes ends*/


app.get('/', (req, res) => {
	console.log("Welcome to the base routes");
	res.json({result: 'App is working properly'})
});

app.use('/users', UsersRoutes);

server.listen(3000, () => {
	console.log("App is running on port 3000");
});
