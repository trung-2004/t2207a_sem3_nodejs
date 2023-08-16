const Product = require("./../model/product.model");
exports.createProduct = (req, res) => {
    res.render("createProduct");
};

exports.postCreateProduct = (req, res) => {
    const data = req.body;
    const pr = new Product(data);
    pr.save()
    .then(()=>{
        res.send("Done!");
    })
    .catch(err=>{
        res.send(err);
    })
};