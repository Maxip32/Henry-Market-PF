const {auth, claimCheck, InsufficientScopeError} = require("express-oauth2-jwt-bearer");
const dotenv = require("dotenv");

dotenv.config();

/*AUTH0_AUDIENCE=HenryPfMarket
AUTH0_DOMAIN=dev-yimkvuigive5f1vc.us.auth0.com*/

const validateAccessToken = auth({
    secret: 'Vtx8BwsxXyEAokybfi1ESyHlgSoKy9px',
    audience: process.env.AUTH0_AUDIENCE, // "HenryPfMarket"
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`, // "https://dev-yimkvuigive5f1vc.us.auth0.com"
    tokenSigningAlg: 'HS256'
});
const checkRequiredPermissions = (requiredPermissions) => {
    return (req, res, next) => {
        const permissionCheck = claimCheck((payload) => {
            const permissions = payload.permissions || [];

            const hasPermissions = requiredPermissions.every((requiredPermission) =>
                permissions.includes(requiredPermission)
            );

            if (!hasPermissions) {
                throw new InsufficientScopeError();
            }

            return hasPermissions;
        });

        permissionCheck(req, res, next);
    };
};

module.exports = {
    validateAccessToken,
    checkRequiredPermissions
};