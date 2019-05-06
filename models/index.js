const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const { slaveDB } = require('../config/db.js');

// Load all models into db object
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = slaveDB['import'](path.join(__dirname, file));
    slaveDB[model.name] = model;
  });

Object.keys(slaveDB).forEach(modelName => {
  if (slaveDB[modelName].associate) {
    slaveDB[modelName].associate(slaveDB);
  }
});

module.exports = {
  models: slaveDB
};
