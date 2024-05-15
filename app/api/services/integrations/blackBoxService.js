const axios = require("axios");
const api_key = '13635523a5254d8d4f355a2200ab3376';

class BlackBoxService {
    constructor() {
        this.instanceBB = axios.create({
            baseURL: 'https://blackbox.net.ua'
        });
    }

    async getStatus (phone) {
        const data = {
            "id": "3029",
            "params": {
                "phonenumber": phone,
                "api_key": api_key
            }
        };
        const res = await this.instanceBB.get(`/api/?data=` + JSON.stringify(data));
        return res.data;
    }
    async add ({orderId, comment}) {
        const data = {
            api_key: api_key,
            id: "1001",
            method: "add",
            phonenumber: "0999999999",
            ttn: "20450105149014",
            last_name: "test",
            first_name: "test",
            type_track: "1",
            comment: "Несумлінний клієнт.",
            cost: "450",
            city: "Харків",
            date: "18.12.2018",
        };

        const res = await this.instanceBB.get(`/api_v2/?data=` + JSON.stringify(data));
        return res.data;
    }
}


module.exports = new BlackBoxService();