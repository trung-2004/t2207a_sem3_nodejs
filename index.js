const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() { // callback function
    console.log("Server is running...")
})
// Start connect db
require("./src/db/database");// phai goi truoc su dung router
// End connect db
app.set("view engine", "ejs");

// Start cấp quyền để use css file
// app.use(express.static(__dirname + '/public')); cách 1
app.use(express.static('public'));
// End
// Start nhan du lieu tu form
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// End nhan du lieu form

const webrouter = require("./src/routes/web");
app.use("/", webrouter);

const userrouter = require("./src/routes/user");
app.use("/auth", userrouter);

const productrouter = require("./src/routes/product");
app.use("/product", productrouter);

const categoryrouter = require("./src/routes/category.routes");
app.use("/category", categoryrouter);

