const sequelize = require('../config/connection');
const { User, Interview, Questions, InterviewResponse } = require('../models');

const userData = require('./userData.json');
const interviewData = require('./interviewData.json');
const interviewQuestions = require('./interviewQuestions.json');
const InterviewResponse = require('./interviewResponse.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Questions.bulkCreate(interviewQuestions);

  for (const interview of interviewData) {
    await Interview.create({
      ...interview,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
