const  analyticService = require('../services/analyticService');

class AnalyticsController {
    async getCounts(req, res) {
        try {
            const counts = await analyticService.getCounts();
            res.status(200).json({ counts });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
    async getAnalytics(req, res) {
        try {
            const {from, to} = req.body;
            const analytic = await analyticService.getAnalytics({from, to});
            res.status(200).json({ analytic });
        } catch (e) {
            console.log(e);
            res.status(e.status || 500).json({ error: e.error, e });
        }
    }
}

module.exports = new AnalyticsController();
