const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({// mongodb tu dong them id
    // _id
    name: String,
    price: Number,
    description: String,
    image: String,
});
module.exports = mongoose.model("Product", product_schema);