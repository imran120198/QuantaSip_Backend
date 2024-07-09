const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  UserModel,
};
