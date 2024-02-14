const ExpenseItem = (props) => {
    const {title, amount} = props
    return (
        <div className={`expense-item ${amount > 0 ? 'positive' : 'negative'}`}>
        <div className="expense-title">{title}</div>
        <div className="expense-amount">{amount}</div>
        </div>
    )
}
export default ExpenseItem