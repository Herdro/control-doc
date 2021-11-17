'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');
const { PROYECT_TABLE } = require('../models/proyects.model')
const { CLIENT_TABLE } = require('../models/clients.models')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PROYECT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      proyectName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'proyect_name',
      },
      proyectCode: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'proyect_code',
      },
      proyectDescription: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'proyect_description',
      },
      directClientId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'direct_client_id',
        references: {
          model: CLIENT_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      ownerClientId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'owner_client_id',
        references: {
          model: CLIENT_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PROYECT_TABLE);
  }
};
