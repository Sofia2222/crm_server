require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Unauthorized, Forbidden } = require('../utils/Errors');

class TokenService {
    async generateAccessToken(payload) {
        return await jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '30m',
        });
    }
    async generateRefreshToken(payload) {
        return await jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '15d',
        });
    }
    async checkToken(req, res, next) {
        const { authorization } = req.body;
        const token = authorization?.split(' ')?.[1];

        if (!token) {
            return next(new Unauthorized());
        }

        try {
            req.userPayload = await this.verifyAccessToken(token);
        } catch (e) {
            return next(new Forbidden(e));
        }
        next();
    }

    async verifyAccessToken(accessToken) {
        return await jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    }
    async verifyRefreshToken(refreshToken) {
        return await jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    }
}

module.exports = new TokenService();
