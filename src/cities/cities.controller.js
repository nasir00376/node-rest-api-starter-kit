const { BadRequestResult, InternalServerErrorResult } = require('../../shared/errors');
const { ResponseBuilder } = require('../../shared/response-builder');


const debug = require('debug')('app:controller:cities');

class CitiesController {

	constructor(service) {
		this._service = service;
		this.get = this.get.bind(this);
	}
	// Get cities

	async get(req, res) {
		try {
			const { params: { id } } = req;
			const result = await this._service.get(id);

			debug(result);
			return ResponseBuilder.ok(result, res);
		} catch (error) {
			if (error instanceof BadRequestResult) {
				return ResponseBuilder.badRequest(error.code, error.description, res);
			}

			if (error instanceof InternalServerErrorResult) {
				return ResponseBuilder.internalServerError(error.code, error.description, res);
			}

			return ResponseBuilder.generalError(error, res);
		}
	}
}

module.exports = { CitiesController };
