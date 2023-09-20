const express = require("express");
const app = express();
const passport = require("passport");
const passportConfig = require("./config/passport");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/note");

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passportConfig(passport);
connectDB();
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/api/auth", authRoutes);
app.use("/api/note", noteRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
