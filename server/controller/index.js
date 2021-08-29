const model = require('../models');
var sequelize = require('sequelize');
const Op = sequelize.Op;

/**
FOR  Hr/admin Registration
**/
async function register(req, res) {
	try {
		let savedUser;
		console.log("hello",req.body);
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

module.exports = {
	register
};