const Product = require("./../model/product.model");

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
    res.render("createProduct");
};

exports.postCreateProduct = (req, res) => {
    const data = req.body;
    const pr = new Product(data);
    pr.save()
        .then(() => {
            res.send("Done!");
        })
        .catch(err => {
            res.send(err);
        })
};