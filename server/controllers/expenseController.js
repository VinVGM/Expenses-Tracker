const Expense = require('../models/expenseModel')
const mongoose = require('mongoose')
//get all 

const getExpenses = async(req,res) =>{
    const expenses = await Expense.find({}).sort({createdAt: -1})

    res.status(200).json(expenses)

}




//get single

const getExpense = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such expense!'})
    }
    const expense = await Expense.findById(id)

    if(!expense){
        return res.status(400).json({error: "No such expense!"})
    }

    res.status(200).json(expense)
}


//create new
const createExpense = async (req,res) => {
    const {title, amount, paymentType} = req.body

    let emptyFields = []


    if(!title){
        emptyFields.push('title');
    }
    if(!amount){
        emptyFields.push('amount');
    }
    if(!paymentType){
        emptyFields.push('paymentType');
    }


    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try{
        const expense = await Expense.create({title, amount, paymentType})
        res.status(200).json(expense)
    }catch(error){
        res.status(400).json({error: error.message, emptyFields})
    }
}
//delete one
const deleteExpense = async(req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such expense!"})
    }

    const expense = await Expense.findOneAndDelete({_id: id})

    if(!expense){
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(expense);

}



//patch one
const updateExpense = async(req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such expense!"});
    }

    const expense = await Expense.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!expense){
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(expense);

}

module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense,
    updateExpense
}