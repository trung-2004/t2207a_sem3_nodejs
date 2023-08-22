const express = require("express");
const router = express.Router();

const controller = require("./../controllers/category.controller");


router.get("/categories", controller.categories);

router.get("/createCategory", controller.createCategory);
router.post("/createCategory", controller.postCreateCategory);

router.get("/editCategory/:id", controller.editCategory);
router.post("/editCategory/:id", controller.postEditCategory);

router.get("/deleteCategory/:id", controller.deleteCategory);

module.exports = router;