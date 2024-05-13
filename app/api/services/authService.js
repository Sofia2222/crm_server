const { Conflict, Unauthorized, Forbidden} = require("../utils/Errors");
const storageService = require("./storageService");
const userService = require("./userService");
const tokenService = require("./tokenService");
const {database, db} = require("../../database/models");
const bcrypt = require("bcrypt");
const {ACCESS_TOKEN_EXPIRATION} = require("../../constants");

class AuthService {
    async signIn({email, password, subdomain, fingerprint}){
        const tenant = await db().Tenant.findOne({
            where: [{subdomain: subdomain}]
        })
        if(tenant === null){
            throw new Conflict("Такої компанії не існує!");
        }

        database.setCurrentORM(subdomain);

        const user = await db().User.findOne({
            where: [{
                'email': email
            }]
        });

        if (user === null){
            throw new Conflict('Користувач з таким email не зареєстрований!');
        }

        const comparePass = await bcrypt.compare(password, user.password)
        if (!comparePass){
            throw new Conflict('Не вірний пароль!');
        }

        const payload = {userId: user.id, subdomain: subdomain};

        const accessToken = await tokenService.generateAccessToken(payload);
        const refreshToken = await tokenService.generateRefreshToken(payload);


        const token = await db().Token.create({token: refreshToken, fingerprint: fingerprint.hash, userId: user.id});

        return {
            accessToken,
            refreshToken,
            accessTokenExpiration: ACCESS_TOKEN_EXPIRATION
        }

    }

    async signUpTenant({firstName, lastName, email, phone, password, subdomain, fingerprint}){

        const candidate = await db().Tenant.findOne({
            where: [{subdomain: subdomain}]
        })
        if(candidate !== null){
            throw new Conflict("Така компанія вже існує!");
        }
        const tenant = await database.createTenant({firstName, lastName, phone, subdomain});
        database.setCurrentORM(tenant.subdomain);

        const role = 'ADMIN';
        const storage = await storageService.createStorage(subdomain)
        const user = await userService.createUser(
            {firstName, lastName, email, password, role, storageId: storage.id, subdomain, fingerprint}
        )
        return user;
    }


    async logout(refreshToken){
        await db().Token.destroy({
            where: {'token': refreshToken}
        })
    };

    async refresh({curRefreshToken,fingerprint}){
        if (!curRefreshToken){
            throw new Unauthorized();
        }
        const token = await db().Token.findOne({
            where: {token: curRefreshToken}
        })
        if (token === null){
            throw new Unauthorized();
        }
        if (token.fingerprint !== fingerprint.hash){
            throw new Forbidden();
        }
        await db().Token.destroy({
            where: {
                id: token.id
            }
        });
        let payload;
        try{
            payload = await tokenService.verifyRefreshToken(curRefreshToken);
        }catch (e) {
            throw new Forbidden();
        }
        const user = await db().User.findOne({
            where: [{
                'id': payload.user_id
            }]
        });
        let actualPayload = {user_id: user.id, company_id: user.company_id}
        const newAccessToken = await tokenService.generateAccessToken(actualPayload);
        const newRefreshToken = await tokenService.generateRefreshToken(actualPayload);
        const newToken = new db().Token({user_id: user.id, token: newRefreshToken, fingerprint: fingerprint.hash});
        await newToken.save()
        return {
            newAccessToken,
            newRefreshToken,
            accessTokenExpiration: ACCESS_TOKEN_EXPIRATION
        }
    };
}

module.exports = new AuthService();

