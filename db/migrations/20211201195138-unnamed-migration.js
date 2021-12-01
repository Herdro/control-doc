"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");
const { TRANSMITTAL_TABLE } = require("../models/transmittals.model");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(TRANSMITTAL_TABLE, "created_at", {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(TRANSMITTAL_TABLE, "created_at");
  },
};
