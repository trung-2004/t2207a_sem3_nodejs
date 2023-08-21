const Product = require("./../model/product.model");
const fs = require("fs");
exports.products = async (req, res) => {
    try {
        var products = await Product.find();
        // res.send(products);
        res.render("products", {
            products: products
        });
    } catch (err) {
        res.send(err);
    }

};

exports.createProduct = (req, res) => {
    const data = req.body;
    data.url = req._parsedOriginalUrl.path;
    res.render("createProduct", {product:data});
};

exports.postCreateProduct = async (req, res) => {
    const data = req.body;
    const file = req.file;
    if (file){
        const img = fs.readFileSync(file.path);
        data.image = {
            contentType: file.mimetype,
            data: img.toString("base64")
        } 
    }
    try {
        // data.image = `/uploads/${file.filename}`; cach 1
        const pr = new Product(data);
        await pr.save();
        res.redirect("/product/products");
    } catch (error) {
        res.render("createProduct", {product:data, error: error});
    }
};

exports.editProduct = async (req, res)=>{
    const _id = req.params.id;
    try {
        const product = await Product.findById(_id);
        product.url = req._parsedOriginalUrl.path;
        res.render("createProduct", {product:product});
    } catch (error) {
        res.redirect("/product/products");
    }
};

exports.postEditProduct = async (req, res)=>{    
    const _id = req.params.id;
    const data = req.body;
    const product = await Product.findById(_id);
    try {
        const file = req.file;
        if (file){
            const img = fs.readFileSync(file.path);
            data.image = {
                contentType: file.mimetype,
                data: img.toString("base64")
            } 
        } else {
            data.image = product.image;
        }
        await Product.findByIdAndUpdate(_id, data);
        res.redirect("/product/products");
    } catch (error) {
        res.render("createProduct", {product:product});
    }
};
exports.deleteProduct = async (req, res) => {
    const _id = req.params.id;
    try {
        await Product.findByIdAndDelete(_id);
        res.redirect("/product/products");
    } catch (error) {
        res.redirect("/product/products");
    }
};