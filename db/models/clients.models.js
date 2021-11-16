const { Model, DataTypes, Sequelize } = require('sequelize');

const CLIENT_TABLE = 'clients';

const ClientSchema = {
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
  },
};

class Client extends Model {
  static associate(models) {
    this.hasMany(models.Proyect, {
        as: 'clientDirect',
        foreignKey: 'directClientId',
    });
    // this.hasMany(models.Proyect, {
    //     as: 'clientOwner',
    //     foreignKey:'ownerClientId',
    // });
  }
  static config(sequelize) {
    return {
      Sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false,
    };
  }
}

module.exports = { CLIENT_TABLE, Client, ClientSchema };
