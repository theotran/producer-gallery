'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var producerData = [];
    for (var i=0; i < 10; i++) {
      producerData.push({
        artist: 'Armin Van Buuren',
        link: 'http://raverrafting.com/wp-content/uploads/2012/12/a_state_of_trance_550-1600x9001.jpeg',
        description: 'this is a bad ass producer',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('ProducerGalleries', producerData, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ProducerGalleries', null, {});
  }
};
