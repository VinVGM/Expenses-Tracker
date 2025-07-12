import { useEffect} from "react"
import { useExpensesContext } from "../hooks/useExpensesContext"
import ExpenseDetails from '../components/ExpenseDetails'

import ExpenseForm from '../components/ExpenseForm'

const Home = () => {

    const {expenses, dispatch}  = useExpensesContext()

    useEffect(() => {
        const fetchExpenses = async () => {
            const response = await fetch('/api/expenses')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_EXPENSES', payload: json})
            }
        }

        fetchExpenses()
    }, [dispatch])

    return (
        <div className="home">
            <ExpenseForm/>
            <div className="expenses">
                {expenses && expenses.map((expense)=> (
                    <ExpenseDetails key={expense._id} expense={expense} />
                ))}
            </div>
            
        </div>


    )
}


export default Home 