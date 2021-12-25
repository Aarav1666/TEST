// includes
const admin = require("firebase-admin")
const dotenv = require('dotenv')
dotenv.config()


const serviceAccount = JSON.parse(process.env.SERVICE)
// console.log(serviceAccount)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()







module.exports = {
    db: db
}

