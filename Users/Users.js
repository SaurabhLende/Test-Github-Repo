const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Vysly', (err, db) => {
	if(err){
		console.log(err);
	}else{
		console.log('connected to mongodb');
	}
});

const Schema = mongoose.Schema;

const UsersSchema = new Schema({}, {strict: false});
const Users = mongoose.model('Users', UsersSchema, 'users');

router.get('/get', (req, res) => {
	Users.find({})
	.exec((err, users) => {
		if(err){
			console.log(err);
			res.json(err);
		}else {
			console.log('users data found');
			res.json({data: users});
		}
	})
});

module.exports = router;