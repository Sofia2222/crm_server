const productService = require('../services/productService');
const { Conflict } = require('../utils/Errors');

class ProductController {
    async getProducts(req, res) {
        try {
            const products = await productService.getAll();
            return res.status(200).json({ products });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getProductById(req, res) {
        try {
            const { id } = req.params;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const product = await productService.getById(id);
            return res.status(200).json({ product: product || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getProductsByLimit(req, res) {
        try {
            const { limit, offset } = req.params;
            console.log(limit, offset);
            const product = await productService.getByLimit({ limit, offset });
            return res.status(200).json({ product });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createProduct(req, res) {
        try {
            const userPayload = req.userPayload;
            const {
                title,
                titleForDocuments,
                price,
                firstCost,
                sale,
                dateSale,
                comment,
                categories,
            } = req.body;

            const product = await productService.create({
                title,
                titleForDocuments,
                price,
                firstCost,
                sale,
                dateSale,
                comment,
                categories,
                storageId: 1,
            }); //TODO: storage
            return res.status(200).json({});
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateProduct(req, res) {
        try {
            const userPayload = req.userPayload;
            const {
                id,
                title,
                titleForDocuments,
                price,
                firstCost,
                sale,
                dateSale,
                comment,
                categories,
            } = req.body;

            const product = await productService.update({
                id,
                title,
                titleForDocuments,
                price,
                firstCost,
                sale,
                dateSale,
                comment,
                categories,
                storageId: 1,
            }); //TODO: from payload

            return res.status(200).json({ product });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteProduct(req, res) {
        try {
            const { id } = req.body;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const product = await productService.delete(id);
            return res.status(200).json({ product });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new ProductController();
