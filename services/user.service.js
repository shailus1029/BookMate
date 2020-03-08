const userModel = require("../models/user.model");

exports.createUser = async function(body) {
	return userModel.addUser(body).then(data => {
		return data;
	});
};

exports.userList = async function() {
	return userModel.getList({}).then(data => {
		return data;
	});
};

exports.getUser = async function(id) {
	return userModel.getUser(id).then(data => {
		return data;
	});
};

exports.updateUser = async function(id, body) {
	return userModel.updateUser(id, body).then(data => {
		return data;
	});
};

exports.deleteUser = async function(id) {
	return userModel.deleteUser(id).then(data => {
		return data;
	});
};

exports.checkUser = async function(body) {
	return userModel.getList(body).then(data => {
		return data;
	});
};
