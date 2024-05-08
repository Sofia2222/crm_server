const bcrypt = require("bcrypt");
const { Conflict, Unauthorized, Forbidden} = require("../utils/Errors");
const tokenService = require('./tokenService')
const {database, db} = require("../../database/models");
const {ACCESS_TOKEN_EXPIRATION} = require("../../constants");

class StorageService {
    async createStorage(storageName){
        const candidateStorage = await db().Storage.findOne({
            where: [{
                'storageName': storageName
            }]
        });

        if (candidateStorage !== null){
            throw new Conflict('Така база даних є!');
        }
        return await db().Storage.create({storageName});
    }
}

module.exports = new StorageService();
