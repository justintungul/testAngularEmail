const emails = require('../controllers/emails')

const path = require('path')

module.exports = function(app) {

    // USER ROUTES
    app.post('/api/send/email', (req, res) => {
        emails.sendEmail(req, res)
    })

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve(__dirname + "../../../public/dist/public/index.html"))
    });
}