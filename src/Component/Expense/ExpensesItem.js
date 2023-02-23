import React from "react";
import Expense from '../Expense/Expense'
import './ExpensesItem.css'



const ExpenseItem = (props) => {
    return(
        <div className="expense-design">
            {
                props.item.map(x => (
                    <Expense  
                    key = {x.id}
                    date={x.date} 
                    title={x.title}  
                    amount={x.amount} 
                    />
                    )
                )
            }
        </div>
    )
}
export default ExpenseItem;