const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.db_superbikesplus, dbConfig.root, dbConfig.root, {
  host: dbConfig.localhost,
  dialect: dbConfig.mysql,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.bicycles = require("./bicycle.model.js")(sequelize, Sequelize);

module.exports = db;