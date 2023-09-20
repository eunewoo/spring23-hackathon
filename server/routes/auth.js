const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jwt secret string";
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("API for authentication running");
});

router.post("/register", async (req, res) => {
  const { name, email, password, gender } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    res.status(406).json({ message: "User with email already exists" });
    return;
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  const user = new User({
    email,
    name,
    password: hashedPassword,
    gender,
  });
  await user.save();
  res.status(201).json({ message: "User registered Successfully" });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  //get all form data
  const { email, password } = req.body;

  // check if user exists, has valid credentials
  const user = await User.findOne({ email });
  //if the user does not exists

  if (!user) {
    res.status(406).json({ message: "User does not exist, register first" });
    return;
  }
  const checkPassword = await bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    res.status(406).json({ message: "Credential not found" });
    return;
  }
  //If the user credentials are correct, create a jwt token for user session info

  const data = { userId: user._id, username: user.username };
  const token = jwt.sign(data, JWT_SECRET);

  res.send({ message: "User successfully logged in", token, user });
});

router.get(
  "/getCurrentUser",
  passport.authenticate("jwt", { session: false }),

  (req, res) => {
    res.json(req.user);
  }
);

router.post("/logout", (req, res) => {
  res.send("API for authentication running");
});

router.delete("/removeAccount", (req, res) => {
  res.send("Delete Account");
});

module.exports = router;
