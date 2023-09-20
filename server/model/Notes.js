const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const NoteSchema = Schema(
  {
    userName: { type: String },
    className: { type: String },
    createdDate: { type: Date, default: Date.now },
    details: { type: String },
  },

  { versionKey: false },
  { timestamp: true }
);

module.exports = mongoose.model("Note", NoteSchema);
