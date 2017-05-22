'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      name: 'Sidik',
      username: 'sidiksigap',
      email: 'sidik@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Silhoutte',
      username: 'sisilhuthut',
      email: 'sisil@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Baram',
      username: 'baramemanhi',
      email: 'baramhae@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Gurarara',
      username: 'shishishi',
      email: 'kukukuku@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mangkan',
      username: 'mangkanaaa',
      email: 'makannn@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
