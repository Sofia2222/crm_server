const tenantify = (database) => (req, res, next) => {
    const subdomain = req.headers.subdomain;
    if (!subdomain) {
        return res.status(400).json({ error: 'Missing X-Tenant-Id header' })
    }
    try {
        database.setCurrentORM(subdomain)
        // database.setCurrentORM('optimarket');
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    next();
};

module.exports = tenantify;
