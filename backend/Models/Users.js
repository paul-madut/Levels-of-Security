const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  password: {
    type: String,
    required: true,
  },
});

// UserSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
//   next();
// });

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
