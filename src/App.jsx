import ExpenseItem from "./componenets/ExpenseItem"

const App = () => {
  const expenses = [
    {id: 1, title: "Food", amount: -50},
    {id: 2, title: "Movie", amount:-200},
    {id: 2, title: "Salary", amount:20000},
  ]
  
  return (
    <>
     <div>
        <div>Expense Tracker</div>
        <div className="balance">Balance: 300</div>
        <div className="income-expense-container">
            <div className="income">
                <span className="title">income</span>
                <span>500</span>
                </div>
                <div className="blaock"></div>
                <div className="expense">
                    <span className="title">Expense</span>
                    <span>-300</span>
                </div>
                </div>
       </div>
      {expenses.map ((expenses)=>{
        return(
          <ExpenseItem key = {expenses.id} title ={expenses.title} amount = {expenses.amount} />
        )
        
      })}
    </>
  )
}
export default App