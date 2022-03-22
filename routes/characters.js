const express = require("express")
const mysql = require("../config/db")

const router = express.Router()

router.get("/", (req, res) => {
	const sql =
		"SELECT ch.* , h.houseName FROM characters as ch left join houses as h on ch.houses_id = h.id;"
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
	const sql = `SELECT * FROM characters WHERE id = ?`
	mysql.query(sql, [id], (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})

router.delete("/:id", (req, res) => {
	const id = req.params.id
	console.log("------ id ----- ", id)
	const sql = `DELETE FROM characters WHERE id = ?;`
	mysql.query(sql, [id], (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})

module.exports = router
