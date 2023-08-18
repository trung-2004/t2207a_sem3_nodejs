const User = require("./../model/user.model");
const bcrypt = require("bcryptjs");
exports.login = (req, res) => {
    // res.send("About T2207A")
    res.render("login");
}

exports.register = (req, res) => {
    // res.send("About T2207A")
    res.render("register");
}

exports.postRegister = async (req, res) => {// async: them vao de hash(khai bao)
    try {
        const data = req.body;
        const salt = await bcrypt.genSalt(10); // await: hash mk can thoi gian nen phai doi()
        const hashed = await bcrypt.hash(data.password, salt);
        data.password = hashed;
        const u = new User(data);
        await u.save();
        res.send("Done!")
    } catch (err) {
        res.send(err);
    }


}

exports.postLogin = async (req, res) => {
    try {
        const data = req.body;
        // kiem tra user ton tai
        const user = await User.findOne({
            email: data.email,
        })

        if(user !=  null) {
            // const result = false;
            const verify = await bcrypt.compare(data.password, user.password)
            if(!verify){    
                res.send("Email or Password is not correct!");
                return;
            }
            res.send("Loggin done!");
        } else {
            res.send("Email or Password is not correct!");
            return;
        }
    } catch (err) {
        res.send(err);
    }

    
} 