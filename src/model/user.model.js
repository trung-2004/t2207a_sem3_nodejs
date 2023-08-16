const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({// mongodb tu dong them id
    // _id
    username: String,
    email: String,
    password: String
});
module.exports = mongoose.model("User", user_schema);