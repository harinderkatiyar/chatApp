const model = require('../models');
var sequelize = require('sequelize');
const Op = sequelize.Op;

/**
FOR  Hr/admin Registration
**/
async function register(req, res) {
	try {
		let savedUser;
		console.log("hello", req.body);
		savedUser = await model.User.create(req.body);
		if (savedUser) {
			res.json({
				status: true,
				data: savedUser,
			});
		} else {
			res.json({
				msg: "Something is wrong",
				status: false
			})
		}
	} catch (err) {
		console.log("hello", err);
		res.json({
			message: err,
		});
	}
}

async function login(req, res) {
	try {
		let savedUser;
		console.log("hello my login data", req.body);
		const objLogin = { username: req.body.username, password: req.body.password }
		console.log('=====💫💫💫💨======', { email: objLogin.username });

		savedUser = await model.User.findOne({ where:{ email: objLogin.username , password: objLogin.password} });

		console.log('===========', savedUser);

		if (savedUser) {
			res.json({
				status: true,
				meg: 'User is exist',
				data: savedUser,
			});
		} else {
			res.json({
				msg: "Something is wrong & user not found",
				status: false
			})
		}
	} catch (err) {
		console.log("hello", err);
		res.json({
			message: err,
		});
	}
}
module.exports = {
	register,
	login
};