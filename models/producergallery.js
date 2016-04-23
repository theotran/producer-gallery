'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProducerGallery = sequelize.define('ProducerGallery', {
    artist: DataTypes.STRING,
    link: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProducerGallery;
};