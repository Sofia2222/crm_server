const fs = require('fs');
const { Sequelize } = require('sequelize');
const config = require('./config.json').development;
const {status, products, contacts, integrations, orders, orderInProducts, deliveries} = require('../database/seeders')

class Database {
    constructor(Sequelize) {
        if (!Database.instance) {
            this.Sequelize = Sequelize;
            this.config = config;
            this.tenantConnections = {};
            this.tenantORMs = {};
            this.mainORM = {};
            this.mainConnection = new this.Sequelize(config);
            this.currentORM = this.mainORM;
            Database.instance = this;
        }
    }

    buildMainORM() {
        this.mainORM = this.importModels(this.mainConnection);
    }

    async getDbTenants() {
        return await this.mainConnection.query('SELECT * FROM "Tenants"', {
            type: this.Sequelize.QueryTypes.SELECT,
        });
    }

    setMainORM() {
        this.currentORM = this.mainORM;
    }

    async buildTenantConnection() {
        const tenants = await this.getDbTenants();
        for (const tenant of tenants) {
            this.tenantConnections[tenant.subdomain] = new this.Sequelize(
                tenant.dbName,
                this.config.username,
                this.config.password,
                this.config,
            );
        }
    }

    async buildTenantORMs() {
        if (Object.keys(this.tenantConnections).length === 0) {
            await this.buildTenantConnection();
        }
        for (const tenant in this.tenantConnections) {
            this.tenantORMs[tenant] = this.importModels(
                this.tenantConnections[tenant],
            );
        }
    }

    getCurrentORM() {
        if (!this.currentORM) {
            throw new Error('No current db set');
        }
        return this.currentORM;
    }

    setCurrentORM(subdomain) {
        if (!this.tenantORMs[subdomain]) {
            throw new Error(`No tenant with subdomain ${subdomain}`);
        }
        this.currentORM = this.tenantORMs[subdomain];
    }

    async createTenant({ fistName, lastName, phone, subdomain }) {
        subdomain = subdomain.toLowerCase();
        const tenant = await this.mainORM.Tenant.create({
            fistName,
            lastName,
            phone,
            subdomain,
            dbName: `tenant_${subdomain}`,
            status: 'active',
        });

        await this.mainConnection.query(`CREATE DATABASE tenant_${subdomain}`);

        this.tenantConnections[subdomain] = new this.Sequelize(
            `tenant_${subdomain}`,
            this.config.username,
            this.config.password,
            this.config,
        );

        await this.migrateTenant(this.tenantConnections[subdomain]);

        this.tenantORMs[subdomain] = this.importModels(
            this.tenantConnections[subdomain],
        );

        return tenant;
    }

    async migrateTenant(connection) {
        const migrateFiles = fs
            .readdirSync(`${__dirname}/migrations/tenant_migrations`)
            .filter((file) => {
                return file.slice(-3) === '.js';
            });
        for (const file of migrateFiles) {
            const migration = require(
                `${__dirname}/migrations/tenant_migrations/${file}`,
            );
            await migration.up(connection.getQueryInterface(), Sequelize);
            console.log(file);
        }

        const constraintFiles = fs.readdirSync(
            `${__dirname}/migrations/tenant_migrations/constraints`,
        );
        for (const file of constraintFiles) {
            const migration = require(
                `${__dirname}/migrations/tenant_migrations/constraints/${file}`,
            );
            await migration.up(connection.getQueryInterface(), Sequelize);
            console.log(file);
        }
    }

    async seedersTenant(subdomain) {
        const connection = this.tenantConnections[subdomain]
        await status.up(connection.getQueryInterface(), Sequelize);
        await integrations.up(connection.getQueryInterface(), Sequelize);
        await contacts.up(connection.getQueryInterface(), Sequelize);
        await products.up(connection.getQueryInterface(), Sequelize);
        await deliveries.up(connection.getQueryInterface(), Sequelize);
        await orders.up(connection.getQueryInterface(), Sequelize);
        await orderInProducts.up(connection.getQueryInterface(), Sequelize);
    }

    importModels(connection) {
        const orm = {};
        const files = _getModelFiles();
        files.forEach((file) => {
            const model = require(`${__dirname}/models/${file}`)(
                connection,
                this.Sequelize.DataTypes,
            );
            orm[model.name] = model;
        });

        Object.keys(orm).forEach((model) => {
            if (orm[model].associate) {
                orm[model].associate(orm);
            }
        });
        orm.sequelize = connection;
        orm.Sequelize = this.Sequelize;
        return orm;
    }
}

const _getModelFiles = () => {
    return fs
        .readdirSync(`${__dirname}/models`)
        .filter((file) => file !== 'index.js');
};

module.exports = Database;
