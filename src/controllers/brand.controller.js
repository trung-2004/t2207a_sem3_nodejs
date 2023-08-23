const Brand = require("./../model/brand.model");

exports.brands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.render('brands', {
             brands: brands 
        });
    } catch (error) {
        res.send(error);
    }
};

exports.createBrand = (req, res) => {
    const data = req.body;
    data.url = req._parsedOriginalUrl.path;
    res.render('createBrand', {  
        brand: data 
    });
};

exports.postCreateBrand = async (req, res) => {
    const data = req.body;
    // res.send(data);
    try {
        const brand = new Brand(data);
        brand.save();
        res.redirect("/brand/brands");
    } catch (error) {
        res.render('/brand/createBrand', { error: error });
    }
};

exports.editBrand = async (req, res) => {
    const _id = req.params.id;
    try {
        const brand = await Brand.findById(_id);
        brand.url = req._parsedOriginalUrl.path;
        res.render("createBrand", {brand:brand});
    } catch (error) {
        res.redirect("/brand/brands");
    }
};

exports.postEditBrand = async (req, res) => {
    const _id = req.params.id;
    const data = req.body;
    const brand = await Brand.findById(_id);
    try {
        await Brand.findByIdAndUpdate(_id, data);
        res.redirect("/brand/brands");
    } catch (error) {
        res.render("createBrand", {brand:brand});
    }
};

exports.deleteBrand = async (req, res) => {
    const _id = req.params.id;
    try {
        await Brand.findByIdAndDelete(_id);
        res.redirect("/brand/brands");
    } catch (error) {
        res.redirect("/brand/brands");
    }
};