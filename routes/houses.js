const express = require("express")
const mysql = require("../config/db")

const router = express.Router()

router.get("/", (req, res) => {
	const sql = "SELECT * FROM houses"
	mysql.query(sql, (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})

router.get("/:id", (req, res) => {
	const id = req.params.id
	console.log("------ id ----- ", id)
	const sql = `SELECT * FROM houses WHERE id = ?`
	mysql.query(sql, [id], (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})

router.post("/", (req, res) => {
	const data = req.body.houseName
	console.log(data)
	const sql = "INSERT INTO houses (houseName) VALUES (?)"
	mysql.query(sql, [data], (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).json(result)
		}
	})
})

module.exports = router
