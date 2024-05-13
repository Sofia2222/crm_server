const constants = require("../../constants");
const {db} = require("../../database/models");

class ContactService {
    async getContacts() {
        return await db().Contact.findAll();
    }
    async getContactById(id) {
        return await db().Contact.findOne({where: [{id: id}]});
    }
    async getContactsByLimit({limit, offset}){
        return await db().Contact.findAll({limit: limit, offset: offset});
    }
    async createContact({
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
        return await db().Contact.create(
            {title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId}
        );
    }
    async updateContact({id, title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId}) {
        return await db().Contact.update(
            {title, titleForDocuments, price, firstCost, sale, dateSale, comment, categories, storageId},
            {
                where: {id: id}
            }
        );
    }
    async deleteContact(id){
        return await db().Contact.destroy(
            {where: [{id: id}]}
        );
    }
}

module.exports = new ContactService();
