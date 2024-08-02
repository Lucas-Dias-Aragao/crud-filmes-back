'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert({
      tableName: 'usuarios',
      schema: 'filmedatabase'
     }, [
      {
        nome: 'Ana',
        sobrenome: 'Silva',
        nascimento: '1990-03-15',
        admissao: '2022-01-10',
        email: 'ana.silva@cinema.com',
        apelido: 'asilva',
        cargo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Carlos',
        sobrenome: 'Pereira',
        nascimento: '1985-07-22',
        admissao: '2021-06-25',
        email: 'carlos.pereira@cinema.com',
        apelido: 'cpereira',
        cargo_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mariana',
        sobrenome: 'Oliveira',
        nascimento: '1992-11-05',
        admissao: '2023-02-14',
        email: 'mariana.oliveira@cinema.com',
        apelido: 'moliveira',
        cargo_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lucas',
        sobrenome: 'Costa',
        nascimento: '1988-08-30',
        admissao: '2022-07-19',
        email: 'lucas.costa@cinema.com',
        apelido: 'lcosta',
        cargo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Beatriz',
        sobrenome: 'Souza',
        nascimento: '1995-12-20',
        admissao: '2024-03-01',
        email: 'beatriz.souza@cinema.com',
        apelido: 'bsouza',
        cargo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete({
      tableName:'usuarios',
      schema:'filmedatabase'
    }, null, {});
     
  }
};
