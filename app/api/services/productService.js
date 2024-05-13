const {db} = require("../../database/models");

class ProductService {
    async getProducts() {
        return await db().Product.findAll();
    }
    async getProductById(id) {
        return await db().Product.findOne({where: [{id: id}]});
    }
    async getProductsByLimit({limit, offset}){
        return await db().Product.findAll({limit: limit, offset: offset});
    }
    async createProduct({
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
    async updateProduct({id, title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId}) {
        return await db().Product.update(
            {title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId},
            {
                where: {id: id}
            }
        );
    }
    async deleteProduct(id){
        return await db().Product.destroy(
            {where: [{id: id}]}
        );
    }
}

module.exports = new ProductService();