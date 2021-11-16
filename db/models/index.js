const { Proyect, ProyectSchema } = require('./proyects.model');
const { Client, ClientSchema } = require('./clients.models');

function setupModels(sequelize) {
  Proyect.init(ProyectSchema, Proyect.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));

  Proyect.associate(sequelize.models);
  Client.associate(sequelize.models);
};

module.exports = setupModels;