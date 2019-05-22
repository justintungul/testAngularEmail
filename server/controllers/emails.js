const mongoose = require('mongoose');
const emailGateway = require('../gateway/email')

module.exports = {
    sendEmail: (req, res) => {
        emailGateway.sendAutomatedMessage(req.body, (err, info) => {
            if (err === 'error') {
                res.json({status: false, message: info, data: info });
                return
            }
            if (err) {
                res.json({status: false, message: 'Email not sent!', data: err });
                return
            }
            res.json({status: true, message: 'Email Sent!', data: info });
        })
    }
}