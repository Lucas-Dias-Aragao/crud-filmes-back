'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
      await queryInterface.bulkInsert({
        tableName: 'cargos',
        schema: 'filmedatabase'
      }, [
        {
          titulo: 'assistente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: 'supervisor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: 'coordenador',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          titulo: 'gerente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {   
     await queryInterface.bulkDelete( {tableName: 'cargos',
     schema: 'filmedatabase'}, null, {});
     
  }
};
