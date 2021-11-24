const { Model, DataTypes, Sequelize } = require("sequelize");
const { PROYECT_TABLE } = require("./proyects.model");

const TRANSMITTAL_TABLE = "transmittals";

const TransmittalSchema = {
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
};

class Transmittal extends Model {
  static associate(models) {
    this.belongsToMany(models.Document, {
      as: "documents",
      through: models.DocumentenTransmittal,
      foreignKey: 'transmittalId',
      otherKey: 'documentId',
    });
    this.belongsTo(models.Proyect, { as: "proyect" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSMITTAL_TABLE,
      modelName: "Transmittal",
      timestamps: false,
    };
  }
}

module.exports = { TRANSMITTAL_TABLE, Transmittal, TransmittalSchema };
