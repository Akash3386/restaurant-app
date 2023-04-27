import CartIcon from "../Cart/CartIcon";
import { useContext} from "react";

import CartContext from "../../store/cart-context";

import classes from './HeaderButton.module.css'


const HeaderButton = props => {

    const context = useContext(CartContext)

    const cartCtx = context.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    },0)

    return <button className={classes.button} onClick={props.onClicked}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartCtx}</span>
    </button>
}

export default HeaderButton