
const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({// mongodb tu dong them id
    // _id
    name: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
        unique: true,
        minLength: 10,
        maxLength: 255,
    },
    price: {
        type: Number,
        required: [true, 'Truong nay bat buoc phai nhap'],
        minLength: [0, 'Gia tri toi thieu la 0'],
    },
    description: String,
    image: {    
        data: String,
        contentType: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }
});
module.exports = mongoose.model("Product", product_schema);