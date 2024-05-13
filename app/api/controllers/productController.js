const productService = require("../services/productService")
const {Conflict} = require("../utils/Errors");

class ProductController {
    async getProducts(req, res) {
        try{
            const products = await productService.getProducts();
            return res.status(200).json({products});
        }catch (e) {
            res.status(e.status).json({error: e.error});
        }
    }
    async getProductById(req, res) {
        try{
            const {id} = req.params;
            if (id <= 0){
                throw new Conflict("Не коректно введений id");
            }
            const product = await productService.getProductById(id);
            return res.status(200).json({product: product || {}});
        }catch (e) {
            console.log(e)
            res.status(400).json({error: e.error});
        }
    }
    async getProductsByLimit(req, res) {
        try{
            const {limit, offset} = req.params;
            console.log(limit, offset)
            const product = await productService.getProductsByLimit({limit, offset});
            return res.status(200).json({product});
        }catch (e) {
            console.log(e)
            res.status(e.status).json({error: e.error});
        }
    }
    async createProduct(req, res) {
        try{
            const userPayload = req.userPayload;
            const {title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories} = req.body;

            const product = await productService.createProduct({
                title, titleForDocuments, price, firstCost,
                sale, dateSale, comment, categories,
                storageId: 1}); //TODO: storage
            return res.status(200).json({});
        }catch (e) {
            console.log(e)
            res.status(e.status).json({error: e.error});
        }
    }
    async updateProduct(req, res) {
        try{
            const userPayload = req.userPayload;
            const {id, title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories} = req.body;

            const product = await productService.updateProduct({
                id, title, titleForDocuments, price, firstCost,
                sale, dateSale, comment, categories,
                storageId: 1}); //TODO: from payload

            return res.status(200).json({product});
        }catch (e) {
            res.status(e.status).json({error: e.error});
        }
    }
    async deleteProduct(req, res){
        try{
            const {id} = req.body;
            if (id <= 0){
                throw new Conflict("Не коректно введений id");
            }
            const product = await productService.deleteProduct(id);
            return res.status(200).json({product});
        }catch (e) {
            res.status(e.status).json({error: e.error});
        }
    }

}

module.exports = new ProductController();