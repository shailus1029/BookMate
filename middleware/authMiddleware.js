let JWT = require("jsonwebtoken");
const config = require("../config");

let checkToken = (req, res, next) => {
	let token = req.headers["x-access-token"] || req.headers["authorization"]; // Express headers are auto converted to lowercase
	if (token && token.startsWith("Bearer")) {
		// Remove Bearer from string
		token = token.slice(7, token.length);
	}

	if (token) {
		JWT.verify(token, config.envConfiguration.secret, (err, decoded) => {
			if (err) {
				return res.json({
					success: false,
					message: "Token is not valid"
				});
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.json({
			success: false,
			message: "Auth token is not supplied"
		});
	}
};

module.exports = {
	checkToken: checkToken
};
