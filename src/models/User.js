const mongoose = require('mongoose');


///schema for ceating products 
const User = mongoose.model("User", {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    designation: { type: String, required: true },
    gender: { type: String, required: true },
    courses: {
      course1: { type: Boolean, required: true },
      course2: { type: Boolean, required: true },
      course3: { type: Boolean, required: true },
    },
    image_url: { type: String}
});


module.exports = User
