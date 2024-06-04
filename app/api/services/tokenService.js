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

    async verifyAccessToken(accessToken) {
        return (await jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET));
    }
    async verifyRefreshToken(refreshToken) {
        return (await jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET));
    }

}

module.exports = new TokenService();
