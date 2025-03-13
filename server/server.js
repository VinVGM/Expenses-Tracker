require('dotenv').config()

const express = require('express')
const expensesRoutes = require('./routes/expenses.js')


const app = express()



app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/expenses',expensesRoutes);



app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})

