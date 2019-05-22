var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'justintungutest@gmail.com',
        pass: 'testyo0co0de!'
    }
})

var fromAddress = 'justin.tungul@gmail.com'

module.exports = {
    sendAutomatedMessage: (emailInfo, next) => {

        if(!emailInfo.send_to) {
            next('error', 'No recepient');
            return
        }

        var forgotMailOptions = {
            from: fromAddress,
            to: emailInfo.send_to,
            subject: emailInfo.subject,
            text: "You received an automated email from "+ fromAddress +"\n\n"+ emailInfo.content,
        }

        transporter.sendMail(forgotMailOptions, function (err, info) {
            if (err) {
                next(err, info);
                return;
            }
            next(null, info);
        })
    }
}
