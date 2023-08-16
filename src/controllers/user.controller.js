const User = require("./../model/user.model")
exports.login = (req, res) => {
    // res.send("About T2207A")
    res.render("login");
} 

exports.register = (req, res) => {
    // res.send("About T2207A")
    res.render("register");
} 

exports.postRegister = (req, res) => {
    const data = req.body;
    const u = new User(data);
    u.save()
    .then(()=>{
        res.send("Done!");
    })
    .catch(err=>{
        res.send(err);
    })
} 

exports.postLogin = (req, res) => {
    // res.send("About T2207A")
    res.send("Done!");
} 