const express = require("express")

const router = express.Router()

router.get("/", (req,res) => {
    res.json({mssg: 'GET all expenses'})
})


router.get("/:id", (req,res) => {
    res.json({mssg: 'GET a single expense'})
})


router.post("/", (req,res) => {
    res.json({mssg: 'POST a new expense'})
})

router.delete("/:id", (req,res) => {
    res.json({mssg: 'DELETE a new expense'})
})


router.patch("/:id", (req,res) => {
    res.json({mssg: 'UPDATE a new expense'})
})



module.exports = router