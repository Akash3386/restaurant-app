import { useContext } from 'react';

import CartContext from '../../../store/cart-context';

import MealItemInput from './MealItemInput'
import classes from './Mealtem.module.css'
import Cart from '../../Cart/Cart';

const MealItem = props => {
    
    const crtCtx = useContext(CartContext)
    
    const addCartHandler = amount => {
        crtCtx.addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

    }

    return <li className={classes.meal}>
        <div >
            <h3 className={classes.h3}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>Rs{props.price}</div>
        </div>
        <div>
            <MealItemInput onAddToCart={addCartHandler}/>
        </div>
    </li>
}

export default MealItem