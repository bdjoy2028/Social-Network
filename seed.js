const mongoose = require('mongoose');
const { User, Thought } = require('./models');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB')

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert sample users
    const user = await User.create({
      username: 'test_user',
      email: 'test@user.com',
    });

    // Insert sample thoughts
    await Thought.create({
      thoughtText: 'This is a sample thought.',
      username: 'test_user',
    });

    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedData();