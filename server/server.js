const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/keeperAppDB", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
  fullname: String,
  username: {
      type: String,
      required: true,
      unique: true
  },
  notes: [{
      title: String,
      content: String
  }]
});

const User = new mongoose.model("User", userSchema);

const user1 = new User({
    fullname: "Abhishek Tiwari",
    username: "8439tabhi@gmail.com",
    notes: [{title: "top secret", content: "I Like coding"}, {title: "holiday", content: "enjoy full day"}]
});

// user1.save();

app.post("/login", async (req, res) => {
    const {email} = req.body;
    console.log(email);
    try {
        const userExist = await User.findOne({username: email});

        if(userExist) {
            return res.status(201).json({message: "User logged in."});
        }
    } catch(error) {
        console.log(error.message);
    }
});

app.listen(5000, function() {
    console.log("listening on port 5000");
});