const User = require('./User');
const Interview = require('./Interview');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Interview.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Interview };
