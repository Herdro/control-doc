const express = require('express');

const ClientService = require('./clients.router');
const ProyectService = require('./proyects.router');
const DocumentService = require('./documents.router');
const TransmittalService = require('./transmittals.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/clients', ClientService);
    router.use('/proyects', ProyectService);
    router.use('/Documents', DocumentService);
    router.use('/Transmittals', TransmittalService);
};

module.exports = routerApi;