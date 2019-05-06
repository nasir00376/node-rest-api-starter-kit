const { Router } = require('express');

const { get } = require('./cities');

const router = Router();

router.get('/', get);
router.get('/:id', get);

module.exports = { citiesRoutes: router };

