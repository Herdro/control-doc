'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');
const { CLIENT_TABLE } = require('../models/clients.models')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CLIENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      clientName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'client_name',
      },
      clientDescription: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'client_description',
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CLIENT_TABLE);
  }
};
