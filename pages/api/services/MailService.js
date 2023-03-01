import nodemailer from 'nodemailer'
class MailService {
    transporter = null;;
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "hotmail",
            auth: {
                user: 'luan.gomesb@live.com', // generated ethereal user
                pass: '@S4league026', // generated ethereal password
            },
        });
    }
    async execute() {
        let info = await this.transporter.sendMail({
            from: '"Fred Foo 👻" <luan.gomesb@live.com>', // sender address
            to: "luan.roxpt@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            // text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log("Message sent: %s", info.messageId);
    }
}
module.exports = MailService;
