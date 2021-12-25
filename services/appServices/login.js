// imports
const {totp} = require("otplib")
const bcrypt =  require("bcrypt")
const { v4: uuidv4 } = require('uuid')

// import resources
const db = require('../../db/firestore').db
const PAIR = require('../../lib/pair')



module.exports = (req,res) => {

    const phone = req.body.phone

    totp.resetOptions()

    totp.options = { 
        digits: 4
    }

    console.log(totp.generate('secret-key'))
    // TODO: get phone number

    // TODO: generate otp (4 letters)

    // TODO: send sms


    console.log(req.body.phone)

    res.end("exiting")
}
