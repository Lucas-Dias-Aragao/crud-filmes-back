'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Cargo, {
        foreignKey: 'cargo_id'
      })
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    admissao: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    apelido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  });
  return Usuario;
};