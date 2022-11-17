const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Questions extends Model {}

Questions.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Interview',
        key: 'description',
      },
    },
    tokens_given: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'questions',
  }
);

module.exports = Questions;
