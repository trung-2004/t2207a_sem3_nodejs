const express = require("express");
const router = express.Router();

const controller = require("./../controllers/product.controller");

// Start uploads file
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        if(file)
            callback(null,"public/uploads");
    },
    filename: (req, file, callback) => {
        if(file)
            callback(null,Date.now()+"-"+file.originalname);
    }
})
const upload = multer({ storage: storage });
// End uploads file

router.get("/products", controller.products);

router.get("/createProduct", controller.createProduct);
router.post("/createProduct", upload.single("image"), controller.postCreateProduct);

router.get("/editProduct/:id", controller.editProduct);
router.post("/editProduct/:id", upload.single("image"), controller.postEditProduct);

router.get("/deleteProduct/:id", controller.deleteProduct);

module.exports = router;