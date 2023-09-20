const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Note = require("../model/Notes");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "jwt secret string";
const { wrapAsync } = require("../utils/helper");

router.get("/", (req, res) => {
  console.log("note route running");
});

router.get(
  "/getNotes",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(async function (req, res) {
    console.log("getting notes of", req.user, req.user._id);
    const notes = []
    const user = await User.findById(req.user._id);
    const classes = user.classes;
    for (let i = 0; i < classes.length; i++) {
      try {
        const noteId = classes[i];
        const note = await Note.findById(noteId);
        if (!note) {
          // return res.status(404).json({ message: "note not found" });
          ;
        } else {
          notes.unshift(note)
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
      }
    }
    res.json({ notes: notes });
  })
);
// router.get(
//   "/getNoteById/:id",
//   // passport.authenticate("jwt", { session: false }),
//   wrapAsync(async function (req, res) {
//     try {
//       const noteId = req.params.id;
//       const note = await Note.findById(noteId);
//       if (!note) {
//         return res.status(404).json({ message: "note not found" });
//       }
//       res.json(note);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: "Server Error" });
//     }
//   })
// );

router.post(
  "/postNotes",
  passport.authenticate("jwt", { session: false }),
  wrapAsync(async function (req, res) {
    console.log(req.user.name, req.user._id);
    console.log("Posted with body: " + JSON.stringify(req.body));
    const newNote = new Note({
      userName: req.user.name,
      className: req.body.className,
      createdDate: Date.now(),
      details: req.body.details,
    });
    const user = req.user;
    user.classes.push(newNote._id);
    await user.save();
    await newNote.save();

    res.json(newNote);
  })
);
module.exports = router;
