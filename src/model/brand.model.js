const mongoose = require('mongoose');
const brand_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
        unique: true,
    },
    description: String,
    products: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});
module.exports = mongoose.model('Brand', brand_schema);