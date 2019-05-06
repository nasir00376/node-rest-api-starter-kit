const { models } = require('../../models');
const { City } = models;

class CitiesRepository {

	exists(id) { City.findOne({ where: { id } }); }
	hasAccess(id) { return id != 666; }

	async get(defaultCountry, id = null) {
		if (!id) {
			return City.findAll();
		}
		return City.findOne({ where: { id } });

	}

}

module.exports = { CitiesRepository }; 
