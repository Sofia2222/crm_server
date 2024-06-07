const { db } = require('../../database/models');

class ProductService {
    async getById(id) {
        return await db().Product.findOne({ where: [{ id: id }] });
    }
    async getByLimit({ limit, offset }) {
        const result = await db().Product.findAll({ limit: limit, offset: offset, order: [['createdAt', 'DESC']]});
        return {
            data: result,
            meta: {
                allCount: await this.getCount(),
                countOnPage: result.length,
            }
        };
    }
    async create({product, storageId}) {
        return await db().Product.create({
            ...product,
            storageId
        });
    }
    async update({
        id,
        product
    }) {
        return await db().Product.update(
            {
                ...product,
            },
            {
                where: { id: id },
            },
        );
    }
    async delete(id) {
        return await db().Product.destroy({ where: [{ id: id }] });
    }
    async getCount(){
        return await db().Product.count();
    }

}

module.exports = new ProductService();
