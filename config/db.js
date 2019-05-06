const Sequelize = require('sequelize');
const { env } = require('./index');
const config = require('./config.json')[env];

let slaveDB = new Sequelize(config.database, config.username, config.password, {
	host: config.host,
	dialect: config.dialect,
	port: config.port,
	sync: { force: false },
	pool: {
		max: 5,
		idle: 30000,
		evict: 10000
	}
});



slaveDB.Sequelize = Sequelize;

module.exports = {
	slaveDB,
};
