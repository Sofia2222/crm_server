const contactService = require('../services/contactService');
const {logger} = require("sequelize/lib/utils/logger");

class ContactController {
    async getContactById(req, res) {
        try {
            const { id } = req.params;
            const contact = await contactService.getById(id);
            return res.status(200).json({ contact: contact || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getContactsByLimit(req, res) {
        try {
            const { limit, offset } = req.query;
            const contacts = await contactService.getByLimit({ limit, offset });
            return res.status(200).json({ contacts });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createContact(req, res) {
        try {
            const {storageId} = req.userPayload;
            console.log(storageId)
            const {contact} = req.body;
            const contactResponse = await contactService.create({contact, storageId});
            return res.status(200).json({ contactResponse });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateContact(req, res) {
        try {
            const {id, contact} = req.body
            const contactResponse = await contactService.update({id, contact});
            return res.status(200).json({ contactResponse });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteContact(req, res) {
        try {
            const { id } = req.body;
            const contact = await contactService.delete(id);
            return res.status(200).json({ contact });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new ContactController();
