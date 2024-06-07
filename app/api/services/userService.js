const bcrypt = require('bcrypt');
const { Conflict, Unauthorized, Forbidden } = require('../utils/Errors');
const tokenService = require('./tokenService');
const { database, db } = require('../../database/models');
const { ACCESS_TOKEN_EXPIRATION } = require('../../constants');

class UserService {
    async createUser({
        firstName,
        lastName,
        email,
        password,
        role,
        storageId,
        subdomain,
        fingerprint,
    }) {
        const options = {};

        const candidate = await db().User.findOne({
            where: [
                {
                    email: email,
                },
            ],
        });

        if (candidate !== null) {
            throw new Conflict('Користувач з таким email вже зареєстрований!');
        }

        const hashedPassword = await bcrypt.hash(password, 5);
        const user = await db().User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            options,
            storageId,
        });

        const payload = { userId: user.id, subdomain: subdomain };

        const accessToken = await tokenService.generateAccessToken(payload);
        const refreshToken = await tokenService.generateRefreshToken(payload);

        const token = await db().Token.create({
            token: refreshToken,
            fingerprint: fingerprint.hash,
            userId: user.id,
        });

        return {
            accessToken,
            refreshToken,
            accessTokenExpiration: ACCESS_TOKEN_EXPIRATION,
        };
    }
}

module.exports = new UserService();
