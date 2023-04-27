import { useRef } from 'react';
import classes from './MealItemInput.module.css'

import { useState} from 'react';

import Input from '../../UI/Input.js'

const MealItemInput = (props) => {

    const [amountIsvalid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()
   
    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(amountInputRef.current.value)

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5 ){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }

    
    return <form className={classes.form} onSubmit={submitFormHandler}>
        <Input 
            ref={amountInputRef}
            label="Amount" 
            input={{
               id: 'amount',
               type: 'number',
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1',
        }}/>
        <button>+Add</button>
        {!amountIsvalid && <p>please entere a valid amount (1-5)</p>}
    </form>
 
}

export default MealItemInput