const axios = require('axios');
const { BadRequestResult } = require('../errors');
const { ErrorCode } = require('../error-codes');

// Post data to target url
const post = async (url, data, headers = {}) => {
	try {
		const response = await axios.post(url, data, { headers });

		return response.data;
	} catch (error) {
		if (error.response)
			throw new BadRequestResult(ErrorCode.HttpError, error.response.data);

		throw new BadRequestResult(ErrorCode.HttpError, error.message);
	}
};

// Get data
const get = async (url, headers = {}) => {
	try {
		const response = await axios.get(url, { headers });

		return response.data;
	} catch (error) {
		if (error.response)
			throw new BadRequestResult(ErrorCode.HttpError, error.response.data);
		throw new BadRequestResult(ErrorCode.HttpError, error.message);
	}
};

const Http = { get, post };

module.exports = { Http };
