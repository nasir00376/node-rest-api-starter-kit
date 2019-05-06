const { HttpStatusCode } = require('./http-status-codes');
const { ErrorCode } = require('../shared/error-codes');
const {
	ErrorResult,
	BadRequestResult,
	ConfigurationErrorResult,
	InternalServerErrorResult,
	NotFoundResult,
	GeneralErrorResult
} = require('./errors');

class ResponseBuilder {
	static badRequest(code, description, res) {
		const errorResult = new BadRequestResult(code, description);
		ResponseBuilder._returnAs(errorResult, HttpStatusCode.BadRequest, res);
	}

	static configurationError(code, description, res) {
		const errorResult = new ConfigurationErrorResult(code, description);
		ResponseBuilder._returnAs(
			errorResult,
			HttpStatusCode.ConfigurationError,
			res
		);
	}

	static internalServerError(code, description, res) {
		const errorResult = new InternalServerErrorResult(code, description);
		ResponseBuilder._returnAs(
			errorResult,
			HttpStatusCode.InternalServerError,
			res
		);
	}

	static generalError(error, res) {
		const errorResult = new GeneralErrorResult(
			ErrorCode.GeneralError,
			error.message
		);
		ResponseBuilder._returnAs(errorResult, HttpStatusCode.GeneralError, res);
	}

	static notFound(code, description, res) {
		const errorResult = new NotFoundResult(code, description);
		ResponseBuilder._returnAs(errorResult, HttpStatusCode.NotFound, res);
	}

	static ok(result, res) {
		ResponseBuilder._returnAs(result, HttpStatusCode.Ok, res);
	}

	static _returnAs(result, statusCode, res) {
		const bodyObject = result instanceof ErrorResult
			? { status: statusCode, message: result.description, error: result }
			: result;

		res.status(statusCode).send(bodyObject);
	}
}

module.exports = {
	ResponseBuilder
};
