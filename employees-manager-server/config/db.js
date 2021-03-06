const mongoose = require('mongoose');

const connectDB = async () => {
  //Make mongoose connection to database
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
}

module.exports = connectDB;
