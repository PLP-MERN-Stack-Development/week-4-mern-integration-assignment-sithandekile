const mongoose = require('mongoose');
//database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(`Mongodb not Connected: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
