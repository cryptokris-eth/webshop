const { validationResult } = require('express-validator');

module.exports = {
	handleErrors(templateFunc) {
		return (req, res, next) => {
			const errors = validationResult(req);

			if (!errors.isEmpty()) return res.send(templateFunc({ errors }));
			//in case no errors were encountered, go to the next middleware function
			next();
		};
	}
};
