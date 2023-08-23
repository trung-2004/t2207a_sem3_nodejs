const express = require("express");
const router = express.Router();

const controller = require("./../controllers/brand.controller");


router.get("/brands", controller.brands);

router.get("/createBrand", controller.createBrand);
router.post("/createBrand", controller.postCreateBrand);

router.get("/editBrand/:id", controller.editBrand);
router.post("/editBrand/:id", controller.postEditBrand);

router.get("/deleteBrand/:id", controller.deleteBrand);

module.exports = router;