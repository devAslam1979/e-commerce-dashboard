const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});
app.get("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({
        error: "User doesn't exist!",
      });
    }
  }else{
    res.send({
      error:"Invalid credentials!"
    })
  }
});

app.listen(5000);
