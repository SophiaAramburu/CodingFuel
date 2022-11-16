const User = require('./User');
const Interview = require('./Interview');
const Questions = require('./questions');

User.hasMany(Interview, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Interview.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Interview, Questions };
