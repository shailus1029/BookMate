const errors = {
	noPayload: { code: "NO_PAYLOAD", msg: "Payload is missing" },
	invalidEmail: { code: "INVALID_EMAIL", msg: "Invalid email" },
	invalidFirstname: { code: "MISSING_FIRSTNAME", msg: "Invalid firstname" },
	invalidPassword: { code: "INVALID_PASSWORD", msg: "Invalid Password" },
	invalidUsername: { code: "INVALID_USERNAME", msg: "Invalid username" },
	invalidMobileNumber: {
		code: "INVALID_MOBILENUMBER",
		msg: "Invalid mobile number"
	}
};

module.exports = {
	errors
};
