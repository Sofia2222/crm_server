const { Conflict } = require('../utils/Errors');
const { db } = require('../../database/models');

class StorageService {
    async create(storageName) {
        const candidateStorage = await db().Storage.findOne({
            where: [
                {
                    storageName: storageName,
                },
            ],
        });

        if (candidateStorage !== null) {
            throw new Conflict('Така база даних є!');
        }
        return await db().Storage.create({ storageName });
    }
}

module.exports = new StorageService();
