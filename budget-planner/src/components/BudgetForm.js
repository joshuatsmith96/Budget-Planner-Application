import React, { useState } from 'react';

const BudgetForm = () => {
    //Temporarily stored
    const [expense, setExpense] = useState("");
    const [cost, setCost] = useState(0);

    //Stored in an array
    const [fullExpenses, setFullExpenses] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    // When submit button is clicked, a new array is created.
    // This array is then sent to the 'expenses' array for storage.
    // This function will also clear the temporary
    // 'expense' state, clearing the input.
    function handleSubmit(e) {
        e.preventDefault();



        const newFullExpense = {
            id: "FE" + new Date().getTime(),
            expense: expense,
            number: cost,
        }

        setTotalCost(parseInt(totalCost) + parseInt(cost))

        setFullExpenses([...fullExpenses].concat(newFullExpense))

    }

    return(
        <div className="BudgetForm">
            <form onSubmit={handleSubmit}>
                <label>Expense:</label>
                <input type="text" onChange={(e) => setExpense(e.target.value)} value={expense}></input><br/>
                <label>Cost:</label>
                <input type="number" onChange={(e) => setCost(e.target.value)} value={cost}></input><br/>
                <button type="submit">Add Expense</button>
            </form>
            {fullExpenses.map((fullExpense) => <div key={fullExpense.id}>
                <div>{"Expense: " + fullExpense.expense}</div>
                <div>{"Cost: " + fullExpense.number}</div>
            </div>)}
            <div>Total: {totalCost}</div>
        </div>
    )
}

export default BudgetForm;