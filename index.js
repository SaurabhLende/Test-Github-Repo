const express = require('express');
const http = require('http');

const app = express();

const router = express.Router();

const server = http.createServer(app);

/*routes starts*/

router.get('/', (req, res) => {
	console.log("Welcome");
	res.json({result: 'App is working properly'})
});

/*routes ends*/

app.use(router);

server.listen(3000, () => {
	console.log("App is running on port 3000");
});