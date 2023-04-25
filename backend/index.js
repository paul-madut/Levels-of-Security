const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./Models/Users");
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

  console.log(user);

  if (user) {
    res.json({ status: "ok", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
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
