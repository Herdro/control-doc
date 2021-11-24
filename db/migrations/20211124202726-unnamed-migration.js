"use strict";

const { Model, DataTypes, Sequelize } = require("sequelize");
const { TRANSMITTAL_TABLE } = require("../models/transmittal.model");
const { PROYECT_TABLE } = require("../models/proyects.model");
const { DOCUMENT_TABLE } = require("../models/documents.model");
const {
  DOCUMENTS_TRANSMITTAL_TABLE,
} = require("../models/documents-transmittal.model");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TRANSMITTAL_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    });
    await queryInterface.createTable(DOCUMENTS_TRANSMITTAL_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      documentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "document_id",
        references: {
          model: DOCUMENT_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      transmittalId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "transmittal_id",
        references: {
          model: TRANSMITTAL_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      documentVersion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "document_version",
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(
          "send",
          "rejected",
          "semiapproved",
          "approved",
          "certified"
        ),
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TRANSMITTAL_TABLE);
    await queryInterface.dropTable(DOCUMENTS_TRANSMITTAL_TABLE);
  },
};
