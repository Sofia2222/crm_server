const COOKIE_SETTINGS = {
    REFRESH_TOKEN: {
        httpOnly: true,
        maxAge: 7 * 24 * 3600 * 1000,
    },
};

const ACCESS_TOKEN_EXPIRATION = 1800 * 1000;

module.exports = {
    COOKIE_SETTINGS,
    ACCESS_TOKEN_EXPIRATION,
};
