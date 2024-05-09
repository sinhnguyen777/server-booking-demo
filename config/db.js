const mongoose = require('mongoose');

const connectionDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
    });
    console.log(`successfully database connection`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectionDatabase;