
const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({// mongodb tu dong them id
    // _id
    name: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, 'Truong nay bat buoc phai nhap'],
        minLength: [1, 'Gia tri toi thieu la 1'],
    },
    description: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
    },
    image: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
    },
});
module.exports = mongoose.model("Product", product_schema);