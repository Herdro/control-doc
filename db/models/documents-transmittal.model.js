const { Model, DataTypes, Sequelize } = require("sequelize");
const { DOCUMENT_TABLE } = require("./documents.model");
const { TRANSMITTAL_TABLE } = require("./transmittals.model");

const DOCUMENTS_TRANSMITTAL_TABLE = "documents_transmittals";

const DocumentenTransmittalSchema = {
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
};

class DocumentenTransmittal extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCUMENTS_TRANSMITTAL_TABLE,
      modelName: "DocumentenTransmittal",
      timestamps: false,
    };
  }
}

module.exports = {
  DOCUMENTS_TRANSMITTAL_TABLE,
  DocumentenTransmittal,
  DocumentenTransmittalSchema,
};
