const {db} = require("../../database/models");

class ProductController {
    async getProducts(req, res) {
        try{
            const products = await db().Contact.findAll();
            res.status(200).json({status: 'ok', data: products});
        }catch (e) {
            res.status(500).json({error: e});
        }
    }
}

module.exports = new ProductController();