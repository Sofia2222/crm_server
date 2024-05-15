const novaPoshtaService = require("../../services/integrations/novaPoshtaService");

class NovaPoshtaController {
    async getStatus(req, res) {
        try{
            const {city} = req.body;
            const cities = await novaPoshtaService.getCities(city);
            res.status(200).json({cities});
        }catch (e) {
            console.log(e)
            res.status(e.status || 500).json({error: e.error, e});
        }
    }
}
module.exports = new NovaPoshtaController();