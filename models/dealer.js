// Dependencies
// =============================================================


var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Insurance = sequelize.define("insurance", {
  business_name: Sequelize.STRING,
  address: Sequelize.STRING.BINARY,
  owner: Sequelize.STRING,
  dealer_agent:Sequelize.STRING,
  phone_number:Sequelize.INT,
  email:Sequelize.VARCHAR,
  foreign_key:Sequelize.INT,

});

// Syncs with DB
Insurance.sync();

module.exports = Insurance;
