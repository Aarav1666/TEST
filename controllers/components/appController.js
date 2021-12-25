// imports 
const PATH = require('../../lib/direction').appController


// import services
const loginService = require('../../services/appServices/login')

module.exports = (app) => {

    app.post(PATH.login, (req, res) => {
        loginService(req, res)
    })
    

}