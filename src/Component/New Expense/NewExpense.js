import React from 'react'
import './NewExpense.css'

import Expenseform from './Expenseform'

const NewExpense = (props) =>{

const saveExpenseData = (enteredexpenseData) =>{

    const expenseData = {
        ...enteredexpenseData,
        id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
}

    return(
            <div className="new-expense">
                <Expenseform onsaveExpensedata={saveExpenseData} />
            </div>
         )
}
export default NewExpense;