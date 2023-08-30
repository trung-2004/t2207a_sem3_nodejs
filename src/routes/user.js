const express = require("express");
const router = express.Router();

const controller = require("./../controllers/user.controller");

//midderware all routers
router.use((req, res, next) => { 
    const auth = req.session.auth;
    if(auth) {
        return res.redirect("/");
    }
    next();
});

//midderware only
router.use("/register", (req, res, next) => { 
    // res.send("Time "+Date.now());
    // next(); // để đi tiếp 
    next();
});

router.get("/login",controller.login);
router.post("/login",controller.postLogin);

router.get("/register",controller.register);
router.post("/register",controller.postRegister);

module.exports = router;