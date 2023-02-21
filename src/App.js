
import ExpenseItem from '../src/Component/Expense/ExpensesItem'
import { useState } from 'react'
import React from 'react'
import './App.css'
import NewExpense  from './Component/New Expense/NewExpense'

  let DUMMY=[
    // {
    //     id:"ID 1",
    //     title : "School Fee",
    //     amount: 300,
    //     date :new Date(2022,5,12)
    // },
    // {
    //     id:"ID 2",
    //     title : "Food",
    //     amount: 750,
    //     date :new Date(2022,1,9)
    // },
    // {
    //     id:"ID 3",
    //     title : "Books",
    //     amount: 800,
    //     date :new Date(2022,7,24)
    // },
    // {
    //     id:"ID 4",
    //     title : "House Rent",
    //     amount: 1000,
    //     date :new Date(2022,6,21)
    // }
  ];
  const App = () => {
    const [expenses , setExpenses] = useState(DUMMY)

    const addExpenseHandler = (expense) =>{
       const updated = [expense , ...expenses]
         setExpenses(updated)
    };
 
    return(
        <div className='main-div'>
        <h1>Expense's Record</h1>
        <hr />
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpenseItem item={expenses}/>
        </div>
    )
  }
export default App;