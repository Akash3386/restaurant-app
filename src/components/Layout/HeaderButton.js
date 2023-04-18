import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect } from "react";

import CartContext from "../../store/cart-context";

import classes from './HeaderButton.module.css'


const HeaderButton = props => {

    const context = useContext(CartContext)

    useEffect(()=>{},[])

    return <button className={classes.button} onClick={props.onClicked}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{context.items.length}</span>
    </button>
}

export default HeaderButton