import './Expense.css'
// import React ,{useState} from 'react'
import ExpenseDate from './ExpenseDate'


const Expense = (props) => {

  return (
    <div className="expense-item">
       <ExpenseDate date={props.date}/>
        <div className="expense-item-desc">
            <h2>{props.title}</h2>
            <div className="expense-item-price">Rs.{props.amount}</div>
        </div>
    </div>)
}
export default Expense;
