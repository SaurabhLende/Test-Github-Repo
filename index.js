const express = require('express');
const http = require('http');

const app = express();

const router = express.Router();

const server = http.createServer(app);

/*routes starts*/

router.get('/', (req, res) => {
	console.log("Welcome", __dirname);
	res.sendFile(__dirname + '/Views/index.html');
});

/*routes ends*/

app.use(router);

server.listen(3000, () => {
	console.log("App is running on port 3000");
});