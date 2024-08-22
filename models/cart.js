const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Cart', {
    quantity: { type: DataTypes.INTEGER, allowNull: false }
  });
};
