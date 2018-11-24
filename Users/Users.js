const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log("Inside Users routes");
	res.json({result: "Users routes"})
});

module.exports = router;