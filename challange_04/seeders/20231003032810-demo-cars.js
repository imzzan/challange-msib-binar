'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CarsModels', [{
      name: 'F150',
      rentPerDay : 20000,
      capacity : 4,
      description : 'This is description',
      availableAt : new Date(),
      type : 'small',
      image_url : 'http://localhost:3004/image-1696303338661-237029321.jpg',
      image : 'image-1696303338661-237029321.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: 'BMW',
      rentPerDay : 40000,
      capacity : 3,
      description : 'This is description',
      availableAt : new Date(),
      type : 'medium',
      image_url : 'http://localhost:3004/image-1696303338661-237029321.jpg',
      image : 'image-1696303338661-237029321.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
