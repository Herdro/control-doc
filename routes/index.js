const express = require('express');

const ClientService = require('./clients.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/clients', ClientService);
};

module.exports = routerApi;