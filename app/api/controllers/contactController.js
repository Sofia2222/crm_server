const contactService = require('../services/contactService');
const { Conflict } = require('../utils/Errors');

class ContactController {
    async getContacts(req, res) {
        try {
            const contacts = await contactService.getAll();
            return res.status(200).json({ contacts });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getContactById(req, res) {
        try {
            const { id } = req.params;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const contact = await contactService.getById(id);
            return res.status(200).json({ contact: contact || {} });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getContactsByLimit(req, res) {
        try {
            const { limit, offset } = req.params;
            console.log(limit, offset);
            const contact = await contactService.getByLimit({ limit, offset });
            return res.status(200).json({ contact });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async createContact(req, res) {
        try {
            const userPayload = req.userPayload;
            const { firstName, lastName, middleName, phone, email, comment } =
                req.body;

            const contact = await contactService.create({
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: storage
            return res.status(200).json({ contact });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async updateContact(req, res) {
        try {
            const userPayload = req.userPayload;
            const {
                id,
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
            } = req.body;

            const contact = await contactService.update({
                id,
                firstName,
                lastName,
                middleName,
                phone,
                email,
                comment,
                storageId: 1,
            }); //TODO: from payload

            return res.status(200).json({ contact });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async deleteContact(req, res) {
        try {
            const { id } = req.body;
            if (id <= 0) {
                throw new Conflict('Не коректно введений id');
            }
            const contact = await contactService.delete(id);
            return res.status(200).json({ contact });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new ContactController();
