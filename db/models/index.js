const { Proyect, ProyectSchema } = require('./proyects.model');
const { Client, ClientSchema } = require('./clients.models');
const { Document, DocumentSchema } = require('./documents.model');
const { Transmittal, TransmittalSchema } = require('./transmittals.model');
const { DocumentenTransmittal, DocumentenTransmittalSchema } = require('./documents-transmittal.model');

function setupModels(sequelize) {
  Proyect.init(ProyectSchema, Proyect.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  Document.init(DocumentSchema, Document.config(sequelize));
  Transmittal.init(TransmittalSchema, Transmittal.config(sequelize));
  DocumentenTransmittal.init(DocumentenTransmittalSchema, DocumentenTransmittal.config(sequelize));

  Proyect.associate(sequelize.models);
  Client.associate(sequelize.models);
  Document.associate(sequelize.models);
  Transmittal.associate(sequelize.models);
};

module.exports = setupModels;