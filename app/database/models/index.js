'use strict';
const Database = require('../Database');
const {Sequelize} = require("sequelize");
const singlify = require("../../middlewares/database/singlify_middleware");
const tenantify = require("../../middlewares/database/tenantify_middleware");

const database = new Database(Sequelize);

database.buildMainORM();
database.buildTenantORMs().then(() => {
    console.log('Tenant database build successfully.');
})

const db = () => database.getCurrentORM()

module.exports = {
    database,
    db,
    singlify: singlify(database),
    tenantify: tenantify(database),
}