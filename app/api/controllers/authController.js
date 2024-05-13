const authService = require("../services/authService");
const constants = require("../../constants");

class AuthController {

    async signIn(req, res){
        try{
            const {email, password, domain} = req.body;
            const {fingerprint} = req;
            const {
                accessToken,
                refreshToken,
                accessTokenExpiration
            } = await authService.signIn({email, password, domain, fingerprint});
            console.log(refreshToken)
            res.cookie('refreshToken', refreshToken, constants.COOKIE_SETTINGS)
            res.status(200).json({accessToken, accessTokenExpiration});
        }catch (e) {
            console.log(e)
            res.status(400).json(e);
        }
    }

    async signUpTenant(req, res) {
        try{
            const {firstName, lastName, email, phone, password, subdomain} = req.body;
            const {fingerprint} = req;
            const {
                accessToken,
                refreshToken,
                accessTokenExpiration
            } = await authService.signUpTenant({firstName, lastName, email, phone, password, subdomain, fingerprint});
            console.log(refreshToken)
            res.cookie('refreshToken', refreshToken, constants.COOKIE_SETTINGS)
            res.status(200).json({accessToken, accessTokenExpiration});
        }catch (e) {
            console.log(e)
            res.status(500).json(e);
        }
    }

    async logout(req, res){
        try{
            const {refreshToken} = req.cookie;
            console.log(refreshToken);
            await authService.logout(refreshToken);
            res.clearCookie()
            res.status(200).json();
        }catch (e) {
            console.log(e)
            res.status(e.status).json(e.error);
        }
    }
    async refresh(req, res){
        try{
            const curRefreshToken = req.cookies.refreshToken;
            const {fingerprint} = req;
            const {
                newAccessToken,
                newRefreshToken,
                accessTokenExpiration
            } = await authService.refresh({curRefreshToken,fingerprint});
            res.cookie('refreshToken', newRefreshToken, constants.COOKIE_SETTINGS)
            res.status(200).json({newAccessToken, accessTokenExpiration});
        }catch (e) {
            console.log(e)
            res.status(e.status).json(e.error);
        }
    }
}

module.exports = new AuthController();