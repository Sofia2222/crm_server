const { validationResult } = require('express-validator');

const error_validation_middleware = (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty())
    {
        next();
    }else{
        res.status(400).json(result);
    }
}
module.exports = {
    error_validation_middleware
};