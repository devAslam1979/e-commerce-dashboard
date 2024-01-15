const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

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
app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({
        error: "Invalid credentials!",
      });
    }
  }else{
    res.send({
      error:"Invalid credentials!"
    })
  }
});

app.post('/add-product',async(req,res)=>{
  const product=new Product(req.body)
  const response=await product.save()
  res.send(response)
})

app.listen(5000);
