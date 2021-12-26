'use strict';

module.exports = (sequelize, DataType) => {
  let DataUserEntry = sequelize.define('DataUserEntry', {
    // id missing because Sequelize adds it by default
    userId: DataType.INTEGER(12),
    username:  DataType.STRING(100),
    password: DataType.STRING(100),
    userislogged: DataType.INTEGER(1)

  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'userislogged'
  });

  // Association to other models (foreign keys)
  DataUserEntry.associate = function (models) {

  };

  return DataUserEntry;
};


