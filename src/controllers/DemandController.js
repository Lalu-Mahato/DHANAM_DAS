const demandService = require('@services/demand/demand-service');
const ErrorHelper = require('@helpers/error.helper');

class DemandController {
    static async upload(req, res) {
        try {
            const { body } = req;
            const result = await demandService.uplaod(body);
            return res.status(result.code).send(result);
        } catch (err) {
            const appError = ErrorHelper.error(err);
            return res.status(appError.code).send(appError);
        }
    }
}

module.exports = DemandController;
