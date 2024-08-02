'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      nascimento: {
        type: Sequelize.DATEONLY
      },
      admissao: {
        type: Sequelize.DATEONLY
      },
      cargo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'cargos', key: 'id'}
      },
      email: {
        type: Sequelize.STRING
      },
      apelido: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};