//imports 
const express = require("express")
const cors = require("cors")
const masterController = require("./controllers/masterController")
const dotenv = require('dotenv')
dotenv.config()



// field declarations
const PORT = process.env.PORT || 3000




const app = express()
// port dependecies
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 


// request controllers
masterController(app)



app.listen(PORT,() => {
    console.log(`SERVER STARTED at PORT ${PORT}`)    
})


/*
heroku login
git init
heroku git:remote -a 

git add .
git commit -am "v1.0.0"
git push heroku master
*/