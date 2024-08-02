'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({
      tableName: 'filmes',
      schema: 'filmedatabase'
    }, [
      {
        titulo: 'Inception',
        estreia: '2010-07-16',
        duracao: 148,
        classificacao: 'PG-13',
        idioma: 'Inglês',
        orcamento: 160000000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'The Matrix',
        estreia: '1999-03-31',
        duracao: 136,
        classificacao: 'R',
        idioma: 'Inglês',
        orcamento: 63000000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Interstellar',
        estreia: '2014-11-07',
        duracao: 169,
        classificacao: 'PG-13',
        idioma: 'Inglês',
        orcamento: 165000000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'The Godfather',
        estreia: '1972-03-24',
        duracao: 175,
        classificacao: 'R',
        idioma: 'Inglês',
        orcamento: 6000000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Pulp Fiction',
        estreia: '1994-10-14',
        duracao: 154,
        classificacao: 'R',
        idioma: 'Inglês',
        orcamento: 8000000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      tableName: 'filmes',
      schema: 'filmedatabase'
    }, null, {});
  }
};