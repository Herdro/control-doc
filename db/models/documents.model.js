const { Model, DataTypes, Sequelize } = require("sequelize");
const { PROYECT_TABLE } = require("./proyects.model");

const DOCUMENT_TABLE = "documents";

const DocumentSchema = {
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
  deadline: {
    allowNull: true,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

class Document extends Model {
  static associate(models) {
    this.belongsTo(models.Proyect, { as: "proyect" });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCUMENT_TABLE,
      modelName: "Document",
      timestamps: false,
    };
  }
}

module.exports = { DOCUMENT_TABLE, Document, DocumentSchema };
