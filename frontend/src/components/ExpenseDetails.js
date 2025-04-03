const ExpenseDetails = ({ expense }) => {
    return(
        <div className="expense-details">
            <h4>{expense.title}</h4>
            <p><strong>Amount (in Rs.): </strong>{expense.amount}</p>
            <p><strong>Payment Type: </strong>{expense.paymentType}</p>
            <p>{expense.createdAt}</p>
        </div>
    )
}


export default ExpenseDetails