const tenantify = database => (req, res, next) => {
    // if (!req.headers['x-tenant-id']) {
    //     return res.status(400).json({ error: 'Missing X-Tenant-Id header' })
    // }
    try {
        // database.setCurrentORM(req.headers['x-tenant-id'])
        database.setCurrentORM('optimarket')
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
    next()
}

module.exports = tenantify
