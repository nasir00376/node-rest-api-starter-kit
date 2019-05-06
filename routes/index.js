const { citiesRoutes } = require('../src/cities/cities.routes');

// Register all routes in app

const routes = (app) => {
	app.use('/api/cities', citiesRoutes);
};

module.exports = { routes };