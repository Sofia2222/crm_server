const {db} = require("../../database/models");

class ProductService {
    async getAll() {
        return await db().Product.findAll();
    }
    async getById(id) {
        return await db().Product.findOne({where: [{id: id}]});
    }
    async getByLimit({limit, offset}){
        return await db().Product.findAll({limit: limit, offset: offset});
    }
    async create({
            title,
            titleForDocuments,
            price,
            firstCost,
            sale,
            dateSale,
            comment,
            categories,
            storageId
        })
    {
        return await db().Product.create(
            {title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId}
        );
    }
    async update({id, title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId}) {
        return await db().Product.update(
            {title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId},
            {
                where: {id: id}
            }
        );
    }
    async delete(id){
        return await db().Product.destroy(
            {where: [{id: id}]}
        );
    }
}

module.exports = new ProductService();