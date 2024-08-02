'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {

    static associate(models) {
      Cargo.hasMany(models.Usuario, {
        foreignKey: 'cargo_id'
      })
    }
  }
  Cargo.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cargo',
    tableName: 'cargos'
  });
  return Cargo;
};