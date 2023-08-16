exports.home = (req, res) => {
    // res.send("Hello T2207A")
    var className = "T2207A";
    var students = [
        "Phung Van Vu",
        "Trinh Van Trung",
        "Nguyen Van An",
    ]
    res.render("home", {
        className: className,
        students: students
    });
} 

exports.about = (req, res) => {
    // res.send("About T2207A")
    res.render("aboutus");
} 

