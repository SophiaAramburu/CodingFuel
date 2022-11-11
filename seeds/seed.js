const sequelize = require('../config/connection');
const { User, Interview, Questions } = require('../models');

const userData = require('./userData.json');
const interviewData = require('./interviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const question of questions) {
    await Questions.create({
      ...question,
    });
  }

  for (const interview of interviewData) {
    await Interview.create({
      ...interview,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
