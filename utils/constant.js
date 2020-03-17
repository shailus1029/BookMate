const errors = {
	noPayload: { code: "NO_PAYLOAD", msg: "Payload is missing" },
	invalidEmail: { code: "INVALID_EMAIL", msg: "Invalid email" },
	invalidFirstname: { code: "MISSING_FIRSTNAME", msg: "Invalid firstname" },
	invalidPassword: { code: "INVALID_PASSWORD", msg: "Invalid Password" },
	invalidUsername: { code: "INVALID_USERNAME", msg: "Invalid username" },
	invalidMobileNumber: {
		code: "INVALID_MOBILENUMBER",
		msg: "Invalid mobile number"
	},
	noBookName: { code: "MISSING_BOOKNAME", msg: "book name is missing" },
	noUserId: { code: "MISSING_USERID", msg: "userId is missing" },
	noBookPrice: { code: "MISSING_BOOKPRICE", msg: "book price is missing" },
	noBookId: { code: "MISSING_BOOKID", msg: "book Id is missing" }
};

module.exports = {
	errors
};
