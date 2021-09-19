import React, { useState } from 'react';
import './BudgetForm.css';
import AlertBox from './AlertBox/AlertBox';

const BudgetForm = () => {
    //Temporarily stored
    const [expense, setExpense] = useState("");
    const [cost, setCost] = useState(0);
    const [error, setError] = useState(3);

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
            setExpense("")
            setCost("")

    }

    function deleteExpense(id, number) {
        const updatedExpenses = [ ...fullExpenses].filter((fullExpenses) => fullExpenses.id !== id)
        setFullExpenses(updatedExpenses)
        setTotalCost(parseInt(totalCost) - parseInt(number))
      }

    return(
        <div className="BudgetForm">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label>Expense</label>
                    <input type="text" onChange={(e) => setExpense(e.target.value)} value={expense}></input>
                </div>
                <div className="inputs">
                    <label>Cost</label>
                    <input type="number" onChange={(e) => setCost(e.target.value)} value={cost}></input>
                </div>
                <button type="submit" className="expenseButton">Add Expense</button>
            </form>
                {fullExpenses.map((fullExpense) => <div key={fullExpense.id} className="expenseContainer">
                    <div>{"Expense: " + fullExpense.expense}</div>
                    <div>{"Cost: $" + fullExpense.number}</div>
                    <button onClick={() => deleteExpense(fullExpense.id, fullExpense.number)}>Delete</button>
                </div>)}
            <div className="total">Total: ${totalCost}</div>
        </div>
    )
}

export default BudgetForm;