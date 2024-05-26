const blackBoxService = require('../../services/integrations/blackBoxService');

class BlackBoxController {
    async getStatus(req, res) {
        try {
            const phone = req.body.phone;
            const result = await blackBoxService.getStatus(phone);
            console.log(result);
            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async addInBlackBox(req, res) {
        try {
            const { orderId, comment } = req.body;
            const result = await blackBoxService.add({ orderId, comment });
            console.log(result);
            res.status(200).json(result);
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}
module.exports = new BlackBoxController();
