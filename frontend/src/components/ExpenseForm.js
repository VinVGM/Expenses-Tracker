import { useExpensesContext } from "../hooks/useExpensesContext"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"
const ExpenseForm = () => {
    
    const { dispatch } = useExpensesContext()
    const [title, setTitle] = useState('')
    const [paymentType, setPaymentType] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const [show, setShow] = useState(false);


    useEffect(() => {
        if(show){
            
            const timer = setTimeout(() => {
                setShow(false);
            },3000);

            return () => clearTimeout(timer)
        
        }

        
    },[show])






    const handleSubmit = async (e) => {
        e.preventDefault()

        const expense = {title,amount, paymentType}

        const response = await fetch('/api/expenses', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(isNaN(amount)){
            setError('Amount must be a number')
            return
        }
        

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setSuccess(null)
            
            setEmptyFields(json.emptyFields)

        }

        if(response.ok){
            setTitle('')
            setAmount('')
            setPaymentType('')
            setError(null)
            setShow(true);
            setEmptyFields([])
            console.log('New expense added!',json)
            setSuccess("Successfully added!")
            dispatch({type: 'CREATE_EXPENSE', payload: json})
        }
    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Expense</h3>
            
            <label>What did you spend on?</label>
            <input  
                type='text' 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className = {emptyFields.includes('title') ? 'error' : ''}
            />
            
            <label>How much did you spend?</label>
            <input  
                type='text' 
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                className = {emptyFields.includes('amount') ? 'error' : ''}
            />

            <label>Which payment method did you use?</label>
            <input  
                type='text' 
                onChange={(e) => setPaymentType(e.target.value)}
                value={paymentType}
                className = {emptyFields.includes('paymentType') ? 'error' : ''}
            />

            <button>Add expense</button>
            {error && <div className="error">{error}</div>}



            <AnimatePresence>
            {show &&  <motion.div className="success"
                initial={{opacity: 0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}   
            >{success}</motion.div>}
            </AnimatePresence>
        </form>
    )
}


export default ExpenseForm