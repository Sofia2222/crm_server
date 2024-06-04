const {Unauthorized, Forbidden} = require("../api/utils/Errors");
const tokenService = require("../api/services/tokenService");

const checkToken = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization?.split(' ')?.[1];
    if (!token) {
        return next(new Unauthorized());
    }
    try {
        req.userPayload = await tokenService.verifyAccessToken(token);
    } catch (e) {
        return next(new Forbidden(e));
    }
    next();
}
module.exports = {
    checkToken,
};
