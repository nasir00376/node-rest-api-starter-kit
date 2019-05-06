const { models } = require('../../models');
const { Repository } = require('../../shared/repository');
const { City } = models;

class CitiesRepository extends Repository {
	constructor() {
		super(City);
	}
	hasAccess(id) { return id != 666; }

}

module.exports = { CitiesRepository }; 
