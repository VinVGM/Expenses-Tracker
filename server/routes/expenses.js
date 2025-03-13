const express = require("express")
const Expense = require('../models/expenseModel')
const {
    getExpenses,
    getExpense,
    createExpense
} = require('../controllers/expenseController')
const router = express.Router()

router.get("/", getExpenses)


router.get("/:id", getExpense)


router.post("/", createExpense)


router.delete("/:id", (req,res) => {
    res.json({mssg: 'DELETE a new expense'})
})


router.patch("/:id", (req,res) => {
    res.json({mssg: 'UPDATE a new expense'})
})



module.exports = router