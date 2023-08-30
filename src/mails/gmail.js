const nodemailer = require("nodemailer");
const config = {
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "trungtvth2204001@fpt.edu.vn",
        pass: "zcxulibmnarsrfys"
    }
}
const transport = nodemailer.createTransport(config);
module.exports = transport;