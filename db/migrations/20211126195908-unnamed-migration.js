"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");
const { DOCUMENT_TABLE } = require("../models/documents.model");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(DOCUMENT_TABLE, 'deadline', {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(DOCUMENT_TABLE, 'deadline');
  },
};
