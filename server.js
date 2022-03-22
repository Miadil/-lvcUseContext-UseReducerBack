require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const mysql = require("./config/db")
const routes = require("./routes/index")

const app = express()

//connection Mysql
mysql.connect((err) => {
	if (err) {
		console.error("error connecting: " + err.stack)
	} else {
		console.log("connected to database with threadId :  " + mysql.threadId)
	}
})

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/characters", routes.characters)
app.use("/houses", routes.houses)

app.listen(process.env.PORT, console.log(`http://localhost:4242`))
