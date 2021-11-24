const { Model, DataTypes, Sequelize } = require("sequelize");
const { CLIENT_TABLE } = require("./clients.models");

const PROYECT_TABLE = "proyects";

const ProyectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  proyectName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "proyect_name",
  },
  proyectCode: {
    allowNull: false,
    type: DataTypes.STRING,
    field: "proyect_code",
  },
  proyectDescription: {
    allowNull: true,
    type: DataTypes.STRING,
    field: "proyect_description",
  },
  directClientId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "direct_client_id",
    references: {
      model: CLIENT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  ownerClientId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "owner_client_id",
    references: {
      model: CLIENT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Proyect extends Model {
  static associate(models) {
    this.belongsTo(models.Client, { as: "directClient" });
    this.belongsTo(models.Client, { as: "ownerClient" });
    this.hasMany(models.Document, {
      foreignKey: "proyectId",
      as: "proyect",
    });
    this.hasMany(models.Transmittal, {
      foreignKey: "proyectId",
      as: "transmittal",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROYECT_TABLE,
      modelName: "Proyect",
      timestamps: false,
    };
  }
}

module.exports = { PROYECT_TABLE, Proyect, ProyectSchema };
