import React, { useState } from 'react';

const BudgetForm = () => {
    //Temporarily stored
    const [expense, setExpense] = useState("");

    //Stored in an array
    const [expenses, setExpenses] = useState([])

    //Gets displayed
    const [fullExpense, setFullExpense] = useState("");

    // When submit button is clicked, a new array is created.
    // This array is then sent to the 'expenses' array for storage.
    // This function will also clear the temporary
    // 'expense' state, clearing the input.
    function handleSubmit(e) {
        e.preventDefault();

        const newExpense = {
            id: "E" + new Date().getTime(),
            text: expense,
        }

        setFullExpense("Expense: " + expenses.id)
        setExpenses([...expenses].concat(newExpense))
        setExpense("");

    }

    return(
        <div className="BudgetForm">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setExpense(e.target.value)} value={expense}></input>
                <button type="submit">Add Expense</button>
            </form>
            {expenses.map((expense) => <div key={expense.id}>
                <div>{"Expense: " + expense.text}</div>
            </div>)}
        </div>
    )
}

export default BudgetForm;