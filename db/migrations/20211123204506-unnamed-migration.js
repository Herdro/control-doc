'use strict';

const { Model, DataTypes, Sequelize } = require('sequelize');
const { PROYECT_TABLE } = require('../models/proyects.model')
const { DOCUMENT_TABLE } = require('../models/documents.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(DOCUMENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      proyectId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "proyect_id",
        references: {
          model: PROYECT_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      documentName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "document_name",
      },
      documentDescription: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "document_description",
      },
      codeIn: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "code_in",
      },
      codeOut: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "code_out",
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(DOCUMENT_TABLE);
  }
};
