const Category = require("./../model/category.model");

exports.categories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.render('categories', {
             categories: categories 
        });
    } catch (error) {
        res.send(error);
    }
};

exports.createCategory = (req, res) => {
    const data = req.body;
    data.url = req._parsedOriginalUrl.path;
    res.render('createCategory', {  
        category: data 
    });
};

exports.postCreateCategory = async (req, res) => {
    const data = req.body;
    // res.send(data);
    try {
        const category = new Category(data);
        category.save();
        res.redirect('/category/categories');
    } catch (error) {
        res.render('/category/createCategory', { error: error });
    }
};

exports.editCategory = async (req, res) => {
    const _id = req.params.id;
    try {
        const category = await Category.findById(_id);
        category.url = req._parsedOriginalUrl.path;
        res.render("createCategory", {category:category});
    } catch (error) {
        res.redirect("/category/categories");
    }
};

exports.postEditCategory = async (req, res) => {
    const _id = req.params.id;
    const data = req.body;
    const category = await Category.findById(_id);
    try {
        await Category.findByIdAndUpdate(_id, data);
        res.redirect("/category/categories");
    } catch (error) {
        res.render("createCategory", {category:category});
    }
};

exports.deleteCategory = async (req, res) => {
    const _id = req.params.id;
    try {
        await Category.findByIdAndDelete(_id);
        res.redirect("/category/categories");
    } catch (error) {
        res.redirect("/category/categories");
    }
};