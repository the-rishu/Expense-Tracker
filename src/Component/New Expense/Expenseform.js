import React , {useState} from 'react'
import './Expenseform.css'

const Expenseform = (props) =>{
    const [enterTitle,setTitle] = useState("");
    const [enterAmount,setAmount] = useState("");
    const [enterDate,setDate] = useState("");
    ;

    const titleHandler = (event) =>{
        let x = event.target.value;
        let flag=0;
       for(let i = 0;i<x.length;i++){
        if((x[i]>=0) && (x[i]<=9) && (x[i]!==" ")){
            flag=1;
            break;
        }
       }
       if(flag===1){
        alert("Pls Enter crrct input")
       }
       else{
        setTitle(event.target.value)
       }
       
    }
    const dateHandler = (event) =>{
        setDate(event.target.value)
    }
    const amountHandler = (event) =>{
        setAmount(event.target.value)
    }

    const submitHandler = (event) =>{
            event.preventDefault();

            const expensedata = {
                title:enterTitle,
                amount:enterAmount,
                date:new Date(enterDate)
            }
            props.onsaveExpensedata(expensedata)
            console.log(expensedata)

            setAmount("");
            setDate("");
            setTitle("");
    }
    return (
       <>
         <form onSubmit={submitHandler}>
        <div className="new_expense-controls">
            <div className="new_expense-control">
                <label >Title</label><br />
                <input type="text" value={enterTitle} maxLength="20" onChange={titleHandler}/>
            </div>
            <div className="new_expense-control">
                <label >Amount</label><br />
                <input type="number" value={enterAmount} min="0" maxLength="7"  onChange={amountHandler} />
            </div>
            <div className="new_expense-control">
                <label >Date</label><br />
                <input type="date" value={enterDate} onChange={dateHandler}/>
            </div>
        </div>
        <div className="new_expense-action">
            <button type='submit'> Add Expense</button>
        </div>
        </form>
        
       </>
    )

}


export default Expenseform;