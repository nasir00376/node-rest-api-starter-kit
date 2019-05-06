
const { CitiesController } = require('./cities.controller');
const { CitiesRepository } = require('./cities.repository');
const { CitiesService } = require('./cities.service');

const repo = new CitiesRepository();
const service = new CitiesService(repo);
const controller = new CitiesController(service);

module.exports = {
    get: controller.get
} 
