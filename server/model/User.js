const mongoose = require("mongoose");
const { type } = require("os");
const { Schema } = mongoose;

const UserSchema = Schema(
  {
    name: { type: String },
    email: {
      type: String,
      required: ["Email field is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: ["Password field is required"],
      minlength: 8,
    },
    gender: { type: String, enum: ["male", "female", "rather not say"] },
    classes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
  },

  { versionKey: false },
  { timestamp: true }
);

module.exports = mongoose.model("User", UserSchema);
