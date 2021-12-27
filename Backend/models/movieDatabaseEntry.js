'use strict';

module.exports = (sequelize, DataType) => {
  let DataMoviesDatabaseEntry = sequelize.define('DataMoviesDatabaseEntry', {
    // id missing because Sequelize adds it by default
    adult: DataType.BOOLEAN(1),
    backdrop_path: DataType.STRING(128),
    idmovie: DataType.INTEGER(11),
    media_type: DataType.STRING(128), 
    original_language: DataType.STRING(128),
    overview: DataType.STRING(128),
    popularity: DataType.INTEGER(11),
    release_date: DataType.STRING(200),
    title: DataType.STRING(200),
    video: DataType.BOOLEAN(1),
    image_path: DataType.STRING(128)
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'filmapiindatabase'
  });

  // Association to other models (foreign keys)
  DataMoviesDatabaseEntry.associate = function (models) {

  };

  return DataMoviesDatabaseEntry;
};




