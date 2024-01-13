const express = require("express");
const cors=require('cors')
require("./db/config");
const User = require("./db/User");

const app = express();

app.use(express.json());
app.use(cors())

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  if (result._id) {
    res.send("User created successfully!");
  } else {
    res.send("Error! Please try again!");
  }
});

app.listen(5000);
