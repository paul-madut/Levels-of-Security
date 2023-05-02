const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./Models/Users");
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const jws = require("jsonwebtoken");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;
const uri = process.env.URI;

app.use(cors());
app.use(express.json());

main();

// Authentication middleware
app.post("/api/login", async (req, res) => {
  console.log(req.body);

  const user = await userModel
    .findOne({
      password: req.body.password,
      userName: req.body.userName,
    })
    .exec();

  const acessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  if (user) {
    res.json({ status: "ok", user: true, acessToken: acessToken });
  } else {
    res.json({ status: "error", user: false });
  }
});
app.post("/api/verify", async (req, res) => {
  console.log(req.body);

  const codeInput = req.body.code;
  const verified = speakeasy.totp.verify({
    secret: "J5SWCVL2OBWV4NSYFFBHW5DLFZNGQS2H",
    encoding: "base32",
    token: codeInput,
  });

  res.json({ status: verified });
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then;
  console.log("db connected");
}
