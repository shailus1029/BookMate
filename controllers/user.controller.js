const services = require("../services/user.service");
const uuidv4 = require("uuid/v4");
const { handleError } = require("../utils/error.handler");
const logger = require("../utils/logger");
const bcrypt = require("bcrypt");
const salt = 10;

exports.createUser = function(req, res) {
	let errors = [];
	let isError = false;
	let body = req.body.data;

	return new Promise((resolve, reject) => {
		if (Object.keys(body).length === 0) {
			isError = true;
			handleError("noPayload", errors);
			logger.error(errors);
			return res.status(400).json({ errors: errors });
		}
		if (!body.firstname) {
			isError = true;
			handleError("invalidFirstname", errors);
		}
		if (!body.email) {
			isError = true;
			handleError("invalidEmail", errors);
		}
		if (!body.password) {
			isError = true;
			handleError("invalidPassword", errors);
		}
		if (isError) {
			return reject(errors);
		} else {
			return resolve(true);
		}
	})
		.then(resolved => {
			body.userId = uuidv4();
			bcrypt.hash(body.password, salt, (err, encrypted) => {
				if (err) {
					res.status(400).json({ error: err });
				}
				body.password = encrypted;
			});
			return services.createUser(body);
		})
		.then(data => {
			res.status(200).json({
				data: {
					success: 1,
					message: "User is created",
					userId: data.userId
				}
			});
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};

exports.getUserList = function(req, res) {
	return new Promise((resolve, reject) => {
		return resolve(true);
	})
		.then(resolved => {
			return services.userList();
		})
		.then(data => {
			res.status(200).json({ data: data });
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};

exports.getUserById = function(req, res) {
	return new Promise((resolve, reject) => {
		resolve(true);
	})
		.then(resolved => {
			return services.getUser(req.params.id);
		})
		.then(data => {
			res.status(200).json({ data: data });
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};

exports.updateUser = function(req, res) {
	let errors = [];
	const body = req.body.data;
	return new Promise((resolve, reject) => {
		if (Object.keys(body).length === 0) {
			handleError("noPayload", errors);
			logger.error(errors);
			return res.status(400).json({ errors: errors });
		}

		resolve(true);
	})
		.then(resolved => {
			return services.updateUser(req.params.id, body);
		})
		.then(data => {
			res.status(200).json({ data: data });
		})
		.catch(err => {
			logger.error(err);
			res.status(400).json({ errors: err });
		});
};

exports.deleteUser = function(req, res) {
	return new Promise((resolve, reject) => {
		resolve(true);
	})
		.then(resolved => {
			return services.deleteUser(req.params.id);
		})
		.then(data => {
			res.status(200).json({ data: "user is deleted successfullty" });
		})
		.catch(err => {
			logger.error(err);
			res.status(500).json({ errors: err });
		});
};
