const axios = require("axios");
const api_key = '2db06869573d118ac424018f7ffefaff';

class novaPoshtaService {
    constructor() {
        this.instanceBB = axios.create({
            baseURL: 'https://api.novaposhta.ua/v2.0/json'
        });
    }

    async getCities() {
        const data = {
            "apiKey":"2db06869573d118ac424018f7ffefaff",
            "modelName":"Address",
            "calledMethod":"getSettlements",
            "methodProperties": {
                "FindByString":"Київ",
                "Warehouse":"1"
            }
        }
        console.log(JSON.stringify(data))
        const res = await this.instanceBB.get(`/`, {
            data: JSON.stringify(data),
        });
        return res.data;
    }
}


module.exports = new novaPoshtaService();