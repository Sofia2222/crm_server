const productService = require('../services/productService');

class ProductController {
    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await productService.getById(id);
            return res.status(200).json({ product: product || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getProductsByLimit(req, res) {
        try {
            const { limit, offset } = req.query;
            const products = await productService.getByLimit({ limit, offset });
            return res.status(200).json({ products });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createProduct(req, res) {
        try {
            const {storageId} = req.userPayload;
            const {product} = req.body;
            console.log(storageId)
            const productResponse = await productService.create({
                product,
                storageId,
            });
            return res.status(200).json({ productResponse });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateProduct(req, res) {
        try {
            const {id, product} = req.body;

            const productResponse = await productService.update({
                id,
                product
            });

            return res.status(200).json({ productResponse });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteProduct(req, res) {
        try {
            const { id } = req.body;
            const product = await productService.delete(id);
            return res.status(200).json({ product });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new ProductController();
