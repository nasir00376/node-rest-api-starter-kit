const { BadRequestResult } = require('../../shared/errors');


const debug = require('debug')('app:service:Cities');

class CitiesService {
	constructor(repo) {
		this._repo = repo;
	}

	// List categories by filter
	get(id) {

		if (id && !this._repo.exists(id)) {
			throw new BadRequestResult('UNKNOWN_CITY', 'There is no city with the specified ID!');
		}

		if (id && !this._repo.hasAccess(id)) {
			throw new BadRequestResult('PERMISSION_REQUIRED', 'You have no permission to access the city with the specified ID!');
		}

		// const defaultCountry = 'Hungary';

		const city = this._repo.get(id);
		debug(city);

		return city;

	}
}

module.exports = { CitiesService };
