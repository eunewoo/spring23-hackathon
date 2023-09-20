const mongoose = require("mongoose");
const db = `mongodb+srv://Hackathon23:Hackathon23@cluster0.avvoyis.mongodb.net/`;
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
