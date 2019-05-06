const { ResponseBuilder } = require('../shared/response-builder');
const { Http } = require('../shared/http');
const { authUrl } = require('../config');

const debug = require('debug')('Auth');

const auth = async (req, res, next) => {
	try {
		debug('Authenticating...');
		const Authorization = req.header('Authorization');

		await Http.get(authUrl, { Authorization });
		next();
	} catch (error) {
		return ResponseBuilder.badRequest(error.code, error.description, res);
	}
};

module.exports = {
	auth
};