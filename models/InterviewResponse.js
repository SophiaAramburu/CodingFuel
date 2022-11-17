const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class InterviewQuestions extends Model {}

InterviewQuestions.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'response',
  }
);

module.exports = InterviewResponse;
