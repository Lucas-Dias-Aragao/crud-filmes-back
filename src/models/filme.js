'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Filme.init({
    titulo: DataTypes.STRING,
    estreia: DataTypes.DATE,
    duracao: DataTypes.INTEGER,
    classificacao: DataTypes.STRING,
    idioma: DataTypes.STRING,
    orcamento: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Filme',
    tableName: 'filmes'
  });
  return Filme;
};