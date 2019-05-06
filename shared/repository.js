const { models } = require('../models');
const { InternalServerErrorResult } = require('./errors');
const { ErrorCode } = require('./error-codes');

class Repository {
	constructor(model) { this._model = model; }

	async exists(id) {
		const data = await this._model.findOne({ where: { id } });

		return (data && data.length) ? true : false;
	}

	async create(data, transaction) {
		// create transaction
		return this._model.create(data, { transaction });
	}

	async bulkCreate(data, transaction) {

		return this._model.bulkCreate(data, { transaction });
	}

	async get(id = null) {
		if (!id) {
			return this._model.findAll();
		}

		return this._model.findOne({ where: { id } });
	}

	async createTransaction() {
		try {
			return await models.transaction();
		} catch (error) {
			throw new InternalServerErrorResult(ErrorCode.transactionNotCreated,
				'Transation is not created!'
			);
		}
	}
}

module.exports = { Repository };