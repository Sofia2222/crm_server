const contactService = require("../services/contactService");
const constants = require("../../constants");
const {Conflict} = require("../utils/Errors");

class ContactController {
    async getProducts(req, res) {
        try{
            const products = await contactService.getContacts();
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
            const product = await contactService.getContactById(id);
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
            const product = await contactService.getContactsByLimit({limit, offset});
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

            const product = await contactService.createContact({
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

            const product = await contactService.updateContact({
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
            const product = await contactService.deleteContact(id);
            return res.status(200).json({product});
        }catch (e) {
            res.status(e.status).json({error: e.error});
        }
    }
}

module.exports = new ContactController();
