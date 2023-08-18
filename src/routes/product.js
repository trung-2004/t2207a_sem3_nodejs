const express = require("express");
const router = express.Router();

const controller = require("./../controllers/product.controller");

router.get("/products", controller.products);

router.get("/createProduct",controller.createProduct);
router.post("/createProduct",controller.postCreateProduct);

module.exports = router;